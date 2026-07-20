"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, ChevronRight, X, Layers, Users, CheckCircle, Award, Lightbulb, AlertTriangle } from "lucide-react";

interface Mission {
    id: string;
    code: string;
    title: string;
    businessProblem: string; // Q1: Business problem
    whyDifficult: string; // Q2: Why difficult
    myRole: string; // Q3: My role
    hardestDecision: string; // Q4: Hardest decision
    whatChanged: string; // Q5: What changed
    overview: string;
    constraints: string[];
    keyDecisions: string[];
    tradeOffs: string;
    leadershipReflection: string;
}

const MISSIONS: Mission[] = [
    {
        id: "mission-01",
        code: "MISSION 01",
        title: "Vahana No-Code Enterprise Platform",
        businessProblem: "Financial institutions faced 6-month developer backlogs for internal credit and compliance tools.",
        whyDifficult: "Non-technical product managers needed to design intricate multi-step banking logic without writing code or introducing security flaws.",
        myRole: "Lead Product Designer (Led team of 15 designers & engineers)",
        hardestDecision: "Restricted custom CSS overrides to enforce strict accessibility, security, and component consistency by default.",
        whatChanged: "Accelerated application creation velocity by 65%, enabling product leads to build and deploy 50+ banking apps in weeks.",
        overview: "Vahana is an enterprise no-code platform enabling non-technical leads to construct complex loan originations, fraud engines, and compliance portals visually.",
        constraints: [
            "Legacy core banking API integration boundaries",
            "Zero tolerance for data loss during multi-step state transitions",
            "Strict WCAG 2.1 AA accessibility enforcement across generated apps"
        ],
        keyDecisions: [
            "Decoupled data schema configuration from UI component rendering",
            "Built a visual logic node graph with real-time validation feedback",
            "Created modular design tokens that automatically enforce accessibility across generated portals"
        ],
        tradeOffs: "We deliberately restricted arbitrary CSS styling overrides to enforce strict accessibility, brand consistency, and security across 50+ deployed applications.",
        leadershipReflection: "True product leadership is not about building more UI controls—it is about designing systemic abstractions that empower others to build with zero friction."
    },
    {
        id: "mission-02",
        code: "MISSION 02",
        title: "Fintech Decision Engine & Ledger Architecture",
        businessProblem: "Treasury teams struggled to reconcile thousands of daily ledger discrepancies under tight bank cutoff deadlines.",
        whyDifficult: "Treasury operators suffered from decision fatigue and error risk when manually auditing 24 concurrent data columns per discrepancy.",
        myRole: "Principal Systems Designer (Led core product & engineering alignment)",
        hardestDecision: "Sacrificed visual minimalism for high data density, providing operators immediate access to 24 data points without scroll latency.",
        whatChanged: "Cut ledger reconciliation time by 50% and eliminated human settlement override errors across $100M+ in daily transaction volume.",
        overview: "A mission-critical financial ledger workspace designed for treasury leads to monitor, reconcile, and approve high-value daily settlements.",
        constraints: [
            "Sub-second latency requirements for live ledger data streams",
            "Immutable compliance audit log recording for every manual operator override",
            "High-density data grid displaying 24 concurrent financial data columns"
        ],
        keyDecisions: [
            "Grouped recurring discrepancies into automated pattern clusters for batch processing",
            "Implemented dual-confirmation safety latches for transactions exceeding $1M",
            "Designed a high-contrast dark grid optimized for multi-monitor workstations"
        ],
        tradeOffs: "We sacrificed visual minimalism in favor of data density, giving power users immediate access to 24 critical columns without pagination delays.",
        leadershipReflection: "Leading design in high-stakes domains requires designing for operator confidence and cognitive clarity under extreme time pressure."
    },
    {
        id: "mission-03",
        code: "MISSION 03",
        title: "Multi-Brand Scalable Design System Engine",
        businessProblem: "Siloed engineering squads were constantly recreating duplicate UI components across 12 distinct product lines.",
        whyDifficult: "The system needed to support 4 distinct sub-brand identities while maintaining a single core codebase for web, iOS, and Android.",
        myRole: "Design System Director (Led 20 cross-functional engineers & designers)",
        hardestDecision: "Enforced a 2-month feature freeze on legacy components to refactor underlying semantic tokens before scaling.",
        whatChanged: "Saved 40% in frontend development time and achieved 100% brand consistency and WCAG AA compliance across all 12 products.",
        overview: "A multi-brand, token-driven design system serving web, iOS, Android, and embedded enterprise portals across distinct sub-brands.",
        constraints: [
            "Must support 4 distinct brand theme overrides without code duplication",
            "Strict WCAG 2.1 AA accessibility compliance across all color contrast pairings",
            "Seamless bi-directional sync between Figma tokens and React/React Native codebases"
        ],
        keyDecisions: [
            "Established automated token CI/CD pipelines from Figma variables to NPM packages",
            "Built interactive documentation containing live React code playgrounds and accessibility guidelines",
            "Created clear governance channels for product teams to contribute new components back to core"
        ],
        tradeOffs: "Initial rollout required a 2-month feature freeze on legacy components to refactor underlying tokens, but unlocked exponential speed gains post-launch.",
        leadershipReflection: "A design system is not a UI library—it is an operational agreement between design and engineering that aligns speed with quality."
    }
];

export default function MissionControl() {
    const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

    return (
        <section id="missions" className="py-24 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto w-full border-t border-slate-800/80">
            <div className="flex flex-col gap-12">
                {/* Header */}
                <div className="flex flex-col gap-3 max-w-3xl">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
                        <Compass className="w-4 h-4" />
                        <span>Section 03 • Missions & Leadership Stories</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
                        Active Missions
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Real-world product stories detailing business problems, leadership decisions, and measurable outcomes.
                    </p>
                </div>

                {/* Mission Cards answering 5 core leadership questions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {MISSIONS.map((mission) => (
                        <motion.div
                            key={mission.id}
                            whileHover={{ y: -4 }}
                            className="p-8 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between gap-6 shadow-xl relative group"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30">
                                        {mission.code}
                                    </span>
                                    <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                                        Leadership Story
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                                        {mission.title}
                                    </h3>
                                    <p className="text-slate-300 text-xs font-sans leading-relaxed mb-3">
                                        <strong className="text-white">Business Problem:</strong> {mission.businessProblem}
                                    </p>
                                </div>

                                {/* 5 Questions Quick Summary */}
                                <div className="flex flex-col gap-2 pt-3 text-xs font-sans border-t border-slate-800 space-y-1">
                                    <div>
                                        <span className="text-slate-500 font-mono text-[10px] block">MY ROLE</span>
                                        <span className="text-slate-200 font-semibold">{mission.myRole}</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 font-mono text-[10px] block">HARDEST DECISION</span>
                                        <span className="text-slate-300 italic">{mission.hardestDecision}</span>
                                    </div>
                                    <div className="pt-1">
                                        <span className="text-slate-500 font-mono text-[10px] block">WHAT CHANGED</span>
                                        <span className="text-emerald-400 font-bold">{mission.whatChanged}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedMission(mission)}
                                className="w-full py-3 rounded bg-slate-800 hover:bg-cyan-950 hover:border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-wider font-semibold border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span>Read Full Leadership Story</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Expanded Narrative Modal */}
            <AnimatePresence>
                {selectedMission && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-slate-950 border border-cyan-500/40 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl relative text-slate-200 font-sans"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedMission(null)}
                                className="absolute top-6 right-6 p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Modal Header */}
                            <div className="flex flex-col gap-3 pb-6 border-b border-slate-800">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-xs font-bold text-cyan-400 px-3 py-1 rounded bg-cyan-950 border border-cyan-500/40">
                                        {selectedMission.code}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    {selectedMission.title}
                                </h2>
                                <p className="text-cyan-300 font-mono text-sm">
                                    {selectedMission.myRole}
                                </p>
                            </div>

                            {/* Leadership Case Study Sections */}
                            <div className="flex flex-col gap-8 py-8">
                                <div>
                                    <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Layers className="w-4 h-4" /> Mission Overview
                                    </h4>
                                    <p className="text-slate-300 text-base leading-relaxed">{selectedMission.overview}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-5 rounded bg-slate-900/60 border border-slate-800">
                                        <h4 className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4" /> Business Problem
                                        </h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">{selectedMission.businessProblem}</p>
                                    </div>
                                    <div className="p-5 rounded bg-slate-900/60 border border-slate-800">
                                        <h4 className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">Why It Was Difficult</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">{selectedMission.whyDifficult}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" /> Key Product Decisions
                                    </h4>
                                    <div className="space-y-3">
                                        {selectedMission.keyDecisions.map((decision, i) => (
                                            <div key={i} className="p-4 rounded bg-slate-900/40 border border-slate-800 text-sm text-slate-200 font-sans flex items-start gap-3">
                                                <span className="font-mono text-xs text-cyan-400 font-bold px-2 py-0.5 bg-cyan-950 rounded">D0{i + 1}</span>
                                                <span>{decision}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">Trade-offs Accepted</h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">{selectedMission.tradeOffs}</p>
                                </div>

                                <div className="p-6 rounded bg-emerald-950/30 border border-emerald-500/30">
                                    <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Award className="w-4 h-4" /> What Changed (Measurable Outcome)
                                    </h4>
                                    <p className="text-emerald-200 text-base font-bold">{selectedMission.whatChanged}</p>
                                </div>

                                <div className="p-6 rounded bg-slate-900/80 border border-slate-800">
                                    <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Lightbulb className="w-4 h-4 text-cyan-400" /> Leadership Reflection
                                    </h4>
                                    <p className="text-white text-base italic font-serif leading-relaxed">"{selectedMission.leadershipReflection}"</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
