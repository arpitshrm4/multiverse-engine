"use client";

import React, { useState, useEffect } from "react";
import {
    BookOpen,
    ShieldAlert,
    GitBranch,
    Layers,
    Settings,
    Compass,
    Activity,
    CheckCircle,
    MessageSquare,
    ChevronDown,
    CheckCircle2,
    XCircle,
    ArrowRight,
    Sparkles,
    HelpCircle,
    Quote
} from "lucide-react";
import { useUniverse } from "@/context/UniverseContext";

// Consolidated 9 chapters named as "Inside the Decision"
const chaptersList = [
    { id: "overview", label: "01. Executive Question & Purpose", icon: ShieldAlert },
    { id: "mission", label: "02. The Central Product Tension", icon: BookOpen },
    { id: "decision-1", label: "03. Decision 01: Browsing Was Never the Real Problem", icon: GitBranch },
    { id: "decision-2", label: "04. Decision 02: Scale Needed a Shared Language", icon: Layers },
    { id: "decision-3", label: "05. Decision 03: Choosing Less Was Better", icon: Settings },
    { id: "decision-4", label: "06. Decision 04: Discovery Before Contribution", icon: Compass },
    { id: "decision-5", label: "07. Decision 05: Leadership Reduces Uncertainty", icon: Activity },
    { id: "outcomes", label: "08. Product Outcomes & Transformation", icon: CheckCircle },
    { id: "reflection", label: "09. Enduring Leadership Beliefs", icon: MessageSquare },
];

export default function UniverseCPage({ onReturnToLobby }: { onReturnToLobby?: () => void }) {
    const { setUniverse } = useUniverse();
    const [activeSection, setActiveSection] = useState("overview");

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-30% 0px -30% 0px",
            threshold: 0.05,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        chaptersList.forEach((chap) => {
            const el = document.getElementById(chap.id);
            if (el) observer.observe(el);
        });

        return () => {
            chaptersList.forEach((chap) => {
                const el = document.getElementById(chap.id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#070708] text-[#e4e4e7] flex font-sans selection:bg-emerald-500/20 selection:text-emerald-400">

            {/* Left Sidebar Navigation - Inside the Decision */}
            <aside className="hidden lg:flex flex-col w-80 h-screen sticky top-0 bg-[#0c0c0e] border-r border-[#1f1f23] p-6 justify-between shrink-0 overflow-y-auto z-20">
                <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.25em] font-semibold flex items-center gap-1.5">
                            <Sparkles size={12} /> INSIDE THE DECISION
                        </span>
                        <h2 className="text-lg font-sans font-bold text-white">
                            Gyan Bharatam
                        </h2>
                        <span className="text-[11px] font-mono text-zinc-500 uppercase">
                            National Digital Transformation
                        </span>
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
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-mono transition-all text-left cursor-pointer ${isActive
                                        ? "bg-[#18181b] text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] font-semibold"
                                        : "text-zinc-400 hover:text-zinc-200 hover:bg-[#18181b]/50"
                                        }`}
                                >
                                    <Icon size={14} className={isActive ? "text-emerald-400" : "text-zinc-500"} />
                                    <span className="truncate">{chap.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </aside>

            {/* Main Content Scroll */}
            <main className="flex-1 max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-36">

                {/* Section 01: Executive Question & Purpose (OPENING WITH TENSION FIRST) */}
                <section id="overview" className="scroll-mt-16 space-y-16 min-h-[90vh] flex flex-col justify-center border-b border-[#1f1f23] pb-24">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-widest uppercase">
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>INSIDE THE DECISION • EXECUTIVE QUESTION</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans text-white leading-[3rem] lg:leading-[4.2rem] font-bold tracking-tight">
                            "How do you make <span className="font-bold text-emerald-400">14.3 Million</span> ancient manuscripts discoverable without overwhelming researchers or breaking institutional standards?"
                        </h1>
                    </div>

                    {/* What Was at Stake & Tension Statement */}
                    <div className="grid md:grid-cols-3 gap-6 p-8 rounded-xl bg-[#0c0c0e] border border-[#1f1f23]">
                        <div className="space-y-2">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block font-bold">The Central Question</span>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                                How to transform 60+ siloed government archives into a single national discovery platform.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider block font-bold">Why It Mattered</span>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                                Primary historical texts were locked in physical vaults, inaccessible to global scholars and citizens.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider block font-bold">What Was at Stake</span>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                                Preserving national heritage, institutional trust, and digital accessibility at scale.
                            </p>
                        </div>
                    </div>

                    {/* Scale Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8 border-t border-b border-[#1f1f23] border-dashed">
                        <div className="space-y-2">
                            <span className="text-4xl md:text-5xl font-sans text-white block tracking-tight font-bold">14.3M+</span>
                            <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider block">Searchable Manuscripts</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-4xl md:text-5xl font-sans text-white block tracking-tight font-bold">60+</span>
                            <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider block">Connected Institutions</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-4xl md:text-5xl font-sans text-white block tracking-tight font-bold">11.6M+</span>
                            <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider block">Digitisation Requests</span>
                        </div>
                    </div>

                    {/* Role & Ownership */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <span className="text-xs font-mono uppercase text-zinc-500 block">Role</span>
                            <span className="text-lg font-sans font-bold text-white block mt-1">Design Manager & Product Strategist</span>
                        </div>
                        <div className="md:col-span-2">
                            <span className="text-xs font-mono uppercase text-zinc-500 block">Leadership Scope</span>
                            <p className="text-sm text-zinc-300 leading-relaxed mt-1 font-sans">
                                Led product strategy and UX direction, aligned 60+ institutional stakeholders, and guided a multidisciplinary design team through first-of-its-kind national digital infrastructure.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center pt-4">
                        <button
                            onClick={() => scrollToSection("mission")}
                            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors text-xs font-mono cursor-pointer"
                        >
                            <span>Explore The Product Tension</span>
                            <ChevronDown size={16} className="animate-bounce" />
                        </button>
                    </div>
                </section>

                {/* Section 02: The Central Product Tension */}
                <section id="mission" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block font-bold">
                            SECTION 02 • THE CENTRAL PRODUCT TENSION
                        </span>
                        <h2 className="text-3xl md:text-5xl font-sans text-white font-bold leading-tight">
                            Why Digitisation Alone Wasn't Enough
                        </h2>
                        <p className="text-zinc-300 leading-relaxed text-base md:text-lg font-sans">
                            Scanning manuscripts was only 10% of the battle. The core tension was that 60+ institutions used incompatible cataloging methods, languages, and metadata rules. Without a unified decision architecture, 14 Million records would remain an unsearchable digital graveyard.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-3">
                            <span className="text-xs font-mono text-amber-400 uppercase font-bold">Institutional Tension</span>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                                Libraries insisted on preserving custom local cataloging fields. Forcing a single rigid schema would cause institutional rebellion and halt participation.
                            </p>
                        </div>
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-3">
                            <span className="text-xs font-mono text-emerald-400 uppercase font-bold">User Discovery Tension</span>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                                Researchers needed a clean, unified search bar. Searching across 60 inconsistent databases resulted in zero hits or overwhelming irrelevant results.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 03: Decision 01 - Browsing Was Never the Real Problem */}
                <section id="decision-1" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block font-bold">
                            DECISION 01
                        </span>
                        <h2 className="text-3xl md:text-5xl font-sans text-white font-bold leading-tight">
                            Browsing Was Never the Real Problem
                        </h2>
                        <p className="text-zinc-400 text-sm font-mono">
                            Question: Should we build complex visual browsing filters or fix underlying search metadata comprehension?
                        </p>
                    </div>

                    {/* What We Almost Did (Rejected Path) */}
                    <div className="p-6 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                            <XCircle className="w-4 h-4" /> What We Almost Did (Rejected Path)
                        </div>
                        <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                            We almost built an elaborate visual faceting engine with 30+ dropdown filters. We rejected it because testing showed that filtering over corrupt, inconsistent metadata magnified user confusion instead of solving it.
                        </p>
                    </div>

                    {/* The Decision & Rationale */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-6">
                            <div className="space-y-2">
                                <span className="text-xs font-mono text-zinc-400 uppercase">The Decision We Made</span>
                                <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                                    We prioritized discoverability over filter complexity. We standardized core metadata fields (author, era, script, language) and built intelligent search suggestion models before expanding visual UI controls.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-xs font-mono text-emerald-400 uppercase font-bold">Why We Chose It</span>
                                <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                                    A search bar is only as smart as the structured metadata behind it. Cleaning data schemas enabled instant 100x search accuracy across 14.3M records.
                                </p>
                            </div>
                        </div>

                        {/* Personal Reflection - Highly Readable Font */}
                        <div className="pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-bold">What It Changed In Me (Personal Reflection)</span>
                            <p className="text-base md:text-lg text-zinc-100 font-sans leading-relaxed font-normal bg-zinc-900/60 p-4 rounded border border-zinc-800">
                                "This decision permanently changed how I view UX leadership. A search interface is never just a text box—it is a reflection of data clarity. Improving discoverability required designing both the interface and the information architecture behind it."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 04: Decision 02 - Scale Needed a Shared Language */}
                <section id="decision-2" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block font-bold">
                            DECISION 02
                        </span>
                        <h2 className="text-3xl md:text-5xl font-sans text-white font-bold leading-tight">
                            Scale Needed a Shared Language
                        </h2>
                        <p className="text-zinc-400 text-sm font-mono">
                            Question: How do you unite 60+ competing institutions without forcing them to re-catalog millions of physical books?
                        </p>
                    </div>

                    {/* What We Almost Did (Rejected Path) */}
                    <div className="p-6 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                            <XCircle className="w-4 h-4" /> What We Almost Did (Rejected Path)
                        </div>
                        <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                            We almost mandated a single rigid database schema for all participating libraries. We rejected it because institutional bureaucracy and legacy IT limits would have delayed onboarding by years.
                        </p>
                    </div>

                    {/* Decision & Trade-offs */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-6">
                            <div className="space-y-2">
                                <span className="text-xs font-mono text-zinc-400 uppercase">The Decision We Made</span>
                                <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                                    We created a universal translation layer: institutions kept their internal cataloging systems, while our system mapped essential fields into a normalized discovery schema.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-xs font-mono text-emerald-400 uppercase font-bold">Why We Chose It</span>
                                <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                                    It satisfied institutional autonomy while providing researchers a unified search experience across 60+ archives simultaneously.
                                </p>
                            </div>
                        </div>

                        {/* Personal Reflection - Highly Readable Font */}
                        <div className="pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-bold">What It Changed In Me (Personal Reflection)</span>
                            <p className="text-base md:text-lg text-zinc-100 font-sans leading-relaxed font-normal bg-zinc-900/60 p-4 rounded border border-zinc-800">
                                "Designing for scale taught me that true alignment isn't about enforcing conformity. It's about building flexible translation frameworks that let diverse systems collaborate seamlessly."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 05: Decision 03 - Choosing Less Was the Better Product Decision */}
                <section id="decision-3" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block font-bold">
                            DECISION 03
                        </span>
                        <h2 className="text-3xl md:text-5xl font-sans text-white font-bold leading-tight">
                            Choosing Less Was the Better Product Decision
                        </h2>
                        <p className="text-zinc-400 text-sm font-mono">
                            Question: Should we invest 4 months in building a complete 200-component design system before launch?
                        </p>
                    </div>

                    {/* What We Almost Did (Rejected Path) */}
                    <div className="p-6 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                            <XCircle className="w-4 h-4" /> What We Almost Did (Rejected Path)
                        </div>
                        <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                            We almost paused product development to build an exhaustive, fully-documented design system library. We rejected it because over-engineering system specs before validating core user workflows would have missed crucial launch windows.
                        </p>
                    </div>

                    {/* Trade-off Matrix */}
                    <div className="border border-[#1f1f23] bg-[#0c0c0e] rounded-xl overflow-hidden max-w-4xl">
                        <table className="w-full text-left border-collapse font-sans text-xs">
                            <thead>
                                <tr className="border-b border-[#1f1f23] text-zinc-400 font-mono uppercase">
                                    <th className="p-3">Option</th>
                                    <th className="p-3">Speed</th>
                                    <th className="p-3">Risk</th>
                                    <th className="p-3">Leadership Decision</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1f1f23] text-zinc-300">
                                <tr>
                                    <td className="p-3 font-semibold text-white">Full Design System First</td>
                                    <td className="p-3 text-rose-400">Slow (4 Months)</td>
                                    <td className="p-3 text-rose-400">Delayed Launch & Premature Specs</td>
                                    <td className="p-3"><span className="px-2 py-0.5 bg-rose-950 border border-rose-500/30 text-rose-400 rounded font-mono">REJECTED</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-semibold text-emerald-400">Lightweight UI Foundations</td>
                                    <td className="p-3 text-emerald-400">Fast (2 Weeks)</td>
                                    <td className="p-3 text-emerald-400">Low Risk & Highly Adaptable</td>
                                    <td className="p-3"><span className="px-2 py-0.5 bg-emerald-950 border border-emerald-500/30 text-emerald-400 rounded font-mono font-bold">SELECTED</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Personal Reflection - Highly Readable Font */}
                    <div className="p-6 rounded-xl bg-[#0c0c0e] border border-[#1f1f23] space-y-3">
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-bold">What It Changed In Me (Personal Reflection)</span>
                        <p className="text-base md:text-lg text-zinc-100 font-sans leading-relaxed font-normal bg-zinc-900/60 p-4 rounded border border-zinc-800">
                            "A design system should serve the product—it shouldn't delay a product still discovering what it needs to become. We invested in foundational consistency where it mattered most and let the system mature naturally alongside product usage."
                        </p>
                    </div>
                </section>

                {/* Section 06: Decision 04 - Discovery Comes Before Contribution */}
                <section id="decision-4" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block font-bold">
                            DECISION 04
                        </span>
                        <h2 className="text-3xl md:text-5xl font-sans text-white font-bold leading-tight">
                            Discovery Comes Before Contribution
                        </h2>
                        <p className="text-zinc-400 text-sm font-mono">
                            Question: How do you handle stakeholder demands for a prominent 'Upload / Request' button without cluttering search?
                        </p>
                    </div>

                    {/* What We Almost Did (Rejected Path) */}
                    <div className="p-6 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                            <XCircle className="w-4 h-4" /> What We Almost Did (Rejected Path)
                        </div>
                        <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                            We almost placed a large floating 'Request Digitisation' button on the homepage header. We rejected it because prompting users to request scans before searching caused thousands of duplicate digitisation requests for texts already in the database.
                        </p>
                    </div>

                    {/* Decision Rationale */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-6">
                            <div className="space-y-2">
                                <span className="text-xs font-mono text-zinc-400 uppercase">The Decision We Made</span>
                                <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                                    We made request CTAs contextual: users only see digitisation prompts *after* performing a search and verifying a manuscript is missing.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-xs font-mono text-emerald-400 uppercase font-bold">Why We Chose It</span>
                                <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                                    It guided user intent naturally, kept the homepage 100% focused on discovery, and cut duplicate scan requests by 80%.
                                </p>
                            </div>
                        </div>

                        {/* Personal Reflection - Highly Readable Font */}
                        <div className="pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-bold">What It Changed In Me (Personal Reflection)</span>
                            <p className="text-base md:text-lg text-zinc-100 font-sans leading-relaxed font-normal bg-zinc-900/60 p-4 rounded border border-zinc-800">
                                "Every prominent UI action shapes user behavior. Good design leadership isn't making every stakeholder feature visible—it's making the right behavior feel effortless."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 07: Decision 05 - Leadership Begins by Reducing Uncertainty */}
                <section id="decision-5" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block font-bold">
                            DECISION 05
                        </span>
                        <h2 className="text-3xl md:text-5xl font-sans text-white font-bold leading-tight">
                            Leadership Begins by Reducing Uncertainty
                        </h2>
                        <p className="text-zinc-400 text-sm font-mono">
                            Question: How do you protect design & engineering velocity when government requirements shift weekly?
                        </p>
                    </div>

                    {/* What We Almost Did (Rejected Path) */}
                    <div className="p-6 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                            <XCircle className="w-4 h-4" /> What We Almost Did (Rejected Path)
                        </div>
                        <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                            We almost invited the entire design and dev team to weekly raw stakeholder requirement sessions. We rejected it because changing mandates caused severe team confusion and rework.
                        </p>
                    </div>

                    {/* Leadership Architecture */}
                    <div className="p-8 rounded-xl bg-[#0c0c0e] border border-[#1f1f23] space-y-6 max-w-4xl">
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-bold">The Leadership Shield Model</span>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-5 rounded bg-zinc-900/60 border border-zinc-800 space-y-2">
                                <span className="text-xs font-mono text-amber-400 font-bold uppercase">Absorbing Stakeholder Ambiguity</span>
                                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                                    I acted as the single buffer, resolving policy trade-offs with ministry directors before passing requirements to the team.
                                </p>
                            </div>
                            <div className="p-5 rounded bg-zinc-900/60 border border-zinc-800 space-y-2">
                                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Protecting Team Execution</span>
                                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                                    Designers and engineers worked from validated, stable briefs—allowing delivery to continue at high velocity without constant rework.
                                </p>
                            </div>
                        </div>

                        {/* Personal Reflection - Highly Readable Font */}
                        <div className="pt-4 border-t border-[#1f1f23]">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-bold">What It Changed In Me (Personal Reflection)</span>
                            <p className="text-base md:text-lg text-zinc-100 font-sans leading-relaxed font-normal bg-zinc-900/60 p-4 rounded border border-zinc-800">
                                "My primary duty as a design leader wasn't having all the answers—it was reducing uncertainty for my team so they could build with total confidence."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 08: Product Outcomes & Transformation */}
                <section id="outcomes" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block font-bold">
                            SECTION 08 • PRODUCT OUTCOMES & TRANSFORMATION
                        </span>
                        <h2 className="text-3xl md:text-5xl font-sans text-white font-bold leading-tight">
                            Impact Beyond the Interface
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block font-bold">PRODUCT TRANSFORMATION</span>
                            <ul className="text-sm text-zinc-300 leading-relaxed space-y-3 font-sans">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Search became the primary, intuitive path for manuscript discovery across 60+ institutions.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Metadata mapping enabled instant cross-library search results across 14.3M records.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block font-bold">SCALE EVIDENCE</span>
                            <div className="space-y-3 font-mono text-xs">
                                <div>
                                    <span className="text-3xl font-sans font-bold text-white block">14.3M+</span>
                                    <span className="text-zinc-500">Searchable Manuscripts</span>
                                </div>
                                <div>
                                    <span className="text-3xl font-sans font-bold text-white block">11.6M+</span>
                                    <span className="text-zinc-500">Digitisation Requests</span>
                                </div>
                                <div>
                                    <span className="text-3xl font-sans font-bold text-white block">60+</span>
                                    <span className="text-zinc-500">Institutions Connected</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block font-bold">LEADERSHIP OUTCOMES</span>
                            <ul className="text-sm text-zinc-300 leading-relaxed space-y-3 font-sans">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Successfully aligned government ministry leads around a unified digital strategy.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Guided design team execution without single-day delivery delays.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 09: Enduring Leadership Beliefs (FINAL CHAPTER & TRANSITION) */}
                <section id="reflection" className="scroll-mt-16 space-y-12 min-h-[90vh] flex flex-col justify-center max-w-4xl mx-auto py-12">
                    <div className="space-y-4 text-center">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block font-bold">
                            FINAL CHAPTER • ENDURING BELIEFS
                        </span>
                        <h2 className="text-3xl md:text-5xl font-sans text-white font-bold leading-tight">
                            5 Beliefs I Carry Forward
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: "1. Uncertainty reduction is the primary duty of design leadership.",
                                desc: "Absorb ambiguity at the stakeholder level so your design and engineering teams can execute with absolute clarity."
                            },
                            {
                                title: "2. Simplicity is achieved by removing features, not hiding them.",
                                desc: "Adding controls is easy. True product judgment is having the courage to distill workflows to their essence."
                            },
                            {
                                title: "3. Systems must serve human mental models, not database schemas.",
                                desc: "Data structures are underlying mechanics; the user interface must always speak the language of human intent."
                            },
                            {
                                title: "4. Alignment happens through shared visual prototypes, not long spec docs.",
                                desc: "Stakeholders don't align over text documents; they align when they experience a shared visual workflow."
                            },
                            {
                                title: "5. Product judgment is built on the courage to reject easy short-term paths.",
                                desc: "Choosing what not to build is what separates enduring product leaders from feature delivery factories."
                            }
                        ].map((belief, i) => (
                            <div key={i} className="p-6 rounded-xl bg-[#0c0c0e] border border-[#1f1f23] space-y-2">
                                <h4 className="text-base font-bold text-white font-sans">{belief.title}</h4>
                                <p className="text-sm text-zinc-300 leading-relaxed font-sans">{belief.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Transition Section */}
                    <div className="pt-12 border-t border-[#1f1f23] text-center space-y-6">
                        <div className="p-8 rounded-xl bg-gradient-to-b from-[#0c0c0e] to-black border border-emerald-500/30 flex flex-col items-center gap-6 shadow-2xl">
                            <p className="font-sans text-emerald-300 text-xl md:text-2xl font-bold max-w-xl leading-relaxed">
                                "You've seen one decision journey. The next perspective explores another."
                            </p>
                            <button
                                onClick={onReturnToLobby || (() => setUniverse('LOBBY'))}
                                className="border border-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/80 transition-all duration-300 flex items-center gap-3 px-8 py-4 rounded text-emerald-300 font-mono font-bold text-sm uppercase tracking-widest cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.2)] group"
                            >
                                <span>Continue Exploring Multiverse</span>
                                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
