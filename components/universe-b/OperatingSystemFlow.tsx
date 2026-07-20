"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, ArrowRight, ShieldCheck, Users, Lightbulb, Quote } from "lucide-react";

interface Step {
    num: string;
    name: string;
    uncertaintyRemoved: string;
    whoAligned: string;
    decisionEnabled: string;
    description: string;
}

const OS_STEPS: Step[] = [
    {
        num: "01",
        name: "Framing the Problem",
        uncertaintyRemoved: "Separates underlying business bottlenecks from surface feature requests.",
        whoAligned: "Product Managers, Design Leads & Business Leadership.",
        decisionEnabled: "Establishes a shared definition of success and clear project scope.",
        description: "Aligning stakeholders around core business goals before jumping to solutions."
    },
    {
        num: "02",
        name: "Uncovering Domain Constraints",
        uncertaintyRemoved: "Exposes hidden compliance rules, technical limits, and regulatory boundaries.",
        whoAligned: "Domain Experts, Compliance Officers & Engineering Leads.",
        decisionEnabled: "Prevents costly refactoring during late-stage product development.",
        description: "Extracting real-world operational rules early so the design respects true boundaries."
    },
    {
        num: "03",
        name: "Auditing User Mental Models",
        uncertaintyRemoved: "Reveals user cognitive load, daily task habits, and key friction points.",
        whoAligned: "Product Designers & End-User Advocates.",
        decisionEnabled: "Dictates information hierarchy and interaction density for high-volume workflows.",
        description: "Observing real user habits to build intuitive mental models rather than forcing new behaviors."
    },
    {
        num: "04",
        name: "Mapping Decision Architecture",
        uncertaintyRemoved: "Clarifies state transitions, user permission roles, and data relationships.",
        whoAligned: "Frontend Engineers & Product Designers.",
        decisionEnabled: "Eliminates edge-case gaps before high-fidelity visual design begins.",
        description: "Structuring user decisions and data flow to create seamless, predictable experiences."
    },
    {
        num: "05",
        name: "Exploring Structural Paths",
        uncertaintyRemoved: "Evaluates alternative user journeys against technical feasibility and user speed.",
        whoAligned: "Design Team & Lead Engineers.",
        decisionEnabled: "Selects the simplest workflow structure that satisfies all constraints.",
        description: "Testing multiple user flow options to find the most direct path to value."
    },
    {
        num: "06",
        name: "Cross-Functional Validation",
        uncertaintyRemoved: "Stress-tests prototypes against real-world scenarios and accessibility standards.",
        whoAligned: "QA Leads, Accessibility Audits & Product Squads.",
        decisionEnabled: "Validates team readiness to move into production engineering confidently.",
        description: "Co-creating with engineering and QA to ensure feasibility and inclusive design."
    },
    {
        num: "07",
        name: "Refining Interface & Clarity",
        uncertaintyRemoved: "Removes visual clutter, sharpens typography hierarchy, and polishes states.",
        whoAligned: "Product Designers & Frontend Engineers.",
        decisionEnabled: "Ensures user confidence and error prevention during critical tasks.",
        description: "Distilling the visual layout so users can focus on making good decisions quickly."
    },
    {
        num: "08",
        name: "Enabling Team Scale & Governance",
        uncertaintyRemoved: "Eliminates design drift and duplicate component building across teams.",
        whoAligned: "Multi-Product Squads & System Engineers.",
        decisionEnabled: "Empowers cross-functional teams to launch new features rapidly with zero friction.",
        description: "Packaging components and guidelines so every team can build with consistent quality."
    }
];

export default function OperatingSystemFlow() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const step = OS_STEPS[activeStep];

    return (
        <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto w-full border-t border-slate-800/80">
            <div className="flex flex-col gap-12">
                {/* Header */}
                <div className="flex flex-col gap-3 max-w-3xl">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
                        <Activity className="w-4 h-4" />
                        <span>Section 02 • From Ambiguity to Clarity</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
                        From Ambiguity to Clarity
                    </h2>
                    <p className="text-slate-400 text-lg">
                        How I lead cross-functional teams through complex problems to make confident product decisions.
                    </p>
                </div>

                {/* Interactive Step Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    {OS_STEPS.map((s, index) => {
                        const isActive = activeStep === index;
                        return (
                            <button
                                key={s.num}
                                onClick={() => setActiveStep(index)}
                                className={`p-3 rounded flex flex-col items-start transition-all duration-300 text-left border cursor-pointer ${isActive
                                        ? "bg-cyan-950/60 border-cyan-500/80 text-white shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                                        : "bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-300"
                                    }`}
                            >
                                <span className={`font-mono text-xs font-bold ${isActive ? "text-cyan-400" : "text-slate-500"}`}>
                                    {s.num}
                                </span>
                                <span className="font-sans font-semibold text-xs mt-1 line-clamp-1">
                                    {s.name}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Stage Detail Card */}
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 rounded-lg bg-slate-900/90 border border-cyan-500/30 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                >
                    <div className="md:col-span-8 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono text-sm font-bold border border-cyan-500/30">
                                Stage {step.num} of 08
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                {step.name}
                            </h3>
                        </div>

                        <p className="text-slate-300 text-base leading-relaxed font-sans">
                            {step.description}
                        </p>

                        {/* 3 Leadership Answers */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-sans text-xs">
                            <div className="p-4 rounded bg-slate-950/80 border border-slate-800 flex flex-col gap-1.5">
                                <div className="flex items-center gap-1.5 text-cyan-400 font-mono font-bold uppercase text-[11px]">
                                    <ShieldCheck className="w-3.5 h-3.5" /> Uncertainty Removed
                                </div>
                                <p className="text-slate-300 leading-relaxed">{step.uncertaintyRemoved}</p>
                            </div>

                            <div className="p-4 rounded bg-slate-950/80 border border-slate-800 flex flex-col gap-1.5">
                                <div className="flex items-center gap-1.5 text-cyan-400 font-mono font-bold uppercase text-[11px]">
                                    <Users className="w-3.5 h-3.5" /> Who Aligns
                                </div>
                                <p className="text-slate-300 leading-relaxed">{step.whoAligned}</p>
                            </div>

                            <div className="p-4 rounded bg-slate-950/80 border border-slate-800 flex flex-col gap-1.5">
                                <div className="flex items-center gap-1.5 text-cyan-400 font-mono font-bold uppercase text-[11px]">
                                    <Lightbulb className="w-3.5 h-3.5" /> Decision Enabled
                                </div>
                                <p className="text-slate-200 font-medium leading-relaxed">{step.decisionEnabled}</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col gap-6 justify-between bg-slate-950/80 p-6 rounded border border-slate-800 h-full">
                        <div className="flex flex-col gap-3">
                            <div className="text-xs font-mono text-slate-400 uppercase">Pipeline Navigation:</div>
                            <div className="flex gap-2">
                                <button
                                    disabled={activeStep === 0}
                                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                                    className="flex-1 py-2 rounded bg-slate-800 disabled:opacity-40 disabled:pointer-events-none text-slate-200 text-xs font-mono hover:bg-slate-700 transition-colors"
                                >
                                    ← Previous
                                </button>
                                <button
                                    disabled={activeStep === OS_STEPS.length - 1}
                                    onClick={() => setActiveStep(prev => Math.min(OS_STEPS.length - 1, prev + 1))}
                                    className="flex-1 py-2 rounded bg-cyan-950 border border-cyan-500/40 disabled:opacity-40 disabled:pointer-events-none text-cyan-300 text-xs font-mono hover:bg-cyan-900 transition-colors flex items-center justify-center gap-1"
                                >
                                    Next <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>

                        {/* Highly Readable Reflection */}
                        <div className="pt-4 border-t border-slate-800 text-sm md:text-base text-slate-200 font-sans flex items-start gap-2">
                            <Quote className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                            <p className="leading-relaxed font-normal">
                                "The real breakthrough came when I realized design leadership isn't about having all the answers—it's about helping everyone see the same problem clearly."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
