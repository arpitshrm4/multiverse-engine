"use client";

import { motion } from "framer-motion";
import { useUniverse } from "@/context/UniverseContext";
import { BarChart3, ArrowRight, ShieldCheck, Users, Clock, LayoutGrid, Sparkles } from "lucide-react";

export default function ImpactMetrics() {
    const { setUniverse } = useUniverse();

    return (
        <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto w-full border-t border-slate-800/80">
            <div className="flex flex-col gap-16">
                {/* Header - Renamed Section */}
                <div className="flex flex-col gap-3 max-w-3xl">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
                        <BarChart3 className="w-4 h-4" />
                        <span>Section 05 • Impact Beyond the Interface</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
                        Impact Beyond the Interface
                    </h2>
                    <p className="text-slate-400 text-lg">
                        What changed because of these decisions—story first, numbers supporting.
                    </p>
                </div>

                {/* Narrative First + Supporting Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Story 1 */}
                    <div className="p-8 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between gap-6">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <LayoutGrid className="w-6 h-6 text-cyan-400 shrink-0" />
                                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Product Enablement</span>
                            </div>
                            <p className="text-slate-200 font-sans text-base leading-relaxed">
                                Created a design foundation that enabled non-technical teams to build and deploy complex enterprise banking applications consistently.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800 flex items-baseline gap-3">
                            <span className="text-5xl font-bold font-mono text-white">50+</span>
                            <span className="text-xs text-slate-400 font-mono uppercase">Applications Built</span>
                        </div>
                    </div>

                    {/* Story 2 */}
                    <div className="p-8 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between gap-6">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <Clock className="w-6 h-6 text-cyan-400 shrink-0" />
                                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Cross-Team Velocity</span>
                            </div>
                            <p className="text-slate-200 font-sans text-base leading-relaxed">
                                Architected a semantic design token system that eliminated duplicate work and accelerated cross-team shipping speed across products.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800 flex items-baseline gap-3">
                            <span className="text-5xl font-bold font-mono text-white">40%</span>
                            <span className="text-xs text-slate-400 font-mono uppercase">Faster Time-to-Market</span>
                        </div>
                    </div>

                    {/* Story 3 */}
                    <div className="p-8 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between gap-6">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <Users className="w-6 h-6 text-cyan-400 shrink-0" />
                                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Design Leadership</span>
                            </div>
                            <p className="text-slate-200 font-sans text-base leading-relaxed">
                                Fostered a collaborative design culture and mentored designers across cross-functional enterprise product squads.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800 flex items-baseline gap-3">
                            <span className="text-5xl font-bold font-mono text-white">15+</span>
                            <span className="text-xs text-slate-400 font-mono uppercase">Designers & System Leads Mentored</span>
                        </div>
                    </div>

                    {/* Story 4 */}
                    <div className="p-8 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between gap-6">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
                                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">Inclusive Experience</span>
                            </div>
                            <p className="text-slate-200 font-sans text-base leading-relaxed">
                                Embedded accessibility guidelines into foundational design tokens, ensuring every customer enjoys an inclusive digital product.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800 flex items-baseline gap-3">
                            <span className="text-5xl font-bold font-mono text-white">100%</span>
                            <span className="text-xs text-slate-400 font-mono uppercase">WCAG 2.1 AA Compliance</span>
                        </div>
                    </div>
                </div>

                {/* Transition Section to Thinker Perspective (Dimension C) */}
                <div className="mt-12 p-10 md:p-16 rounded-lg bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 flex flex-col items-center gap-8 text-center max-w-4xl mx-auto w-full shadow-2xl">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4" /> Next World • Dimension C
                        </span>
                        <h3 className="text-2xl md:text-4xl font-bold text-white font-sans leading-tight">
                            "Everything you've seen—how I make decisions, align teams, and solve complex problems—is rooted in deeper principles and mental models."
                        </h3>
                        <p className="text-slate-400 text-sm font-sans">
                            The next perspective explores why I think this way and the mental frameworks behind my decisions.
                        </p>
                    </div>

                    <button
                        onClick={() => setUniverse('C')}
                        className="border border-cyan-400 bg-cyan-950/70 hover:bg-cyan-900 transition-all duration-300 flex items-center gap-3 px-8 py-4 rounded text-cyan-300 font-mono font-bold text-sm uppercase tracking-widest cursor-pointer shadow-[0_0_25px_rgba(56,189,248,0.25)] group"
                    >
                        <span>Explore Thinker Perspective (Dimension C)</span>
                        <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
