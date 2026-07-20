"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, CheckCircle2, HeartHandshake, Quote } from "lucide-react";

interface OperatingPrinciple {
    id: string;
    title: string;
    description: string;
    evidence: string;
    decisionNote: string;
    connections: string[];
}

const PRINCIPLES: OperatingPrinciple[] = [
    {
        id: "p1",
        title: "Understand before designing",
        description: "Rigorously map user workflows, domain rules, and business objectives before opening Figma.",
        evidence: "Guided the Fintech Ledger product team to uncover 40+ compliance edge cases before prototyping.",
        decisionNote: "Why: Designing before understanding creates elegant interfaces for the wrong problem.",
        connections: ["p2", "p4"]
    },
    {
        id: "p2",
        title: "Systems support people, not the other way around",
        description: "Build products that empower human decision-making rather than forcing people to adapt to software.",
        evidence: "Guided Vahana No-Code to turn complex data models into intuitive visual workflows for bank leads.",
        decisionNote: "Why: Software should bear the cognitive load, not the human operator.",
        connections: ["p1", "p3"]
    },
    {
        id: "p3",
        title: "Every constraint reveals a better solution",
        description: "Treat technical limits, regulatory boundaries, and business goals as catalysts for clarity.",
        evidence: "Used strict WCAG AA rules to build a design foundation adopted across 12 production products.",
        decisionNote: "Why: Constraints force teams to eliminate noise and focus on what truly matters.",
        connections: ["p2", "p5"]
    },
    {
        id: "p4",
        title: "Design succeeds when teams share understanding",
        description: "Create shared visual frameworks that align product managers, engineers, and stakeholders early.",
        evidence: "Established transparent design reviews that reduced development rework across 20+ product squads.",
        decisionNote: "Why: A beautiful mock-up fails if engineering and product don't own the vision.",
        connections: ["p1", "p6"]
    },
    {
        id: "p5",
        title: "Simplicity requires difficult decisions",
        description: "Achieving true simplicity means having the courage to remove features and distill workflows.",
        evidence: "Streamlined a 12-step loan origination process into 3 clear decision stages for bank operators.",
        decisionNote: "Why: Adding features is easy; cutting to the core requires product conviction.",
        connections: ["p3", "p6"]
    },
    {
        id: "p6",
        title: "Great products scale because the thinking scales",
        description: "Architect design foundations and governance models that empower teams to build at velocity.",
        evidence: "Built semantic token systems that enabled 50+ enterprise apps to be built consistently.",
        decisionNote: "Why: Scaling products is impossible without scaling how teams think and collaborate.",
        connections: ["p4", "p5"]
    }
];

export default function BuilderPhilosophy() {
    const [selectedId, setSelectedId] = useState<string>("p1");
    const activePrinciple = PRINCIPLES.find(p => p.id === selectedId) || PRINCIPLES[0];

    return (
        <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto w-full border-t border-slate-800/80">
            <div className="flex flex-col gap-12">
                {/* Header */}
                <div className="flex flex-col gap-3 max-w-3xl">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
                        <Compass className="w-4 h-4" />
                        <span>Section 01 • How I Make Design Decisions</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
                        How I Make Design Decisions
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Principles shaped through real product leadership—and how each one guided an actual enterprise product.
                    </p>
                </div>

                {/* Interactive Node Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Node Cards */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {PRINCIPLES.map((principle, index) => {
                            const isSelected = selectedId === principle.id;
                            const isConnected = activePrinciple.connections.includes(principle.id);

                            return (
                                <motion.button
                                    key={principle.id}
                                    onClick={() => setSelectedId(principle.id)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`p-6 rounded-lg text-left transition-all duration-300 relative border cursor-pointer ${isSelected
                                            ? "bg-cyan-950/40 border-cyan-500/80 shadow-[0_0_25px_rgba(56,189,248,0.2)]"
                                            : isConnected
                                                ? "bg-slate-900/90 border-cyan-500/40 shadow-sm"
                                                : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`font-mono text-xs px-2 py-0.5 rounded ${isSelected
                                                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                                                : "bg-slate-800 text-slate-400"
                                            }`}>
                                            0{index + 1}
                                        </span>
                                        {isConnected && !isSelected && (
                                            <span className="text-[10px] font-mono text-cyan-400/80 uppercase">Linked Principle</span>
                                        )}
                                    </div>
                                    <h3 className={`font-sans font-bold text-base mb-2 ${isSelected ? "text-cyan-300" : "text-white"}`}>
                                        {principle.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs leading-relaxed font-sans mb-3 line-clamp-2">
                                        {principle.description}
                                    </p>

                                    {/* Real-World Guidance Sentence */}
                                    <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 text-[11px] text-cyan-300/90 font-mono">
                                        <span className="text-cyan-400 font-bold block mb-0.5">PRODUCT EVIDENCE:</span>
                                        <p className="line-clamp-2">{principle.evidence}</p>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Detailed Leadership Panel */}
                    <div className="lg:col-span-5 p-8 rounded-lg bg-slate-900/90 border border-cyan-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest border-b border-slate-800 pb-3">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Principle & Decision Rationale</span>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2">
                                    {activePrinciple.title}
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-sans">
                                    {activePrinciple.description}
                                </p>

                                {/* Applied Product Evidence */}
                                <div className="p-4 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 text-xs font-mono leading-relaxed mb-4">
                                    <div className="flex items-center gap-1.5 text-cyan-400 font-bold uppercase mb-1">
                                        <HeartHandshake className="w-4 h-4" /> Applied Product Evidence:
                                    </div>
                                    <p>{activePrinciple.evidence}</p>
                                </div>

                                {/* Leadership Decision Rationale */}
                                <div className="p-4 rounded bg-slate-950/80 border border-slate-800 text-slate-300 text-xs font-mono leading-relaxed">
                                    <div className="text-amber-400 font-bold uppercase mb-1">Why This Decision Mattered:</div>
                                    <p>{activePrinciple.decisionNote}</p>
                                </div>
                            </div>
                        </div>

                        {/* Humanize Moment: Highly Readable Reflection */}
                        <div className="mt-8 pt-4 border-t border-slate-800 text-sm md:text-base text-slate-200 font-sans flex items-start gap-3 bg-slate-950/80 p-4 rounded border border-slate-800">
                            <Quote className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                            <p className="leading-relaxed font-normal">
                                "Looking back... the hardest part of product leadership isn't crafting the interface—it's building shared conviction across cross-functional teams."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
