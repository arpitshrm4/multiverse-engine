"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUniverse } from "@/context/UniverseContext";
import {
    Sparkles,
    HelpCircle,
    Package,
    Star,
    FlaskConical,
    ArrowRight,
    Compass,
    X,
    Network
} from "lucide-react";

export type NodeType = 'question' | 'object' | 'model' | 'experiment';

export interface CuriosityNode {
    id: string;
    type: NodeType;
    title: string;
    collectedDuring: string; // Human label replacing metadata
    x: number; // orbital percentage X
    y: number; // orbital percentage Y
    personalReflection: string; // Personal reflection sentence
    story: string;
    whyIKeptThis: string; // Replaces "Lesson"
    mentalModel: string;
    yearsLaterAppearedAgain: string; // Replaces "Applied Project"
    status?: 'Exploring' | 'Testing' | 'Validated' | 'Paused';
    connections: string[];
}

const KNOWLEDGE_NODES: CuriosityNode[] = [
    // -------------------------------------------------------------
    // QUESTIONS (VIBRANT PURPLE GLOW - PRIMARY NAVIGATION)
    // -------------------------------------------------------------
    {
        id: "q-1",
        type: "question",
        title: "Can design reduce cognitive decision fatigue?",
        collectedDuring: "Late-Night Financial Trading Audit • 2021",
        x: 50,
        y: 22,
        personalReflection: "This question began on a trading floor watching operators drown in 30 concurrent monitors.",
        story: "In high-stakes enterprise environments, operators make thousands of decisions per shift. Decorative UI noise drains mental stamina.",
        whyIKeptThis: "Software should bear the cognitive load, preserving human attention for critical judgment calls.",
        mentalModel: "Cognitive Load Budgeting",
        yearsLaterAppearedAgain: "Fintech Decision Engine & Ledger ($100M+ Daily Settlements)",
        connections: ["obj-1", "model-2", "exp-3", "obj-4"]
    },
    {
        id: "q-2",
        type: "question",
        title: "How do we build systems that scale across institutions without friction?",
        collectedDuring: "National Digital Ministry Discovery • 2023",
        x: 26,
        y: 36,
        personalReflection: "I realized bureaucracy cannot be solved by forcing everyone into the same rigid boxes.",
        story: "When 60+ autonomous organizations must collaborate, forcing rigid standardization creates institutional rebellion.",
        whyIKeptThis: "Alignment is built by creating flexible translation layers rather than forcing rigid compliance.",
        mentalModel: "Universal Translation Mapping",
        yearsLaterAppearedAgain: "Gyan Bharatam National Platform (14.3M Manuscripts)",
        connections: ["obj-2", "model-1", "exp-2"]
    },
    {
        id: "q-3",
        type: "question",
        title: "Why does reliability create deeper emotional trust than features?",
        collectedDuring: "SaaS Platform Migration Sprint • 2020",
        x: 74,
        y: 36,
        personalReflection: "Users don't love software because it has 100 features; they love it because it never lets them down.",
        story: "Users tolerate missing secondary features if the primary workflow is 100% predictable and bulletproof.",
        whyIKeptThis: "Consistency compounds trust far faster than rapid feature delivery.",
        mentalModel: "Predictable Trust Compounding",
        yearsLaterAppearedAgain: "Vahana Enterprise No-Code Platform",
        connections: ["obj-1", "model-3", "exp-1"]
    },

    // -------------------------------------------------------------
    // OBJECTS (SOFT BLUE PHYSICAL FEEL)
    // -------------------------------------------------------------
    {
        id: "obj-1",
        type: "object",
        title: "Old Nokia 3310 Phone",
        collectedDuring: "Personal Artifact Collection",
        x: 16,
        y: 56,
        personalReflection: "I still remember holding this phone for the first time and being amazed it survived every drop.",
        story: "A device that operated for two weeks on a single charge and survived severe drops without losing signal.",
        whyIKeptThis: "Reliability creates emotional attachment. Consistency matters more than feature bloat.",
        mentalModel: "Predictable Trust Compounding",
        yearsLaterAppearedAgain: "Multi-Brand Design Tokens (12 Production Apps)",
        connections: ["q-1", "q-3", "model-3"]
    },
    {
        id: "obj-2",
        type: "object",
        title: "Tokyo Transit Signage Map",
        collectedDuring: "Shinjuku Station Observation • 2022",
        x: 35,
        y: 68,
        personalReflection: "Standing in Shinjuku station with 3 Million commuters, I felt the quiet power of zero-text navigation.",
        story: "Millions of commuters navigate underground Tokyo stations daily via color-coded lane paths and zero-text direction icons.",
        whyIKeptThis: "Interface navigation must guide human intent with zero-latency visual physics.",
        mentalModel: "Zero-Latency Spatial Direction",
        yearsLaterAppearedAgain: "Gyan Bharatam Manuscript Search Navigation",
        connections: ["q-2", "model-1", "exp-2"]
    },
    {
        id: "obj-3",
        type: "object",
        title: "35mm Manual Film Camera",
        collectedDuring: "Analog Photography Practice",
        x: 65,
        y: 68,
        personalReflection: "This camera taught me that having only 36 shots makes every picture immensely valuable.",
        story: "With only 36 exposures on a roll and zero digital previews, every shutter press demands total presence.",
        whyIKeptThis: "Constraints sharpen intentionality. Restricting choices forces teams to focus on what matters.",
        mentalModel: "First Principles Deconstruction",
        yearsLaterAppearedAgain: "Enterprise Form Streamlining (Reduced 12 steps to 3)",
        connections: ["q-3", "model-1", "obj-4"]
    },
    {
        id: "obj-4",
        type: "object",
        title: "Mechanical Watch Movement",
        collectedDuring: "Horology Research Workshop",
        x: 84,
        y: 56,
        personalReflection: "This object quietly changed how I think about mechanical precision under pressure.",
        story: "Hundreds of gears interlock within 2-micron tolerances to transform arm motion into accurate timekeeping without batteries.",
        whyIKeptThis: "Internal engineering precision creates external human calm.",
        mentalModel: "Tolerance Budgeting",
        yearsLaterAppearedAgain: "Fintech Real-Time Audit Ledger Sync",
        connections: ["q-1", "obj-3", "model-2"]
    },

    // -------------------------------------------------------------
    // MENTAL MODELS (WARM AMBER STARS)
    // -------------------------------------------------------------
    {
        id: "model-1",
        type: "model",
        title: "First Principles Deconstruction",
        collectedDuring: "Architecture & Systems Synthesis",
        x: 28,
        y: 84,
        personalReflection: "This framework saved our team months of building the wrong feature for enterprise users.",
        story: "Stripping away legacy industry assumptions until you reach fundamental operational truths.",
        whyIKeptThis: "Never redesign a legacy screen without questioning why the workflow exists in the first place.",
        mentalModel: "First Principles Deconstruction",
        yearsLaterAppearedAgain: "Vahana No-Code Data Schema Engine",
        connections: ["q-2", "obj-2", "exp-2"]
    },
    {
        id: "model-2",
        type: "model",
        title: "Cognitive Load Budgeting",
        collectedDuring: "Product Psychology Research",
        x: 50,
        y: 84,
        personalReflection: "This lesson stayed with me much longer than expected during complex UI system audits.",
        story: "Treating operator attention as a finite daily bank account—never spending it on decorative clutter.",
        whyIKeptThis: "Every button, badge, and color highlight deducts attention points from the user.",
        mentalModel: "Cognitive Load Budgeting",
        yearsLaterAppearedAgain: "Fintech High-Density Treasury Dashboard",
        connections: ["q-1", "obj-4", "exp-3"]
    },
    {
        id: "model-3",
        type: "model",
        title: "Second-Order Consequences",
        collectedDuring: "Design System Governance",
        x: 72,
        y: 84,
        personalReflection: "I learned the hard way that quick UI shortcuts today create massive technical debt tomorrow.",
        story: "Evaluating how today's quick workaround impacts system scale and engineering debt in 12 months.",
        whyIKeptThis: "A short-term UI hack today compounds into exponential code refactoring tomorrow.",
        mentalModel: "Second-Order Consequences",
        yearsLaterAppearedAgain: "Multi-Brand Semantic Token Pipeline",
        connections: ["q-3", "obj-1", "exp-1"]
    },

    // -------------------------------------------------------------
    // CURRENT EXPERIMENTS (EMERALD RESEARCH WALL)
    // -------------------------------------------------------------
    {
        id: "exp-1",
        type: "experiment",
        title: "AI Design Token Synthesis",
        collectedDuring: "Active Research Lab • 2026",
        x: 14,
        y: 26,
        status: "Exploring",
        personalReflection: "Exploring how LLMs can bridge the gap between design tokens and production code.",
        story: "Testing automated LLM pipelines that convert raw Figma variables directly into semantic, WCAG-compliant NPM token packages.",
        whyIKeptThis: "AI accelerates system governance, allowing designers to spend time on strategy rather than token documentation.",
        mentalModel: "Second-Order Consequences",
        yearsLaterAppearedAgain: "Design Token Governance Pipeline",
        connections: ["q-3", "obj-1", "model-3"]
    },
    {
        id: "exp-2",
        type: "experiment",
        title: "Spatial Multiverse Navigation",
        collectedDuring: "Active Research Lab • 2026",
        x: 86,
        y: 26,
        status: "Testing",
        personalReflection: "Rethinking web portfolios as interconnected spatial dimensions rather than flat pages.",
        story: "Rethinking traditional linear portfolio websites as interconnected spatial dimensions that showcase different facets of product leadership.",
        whyIKeptThis: "Spatial navigation encourages active discovery rather than passive scrolling.",
        mentalModel: "First Principles Deconstruction",
        yearsLaterAppearedAgain: "Multiverse Interactive Engine",
        connections: ["q-2", "obj-2", "model-1"]
    },
    {
        id: "exp-3",
        type: "experiment",
        title: "Sub-100ms Micro-Interactions",
        collectedDuring: "Active Research Lab • 2026",
        x: 50,
        y: 56,
        status: "Validated",
        personalReflection: "Studying how keyboard shortcuts create a sense of weightless speed for power users.",
        story: "Prototyping low-latency keyboard shortcuts and physical-inspired button latches for power-user enterprise audit tools.",
        whyIKeptThis: "Sub-100ms keyboard interactions transform high-volume data auditing into an effortless flow state.",
        mentalModel: "Cognitive Load Budgeting",
        yearsLaterAppearedAgain: "Fintech Ledger Batch Reconciliation",
        connections: ["q-1", "model-2"]
    }
];

export default function UniverseDPage() {
    const { setUniverse } = useUniverse();

    // Node selection state (null when idle exploring full-screen graph)
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
    const [activeMode, setActiveMode] = useState<'all' | 'question' | 'object' | 'model' | 'experiment'>('all');

    // Floating particles for 3D observatory atmospheric depth
    const particles = useMemo(() => {
        return Array.from({ length: 35 }).map((_, i) => ({
            id: i,
            x: (i * 29) % 100,
            y: (i * 17) % 100,
            size: (i % 3) + 1.5,
            duration: 14 + (i % 8),
            delay: (i % 5)
        }));
    }, []);

    // Currently selected node object
    const selectedNode = useMemo(() => {
        if (!selectedNodeId) return null;
        return KNOWLEDGE_NODES.find(n => n.id === selectedNodeId) || null;
    }, [selectedNodeId]);

    // Active connected node IDs for organic Bezier curves and node dimming
    const activeConnections = useMemo(() => {
        const targetId = hoveredNodeId || selectedNodeId;
        if (!targetId) return [];
        const node = KNOWLEDGE_NODES.find(n => n.id === targetId);
        return node ? [node.id, ...node.connections] : [];
    }, [hoveredNodeId, selectedNodeId]);

    // Filter nodes based on conversational mode selection
    const filteredNodes = useMemo(() => {
        if (activeMode === 'all') return KNOWLEDGE_NODES;
        return KNOWLEDGE_NODES.filter(n => n.type === activeMode || activeConnections.includes(n.id));
    }, [activeMode, activeConnections]);

    const isOverlayOpen = Boolean(selectedNode);

    return (
        <div className="relative w-screen h-screen bg-[#040407] text-slate-200 font-sans selection:bg-purple-500/20 selection:text-purple-300 overflow-hidden">

            {/* Layer 1: Environmental Atmosphere (Stars, Nebula Glows & Drifting Dust) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-purple-950/15 blur-[220px] rounded-full transition-opacity duration-1000 ${isOverlayOpen ? 'opacity-40' : 'opacity-100'}`} />
                <div className={`absolute bottom-1/4 right-1/4 w-[900px] h-[900px] bg-indigo-950/15 blur-[220px] rounded-full transition-opacity duration-1000 ${isOverlayOpen ? 'opacity-40' : 'opacity-100'}`} />

                {/* Starlight grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:48px_48px] opacity-15" />

                {/* Ambient floating dust particles */}
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0.15, 0.5, 0.15]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: p.delay
                        }}
                        className="absolute bg-purple-300/40 rounded-full pointer-events-none"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`
                        }}
                    />
                ))}
            </div>

            {/* Top Exploration Controls Header */}
            <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-auto">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-purple-400 font-mono text-xs tracking-widest uppercase font-semibold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Dimension D • Living Curiosity Map</span>
                    </div>
                </div>

                {/* Conversational Navigation Modes */}
                <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-slate-950/50 border border-slate-800/40 backdrop-blur-2xl text-xs font-mono">
                    {[
                        { id: 'all', label: 'Entire Constellation', icon: Compass },
                        { id: 'question', label: 'Start with Questions', icon: HelpCircle },
                        { id: 'object', label: 'Explore Objects', icon: Package },
                        { id: 'model', label: 'Follow Ideas', icon: Star },
                        { id: 'experiment', label: 'Research Wall', icon: FlaskConical }
                    ].map((mode) => {
                        const Icon = mode.icon;
                        const isActive = activeMode === mode.id;
                        return (
                            <button
                                key={mode.id}
                                onClick={() => setActiveMode(mode.id as any)}
                                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${isActive
                                        ? "bg-purple-950/90 text-purple-200 border border-purple-500/40 font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                                    }`}
                            >
                                <Icon className="w-3.5 h-3.5 text-purple-400" />
                                <span>{mode.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Return to Multiverse Button */}
                <button
                    onClick={() => setUniverse('LOBBY')}
                    className="px-3.5 py-1.5 rounded-full bg-slate-900/60 hover:bg-purple-950/80 border border-slate-800 hover:border-purple-500/40 text-slate-300 hover:text-purple-200 text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                >
                    <span>← Return to Multiverse</span>
                </button>
            </header>

            {/* Layer 2: FULL-SCREEN CANVAS EXPERIENCE (THE GRAPH IS THE HERO) */}
            <main className={`relative z-10 w-full h-full transition-all duration-700 ${isOverlayOpen ? 'blur-[3px] brightness-75' : ''}`}>

                {/* SVG Bezier Constellation Paths */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    {KNOWLEDGE_NODES.map((sourceNode) => {
                        return sourceNode.connections.map((targetId) => {
                            const targetNode = KNOWLEDGE_NODES.find(n => n.id === targetId);
                            if (!targetNode) return null;

                            const isHighlighted = activeConnections.includes(sourceNode.id) && activeConnections.includes(targetNode.id);

                            const x1 = sourceNode.x;
                            const y1 = sourceNode.y;
                            const x2 = targetNode.x;
                            const y2 = targetNode.y;
                            const cx = (x1 + x2) / 2;

                            return (
                                <path
                                    key={`${sourceNode.id}-${targetNode.id}`}
                                    d={`M ${x1}% ${y1}% C ${cx}% ${y1}%, ${cx}% ${y2}%, ${x2}% ${y2}%`}
                                    fill="none"
                                    stroke={isHighlighted ? "#c084fc" : "#1e293b"}
                                    strokeWidth={isHighlighted ? "3" : "1.5"}
                                    strokeOpacity={isHighlighted ? "0.9" : "0.2"}
                                    className="transition-all duration-700"
                                />
                            );
                        });
                    })}
                </svg>

                {/* Drifting Orbital Floating Nodes */}
                <div className="relative w-full h-full z-20">
                    {filteredNodes.map((node) => {
                        const isSelected = selectedNodeId === node.id;
                        const isHovered = hoveredNodeId === node.id;
                        const isConnected = activeConnections.includes(node.id);
                        const isDimmed = activeConnections.length > 0 && !isConnected;

                        // Visual Category Personalities
                        let personalityStyle = "bg-slate-900/80 border-slate-800 text-slate-200";
                        if (node.type === 'question') {
                            personalityStyle = "bg-purple-950/90 border-purple-500/60 text-purple-100 ring-4 ring-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.35)]";
                        } else if (node.type === 'object') {
                            personalityStyle = "bg-blue-950/90 border-blue-500/60 text-blue-100 ring-2 ring-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.3)]";
                        } else if (node.type === 'model') {
                            personalityStyle = "bg-amber-950/90 border-amber-500/60 text-amber-100 ring-2 ring-amber-500/20 shadow-[0_0_25px_rgba(245,158,11,0.3)]";
                        } else if (node.type === 'experiment') {
                            personalityStyle = "bg-emerald-950/90 border-emerald-500/60 text-emerald-100 ring-2 ring-emerald-500/20 shadow-[0_0_25px_rgba(16,185,129,0.3)]";
                        }

                        return (
                            <motion.div
                                key={node.id}
                                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                                className="absolute -translate-x-1/2 -translate-y-1/2"
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [0, (node.x % 2 === 0 ? 1.5 : -1.5), 0]
                                }}
                                transition={{
                                    duration: 6 + (node.x % 4),
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: (node.x + node.y) % 3
                                }}
                            >
                                <button
                                    onClick={() => setSelectedNodeId(node.id)}
                                    onMouseEnter={() => setHoveredNodeId(node.id)}
                                    onMouseLeave={() => setHoveredNodeId(null)}
                                    className={`px-4 py-3 rounded-2xl text-left transition-all duration-500 border cursor-pointer flex items-center gap-3 ${personalityStyle} ${isSelected
                                            ? "scale-125 ring-4 ring-purple-300 border-white z-40 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                                            : isHovered
                                                ? "scale-115 border-white z-30 shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                                                : isDimmed
                                                    ? "opacity-15 scale-90"
                                                    : "opacity-90 hover:opacity-100 z-20"
                                        }`}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-xs md:text-sm font-bold font-sans whitespace-nowrap">
                                            {node.title}
                                        </span>
                                        <span className="text-[10px] font-mono opacity-70 uppercase tracking-wider">
                                            {node.type}
                                        </span>
                                    </div>
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </main>

            {/* FLOATING OVERLAY DRAWER (OCCUPIES ~30-35% SCREEN WIDTH, FLOATS ABOVE GRAPH) */}
            <AnimatePresence>
                {selectedNode && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[450px] md:w-[480px] lg:w-[520px] bg-slate-950/40 backdrop-blur-3xl border-l border-slate-800/40 p-8 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-y-auto"
                    >
                        {/* Overlay Close Header */}
                        <div className="flex items-center justify-between border-b border-slate-800/40 pb-4">
                            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
                                COLLECTED DURING: {selectedNode.collectedDuring}
                            </span>
                            <button
                                onClick={() => setSelectedNodeId(null)}
                                className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all cursor-pointer"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Staggered Progressive Content Reveal */}
                        <div className="space-y-6 py-6">
                            {/* Title */}
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="text-2xl md:text-3xl font-bold text-white font-sans leading-tight"
                            >
                                {selectedNode.title}
                            </motion.h2>

                            {/* Intimate Personal Reflection */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-sm text-purple-200 font-sans italic leading-relaxed"
                            >
                                "{selectedNode.personalReflection}"
                            </motion.div>

                            {/* Observation Story */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="space-y-1 font-sans"
                            >
                                <span className="text-xs font-mono text-slate-400 uppercase block font-semibold">The Discovery</span>
                                <p className="text-sm text-slate-200 leading-relaxed font-light">
                                    {selectedNode.story}
                                </p>
                            </motion.div>

                            {/* What It Quietly Taught Me */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1 font-sans"
                            >
                                <span className="text-xs font-mono text-amber-400 uppercase block font-bold">What It Quietly Taught Me</span>
                                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                                    "{selectedNode.whyIKeptThis}"
                                </p>
                            </motion.div>

                            {/* Years Later This Appeared Again */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1 font-sans"
                            >
                                <span className="text-xs font-mono text-emerald-400 uppercase block font-bold">Years Later This Appeared Again</span>
                                <p className="text-sm text-emerald-200 font-semibold">{selectedNode.yearsLaterAppearedAgain}</p>
                            </motion.div>

                            {/* Related Discoveries */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                                className="space-y-2 pt-2 border-t border-slate-800/40 font-sans"
                            >
                                <span className="text-xs font-mono text-slate-400 uppercase block font-semibold">Related Discoveries:</span>
                                <div className="flex flex-wrap gap-2">
                                    {selectedNode.connections.map((connId) => {
                                        const connNode = KNOWLEDGE_NODES.find(n => n.id === connId);
                                        if (!connNode) return null;
                                        return (
                                            <button
                                                key={connId}
                                                onClick={() => setSelectedNodeId(connId)}
                                                className="px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-purple-950 border border-slate-800 text-xs font-mono text-slate-300 hover:text-purple-300 transition-all cursor-pointer flex items-center gap-1.5"
                                            >
                                                <span>{connNode.title}</span>
                                                <ArrowRight className="w-3 h-3 text-purple-400" />
                                            </button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>

                        {/* Resume Exploration Button */}
                        <div className="pt-4 border-t border-slate-800/40">
                            <button
                                onClick={() => setSelectedNodeId(null)}
                                className="w-full py-3 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-mono uppercase font-bold tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                            >
                                <span>Continue Exploring Map</span>
                                <ArrowRight className="w-4 h-4 text-purple-400" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Footer Statement */}
            <footer className="absolute bottom-0 left-0 right-0 z-20 px-6 py-4 text-center pointer-events-none bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs text-slate-400 font-sans leading-relaxed font-normal">
                    "Curiosity is an interactive map where there is no beginning and no end—only continuous discovery."
                </p>
            </footer>
        </div>
    );
}
