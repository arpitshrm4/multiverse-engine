"use client";

import React, { useState } from "react";
import { 
    BookOpen, 
    Briefcase, 
    Target, 
    Layers, 
    Users, 
    TrendingUp, 
    Calendar, 
    CheckCircle, 
    ArrowRight, 
    Lightbulb, 
    Compass, 
    ShieldAlert, 
    FileText, 
    Activity, 
    MessageSquare,
    AlertCircle,
    Info,
    GitBranch,
    Settings
} from "lucide-react";

// List of all 19 sections for the sidebar navigation
const sectionsList = [
    { id: "hero", label: "01. Hero Section", icon: BookOpen },
    { id: "summary", label: "02. Executive Summary", icon: FileText },
    { id: "context", label: "03. Project Context", icon: Briefcase },
    { id: "problem", label: "04. Problem Statement", icon: AlertCircle },
    { id: "vision", label: "05. Product Vision", icon: Target },
    { id: "role", label: "06. My Role & Ownership", icon: ShieldAlert },
    { id: "collaboration", label: "07. Collaboration Model", icon: Users },
    { id: "metrics", label: "08. Success Metrics", icon: TrendingUp },
    { id: "timeline", label: "09. Timeline", icon: Calendar },
    { id: "decision-1", label: "10. Decision 1: Search vs Browse", icon: GitBranch },
    { id: "decision-2", label: "11. Decision 2: 100x Scale", icon: Layers },
    { id: "decision-3", label: "12. Decision 3: Delaying DS", icon: Settings },
    { id: "decision-4", label: "13. Decision 4: Discovery FAB", icon: Compass },
    { id: "decision-5", label: "14. Decision 5: Ambiguity", icon: Activity },
    { id: "outcomes", label: "15. Outcomes", icon: CheckCircle },
    { id: "lessons", label: "16. Lessons Learned", icon: Lightbulb },
    { id: "differently", label: "17. What I'd Do Differently", icon: ArrowRight },
    { id: "reflection", label: "18. Leadership Reflection", icon: MessageSquare },
    { id: "closing", label: "19. Closing Summary", icon: Info },
];

export default function UniverseCPage() {
    const [activeSection, setActiveSection] = useState("hero");

    console.log("Rendering UniverseCPage!");

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="min-h-screen bg-[#070708] text-[#e4e4e7] flex font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
            {/* Left Sidebar Table of Contents - Sticky */}
            <aside className="hidden lg:flex flex-col w-80 h-screen sticky top-0 bg-[#0c0c0e] border-r border-[#1f1f23] p-6 justify-between shrink-0 overflow-y-auto">
                <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] font-semibold">
                            Dimension C
                        </span>
                        <h2 className="text-lg font-serif italic text-white/90">
                            Design Leadership
                        </h2>
                    </div>
                    <div className="w-full h-px bg-[#1f1f23]" />
                    <nav className="space-y-1">
                        {sectionsList.map((sec) => {
                            const Icon = sec.icon;
                            const isActive = activeSection === sec.id;
                            return (
                                <button
                                    key={sec.id}
                                    onClick={() => scrollToSection(sec.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-mono transition-all text-left ${
                                        isActive
                                            ? "bg-[#18181b] text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
                                            : "text-zinc-400 hover:text-zinc-200 hover:bg-[#18181b]/50"
                                    }`}
                                >
                                    <Icon size={14} className={isActive ? "text-emerald-400" : "text-zinc-500"} />
                                    <span>{sec.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
                <div className="pt-6 border-t border-[#1f1f23]">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                        Story Mode Active
                    </span>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-24">
                
                {/* 01. Hero Section */}
                <section id="hero" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 01
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Business Foundation</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif text-white font-normal tracking-tight leading-tight">
                            Hero Section
                        </h1>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Introduce the strategic importance of the product. Set the business context, company scale, and the multi-million dollar business outcome that was at stake.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Executives and hiring partners will drop off if the scale is too small or generic. Framing the business stake early signals design maturity.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What is the core product value proposition?</li>
                                    <li>What was the scale of the user base/market size?</li>
                                    <li>What business metric was directly tied to the success of this redesign?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    A clear hook establishing the project as a major initiative impacting business revenue.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> High-impact hero image representing a conceptual dashboard, network map, or metric change visualization. Avoid plain UI screens; focus on data density and system context.
                        </div>
                    </div>
                </section>

                {/* 02. Executive Summary */}
                <section id="summary" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 02
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• TL;DR for Directors</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Executive Summary
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Provide a complete summary of the narrative. Summarize the starting crisis, the core decisions made, the final state, and metrics.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Hiring managers spend less than 30 seconds scanning. The executive summary is your elevator pitch.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What was the legacy problem and why was it unsustainable?</li>
                                    <li>What were the core trade-offs made?</li>
                                    <li>What is the ultimate business and organizational growth?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    A structured summary that convinces the reader to continue reading the case study.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> High-level system topology map or comparison dashboard showcasing the initial vs final state metrics.
                        </div>
                    </div>
                </section>

                {/* 03. Project Context */}
                <section id="context" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 03
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Real World Landscape</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Project Context
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Outline the industry sector, legacy code/design constraints, technical debt, and business model dynamics.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Provides the backdrop. Design under constraints shows resourcefulness and strategic alignment.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What market pressures or internal forces initiated this project?</li>
                                    <li>What was the legacy technology stack limitation?</li>
                                    <li>How does the product generate revenue?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    The reader understands the macro conditions in which you operated.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Market positioning graph or competitive landscape mapping diagram.
                        </div>
                    </div>
                </section>

                {/* 04. Problem Statement */}
                <section id="problem" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 04
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Root Conflict</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Problem Statement
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Clearly state the core user friction and explain how that translated into a business drop-off or financial loss.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {"Connects design problem to financial problem. Prevents \"UI decoration\" misconception."}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>{"What is the user's primary barrier to value?"}</li>
                                    <li>How was this barrier directly affecting bottom-line revenue?</li>
                                    <li>Why had previous attempts failed?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    A robust, clear statement linking user goals and business goals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Funnel drop-off chart showing exactly where conversion leakage occurred.
                        </div>
                    </div>
                </section>

                {/* 05. Product Vision */}
                <section id="vision" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 05
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• North Star</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Product Vision
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Describe the future-state vision. Outline what the experience looks like at mature scale.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Signals long-term perspective. Shows ability to align engineering, product, and sales around a common goal.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What is the long-term solution strategy?</li>
                                    <li>How does it change the core user relationship with the product?</li>
                                    <li>How will this vision scale over a 3-5 year horizon?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    A compelling description of the target state.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Conceptual system architecture or journey blueprint showing core transition nodes.
                        </div>
                    </div>
                </section>

                {/* 06. My Role & Ownership */}
                <section id="role" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 06
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Personal Mandate</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            My Role & Ownership
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Define the role scope, budget/resource management, specific project owners, and direct leadership style.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Hiring managers want to know if you led, managed, or executed. Be honest but authoritative about your influence.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What design outputs did you directly produce versus delegate?</li>
                                    <li>How did you manage project priorities?</li>
                                    <li>What strategic decisions did you own vs influence?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    {"Establishes the designer's personal credibility as a leader."}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Organizational matrix or role scope spider graph.
                        </div>
                    </div>
                </section>

                {/* 07. Collaboration Model */}
                <section id="collaboration" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 07
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Cross-Functional Engine</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Collaboration Model
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Describe the workflow connecting Design, PM, Engineering, and Business Development.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Shows leadership effectiveness. Standard processes fail to scale; custom models reflect design maturity.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>How did you interface with engineering during handoff and build QA?</li>
                                    <li>What meetings or alignment templates were created?</li>
                                    <li>How did you manage conflicting priorities between Product and Engineering?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    Highlights operational efficiency and consensus building.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Dynamic workflow schema or collaboration interaction diagram.
                        </div>
                    </div>
                </section>

                {/* 08. Success Metrics */}
                <section id="metrics" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 08
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Hard Evidence</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Success Metrics
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Define the metrics used to track performance: conversion, speed, task completion, and retention.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Differentiates design outputs from outcomes. Evidential design is what top tech companies look for.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What were the primary and secondary KPIs?</li>
                                    <li>What measurement tools were used to validate the impact?</li>
                                    <li>How were metric improvements tied back to design decisions?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    Sets clear baseline expectations for the outcomes chapter.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Metric dashboard cards or chart trends displaying the target numbers.
                        </div>
                    </div>
                </section>

                {/* 09. Timeline */}
                <section id="timeline" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 09
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Ship Strategy</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Timeline
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Detail project stages, beta cycles, engineering development sprints, and final release gates.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Demonstrates project management capabilities and velocity. Shows how design was integrated sequentially.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What was the total project duration?</li>
                                    <li>What were the key pivot points on the timeline?</li>
                                    <li>How were engineering phases structured alongside design sprints?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    A clear, structured overview of product delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> High-end linear timeline chart displaying design, testing, and deployment cycles.
                        </div>
                    </div>
                </section>

                {/* 10. Decision 1: Search vs Browse */}
                <section id="decision-1" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 10
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Strategic Decision #1</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Decision #1: Search over Browsing
                        </h2>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl overflow-hidden">
                        <div className="p-8 border-b border-[#1f1f23] bg-emerald-500/5">
                            <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-2">Framework View</h3>
                            <p className="text-sm text-zinc-300">
                                Explaining why we prioritised a search-driven foundation rather than standard hierarchy browsing interfaces.
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Challenge</h4>
                                    <p className="text-sm text-zinc-300">Unstructured content growth made standard tree-navigation unusable for high-intent search paths.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Why this mattered</h4>
                                    <p className="text-sm text-zinc-300">Directly impacted product discoverability, leading to cart drop-offs and lost transaction fees.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Options considered</h4>
                                    <p className="text-sm text-zinc-300">Option A: Global filter engine. Option B: Redesigned category browse pages. Option C: Deep search engine.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Trade-offs</h4>
                                    <p className="text-sm text-zinc-300">Search requires high indexing engineering resources but delivers a faster, low-friction pathway.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Decision</h4>
                                    <p className="text-sm text-zinc-300">Prioritize search engine over browse taxonomy for V1.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Execution</h4>
                                    <p className="text-sm text-zinc-300">Implemented command-palette search shortcuts and context-aware auto-completion.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Outcome</h4>
                                    <p className="text-sm text-zinc-300">Search adoption rose by 64%, and average task completion time dropped from 3.5m to 22s.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Leadership takeaway</h4>
                                    <p className="text-sm text-zinc-300">Sometimes, design leaders must push back on legacy browse requests to focus on core intent pathways.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Interface flowchart showing the search-driven pathway versus standard taxonomy branch exploration.
                        </div>
                    </div>
                </section>

                {/* 11. Decision 2: 100x Scale */}
                <section id="decision-2" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 11
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Strategic Decision #2</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Decision #2: Designing for 100× Scale
                        </h2>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl overflow-hidden">
                        <div className="p-8 border-b border-[#1f1f23] bg-emerald-500/5">
                            <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-2">Framework View</h3>
                            <p className="text-sm text-zinc-300">
                                Explaining how we designed systems capable of serving enterprise datasets and high volumes without degradation.
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Challenge</h4>
                                    <p className="text-sm text-zinc-300">Data density requirements threatened to overwhelm the frontend rendering memory limits.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Why this mattered</h4>
                                    <p className="text-sm text-zinc-300">Enterprise customers would encounter slow page loads and application memory leaks.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Options considered</h4>
                                    <p className="text-sm text-zinc-300">Option A: Standard pagination. Option B: Virtualized scrolling grid. Option C: Asynchronous load cards.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Trade-offs</h4>
                                    <p className="text-sm text-zinc-300">Virtualized grids are harder to construct but support infinite dataset loads without browser performance loss.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Decision</h4>
                                    <p className="text-sm text-zinc-300">Build a virtualized scroll grid layout with integrated filter systems.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Execution</h4>
                                    <p className="text-sm text-zinc-300">Partnered directly with technical lead to design and QA the layout performance bottlenecks.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Outcome</h4>
                                    <p className="text-sm text-zinc-300">Supported datasets up to 100k items with average load speeds remaining under 150ms.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Leadership takeaway</h4>
                                    <p className="text-sm text-zinc-300">Design for scale requires early technical partnership and custom engineering collaboration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> System data virtualisation architecture schema display.
                        </div>
                    </div>
                </section>

                {/* 12. Decision 3: Delaying the Design System */}
                <section id="decision-3" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 12
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Strategic Decision #3</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Decision #3: Delaying the Design System
                        </h2>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl overflow-hidden">
                        <div className="p-8 border-b border-[#1f1f23] bg-emerald-500/5">
                            <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-2">Framework View</h3>
                            <p className="text-sm text-zinc-300">
                                Explaining why we prioritised shipping product validation before building a comprehensive UI component library.
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Challenge</h4>
                                    <p className="text-sm text-zinc-300">We had a tight timeline and needed to validate product market fit immediately.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Why this mattered</h4>
                                    <p className="text-sm text-zinc-300">Building a design system early consumes valuable sprint cycles without validated value patterns.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Options considered</h4>
                                    <p className="text-sm text-zinc-300">Option A: Build custom component library first. Option B: Use off-the-shelf library. Option C: Build lightweight UI token model.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Trade-offs</h4>
                                    <p className="text-sm text-zinc-300">Delaying the system creates minor design inconsistencies but preserves resources to design key business flows.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Decision</h4>
                                    <p className="text-sm text-zinc-300">Build lightweight UI token values and delay design system architecture until V2.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Execution</h4>
                                    <p className="text-sm text-zinc-300">Defined key variables (spacing, color, typography) in a basic theme file to guarantee quick components construction.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Outcome</h4>
                                    <p className="text-sm text-zinc-300">Accelerated time-to-market by 3 months, securing pilot customers and validating flow logic.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Leadership takeaway</h4>
                                    <p className="text-sm text-zinc-300">A design leader prioritises product launch value over design system vanity metrics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Timeline comparison chart showing time-to-market with vs without design system overhead.
                        </div>
                    </div>
                </section>

                {/* 13. Decision 4: Discovery Before Contribution */}
                <section id="decision-4" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 13
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Strategic Decision #4</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Decision #4: Discovery Before Contribution
                        </h2>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl overflow-hidden">
                        <div className="p-8 border-b border-[#1f1f23] bg-emerald-500/5">
                            <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-2">Framework View</h3>
                            <p className="text-sm text-zinc-300">
                                Explaining why we prioritised search and exploration systems before implementing creation/contribution features on the homepage.
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Challenge</h4>
                                    <p className="text-sm text-zinc-300">{"Stakeholders requested a prominent \"Create/Contribute\" Floating Action Button (FAB) on the homepage."}</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Why this mattered</h4>
                                    <p className="text-sm text-zinc-300">Data showed users first needed to understand existing assets before adding duplicates, causing library inflation.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Options considered</h4>
                                    <p className="text-sm text-zinc-300">Option A: Prominent Create FAB. Option B: Multi-step check modal. Option C: Contextual creation flow inside search.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Trade-offs</h4>
                                    <p className="text-sm text-zinc-300">Removing direct FAB slows down speed-of-creation for power users but prevents low-quality duplication.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Decision</h4>
                                    <p className="text-sm text-zinc-300">Remove the Create FAB from homepage; implement creation only *after* search check execution.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Execution</h4>
                                    <p className="text-sm text-zinc-300">{"Integrated \"Can't find it? Create new\" CTA cards directly into empty state search result listings."}</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Outcome</h4>
                                    <p className="text-sm text-zinc-300">Duplicate content rates decreased by 47% while search satisfaction metrics improved.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Leadership takeaway</h4>
                                    <p className="text-sm text-zinc-300">Product design strategy involves deciding *when* a feature should be hidden to protect system integrity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> User flow chart displaying the search check constraint barrier compared to the direct creation loop.
                        </div>
                    </div>
                </section>

                {/* 14. Decision 5: Leading Through Ambiguity */}
                <section id="decision-5" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 14
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Strategic Decision #5</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Decision #5: Leading Through Ambiguity
                        </h2>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl overflow-hidden">
                        <div className="p-8 border-b border-[#1f1f23] bg-emerald-500/5">
                            <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-2">Framework View</h3>
                            <p className="text-sm text-zinc-300">
                                Explaining how we resolved conflicting business signals and alignment breakdowns during design execution.
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Challenge</h4>
                                    <p className="text-sm text-zinc-300">Midway through design, business strategy shifted focus from growth expansion to operational retention.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Why this mattered</h4>
                                    <p className="text-sm text-zinc-300">The design team was demotivated due to changing specs and wasted sprints.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Options considered</h4>
                                    <p className="text-sm text-zinc-300">Option A: Pause sprints until PM finalized strategy. Option B: Push ahead on initial roadmap. Option C: Conduct rapid design alignment workshop.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Trade-offs</h4>
                                    <p className="text-sm text-zinc-300">Pausing design creates friction with engineers; running alignment workshops requires rapid collaboration under stress.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Decision</h4>
                                    <p className="text-sm text-zinc-300">Run a 2-day alignment workshop; redefine design sprint definitions to focus on retention goals.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Execution</h4>
                                    <p className="text-sm text-zinc-300">Developed a strategic framework aligning design objectives to revised retention KPIs.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Outcome</h4>
                                    <p className="text-sm text-zinc-300">Realigned the roadmap within 48 hours; kept engineering fully utilized without milestone delays.</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono uppercase text-zinc-500">Leadership takeaway</h4>
                                    <p className="text-sm text-zinc-300">Leadership is about absorbing strategic ambiguity and converting it into structured steps for the team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Decision tree model or workflow diagrams showing roadmap transition gates.
                        </div>
                    </div>
                </section>

                {/* 15. Outcomes */}
                <section id="outcomes" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 15
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Final Impact</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Outcomes
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Provide the definitive results. Connect metric changes directly back to your design decisions.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Proof of strategic value. This proves your design vision succeeded in the real market.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What were the actual quantitative conversion improvements?</li>
                                    <li>Did user retention metrics confirm long-term value?</li>
                                    <li>What was the executive response to the final product release?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    A robust evidence section proving success with hard numbers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> High-impact comparison graphs showing metric lift (e.g. conversion rates, onboarding speed).
                        </div>
                    </div>
                </section>

                {/* 16. Lessons Learned */}
                <section id="lessons" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 16
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Team Growth</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Lessons Learned
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Reflect on lessons regarding system scaling, organizational design, cross-functional collaboration, and alignment.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Design leaders must learn from both successes and failures. Shows continuous learning.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What system constraints became obvious during development?</li>
                                    <li>How would you improve collaboration patterns on the next project?</li>
                                    <li>What surprise user habits did you notice?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    Thoughtful reflections on product team development.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Retro analysis diagrams or process transition maps.
                        </div>
                    </div>
                </section>

                {/* 17. What I'd Do Differently */}
                <section id="differently" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 17
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Critical Review</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            {"What I'd Do Differently"}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Identify areas where speed-to-market forced compromises you would avoid in a future version.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Shows humility and high quality standards. Top design directors seek leaders who can critically evaluate their own execution.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What research track was cut short?</li>
                                    <li>What design decisions led to mild technical debt?</li>
                                    <li>How would you adjust timeline allocations?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    A mature, self-aware critique of your design leadership.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Flow refinement diagrams or conceptual future roadmap layouts.
                        </div>
                    </div>
                </section>

                {/* 18. Leadership Reflection */}
                <section id="reflection" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 18
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Personal Synthesis</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Leadership Reflection
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Describe how this project shaped your personal philosophy as a design leader, mentor, or strategist.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    This is the final pitch. Connecting execution back to your leadership style leaves a lasting strategic impression.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>How did you support and grow junior designers during this project?</li>
                                    <li>How do you maintain design quality standards under high product velocity?</li>
                                    <li>What values define your leadership approach?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    A powerful statement on design leadership philosophy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>Suggested Visuals:</strong> Executive pull-quote format design showcasing your leadership values.
                        </div>
                    </div>
                </section>

                {/* 19. Closing Summary */}
                <section id="closing" className="scroll-mt-16 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                Chapter 19
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">• Pitch End</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal tracking-tight">
                            Closing Summary
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Purpose</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Deliver the final closing wrap-up. Restate your readiness for senior product design leadership roles.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Why it matters</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    Ensures the reader exits with an impression of an executive-ready candidate.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Questions to answer</h3>
                                <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                    <li>What is the final lasting takeaway of this project?</li>
                                    <li>How does this establish your suitability for Head of Design or Principal roles?</li>
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Expected Outcome</h3>
                                <p className="text-sm text-zinc-300">
                                    A clear, direct call-to-action button or contact link.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
