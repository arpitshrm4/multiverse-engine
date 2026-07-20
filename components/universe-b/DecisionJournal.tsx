"use client";

import { motion } from "framer-motion";
import { BookMarked, AlertCircle, CheckCircle2, Quote, Lightbulb } from "lucide-react";

interface LogEntry {
    id: string;
    num: string;
    title: string;
    situation: string;
    hardestDecision: string;
    productOutcome: string;
}

const LOGS: LogEntry[] = [
    {
        id: "log-01",
        num: "LOG 01",
        title: "Removing a Highly-Requested Feature to Protect Usability",
        situation: "Stakeholders wanted to expose 15 advanced configuration toggles directly on the primary data entry dashboard.",
        hardestDecision: "Convinced product leads to remove 10 non-essential toggles into smart background defaults despite pushback.",
        productOutcome: "Operator onboarding time dropped by 70%, and user data entry error rates plummeted during high-volume shifts."
    },
    {
        id: "log-02",
        num: "LOG 02",
        title: "Navigating Stakeholder Disagreement on Workflow Architecture",
        situation: "Product management wanted a complex custom drag-and-drop canvas while engineering favored rigid web forms.",
        hardestDecision: "Led a 2-day joint discovery sprint to test real operator workflows, proving a hybrid drawer model was fastest for both users and devs.",
        productOutcome: "Saved 3 months of frontend development time while delivering an intuitive user experience that operators loved."
    },
    {
        id: "log-03",
        num: "LOG 03",
        title: "Trading Speed for Scalability in Design Tokens",
        situation: "Extreme pressure to ship custom UI visual hacks for an upcoming enterprise client deadline.",
        hardestDecision: "Convinced executive leadership to invest 2 weeks into foundational semantic design tokens before launching.",
        productOutcome: "Enabled 12 subsequent product launches to ship 40% faster with zero accumulated visual debt."
    }
];

export default function DecisionJournal() {
    return (
        <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto w-full border-t border-slate-800/80">
            <div className="flex flex-col gap-12">
                {/* Header */}
                <div className="flex flex-col gap-3 max-w-3xl">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
                        <BookMarked className="w-4 h-4" />
                        <span>Section 04 • Decision Journal</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
                        Lessons From Difficult Decisions
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Real-world moments of product judgment, stakeholder alignment, and trade-offs made under pressure.
                    </p>
                </div>

                {/* Journal Logs demonstrating Judgment */}
                <div className="flex flex-col gap-8">
                    {LOGS.map((log) => (
                        <motion.div
                            key={log.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-8 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors shadow-xl flex flex-col gap-6"
                        >
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-xs font-bold text-cyan-400 px-3 py-1 rounded bg-cyan-950 border border-cyan-500/30">
                                        {log.num}
                                    </span>
                                    <h3 className="text-xl font-bold text-white font-sans">
                                        {log.title}
                                    </h3>
                                </div>
                                <span className="text-xs font-mono text-slate-500 uppercase">Product Judgment</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm">
                                {/* Situation */}
                                <div className="p-5 rounded bg-slate-950/60 border border-amber-500/20 flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                                        <AlertCircle className="w-4 h-4" /> The Product Challenge
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">{log.situation}</p>
                                </div>

                                {/* Hardest Decision */}
                                <div className="p-5 rounded bg-slate-950/60 border border-cyan-500/20 flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                                        <Lightbulb className="w-4 h-4" /> The Hardest Decision
                                    </div>
                                    <p className="text-slate-200 font-medium leading-relaxed">{log.hardestDecision}</p>
                                </div>

                                {/* Product Outcome */}
                                <div className="p-5 rounded bg-slate-950/60 border border-emerald-500/20 flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                                        <CheckCircle2 className="w-4 h-4" /> What Changed
                                    </div>
                                    <p className="text-emerald-200 font-semibold leading-relaxed">{log.productOutcome}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Humanize Moment: Highly Readable Reflection */}
                <div className="p-6 rounded bg-slate-900/90 border border-slate-800 text-base md:text-lg text-slate-100 font-sans font-normal flex items-start gap-4 shadow-lg">
                    <Quote className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                        "One thing I learned... good leadership is knowing when to hold the bar on user experience quality and when to compromise for business velocity."
                    </p>
                </div>
            </div>
        </section>
    );
}
