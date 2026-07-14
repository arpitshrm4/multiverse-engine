"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, Cloud } from "@react-three/drei";
import { Mesh } from "three";

function RotatingEarth() {
    const meshRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.02;
        }
    });

    return (
        <group position={[0, -2.5, 0]}>
            {/* Core */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#1a4d8c"
                    roughness={0.7}
                    metalness={0.1}
                />
            </mesh>
            {/* Atmosphere Glow */}
            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#4fa1ff"
                    transparent
                    opacity={1}
                    side={2} // DoubleSide
                />
            </mesh>
        </group>
    );
}

export default function SpaceBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#020205]">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#aaaaff" />

                {/* Deep Field Stars */}
                <Stars radius={200} depth={100} count={10000} factor={6} saturation={0.5} fade speed={0.5} />

                {/* Galaxy Cluster Sparkles */}
                <Sparkles count={500} scale={12} size={4} speed={0.2} opacity={0.6} color="#ffaaee" />
                <Sparkles count={500} scale={15} size={6} speed={0.3} opacity={0.4} color="#aaddff" />

                {/* Nebula Fog (Simulated via Clouds) */}
                <Cloud opacity={1} speed={0.1} color="#100030" position={[0, 0, -10]} />

                <RotatingEarth />
            </Canvas>
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
        </div>
    );
}
