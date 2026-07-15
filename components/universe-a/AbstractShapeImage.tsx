"use client";

import { motion } from "framer-motion";

interface AbstractShapeImageProps {
    section: "hero" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08";
    className?: string;
}

export default function AbstractShapeImage({ section, className = "" }: AbstractShapeImageProps) {
    // Shared gradients and filters
    const renderGradients = () => (
        <defs>
            {/* Gold Glow Gradient */}
            <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffb000" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffb000" stopOpacity="0" />
            </radialGradient>

            {/* Dark Metallic Linear Gradient */}
            <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#262626" />
                <stop offset="50%" stopColor="#171717" />
                <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>

            {/* Gold Linear Gradient */}
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffc73c" />
                <stop offset="50%" stopColor="#ffb000" />
                <stop offset="100%" stopColor="#cc8500" />
            </linearGradient>

            {/* White Soft Linear Gradient */}
            <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
            </linearGradient>

            {/* Accent Purple Gradient */}
            <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Intense Glow Filter */}
            <filter id="heavyGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="20" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
    );

    // 1. Hero: Cosmic/Planetary Morphing Sphere
    const renderHero = () => (
        <svg viewBox="0 0 800 500" className="w-full h-full bg-[#0d0d0d] absolute inset-0">
            {renderGradients()}
            {/* Background Grid lines */}
            <g stroke="#262626" strokeWidth="0.5">
                {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`v-${i}`} x1={100 + i * 75} y1="0" x2={100 + i * 75} y2="500" />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                    <line key={`h-${i}`} x1="0" y1={80 + i * 70} x2="800" y2={80 + i * 70} />
                ))}
            </g>

            {/* Ambient gold glow in center */}
            <circle cx="400" cy="250" r="300" fill="url(#goldGlow)" />

            {/* Orbit paths */}
            <ellipse cx="400" cy="250" rx="350" ry="120" fill="none" stroke="#ffb000" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.3" />
            <ellipse cx="400" cy="250" rx="200" ry="60" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />

            {/* Inner Glowing Core */}
            <motion.circle
                cx="400"
                cy="250"
                r="90"
                fill="url(#goldGrad)"
                filter="url(#glow)"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.9, 1, 0.9]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Morphing Outer Shield */}
            <motion.path
                d="M300 250 C300 150, 500 150, 500 250 C500 350, 300 350, 300 250 Z"
                fill="url(#whiteGrad)"
                stroke="url(#goldGrad)"
                strokeWidth="1.5"
                filter="url(#glow)"
                animate={{
                    d: [
                        "M 400 130 C 490 130, 570 200, 570 290 C 570 380, 480 410, 400 410 C 310 410, 270 340, 270 250 C 270 170, 310 130, 400 130 Z",
                        "M 400 140 C 510 110, 550 210, 550 280 C 550 350, 490 390, 400 390 C 310 390, 250 360, 250 290 C 250 220, 290 170, 400 140 Z",
                        "M 400 130 C 490 130, 570 200, 570 290 C 570 380, 480 410, 400 410 C 310 410, 270 340, 270 250 C 270 170, 310 130, 400 130 Z"
                    ],
                    rotate: 360
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ originX: "400px", originY: "250px" }}
            />

            {/* Tiny Floating particles */}
            {Array.from({ length: 4 }).map((_, i) => (
                <motion.circle
                    key={i}
                    r={3 + i}
                    fill="#ffb000"
                    filter="url(#glow)"
                    animate={{
                        x: [0, 40 * (i % 2 === 0 ? 1 : -1), 0],
                        y: [0, 30 * (i > 1 ? 1 : -1), 0],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        cx: 300 + i * 70,
                        cy: 180 + i * 50
                    }}
                />
            ))}
        </svg>
    );

    // 2. Section 01: Where I come from (Simple, Predictable, Structured)
    const renderSection01 = () => (
        <svg viewBox="0 0 600 600" className="w-full h-full bg-[#0d0d0d] absolute inset-0">
            {renderGradients()}
            
            {/* Dark Metallic Grid Panel */}
            <rect x="50" y="50" width="500" height="500" fill="url(#metalGrad)" stroke="#262626" strokeWidth="2" rx="4" />
            
            {/* Technical grid coordinates */}
            <g stroke="#333" strokeWidth="0.5" strokeDasharray="3 3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <line key={`v-${i}`} x1={100 + i * 80} y1="50" x2={100 + i * 80} y2="550" />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                    <line key={`h-${i}`} x1="50" y1={100 + i * 80} x2="550" y2={100 + i * 80} />
                ))}
            </g>

            {/* Concentric Structured Rings */}
            <circle cx="300" cy="300" r="180" fill="none" stroke="#262626" strokeWidth="1" />
            <circle cx="300" cy="300" r="140" fill="none" stroke="#333" strokeWidth="1.5" />
            <circle cx="300" cy="300" r="100" fill="none" stroke="#ffb000" strokeWidth="0.5" opacity="0.5" />

            {/* Structured Crosshairs */}
            <line x1="100" y1="300" x2="500" y2="300" stroke="#ffb000" strokeWidth="0.5" opacity="0.3" />
            <line x1="300" y1="100" x2="300" y2="500" stroke="#ffb000" strokeWidth="0.5" opacity="0.3" />

            {/* Rotating Geometric Squares representing Structure */}
            <motion.rect
                x="220"
                y="220"
                width="160"
                height="160"
                fill="url(#whiteGrad)"
                stroke="url(#goldGrad)"
                strokeWidth="1.5"
                rx="2"
                animate={{ rotate: 45 }}
                transition={{ duration: 1 }}
                style={{ originX: "300px", originY: "300px" }}
            />

            <motion.rect
                x="240"
                y="240"
                width="120"
                height="120"
                fill="none"
                stroke="#eaeaea"
                strokeWidth="1"
                opacity="0.3"
                animate={{ rotate: -45 }}
                transition={{ duration: 1.5 }}
                style={{ originX: "300px", originY: "300px" }}
            />

            {/* Accent Gold Solid Orb */}
            <motion.circle
                cx="300"
                cy="300"
                r="30"
                fill="url(#goldGrad)"
                filter="url(#glow)"
                animate={{
                    scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Tiny corners indicators */}
            <path d="M 60 80 L 60 60 L 80 60" fill="none" stroke="#ffb000" strokeWidth="1.5" />
            <path d="M 540 80 L 540 60 L 520 60" fill="none" stroke="#ffb000" strokeWidth="1.5" />
            <path d="M 60 520 L 60 540 L 80 540" fill="none" stroke="#ffb000" strokeWidth="1.5" />
            <path d="M 540 520 L 540 540 L 520 540" fill="none" stroke="#ffb000" strokeWidth="1.5" />
        </svg>
    );

    // 3. Section 02: Growing up (Curious child, observer)
    const renderSection02 = () => (
        <svg viewBox="0 0 600 600" className="w-full h-full bg-[#0e0e0e] absolute inset-0">
            {renderGradients()}
            
            {/* Ambient Radial Glow */}
            <circle cx="300" cy="300" r="220" fill="url(#goldGlow)" />
            
            {/* Moving Soft Blurs/Blobs representing curiosity */}
            <motion.circle
                cx="240"
                cy="260"
                r="90"
                fill="url(#purpleGrad)"
                animate={{
                    x: [0, 30, -10, 0],
                    y: [0, -40, 20, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <motion.circle
                cx="370"
                cy="320"
                r="110"
                fill="url(#whiteGrad)"
                stroke="#ffb000"
                strokeWidth="0.5"
                opacity="0.8"
                animate={{
                    x: [0, -35, 15, 0],
                    y: [0, 25, -30, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Glowing Focal Eye (Observer Theme) */}
            <g filter="url(#glow)">
                {/* Eye outer Ring */}
                <circle cx="300" cy="300" r="60" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
                {/* Pupils */}
                <motion.circle
                    cx="300"
                    cy="300"
                    r="25"
                    fill="#eaeaea"
                    animate={{
                        scale: [1, 1.1, 0.9, 1],
                        x: [0, 8, -8, 0],
                        y: [0, -5, 5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <circle cx="305" cy="295" r="8" fill="#0d0d0d" />
                <circle cx="308" cy="292" r="3" fill="#ffffff" />
            </g>

            {/* Orbital Rings around eye */}
            <motion.circle
                cx="300"
                cy="300"
                r="130"
                fill="none"
                stroke="#ffb000"
                strokeWidth="1"
                strokeDasharray="4 8"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ originX: "300px", originY: "300px" }}
            />
            
            <motion.circle
                cx="300"
                cy="300"
                r="160"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.5"
                opacity="0.2"
                strokeDasharray="40 10"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ originX: "300px", originY: "300px" }}
            />
        </svg>
    );

    // 4. Section 03: Things that changed me (Independence / Phone in Rain)
    const renderSection03 = () => (
        <svg viewBox="0 0 800 600" className="w-full h-full bg-[#0d0d0d] absolute inset-0">
            {renderGradients()}

            {/* Storm Background Waves */}
            <path d="M 0 450 C 200 480, 400 400, 600 490 C 700 520, 750 510, 800 470 L 800 600 L 0 600 Z" fill="#141414" opacity="0.8" />
            <path d="M 0 500 C 300 430, 500 520, 800 460 L 800 600 L 0 600 Z" fill="url(#metalGrad)" />

            {/* Rain Streaks */}
            <g stroke="#ffb000" strokeWidth="0.75" opacity="0.3">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.line
                        key={i}
                        x1={100 + i * 50}
                        y1="-50"
                        x2={70 + i * 50}
                        y2="50"
                        animate={{
                            y: [0, 650],
                            x: [0, -50]
                        }}
                        transition={{
                            duration: 1.5 + (i % 3) * 0.2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: (i % 5) * 0.3
                        }}
                    />
                ))}
            </g>

            {/* Glassmorphic panel representing Phone */}
            <motion.g
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Phone Shadow / Backplate */}
                <rect x="280" y="120" width="240" height="400" rx="20" fill="url(#metalGrad)" stroke="#ffb000" strokeWidth="1.5" filter="url(#glow)" />
                
                {/* Phone screen inside */}
                <rect x="295" y="135" width="210" height="340" rx="10" fill="#0f0f0f" stroke="#262626" strokeWidth="1" />

                {/* Grid UI on screen */}
                <g opacity="0.15" stroke="#eaeaea" strokeWidth="0.5">
                    <line x1="315" y1="180" x2="485" y2="180" />
                    <line x1="315" y1="240" x2="485" y2="240" />
                    <line x1="315" y1="300" x2="485" y2="300" />
                    <line x1="315" y1="360" x2="485" y2="360" />
                    <line x1="315" y1="420" x2="485" y2="420" />
                </g>

                {/* Highlight/Split (Independence Concept) */}
                <motion.line
                    x1="400"
                    y1="135"
                    x2="400"
                    y2="475"
                    stroke="url(#goldGrad)"
                    strokeWidth="2"
                    filter="url(#glow)"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.g>

            {/* Concentric ripples spreading out (water effect) */}
            {Array.from({ length: 3 }).map((_, i) => (
                <motion.ellipse
                    key={i}
                    cx="400"
                    cy="450"
                    rx="10"
                    ry="5"
                    fill="none"
                    stroke="#ffb000"
                    strokeWidth="0.5"
                    animate={{
                        rx: [10, 150],
                        ry: [5, 45],
                        opacity: [0.8, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut"
                    }}
                />
            ))}
        </svg>
    );

    // 5. Section 04: When design started making sense (Retro computer / Interfaces)
    const renderSection04 = () => (
        <svg viewBox="0 0 600 600" className="w-full h-full bg-[#0d0d0d] absolute inset-0">
            {renderGradients()}

            {/* Dot Matrix BG */}
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#333" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />

            {/* Retro Monitor Frame */}
            <rect x="60" y="80" width="480" height="420" rx="16" fill="url(#metalGrad)" stroke="#333" strokeWidth="3" />
            {/* Screen Inner */}
            <rect x="85" y="105" width="430" height="340" rx="8" fill="#121212" stroke="#ffb000" strokeWidth="0.75" />

            {/* CRT Scanlines */}
            <g stroke="#ffffff" strokeWidth="0.5" opacity="0.03">
                {Array.from({ length: 60 }).map((_, i) => (
                    <line key={i} x1="85" y1={105 + i * 6} x2="515" y2={105 + i * 6} />
                ))}
            </g>

            {/* Generative Wireframe UI layouts (Interfaces Theme) */}
            <g stroke="#ffb000" strokeWidth="1" fill="none" opacity="0.7">
                {/* Top header bar */}
                <rect x="105" y="125" width="390" height="30" rx="2" stroke="#ffb000" />
                <circle cx="125" cy="140" r="5" fill="#ffb000" />
                <line x1="145" y1="140" x2="220" y2="140" />

                {/* Sidebar layout wireframe */}
                <rect x="105" y="165" width="90" height="255" rx="2" />
                <line x1="120" y1="190" x2="180" y2="190" />
                <line x1="120" y1="210" x2="160" y2="210" />

                {/* Main Content Grid Area */}
                <rect x="205" y="165" width="290" height="255" rx="2" />
                
                {/* Interactive Wireframe Spheres */}
                <motion.circle
                    cx="350"
                    cy="290"
                    r="55"
                    stroke="#eaeaea"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "350px", originY: "290px" }}
                />

                <motion.rect
                    x="310"
                    y="250"
                    width="80"
                    height="80"
                    stroke="url(#goldGrad)"
                    strokeWidth="1.5"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "350px", originY: "290px" }}
                />

                {/* Corner crosshairs indicating layout calculation */}
                <path d="M 215 175 L 225 175 M 215 175 L 215 185" />
                <path d="M 485 175 L 475 175 M 485 175 L 485 185" />
                <path d="M 215 410 L 225 410 M 215 410 L 215 400" />
                <path d="M 485 410 L 475 410 M 485 410 L 485 400" />
            </g>

            {/* Glowing code text overlay */}
            <text x="110" y="470" fill="#a0a0a0" fontFamily="monospace" fontSize="10" opacity="0.6">
                LAYOUT ENGINE INIT: universeA_dimension4.config
            </text>
        </svg>
    );

    // 6. Section 05: What life taught me before design did (Repetition / concentric circles)
    const renderSection05 = () => (
        <svg viewBox="0 0 800 600" className="w-full h-full bg-[#0d0d0d] absolute inset-0">
            {renderGradients()}

            {/* Concentric repeating waves (Repetition Concept) */}
            <g fill="none" strokeWidth="1.5" opacity="0.3">
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.circle
                        key={i}
                        cx="400"
                        cy="300"
                        r={40 + i * 35}
                        stroke={i % 2 === 0 ? "url(#goldGrad)" : "#eaeaea"}
                        animate={{
                            strokeWidth: [1, 2.5, 1],
                            opacity: [0.15, 0.45, 0.15]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </g>

            {/* Golden Core Vortex */}
            <circle cx="400" cy="300" r="100" fill="url(#goldGlow)" />
            
            {/* Spinning Repetitive Segments */}
            <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ originX: "400px", originY: "300px" }}
            >
                <circle cx="400" cy="300" r="80" fill="none" stroke="url(#goldGrad)" strokeWidth="4" strokeDasharray="30 180 80 40" />
                <circle cx="400" cy="300" r="110" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="50 150 10 30" opacity="0.2" />
            </motion.g>

            <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ originX: "400px", originY: "300px" }}
            >
                <circle cx="400" cy="300" r="50" fill="none" stroke="url(#goldGrad)" strokeWidth="2" strokeDasharray="60 60 10 20" />
                <circle cx="400" cy="300" r="140" fill="none" stroke="#ffb000" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.4" />
            </motion.g>

            {/* Precise Central point representing discipline/control */}
            <circle cx="400" cy="300" r="6" fill="#ffffff" filter="url(#glow)" />
            <circle cx="400" cy="300" r="18" fill="none" stroke="#ffb000" strokeWidth="1" />
        </svg>
    );

    // 7. Section 06: Things I carry with me (6 Orbiting values)
    const renderSection06 = () => (
        <svg viewBox="0 0 600 600" className="w-full h-full bg-[#0d0d0d] absolute inset-0">
            {renderGradients()}

            {/* Starfield backdrop */}
            <g fill="#ffffff" opacity="0.2">
                <circle cx="100" cy="150" r="1" />
                <circle cx="500" cy="200" r="1" />
                <circle cx="200" cy="450" r="1.5" />
                <circle cx="450" cy="480" r="1" />
                <circle cx="150" cy="350" r="1" />
            </g>

            {/* 6 orbital guide lines */}
            <g stroke="#262626" strokeWidth="0.5" fill="none">
                <ellipse cx="300" cy="300" rx="200" ry="90" />
                <ellipse cx="300" cy="300" rx="220" ry="160" />
                <ellipse cx="300" cy="300" rx="140" ry="220" />
            </g>

            {/* Core anchor representing Arpit */}
            <circle cx="300" cy="300" r="40" fill="url(#metalGrad)" stroke="#262626" strokeWidth="2" />
            <circle cx="300" cy="300" r="15" fill="url(#goldGrad)" filter="url(#glow)" />

            {/* Value 1: Patience (Slow Float) */}
            <motion.g
                animate={{
                    x: [0, 80, 0, -80, 0],
                    y: [120, 0, -120, 0, 120]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <circle cx="300" cy="300" r="16" fill="url(#metalGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" filter="url(#glow)" />
                <circle cx="300" cy="300" r="4" fill="#ffffff" />
            </motion.g>

            {/* Value 2: Discipline */}
            <motion.g
                animate={{
                    x: [0, -150, 0, 150, 0],
                    y: [-60, 0, 60, 0, -60]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
            >
                <circle cx="300" cy="300" r="14" fill="url(#metalGrad)" stroke="#ffffff" strokeWidth="1" opacity="0.9" />
                <circle cx="300" cy="300" r="3" fill="#ffb000" />
            </motion.g>

            {/* Value 3: Earning changes thought */}
            <motion.g
                animate={{
                    x: [180, 0, -180, 0, 180],
                    y: [0, 140, 0, -140, 0]
                }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear", delay: 2 }}
            >
                <rect x="290" y="290" width="20" height="20" fill="url(#metalGrad)" stroke="url(#goldGrad)" strokeWidth="1" rx="2" />
            </motion.g>

            {/* Value 4: Independence */}
            <motion.g
                animate={{
                    x: [-120, 120, -120],
                    y: [160, -160, 160]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            >
                <circle cx="300" cy="300" r="10" fill="url(#goldGrad)" filter="url(#glow)" />
            </motion.g>

            {/* Value 5: Respect Systems */}
            <motion.g
                animate={{
                    x: [100, -100, 100],
                    y: [-180, 180, -180]
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
                <polygon points="300,292 308,308 292,308" fill="url(#metalGrad)" stroke="#ffb000" strokeWidth="1" />
            </motion.g>

            {/* Value 6: Consistency */}
            <motion.g
                animate={{
                    x: [-200, 0, 200, 0, -200],
                    y: [0, -90, 0, 90, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 0.5 }}
            >
                <circle cx="300" cy="300" r="12" fill="none" stroke="url(#goldGrad)" strokeWidth="2" filter="url(#glow)" />
            </motion.g>
        </svg>
    );

    // 8. Section 07: Where I am now (Clarity / Mountains waves)
    const renderSection07 = () => (
        <svg viewBox="0 0 800 600" className="w-full h-full bg-[#0d0d0d] absolute inset-0">
            {renderGradients()}

            {/* Big soft sun in the top-right representing Clarity */}
            <motion.circle
                cx="580"
                cy="180"
                r="110"
                fill="url(#goldGrad)"
                filter="url(#heavyGlow)"
                animate={{
                    scale: [1, 1.03, 1],
                    opacity: [0.8, 0.95, 0.8]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid coordinates */}
            <g stroke="#1a1a1a" strokeWidth="0.5">
                {Array.from({ length: 8 }).map((_, i) => (
                    <line key={i} x1="0" y1={80 + i * 60} x2="800" y2={80 + i * 60} />
                ))}
            </g>

            {/* Calm waves overlapping (Mountains/Water/Settle theme) */}
            <path d="M 0 350 C 250 280, 500 420, 800 320 L 800 600 L 0 600 Z" fill="#141414" stroke="#262626" strokeWidth="0.5" />
            <path d="M 0 400 C 200 480, 450 340, 800 410 L 800 600 L 0 600 Z" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" opacity="0.9" />

            <motion.path
                d="M 0 460 C 250 380, 550 510, 800 450 L 800 600 L 0 600 Z"
                fill="url(#metalGrad)"
                stroke="url(#goldGrad)"
                strokeWidth="1"
                animate={{
                    d: [
                        "M 0 460 C 250 380, 550 510, 800 450 L 800 600 L 0 600 Z",
                        "M 0 475 C 280 400, 520 480, 800 465 L 800 600 L 0 600 Z",
                        "M 0 460 C 250 380, 550 510, 800 450 L 800 600 L 0 600 Z"
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Soft floating stars representing peaceful thoughts */}
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.circle
                    key={i}
                    r="2"
                    fill="#eaeaea"
                    animate={{
                        opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                    style={{
                        cx: 120 + i * 90,
                        cy: 140 + i * 40
                    }}
                />
            ))}
        </svg>
    );

    // 9. Section 08: Closing (Perspective Tunnel Portal to Dimension B)
    const renderSection08 = () => (
        <svg viewBox="0 0 800 600" className="w-full h-full bg-[#0c0c0c] absolute inset-0">
            {renderGradients()}

            {/* Ambient Radial Background Glow */}
            <circle cx="400" cy="300" r="280" fill="url(#goldGlow)" />

            {/* Perspective Tunnel lines converging to center */}
            <g stroke="#262626" strokeWidth="0.5">
                <line x1="0" y1="0" x2="800" y2="600" />
                <line x1="800" y1="0" x2="0" y2="600" />
                <line x1="400" y1="0" x2="400" y2="600" />
                <line x1="0" y1="300" x2="800" y2="300" />
            </g>

            {/* Concentric squares receding in 3D perspective */}
            <g fill="none" strokeWidth="1" stroke="url(#whiteGrad)">
                {Array.from({ length: 7 }).map((_, i) => (
                    <motion.rect
                        key={i}
                        x={400 - (i + 1) * 50}
                        y={300 - (i + 1) * 38}
                        width={(i + 1) * 100}
                        height={(i + 1) * 76}
                        stroke={i === 2 ? "url(#goldGrad)" : "#333"}
                        strokeWidth={i === 2 ? "1.5" : "0.5"}
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeInOut"
                        }}
                        style={{ originX: "400px", originY: "300px" }}
                    />
                ))}
            </g>

            {/* Rotating central gateway/portal */}
            <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ originX: "400px", originY: "300px" }}
            >
                {/* Circular ring portal */}
                <circle cx="400" cy="300" r="75" fill="none" stroke="url(#goldGrad)" strokeWidth="3" filter="url(#glow)" />
                <circle cx="400" cy="300" r="85" fill="none" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="10 30" opacity="0.3" />
            </motion.g>

            <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ originX: "400px", originY: "300px" }}
            >
                <circle cx="400" cy="300" r="60" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="30 20" opacity="0.5" />
            </motion.g>

            {/* Glowing vortex core (The warp point) */}
            <circle cx="400" cy="300" r="40" fill="#0c0c0c" stroke="#ffb000" strokeWidth="1" />
            <motion.circle
                cx="400"
                cy="300"
                r="25"
                fill="url(#goldGrad)"
                filter="url(#glow)"
                animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </svg>
    );

    // Render corresponding section vector
    const renderContent = () => {
        switch (section) {
            case "hero":
                return renderHero();
            case "01":
                return renderSection01();
            case "02":
                return renderSection02();
            case "03":
                return renderSection03();
            case "04":
                return renderSection04();
            case "05":
                return renderSection05();
            case "06":
                return renderSection06();
            case "07":
                return renderSection07();
            case "08":
                return renderSection08();
            default:
                return null;
        }
    };

    return (
        <div className={`relative overflow-hidden w-full h-full rounded-[4px] border border-[#262626] ${className}`}>
            {renderContent()}
        </div>
    );
}
