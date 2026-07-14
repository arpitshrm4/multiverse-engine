/* eslint-disable react-hooks/immutability */
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Text, Float, OrbitControls, useTexture, Billboard } from "@react-three/drei";
import { useRef, useState, useMemo, useEffect, useCallback, Suspense } from "react";
import { Mesh, Vector3, Texture } from "three";
import { UniverseId } from "@/lib/types";
import AudioAmbience from "./AudioAmbience";
import KeyboardShortcuts from "./KeyboardShortcuts";

// Planet Component with Textures
function FallbackPlanet({ position, size, color, label }: { position: [number, number, number], size: number, color: string, label: string }) {
    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[size, 16, 16]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
            <Text position={[0, -size - 0.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
                {label}
            </Text>
        </group>
    );
}

function RealisticPlanet({
    position,
    textures,
    size,
    label,
    speed,
    rotationSpeed = 0.01,
    clouds = false,
    rings = false,
    color,
    segments = 64,
    labelOffset = 0.5,
    onClick
}: {
    position: [number, number, number],
    textures: { map: string, normal?: string, specular?: string, clouds?: string },
    size: number,
    label: string,
    speed: number,
    rotationSpeed?: number,
    clouds?: boolean,
    rings?: boolean,
    color?: string,
    segments?: number,
    labelOffset?: number,
    onClick: () => void
}) {
    const meshRef = useRef<Mesh>(null);
    const largePlanetRef = useRef<Mesh>(null);
    const cloudRef = useRef<Mesh>(null);
    const [hovered, setHover] = useState(false);

    // Load textures safely and unconditionally
    const textureUrls = useMemo(() => {
        return {
            map: textures.map,
            normalMap: textures.normal || textures.map
        };
    }, [textures]);

    const textureMaps = useTexture(textureUrls) as Record<string, Texture>;
    const cloudMap = useTexture(textures.clouds || textures.map);

    // Improve texture quality for large bodies
    useEffect(() => {
        if (textureMaps && textureMaps.map) {
            const map = textureMaps.map;
            map.anisotropy = 16;
            map.needsUpdate = true;
        }
    }, [textureMaps]);

    useFrame((state, delta) => {
        // Self Rotation
        if (meshRef.current) {
            meshRef.current.rotation.y += rotationSpeed * 0.5;
        }
        if (largePlanetRef.current) {
            largePlanetRef.current.rotation.y += rotationSpeed * 0.5;
        }
        if (cloudRef.current) {
            cloudRef.current.rotation.y += rotationSpeed * 0.55; // Clouds move slightly faster
        }

        // Hover Scale - Multiply by actual size to keep planet scale proportions intact
        if (meshRef.current) {
            const scaleTarget = size * (hovered ? 1.05 : 1);
            meshRef.current.scale.lerp(new Vector3(scaleTarget, scaleTarget, scaleTarget), 0.1);
        }
        if (largePlanetRef.current) {
            const scaleTarget = (size * 1.04) * (hovered ? 1.05 : 1);
            largePlanetRef.current.scale.lerp(new Vector3(scaleTarget, scaleTarget, scaleTarget), 0.1);
        }
        if (cloudRef.current) {
            const scaleTarget = (size * 1.01) * (hovered ? 1.05 : 1);
            cloudRef.current.scale.lerp(new Vector3(scaleTarget, scaleTarget, scaleTarget), 0.1);
        }
    });

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
                <group
                    onClick={(e) => { e.stopPropagation(); onClick(); }}
                    onPointerOver={() => { document.body.style.cursor = 'pointer'; setHover(true); }}
                    onPointerOut={() => { document.body.style.cursor = 'auto'; setHover(false); }}
                >
                    {/* Cloud Layer */}
                    {clouds && textures.clouds && cloudMap && (
                        <mesh ref={cloudRef} scale={[size * 1.01, size * 1.01, size * 1.01]}>
                            <sphereGeometry args={[1, 64, 64]} />
                            <meshStandardMaterial
                                map={cloudMap}
                                transparent
                                opacity={0.4}
                                depthWrite={false}
                                side={2}
                            />
                        </mesh>
                    )}

                    {/* For large planets like Jupiter: align planet size with halo */}
                    {size > 2 ? (
                        <>
                            {/* Blue halo */}
                            <mesh scale={[size * 1.04, size * 1.04, size * 1.04]}>
                                <sphereGeometry args={[1, 32, 32]} />
                                <meshStandardMaterial
                                    color={hovered ? "#4fa1ff" : "#1a4d8c"}
                                    transparent
                                    opacity={hovered ? 0.14 : 0.08}
                                    side={2}
                                />
                            </mesh>
                              {/* Textured body matching halo size */}
                             <mesh ref={largePlanetRef} scale={[size * 1.04, size * 1.04, size * 1.04]}>
                                 <sphereGeometry args={[1, segments, segments]} />
                                 <meshStandardMaterial
                                     map={textureMaps.map}
                                     normalMap={textures.normal ? textureMaps.normalMap : undefined}
                                     color={!textureMaps.map ? (color || "white") : "white"}
                                     normalScale={[10, 10]}
                                     roughness={0.7}
                                     metalness={0.1}
                                 />
                             </mesh>
                         </>
                     ) : (
                         <>
                             {/* Atmosphere Halo (Fresnel-ish) for smaller planets */}
                             <mesh scale={[size * 1.05, size * 1.05, size * 1.05]}>
                                 <sphereGeometry args={[1, 32, 32]} />
                                 <meshStandardMaterial
                                     color={hovered ? "#4fa1ff" : "#1a4d8c"}
                                     transparent
                                     opacity={hovered ? 0.15 : 0.05}
                                     side={2}
                                 />
                             </mesh>
                             {/* Planet Surface for smaller planets */}
                             <mesh ref={meshRef} scale={[size, size, size]}>
                                 <sphereGeometry args={[1, segments, segments]} />
                                 <meshStandardMaterial
                                     map={textureMaps.map}
                                     normalMap={textures.normal ? textureMaps.normalMap : undefined}
                                     color={!textureMaps.map ? (color || "white") : "white"}
                                     normalScale={[10, 10]} // Exaggerate bumps
                                     roughness={0.7}
                                     metalness={0.1}
                                 />
                             </mesh>
                         </>
                     )}

                    {/* Rings (Procedural for now, simpler than texture) */}
                    {rings && (
                        <mesh rotation={[1.6, 0, 0]}>
                            <ringGeometry args={[size * 1.4, size * 2.2, 64]} />
                            <meshStandardMaterial color="#bfa378" opacity={0.6} transparent side={2} />
                        </mesh>
                    )}
                </group>

            </Float>

            {/* Label - Billboard to always face camera */}
            <Billboard position={[0, -size - labelOffset, 0]}>
                <Text
                    fontSize={0.3}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    {label}
                </Text>
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

        // Desired camera position directly in front of the planet at given distance
        const desiredPos = targetVec.clone().add(new Vector3(0, 0, distance));

        camera.position.lerp(desiredPos, 0.1);
        camera.lookAt(targetVec);

        const distanceToTarget = camera.position.distanceTo(desiredPos);
        if (distanceToTarget < 0.2) {
            hasCompletedRef.current = true;
            // Ensure we're close enough
            camera.position.copy(desiredPos);
            camera.lookAt(targetVec);
            // Small delay to ensure smooth transition
            setTimeout(() => {
                onComplete();
            }, 150);
        }
    });

    return null;
}

export default function PlanetaryLobby({ onSelect }: { onSelect: (id: UniverseId) => void }) {
    const [isZooming, setIsZooming] = useState(false);
    const [zoomTarget, setZoomTarget] = useState<[number, number, number] | null>(null);
    const [zoomDistance, setZoomDistance] = useState<number>(4);
    const [pendingUniverse, setPendingUniverse] = useState<UniverseId | null>(null);

    const handlePlanetSelect = useCallback((id: UniverseId, position: [number, number, number], size: number) => {
        setPendingUniverse(id);
        setZoomTarget(position);
        // Distance tuned so the planet roughly fills the viewport
        setZoomDistance(size * 2.6);
        setIsZooming(true);
    }, []);

    const handleZoomComplete = useCallback(() => {
        setIsZooming(false);
        if (pendingUniverse) {
            onSelect(pendingUniverse);
        }
    }, [pendingUniverse, onSelect]);

    // Focus container on mount to enable keyboard events
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (containerRef.current && !isZooming) {
            containerRef.current.focus();
        }
    }, [isZooming]);

    // Keyboard shortcuts: A, B, C, D to select planets
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            // Don't trigger if user is typing in an input field
            const target = event.target as HTMLElement;
            if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
                return;
            }

            if (isZooming) return; // Prevent selection during zoom animation

            const key = event.key.toUpperCase();
            switch (key) {
                case 'A':
                    event.preventDefault();
                    handlePlanetSelect('A', [-7, 0, 0], 0.95);
                    break;
                case 'B':
                    event.preventDefault();
                    handlePlanetSelect('B', [-3, 0, 0], 1.0);
                    break;
                case 'C':
                    event.preventDefault();
                    handlePlanetSelect('C', [1.5, 0, 0], 0.53);
                    break;
                case 'D':
                    event.preventDefault();
                    handlePlanetSelect('D', [9, 0, 0], 2.8);
                    break;
                case 'E':
                    event.preventDefault();
                    onSelect('E');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress, true); // Use capture phase
        return () => window.removeEventListener('keydown', handleKeyPress, true);
    }, [isZooming, handlePlanetSelect, onSelect]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 bg-transparent"
            tabIndex={0}
            onKeyDown={(e) => {
                // Backup handler - also handled by window listener
                const key = e.key.toUpperCase();
                if (!isZooming && ['A', 'B', 'C', 'D', 'E'].includes(key)) {
                    e.preventDefault();
                    switch (key) {
                        case 'A':
                            handlePlanetSelect('A', [-7, 0, 0], 0.95);
                            break;
                        case 'B':
                            handlePlanetSelect('B', [-3, 0, 0], 1.0);
                            break;
                        case 'C':
                            handlePlanetSelect('C', [1.5, 0, 0], 0.53);
                            break;
                        case 'D':
                            handlePlanetSelect('D', [9, 0, 0], 2.8);
                            break;
                        case 'E':
                            onSelect('E');
                            break;
                    }
                }
            }}
        >
            {/* HUD Overlay */}
            <div className="absolute top-10 w-full text-center z-10 pointer-events-none">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-[0.2em] font-sans drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    {"Arpit's Multi-verse"}
                </h2>
                <p className="text-blue-200 text-xs md:text-sm mt-2 tracking-widest uppercase opacity-70">
                    Drag to Rotate • Scroll to Zoom • Click to Enter
                </p>
            </div>

            {/* Audio Controls */}
            {/* <AudioAmbience /> */}

            <Canvas camera={{ position: [-10, 10, 14], fov: 50 }}>
                <OrbitControls
                    enablePan={false}
                    minDistance={3}
                    maxDistance={20}
                    autoRotate={!isZooming}
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
                <ambientLight intensity={0.15} /> {/* Deep dark space */}
                <directionalLight position={[10, 5, 5]} intensity={3} color="#fff1e0" /> {/* Sun (Directional) */}
                <pointLight position={[-10, -5, -10]} intensity={0.5} decay={0} color="#1c2436" /> {/* Ambient bounce */}

                {/* Multi-Layered 3D Galaxy Background */}

                {/* Layer 1: Distant background stars - denser, slightly brighter */}
                <Stars
                    radius={500}
                    depth={150}
                    count={22000}
                    factor={4}
                    saturation={2}
                    fade
                    speed={0.4}
                />

                {/* Layer 2: Mid-range stars - brighter band */}
                <Stars
                    radius={300}
                    depth={80}
                    count={14000}
                    factor={8}
                    saturation={1.6}
                    fade
                    speed={0.8}
                />

                {/* Layer 3: Close foreground stars - biggest and brightest */}
                <Stars
                    radius={150}
                    depth={50}
                    count={5000}
                    factor={14}
                    saturation={0.6}
                    fade
                    speed={1.2}
                />

                {/* --- PLANETS --- */}
                {/* VENUS (A - Personal Journal (Origin)) */}
                <Suspense fallback={<FallbackPlanet position={[-7, 0, 0]} size={0.95} color="#f4a261" label="Loading..." />}>
                    <RealisticPlanet
                        position={[-7, 0, 0]}
                        size={0.95}
                        label="Personal Journal (Origin) (A)"
                        speed={1.2}
                        textures={{
                            map: '/textures/planets/2k_venus_surface.jpg'
                        }}
                        onClick={() => handlePlanetSelect('A', [-7, 0, 0], 0.95)}
                    />
                </Suspense>

                {/* EARTH (B - Work (Realist)) */}
                <Suspense fallback={<FallbackPlanet position={[-3, 0, 0]} size={1.0} color="#4fa1ff" label="Loading..." />}>
                    <RealisticPlanet
                        position={[-3, 0, 0]}
                        size={1.0}
                        label="Work (Realist) (B)"
                        speed={1.0}
                        color="#2d4094"
                        textures={{
                            map: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
                            normal: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'
                        }}
                        onClick={() => handlePlanetSelect('B', [-3, 0, 0], 1.0)}
                    />
                </Suspense>

                {/* MARS (C - Storytelling (Narrative)) */}
                <Suspense fallback={<FallbackPlanet position={[1.5, 0, 0]} size={0.53} color="#c1440e" label="Loading..." />}>
                    <RealisticPlanet
                        position={[1.5, 0, 0]}
                        size={0.53}
                        label="Storytelling (Narrative) (C)"
                        speed={0.8}
                        labelOffset={0.9}
                        textures={{
                            map: '/textures/planets/2k_mars.jpg'
                        }}
                        onClick={() => handlePlanetSelect('C', [1.5, 0, 0], 0.53)}
                    />
                </Suspense>

                {/* JUPITER (D - Systems Thinking) */}
                <Suspense fallback={<FallbackPlanet position={[9, 0, 0]} size={2.8} color="#b08d57" label="Loading..." />}>
                    <RealisticPlanet
                        position={[9, 0, 0]}
                        size={2.8}
                        label="Systems Thinking (D)"
                        speed={0.4}
                        rings={true}
                        rotationSpeed={0.05}
                        segments={128}
                        textures={{
                            map: '/textures/planets/2k_jupiter.jpg'
                        }}
                        onClick={() => handlePlanetSelect('D', [9, 0, 0], 2.8)}
                    />
                </Suspense>

            </Canvas>

            {/* Keyboard Shortcuts Panel */}
            <KeyboardShortcuts showPlanetShortcuts={true} />
        </div>
    );
}
