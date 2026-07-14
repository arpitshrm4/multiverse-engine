"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Cloud } from "@react-three/drei";

export default function StoryBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#050208]">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.1} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#4488ff" />

                {/* The Void (Black Hole) */}
                <group position={[0, 0, -5]}>
                    {/* Event Horizon (Black Sphere) */}
                    <mesh>
                        <sphereGeometry args={[2, 64, 64]} />
                        <meshBasicMaterial color="#000000" />
                    </mesh>

                    {/* Accretion Disk (Glowing Ring) */}
                    <mesh rotation={[1.2, 0, 0]}>
                        <torusGeometry args={[3.5, 0.1, 16, 100]} />
                        <meshStandardMaterial
                            color="#aeeaff"
                            emissive="#ffffff"
                            emissiveIntensity={2}
                            roughness={0.1}
                            transparent
                            opacity={0.6}
                        />
                    </mesh>

                    {/* Inner Glow to separate sphere from background */}
                    <pointLight position={[0, 0, 2]} intensity={2} color="#0044aa" distance={5} />
                </group>

                {/* Sparse Deep Field - The Void */}
                <Stars radius={300} depth={100} count={2000} factor={4} saturation={0} fade speed={0.2} />

                {/* Mystical Particles - Cyan/Blue */}
                <Sparkles count={300} scale={15} size={3} speed={0.1} opacity={0.5} color="#aeeaff" />
                <Sparkles count={100} scale={20} size={5} speed={0.05} opacity={0.3} color="#0044aa" />

                {/* Deep Nebula Fog - Shifted to frame the Void */}
                <Cloud opacity={0.08} speed={0.05} color="#000510" position={[-5, 0, -10]} />
                <Cloud opacity={0.05} speed={0.08} color="#051020" position={[5, -2, -15]} />

            </Canvas>
            {/* Vignette Overlay for Focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)] pointer-events-none" />
        </div>
    );
}
