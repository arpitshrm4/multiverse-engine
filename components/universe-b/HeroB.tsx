"use client";

import { motion } from "framer-motion";
import { Users, Compass, Sparkles } from "lucide-react";

export default function HeroB() {
    return (
        <section className="pt-32 pb-20 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8 max-w-5xl"
            >
                {/* Badge Header */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase w-fit shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Builder Perspective • Product Design Leadership</span>
                </div>

                {/* Product Design Leader Positioning Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white leading-[1.1]">
                    I simplify complexity for people, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                        help teams make better decisions
                    </span>, and lead products that balance user needs with business impact.
                </h1>

                {/* Introductory Paragraph */}
                <p className="text-lg md:text-2xl text-slate-300 font-sans leading-relaxed max-w-3xl font-light">
                    Over a decade of leading product design across enterprise platforms, fintech infrastructure, and multi-brand design systems—bringing clarity to ambiguity and aligning teams around human outcomes.
                </p>

                {/* Leadership Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-3xl">
                    <div className="p-4 rounded bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                        <Compass className="w-5 h-5 text-cyan-400 shrink-0" />
                        <div>
                            <div className="text-xs font-mono text-slate-400 uppercase">Product Strategy</div>
                            <div className="text-sm font-semibold text-white">Balancing Users & Business</div>
                        </div>
                    </div>
                    <div className="p-4 rounded bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                        <Users className="w-5 h-5 text-cyan-400 shrink-0" />
                        <div>
                            <div className="text-xs font-mono text-slate-400 uppercase">Cross-Functional Alignment</div>
                            <div className="text-sm font-semibold text-white">Engineering & Product Partner</div>
                        </div>
                    </div>
                    <div className="p-4 rounded bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                        <div>
                            <div className="text-xs font-mono text-slate-400 uppercase">Team Enablement</div>
                            <div className="text-sm font-semibold text-white">Design Maturity & Scale</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
