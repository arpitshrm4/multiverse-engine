"use client";

import React, { useState } from "react";
import { 
    BookOpen, 
    Briefcase, 
    ShieldAlert, 
    GitBranch, 
    Layers, 
    Settings, 
    Compass, 
    Activity, 
    CheckCircle, 
    MessageSquare, 
    Info, 
    TrendingUp,
    Minimize2
} from "lucide-react";

// List of the 10 consolidated chapters
const chaptersList = [
    { id: "mission", label: "01. The Mission", icon: BookOpen },
    { id: "challenge", label: "02. The Challenge", icon: Briefcase },
    { id: "role", label: "03. My Leadership Role", icon: ShieldAlert },
    { id: "tp-1", label: "04. TP 1: Search Foundation", icon: GitBranch },
    { id: "tp-2", label: "05. TP 2: Designing for Scale", icon: Layers },
    { id: "tp-3", label: "06. TP 3: Delaying DS", icon: Settings },
    { id: "tp-4", label: "07. TP 4: Discovery FAB", icon: Compass },
    { id: "tp-5", label: "08. TP 5: Ambiguity", icon: Activity },
    { id: "outcomes", label: "09. Outcomes", icon: CheckCircle },
    { id: "reflection", label: "10. Reflection & Ending", icon: MessageSquare },
];

export default function UniverseCPage() {
    const [activeSection, setActiveSection] = useState("mission");

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="min-h-screen bg-[#070708] text-[#e4e4e7] flex font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
            
            {/* Left Sidebar - Navigation */}
            <aside className="hidden lg:flex flex-col w-80 h-screen sticky top-0 bg-[#0c0c0e] border-r border-[#1f1f23] p-6 justify-between shrink-0 overflow-y-auto">
                <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] font-semibold">
                            Gyan Bharatam
                        </span>
                        <h2 className="text-lg font-serif italic text-white/90">
                            Case Study Skeleton
                        </h2>
                    </div>
                    <div className="w-full h-px bg-[#1f1f23]" />
                    <nav className="space-y-1">
                        {chaptersList.map((chap) => {
                            const Icon = chap.icon;
                            const isActive = activeSection === chap.id;
                            return (
                                <button
                                    key={chap.id}
                                    onClick={() => scrollToSection(chap.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-mono transition-all text-left ${
                                        isActive
                                            ? "bg-[#18181b] text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
                                            : "text-zinc-400 hover:text-zinc-200 hover:bg-[#18181b]/50"
                                    }`}
                                >
                                    <Icon size={14} className={isActive ? "text-emerald-400" : "text-zinc-500"} />
                                    <span>{chap.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
                <div className="pt-6 border-t border-[#1f1f23]">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                        Story Mode v1.0
                    </span>
                </div>
            </aside>

            {/* Main Content Scroll */}
            <main className="flex-1 max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-28">

                {/* Chapter 1: The Mission - LARGE EDITORIAL HERO LAYOUT */}
                <section id="mission" className="scroll-mt-16 space-y-8 min-h-[60vh] flex flex-col justify-center border-b border-[#1f1f23] pb-16">
                    <div className="space-y-4 text-center max-w-3xl mx-auto">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] block">
                            {"Chapter 01 // National Significance"}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight font-light tracking-tight">
                            {"The Mission"}
                        </h1>
                        <p className="text-zinc-400 font-mono text-xs max-w-xl mx-auto">
                            {"\"India has a massive manuscript preservation challenge. We must build a digital infrastructure to safeguard millions of historical records.\""}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl max-w-4xl mx-auto mt-6">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Purpose"}</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {"Introduce why this project exists. Focus on the scale of India's manuscript heritage and explain the national cultural preservation significance. Do not introduce the UI/product yet."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Why it matters"}</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {"Hooks the hiring manager with macro context. If the reader does not understand the size of the national preservation challenge, the rest of the decisions lose weight."}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 border-l border-[#1f1f23] pl-0 md:pl-8">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Questions to answer"}</h3>
                                <ul className="text-sm text-zinc-400 space-y-2 list-disc list-inside">
                                    <li>{"Why does this initiative matter?"}</li>
                                    <li>{"Why should someone outside India care?"}</li>
                                    <li>{"Why is digital preservation a technical necessity today?"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3 max-w-4xl mx-auto w-full">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>{"Suggested Visuals:"}</strong> {"Editorial hero illustration representing ancient manuscript networks, or a high-level digital preservation status chart."}
                        </div>
                    </div>
                </section>

                {/* Chapter 2: The Challenge - TIMELINE / COMPARISON GRID */}
                <section id="challenge" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-16">
                    <div className="space-y-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Chapter 02 // Systems Deficit"}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal">
                            {"The Challenge"}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Legacy state representation */}
                        <div className="border border-red-500/10 bg-red-900/5 p-6 rounded-xl space-y-4">
                            <h3 className="text-sm font-mono uppercase text-red-400 tracking-wider flex items-center gap-2">
                                <Minimize2 size={14} />
                                {"Legacy Workflow constraints"}
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {"Describe the pre-existing, fragmented digitization workflows, isolated institutional database setups, and manual request backlogs."}
                            </p>
                        </div>

                        {/* Scale goals */}
                        <div className="border border-emerald-500/10 bg-emerald-950/5 p-6 rounded-xl space-y-4">
                            <h3 className="text-sm font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-2">
                                <TrendingUp size={14} />
                                {"Target Scale & Integration"}
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {"Detail the operational, search capability, and institutional metadata standards required to sync 14.3M+ items safely."}
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Purpose"}</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {"Explain the legacy ecosystem and the product problems (not just the UI flaws). Proactively explain why simply digitizing manuscripts was not scaling."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Why it matters"}</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {"Demonstrates that you design for deep operational workflows, not just client interface layers."}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 border-l border-[#1f1f23] pl-0 md:pl-8">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Questions to answer"}</h3>
                                <ul className="text-sm text-zinc-400 space-y-2 list-disc list-inside">
                                    <li>{"What system configurations existed before?"}</li>
                                    <li>{"Why was the legacy platform unable to scale?"}</li>
                                    <li>{"What specific business or operational friction occurred?"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3 w-full">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>{"Suggested Visuals:"}</strong> {"Ecosystem mapping comparing before/after workflows, or workflow comparison timelines."}
                        </div>
                    </div>
                </section>

                {/* Chapter 3: My Leadership Role - RESPONSIBILITY MATRIX GRID */}
                <section id="role" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-16">
                    <div className="space-y-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Chapter 03 // Scope of Influence"}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal">
                            {"My Leadership Role"}
                        </h2>
                    </div>

                    {/* Matrix Layout */}
                    <div className="border border-[#1f1f23] rounded-xl overflow-hidden bg-[#0c0c0e]">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1f1f23]">
                            <div className="p-6 space-y-3">
                                <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"01. Product Strategy"}</span>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    {"Owning product definition direction. Shaping search-first discovery paths, prioritization, and technical constraints."}
                                </p>
                            </div>
                            <div className="p-6 space-y-3">
                                <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"02. UX Direction & QA"}</span>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    {"Establishing metadata schemas and visual standards across the digital preservation catalog."}
                                </p>
                            </div>
                            <div className="p-6 space-y-3">
                                <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"03. Team Leadership"}</span>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    {"Managing 3 product designers, orchestrating sprints, resolving priority deadlocks, and aligning dev execution."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Purpose"}</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {"Clearly define ownership scope. Highlight cross-functional leadership, alignment of stakeholders, and direction parameters over generic responsibilities list."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Why it matters"}</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {"Design directors look for candidates who own strategic outcomes, manage team priorities, and handle executive communication pathways."}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 border-l border-[#1f1f23] pl-0 md:pl-8">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Questions to answer"}</h3>
                                <ul className="text-sm text-zinc-400 space-y-2 list-disc list-inside">
                                    <li>{"What design directions did you own vs. collaborate on?"}</li>
                                    <li>{"How did you align stakeholders (ministries, institutional heads)?"}</li>
                                    <li>{"What design framework standards did you enforce?"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3 w-full">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>{"Suggested Visuals:"}</strong> {"A responsibility matrix grid or stakeholder mapping diagram."}
                        </div>
                    </div>
                </section>

                {/* Turning Point 1: Search Became the Foundation - FLOW COMPARISON */}
                <section id="tp-1" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-16">
                    <div className="space-y-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 01 // Search over Browse"}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal">
                            {"Search Became the Foundation"}
                        </h2>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl overflow-hidden">
                        <div className="p-6 bg-emerald-500/5 border-b border-[#1f1f23]">
                            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                                {"Strategic Turning Point Framework"}
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Context"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Evaluating access strategy for millions of manuscripts cataloged across 60+ institutions."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Challenge"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Browsing tree-structures and traditional directory hierarchies cannot scale to search loops involving millions of un-standardized manuscripts."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Decision"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Pivoted the platform strategy: abandoned directory browses to make smart search indexing the core framework of v1."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Trade-offs"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Required technical backend indexing re-architecture but reduced task discovery friction dramatically."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Execution"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Designed command-centric context search, matching localized dialects and metadata indexes."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Outcome"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Average catalog navigation time reduced from 3.5 minutes to 22 seconds."}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-[#1f1f23]">
                                <h4 className="text-xs font-mono text-emerald-400 uppercase mb-1">{"Leadership Insight"}</h4>
                                <p className="text-sm text-zinc-300 italic">
                                    {"Sometimes design leadership is knowing when to completely eliminate a feature request (browsing taxonomy) to protect core utility."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3 w-full">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>{"Suggested Visuals:"}</strong> {"Side-by-side information hierarchy comparison mapping of directory navigation structures vs. contextual search flows."}
                        </div>
                    </div>
                </section>

                {/* Turning Point 2: Designing for Future Scale - DENSITY / DATA ARCHITECTURE */}
                <section id="tp-2" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-16">
                    <div className="space-y-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 02 // Scalable Architecture"}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal">
                            {"Designing for Future Scale"}
                        </h2>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl overflow-hidden">
                        <div className="p-6 bg-emerald-500/5 border-b border-[#1f1f23]">
                            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                                {"Scale Strategy & Metadata"}
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Context"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Drafting metadata structures for catalog search loops to scale from 100K pilot assets to 14.3M+ items."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Challenge"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Diverse institutions catalog manuscripts using inconsistent schema standards, leading to broken filters and corrupt metadata searches."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Decision"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Pivoted to a standardized metadata schema model mapping localized catalog attributes to standard index targets."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Trade-offs"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Added upfront operational cataloging work for libraries, but guaranteed perfect platform filter stability."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Execution"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Built intuitive metadata translation guidelines for libraries and structured search categorization cards."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Outcome"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Successfully integrated and cataloged over 14 million manuscript items with zero index crashes."}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-[#1f1f23]">
                                <h4 className="text-xs font-mono text-emerald-400 uppercase mb-1">{"Leadership Insight"}</h4>
                                <p className="text-sm text-zinc-300 italic">
                                    {"Scale decisions are not visual. Designing layout models is useless if the search index is fed with dirty data schemas."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3 w-full">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>{"Suggested Visuals:"}</strong> {"A scale transition timeline diagram (100K ➔ 14.3M) or conceptual metadata relationship models."}
                        </div>
                    </div>
                </section>

                {/* Turning Point 3: Choosing Speed Over Perfection - TIMELINE GRID */}
                <section id="tp-3" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-16">
                    <div className="space-y-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 03 // Smart Prioritization"}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal">
                            {"Choosing Speed Over Perfection"}
                        </h2>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl overflow-hidden">
                        <div className="p-6 bg-emerald-500/5 border-b border-[#1f1f23]">
                            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                                {"Delaying the Design System"}
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Context"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Managing development sprints and resource allocation for a v1 pilot rollout."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Challenge"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Developing a comprehensive React design system and Figma UI library would consume 40% of the project's direct budget before product validation."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Decision"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Intentionally deferred building a complex design system. Opted for custom UI token rules and a lightweight governance model."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Trade-offs"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Accepted minor front-end layout variation risks to focus design hours on flow layout validation."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Execution"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Defined core visual tokens (spacing, typography, CSS color specs) inside a basic reference sheet."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Outcome"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Shipped v1 platform three months early, securing validation and direct feedback data."}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-[#1f1f23]">
                                <h4 className="text-xs font-mono text-emerald-400 uppercase mb-1">{"Leadership Insight"}</h4>
                                <p className="text-sm text-zinc-300 italic">
                                    {"A design leader should prioritize business delivery over the aesthetic vanity of building a perfect design system."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3 w-full">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>{"Suggested Visuals:"}</strong> {"A layout diagram of UI token variables and shared components, or design governance model flows."}
                        </div>
                    </div>
                </section>

                {/* Turning Point 4: Discovery Before Contribution - DECISION MAP / FLOWCHART */}
                <section id="tp-4" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-16">
                    <div className="space-y-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 04 // Product Prioritization"}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal">
                            {"Discovery Before Contribution"}
                        </h2>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl overflow-hidden">
                        <div className="p-6 bg-emerald-500/5 border-b border-[#1f1f23]">
                            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                                {"The Homepage FAB Decision"}
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Context"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Aligning homepage dashboard modules to handle manuscript requests and contributions."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Challenge"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Stakeholders requested a prominent \"Create/Contribute\" Floating Action Button (FAB) on the homepage. However, data showed users frequently uploaded duplicate manuscripts before searching for existing copies."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Decision"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Removed the Create FAB from the homepage. Redesigned the contribution path to only trigger contextually after a search query returned no results."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Trade-offs"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Slightly increased friction for contributors, but protected the system's index integrity from catalog inflation."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Execution"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Built custom \"Request for Digitisation\" banners inside search result empty states."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Outcome"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Duplicate upload rates fell by 47% while total metadata catalog indexing speed rose by 30%."}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-[#1f1f23]">
                                <h4 className="text-xs font-mono text-emerald-400 uppercase mb-1">{"Leadership Insight"}</h4>
                                <p className="text-sm text-zinc-300 italic">
                                    {"Sometimes design leadership means choosing where to *add* user friction to protect the structural health of the platform."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3 w-full">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>{"Suggested Visuals:"}</strong> {"Decision tree model mapping user vs. stakeholder goals, or Before/After homepage state transitions."}
                        </div>
                    </div>
                </section>

                {/* Turning Point 5: Leading Through Ambiguity - HIERARCHICAL MODEL */}
                <section id="tp-5" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-16">
                    <div className="space-y-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 05 // Executive Management"}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal">
                            {"Leading Through Ambiguity"}
                        </h2>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl overflow-hidden">
                        <div className="p-6 bg-emerald-500/5 border-b border-[#1f1f23]">
                            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                                {"Team Direction & Stakeholder Alignment"}
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Context"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Managing designers, aligning with technical development leads, and communicating strategy updates to ministries."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Challenge"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Midway through development, shifting policy guidelines required re-orienting the app's target flows under short notice."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Decision"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Conducted rapid design alignment sessions. Reallocated design tasks to prioritize core dashboard tools while maintaining visual standards."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Trade-offs"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Pivoted roadmap quickly without design system references, requiring close QA collaboration."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Execution"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Drafted custom communication protocols between Design, PM, and engineering teams."}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase">{"Outcome"}</h4>
                                    <p className="text-sm text-zinc-300">
                                        {"Re-aligned roadmap within 48 hours without milestone slippage."}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-[#1f1f23]">
                                <h4 className="text-xs font-mono text-emerald-400 uppercase mb-1">{"Leadership Insight"}</h4>
                                <p className="text-sm text-zinc-300 italic">
                                    {"Leadership is about absorbing strategic ambiguity from executives and translating it into clear execution milestones for your design team."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3 w-full">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>{"Suggested Visuals:"}</strong> {"A workflow diagram displaying communication channels connecting stakeholders, Design Manager, and development teams."}
                        </div>
                    </div>
                </section>

                {/* Chapter 9: Outcomes - DATA-DENSE METRIC CARD GRID */}
                <section id="outcomes" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-16">
                    <div className="space-y-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Chapter 09 // Transformation Metrics"}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal">
                            {"Outcomes"}
                        </h2>
                    </div>

                    {/* Bold Data Matrix */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Product Outcomes */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">
                                {"01. Product Improvements"}
                            </span>
                            <ul className="text-sm text-zinc-400 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Fast discoverability via indexed metadata search."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Standardized interfaces matching accessibility rules."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Simplified terminology for non-expert users."}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Platform Stats */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">
                                {"02. Platform Metrics"}
                            </span>
                            <div className="space-y-3">
                                <div>
                                    <span className="text-2xl font-serif text-white block">{"14.3M+"}</span>
                                    <span className="text-xs text-zinc-500 font-mono">{"Manuscripts cataloged"}</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-serif text-white block">{"11.6M+"}</span>
                                    <span className="text-xs text-zinc-500 font-mono">{"Preservation requests"}</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-serif text-white block">{"60+"}</span>
                                    <span className="text-xs text-zinc-500 font-mono">{"Partner libraries"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Leadership Impact */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">
                                {"03. Leadership Outcomes"}
                            </span>
                            <ul className="text-sm text-zinc-400 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Cross-functional alignment across ministries."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Rapid scaling design pipeline."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Validated catalog workflow rules."}</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex items-start gap-3 w-full">
                        <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-zinc-400 font-mono">
                            <strong>{"Suggested Visuals:"}</strong> {"High-contrast outcome dashboards showcasing the target numbers (14.3M+, 11.6M+)."}
                        </div>
                    </div>
                </section>

                {/* Chapter 10: Reflection & Ending - EDITORIAL BLOCKQUOTE */}
                <section id="reflection" className="scroll-mt-16 space-y-8 min-h-[50vh] flex flex-col justify-center">
                    <div className="space-y-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Chapter 10 // Synthesis"}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-normal">
                            {"Reflection & Lessons"}
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <p className="text-lg text-zinc-300 font-serif italic leading-relaxed text-center">
                            {"\"The hardest part of designing public sector platforms isn't building layouts. It is aligning policy, databases, engineering resources, and user needs into a system that can evolve for decades.\""}
                        </p>
                        <div className="w-12 h-px bg-emerald-500/50 mx-auto" />
                        <p className="text-sm text-zinc-400 leading-relaxed text-center">
                            {"This project changed my approach to design management and systems strategy, demonstrating how a design leader can steer a national-scale transformation using data and structured trade-offs."}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl mt-8">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Purpose"}</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {"Detail personal reflections on design strategy and organization management. Conclude with a strong, memorable leadership summary."}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 border-l border-[#1f1f23] pl-0 md:pl-8">
                            <div className="space-y-1">
                                <h3 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">{"Questions to answer"}</h3>
                                <ul className="text-sm text-zinc-400 space-y-2 list-disc list-inside">
                                    <li>{"What surprised you most during execution?"}</li>
                                    <li>{"What would you change if you restarted today?"}</li>
                                    <li>{"How does this frame your approach to leading design organizations?"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
