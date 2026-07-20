/* eslint-disable react-hooks/immutability */
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Text, Float, OrbitControls, useTexture, Billboard } from "@react-three/drei";
import { useRef, useState, useMemo, useEffect, useCallback, Suspense } from "react";
import { Mesh, Vector3, Texture, Group } from "three";
import { UniverseId } from "@/lib/types";
import KeyboardShortcuts from "./KeyboardShortcuts";

export interface PlanetPersonality {
    id: UniverseId;
    title: string;
    description: string;
    position: [number, number, number];
    size: number;
    rotationSpeed: number;
    color: string;
    glowColor: string;
    textures: { map?: string; normal?: string; specular?: string; clouds?: string };
    type: 'human' | 'builder' | 'thinker' | 'explorer' | 'future';
    rings?: boolean;
    segments?: number;
}

const PLANETS: PlanetPersonality[] = [
    {
        id: 'A',
        title: 'Human',
        description: 'The experiences that shaped who I am.',
        position: [-8, 0, 0],
        size: 0.95,
        rotationSpeed: 0.004, // slow calm rotation
        color: '#f59e0b',
        glowColor: '#fbbf24', // warm amber tones & soft atmosphere
        textures: {
            map: '/textures/planets/2k_venus_surface.jpg'
        },
        type: 'human'
    },
    {
        id: 'B',
        title: 'Builder',
        description: 'How I turn complex problems into simple products.',
        position: [-4, 0, 0],
        size: 1.0,
        rotationSpeed: 0.008, // clean structured motion
        color: '#2563eb',
        glowColor: '#38bdf8', // Earth-like cyan/blue
        textures: {
            map: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
            normal: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'
        },
        type: 'builder'
    },
    {
        id: 'C',
        title: 'Thinker',
        description: 'The ideas and mental models behind my decisions.',
        position: [0.5, 0, 0],
        size: 0.7,
        rotationSpeed: 0.005, // mysterious calm
        color: '#475569',
        glowColor: '#6366f1', // cooler blue/indigo tones, deeper shadows
        textures: {
            map: '/textures/planets/2k_mars.jpg'
        },
        type: 'thinker'
    },
    {
        id: 'D',
        title: 'Explorer',
        description: 'What inspires me beyond work.',
        position: [6.0, 0, 0],
        size: 2.2,
        rotationSpeed: 0.012, // energetic
        color: '#ea580c',
        glowColor: '#f97316',
        rings: false, // Rings removed from Jupiter
        segments: 128,
        textures: {
            map: '/textures/planets/2k_jupiter.jpg'
        },
        type: 'explorer'
    },
    {
        id: 'E',
        title: 'Future',
        description: "What I'm learning and building next.",
        position: [12.5, 0, 0],
        size: 1.2,
        rotationSpeed: 0.01,
        color: '#e2c290',
        glowColor: '#fef08a', // Saturn golden atmosphere glow
        rings: true, // Realistic Saturn rings
        textures: {
            map: '/textures/planets/2k_saturn.jpg'
        },
        type: 'future'
    }
];

// Fallback mesh while loading textures
function FallbackPlanet({ position, size, color, label }: { position: [number, number, number], size: number, color: string, label: string }) {
    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[size, 16, 16]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
            <Billboard position={[0, -size - 0.5, 0]}>
                <Text fontSize={0.3} color="white" anchorX="center" anchorY="middle">
                    {label}
                </Text>
            </Billboard>
        </group>
    );
}

// Satellite orbit component for Builder planet
function SatelliteOrbit({ size }: { size: number }) {
    const groupRef = useRef<Group>(null);
    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.8;
            groupRef.current.rotation.x += delta * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Subtle orbital wireframe ring */}
            <mesh rotation={[Math.PI / 3, 0, 0]}>
                <ringGeometry args={[size * 1.45, size * 1.48, 64]} />
                <meshBasicMaterial color="#38bdf8" opacity={0.25} transparent side={2} />
            </mesh>
            {/* Tiny satellite body */}
            <mesh position={[size * 1.46, 0, 0]}>
                <boxGeometry args={[0.06, 0.06, 0.06]} />
                <meshBasicMaterial color="#7dd3fc" />
            </mesh>
        </group>
    );
}

// Realistic Saturn Rings for Future planet
function SaturnRings({ size }: { size: number }) {
    const ringRef = useRef<Group>(null);
    useFrame((_, delta) => {
        if (ringRef.current) {
            ringRef.current.rotation.z += delta * 0.05;
        }
    });

    return (
        <group ref={ringRef} rotation={[1.4, 0.2, 0]}>
            {/* Inner Main Ring A/B */}
            <mesh>
                <ringGeometry args={[size * 1.3, size * 1.85, 128]} />
                <meshStandardMaterial color="#d4af37" opacity={0.75} transparent side={2} roughness={0.4} />
            </mesh>
            {/* Outer Ring & Cassini Division */}
            <mesh>
                <ringGeometry args={[size * 1.9, size * 2.3, 128]} />
                <meshStandardMaterial color="#c5a059" opacity={0.5} transparent side={2} roughness={0.5} />
            </mesh>
        </group>
    );
}

// Realistic 3D Planet Component with refined personalities, visual hierarchy & hover effects
function RefinedPlanet({
    planet,
    hoveredId,
    setHoveredId,
    onClick
}: {
    planet: PlanetPersonality;
    hoveredId: UniverseId | null;
    setHoveredId: (id: UniverseId | null) => void;
    onClick: () => void;
}) {
    const meshRef = useRef<Mesh>(null);
    const glowRef = useRef<Mesh>(null);
    const isHovered = hoveredId === planet.id;
    const isAnyHovered = hoveredId !== null;

    // Load textures safely
    const textureUrls = useMemo(() => {
        if (!planet.textures.map) return null;
        return {
            map: planet.textures.map,
            normalMap: planet.textures.normal || planet.textures.map
        };
    }, [planet.textures]);

    const textureMaps = useTexture(textureUrls || { map: '/textures/planets/2k_venus_surface.jpg' }) as Record<string, Texture>;

    useEffect(() => {
        if (textureMaps && textureMaps.map) {
            textureMaps.map.anisotropy = 16;
            textureMaps.map.needsUpdate = true;
        }
    }, [textureMaps]);

    // Animate rotation, scale, glow, and visual hierarchy
    useFrame((_, delta) => {
        // Slow down rotation gently when hovered (Requirement 2 & 3)
        const currentRotSpeed = isHovered ? planet.rotationSpeed * 0.4 : planet.rotationSpeed;
        if (meshRef.current) {
            meshRef.current.rotation.y += currentRotSpeed;
        }

        // Lerp scale: slightly increase scale on hover (3–5%), slightly dim others when another planet is hovered
        if (meshRef.current) {
            let scaleMultiplier = 1.0;
            if (isHovered) {
                scaleMultiplier = 1.04; // 4% scale boost on hover
            } else if (isAnyHovered) {
                scaleMultiplier = 0.97;
            }
            const targetScale = planet.size * scaleMultiplier;
            meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1);
        }

        // Lerp glow scale & opacity
        if (glowRef.current) {
            const glowScaleMultiplier = isHovered ? 1.12 : (isAnyHovered ? 1.02 : 1.06);
            const targetGlowScale = planet.size * glowScaleMultiplier;
            glowRef.current.scale.lerp(new Vector3(targetGlowScale, targetGlowScale, targetGlowScale), 0.1);
        }
    });

    // Compute opacity based on hover state (Requirement 2: fade non-hovered planets to ~60-70%)
    const planetOpacity = isAnyHovered ? (isHovered ? 1.0 : 0.65) : 0.88;
    const haloOpacity = isHovered ? 0.35 : (isAnyHovered ? 0.03 : 0.12);

    return (
        <group position={planet.position}>
            <Float speed={isHovered ? 1.2 : 2} rotationIntensity={0.1} floatIntensity={0.2}>
                <group
                    onClick={(e) => { e.stopPropagation(); onClick(); }}
                    onPointerOver={(e) => {
                        e.stopPropagation();
                        document.body.style.cursor = 'pointer';
                        setHoveredId(planet.id);
                    }}
                    onPointerOut={(e) => {
                        e.stopPropagation();
                        document.body.style.cursor = 'auto';
                        setHoveredId(null);
                    }}
                >
                    {/* Atmosphere Halo / Glow */}
                    <mesh ref={glowRef} scale={[planet.size * 1.06, planet.size * 1.06, planet.size * 1.06]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial
                            color={planet.glowColor}
                            transparent
                            opacity={haloOpacity}
                            side={2}
                        />
                    </mesh>

                    {/* Planet Body - Always solid & opaque, dimmed softly when another planet is hovered */}
                    <mesh ref={meshRef} scale={[planet.size, planet.size, planet.size]}>
                        <sphereGeometry args={[1, planet.segments || 64, planet.segments || 64]} />
                        <meshStandardMaterial
                            map={textureMaps.map}
                            normalMap={planet.textures.normal ? textureMaps.normalMap : undefined}
                            color={isHovered ? "#ffffff" : (isAnyHovered ? "#a1a1aa" : "#ffffff")}
                            roughness={planet.type === 'thinker' ? 0.85 : (planet.type === 'human' ? 0.6 : 0.4)}
                            metalness={planet.type === 'future' ? 0.2 : 0.1}
                            emissive={isHovered ? planet.glowColor : (planet.type === 'future' ? "#3d3215" : "#0284c7")}
                            emissiveIntensity={isHovered ? 0.25 : (isAnyHovered ? 0.02 : 0.08)}
                            transparent={false}
                        />
                    </mesh>

                    {/* Future Inner Core */}
                    {planet.type === 'future' && (
                        <mesh scale={[planet.size * 0.5, planet.size * 0.5, planet.size * 0.5]}>
                            <octahedronGeometry args={[1, 0]} />
                            <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.5} />
                        </mesh>
                    )}

                    {/* Personality specific extras */}
                    {planet.type === 'builder' && <SatelliteOrbit size={planet.size} />}
                    {planet.type === 'future' && planet.rings && <SaturnRings size={planet.size} />}

                </group>
            </Float>

            {/* Label - Elegant Minimal Billboard Typography */}
            <Billboard position={[0, -planet.size - (planet.size > 2 ? 0.8 : 0.6), 0]}>
                <group>
                    {/* Planet Title */}
                    <Text
                        fontSize={isHovered ? 0.38 : 0.32}
                        color={isHovered ? "#ffffff" : (isAnyHovered ? "#94a3b8" : "#f1f5f9")}
                        anchorX="center"
                        anchorY="middle"
                        outlineWidth={isHovered ? 0.035 : 0.02}
                        outlineColor="#000000"
                    >
                        {planet.title}
                    </Text>

                    {/* On hover: display short descriptive sentence directly below title */}
                    {isHovered && (
                        <Text
                            position={[0, -0.42, 0]}
                            fontSize={0.20}
                            color="#fef08a"
                            anchorX="center"
                            anchorY="middle"
                            outlineWidth={0.025}
                            outlineColor="#000000"
                            maxWidth={4.5}
                            textAlign="center"
                        >
                            {`"${planet.description}"`}
                        </Text>
                    )}
                </group>
            </Billboard>
        </group>
    );
}

// Camera zoom controller used when selecting a planet
function ZoomCamera({
    target,
    distance,
    onComplete,
}: {
    target: [number, number, number];
    distance: number;
    onComplete: () => void;
}) {
    const { camera } = useThree();
    const targetVec = useMemo(() => new Vector3(...target), [target]);
    const hasCompletedRef = useRef(false);

    useFrame(() => {
        if (hasCompletedRef.current) return;

        const desiredPos = targetVec.clone().add(new Vector3(0, 0, distance));
        camera.position.lerp(desiredPos, 0.1);
        camera.lookAt(targetVec);

        const distanceToTarget = camera.position.distanceTo(desiredPos);
        if (distanceToTarget < 0.2) {
            hasCompletedRef.current = true;
            camera.position.copy(desiredPos);
            camera.lookAt(targetVec);
            setTimeout(() => {
                onComplete();
            }, 150);
        }
    });

    return null;
}

export default function PlanetaryLobby({ onSelect }: { onSelect: (id: UniverseId) => void }) {
    const [hoveredPlanetId, setHoveredPlanetId] = useState<UniverseId | null>(null);
    const [isZooming, setIsZooming] = useState(false);
    const [zoomTarget, setZoomTarget] = useState<[number, number, number] | null>(null);
    const [zoomDistance, setZoomDistance] = useState<number>(4);
    const [pendingUniverse, setPendingUniverse] = useState<UniverseId | null>(null);

    const handlePlanetSelect = useCallback((id: UniverseId, position: [number, number, number], size: number) => {
        setPendingUniverse(id);
        setZoomTarget(position);
        setZoomDistance(size * 2.6);
        setIsZooming(true);
    }, []);

    const handleZoomComplete = useCallback(() => {
        setIsZooming(false);
        if (pendingUniverse) {
            onSelect(pendingUniverse);
        }
    }, [pendingUniverse, onSelect]);

    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (containerRef.current && !isZooming) {
            containerRef.current.focus();
        }
    }, [isZooming]);

    // Keyboard shortcuts matching updated planet labels (A: Human, B: Builder, C: Thinker, D: Explorer, E: Future)
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const target = event.target as HTMLElement;
            if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
                return;
            }
            if (isZooming) return;

            const key = event.key.toUpperCase();
            const planetMatch = PLANETS.find(p => p.id === key);
            if (planetMatch) {
                event.preventDefault();
                handlePlanetSelect(planetMatch.id, planetMatch.position, planetMatch.size);
            }
        };

        window.addEventListener('keydown', handleKeyPress, true);
        return () => window.removeEventListener('keydown', handleKeyPress, true);
    }, [isZooming, handlePlanetSelect]);

    const activeHoveredPlanet = PLANETS.find(p => p.id === hoveredPlanetId);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 bg-transparent cursor-grab active:cursor-grabbing selection:bg-none"
            tabIndex={0}
        >
            {/* Header Overlay - Pure Perspective Storytelling */}
            <div className="absolute top-10 left-0 right-0 w-full text-center z-10 pointer-events-none px-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-[-0.02em] font-sans drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                    Choose a Perspective
                </h1>
                <p className="text-gray-300 text-sm md:text-base mt-2 tracking-wide font-normal max-w-xl mx-auto drop-shadow">
                    Everyone sees a different version of me.
                </p>

                {/* Subtitle / Interactive Feedback */}
                <div className="h-10 mt-3 flex items-center justify-center">
                    {activeHoveredPlanet ? (
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-black/85 backdrop-blur-md border border-amber-500/30 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.8)] animate-fadeIn">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                            <span className="text-amber-400 font-mono font-bold text-xs md:text-sm tracking-wider uppercase">{activeHoveredPlanet.title}</span>
                            <span className="text-white font-sans text-xs md:text-sm font-medium">
                                — "{activeHoveredPlanet.description}"
                            </span>
                        </div>
                    ) : (
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full shadow-lg">
                            <p className="text-gray-300 text-xs md:text-sm tracking-widest font-mono">
                                Which one would you like to explore?
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <Canvas camera={{ position: [-10, 10, 14], fov: 50 }}>
                <OrbitControls
                    enableZoom={!isZooming}
                    enableRotate={!isZooming}
                    enablePan={false}
                    minDistance={0.5}
                    maxDistance={20}
                    autoRotate={!isZooming && !hoveredPlanetId}
                    autoRotateSpeed={0.5}
                />

                {isZooming && zoomTarget && (
                    <ZoomCamera
                        target={zoomTarget}
                        distance={zoomDistance}
                        onComplete={handleZoomComplete}
                    />
                )}

                {/* Space Lighting */}
                <ambientLight intensity={0.2} />
                <directionalLight position={[10, 8, 5]} intensity={2.8} color="#fff8e7" />
                <pointLight position={[-10, -5, -10]} intensity={0.5} decay={0} color="#1e293b" />

                {/* Stars Background */}
                <Stars radius={500} depth={150} count={22000} factor={4} saturation={2} fade speed={0.4} />
                <Stars radius={300} depth={80} count={14000} factor={8} saturation={1.6} fade speed={0.8} />
                <Stars radius={150} depth={50} count={5000} factor={14} saturation={0.6} fade speed={1.2} />

                {/* --- 5 PERSPECTIVE PLANETS --- */}
                {PLANETS.map((planet) => (
                    <Suspense
                        key={planet.id}
                        fallback={<FallbackPlanet position={planet.position} size={planet.size} color={planet.color} label={planet.title} />}
                    >
                        <RefinedPlanet
                            planet={planet}
                            hoveredId={hoveredPlanetId}
                            setHoveredId={setHoveredPlanetId}
                            onClick={() => handlePlanetSelect(planet.id, planet.position, planet.size)}
                        />
                    </Suspense>
                ))}
            </Canvas>

            {/* Keyboard Shortcuts Panel with updated perspective labels */}
            <KeyboardShortcuts showPlanetShortcuts={true} />
        </div>
    );
}
