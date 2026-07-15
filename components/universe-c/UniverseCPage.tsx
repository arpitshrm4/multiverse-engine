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
    ChevronDown
} from "lucide-react";

// List of the 9 consolidated chapters with the new story order
const chaptersList = [
    { id: "overview", label: "01. Executive Overview", icon: ShieldAlert },
    { id: "mission", label: "02. The Product Challenge", icon: BookOpen },
    { id: "tp-1", label: "03. Turning Point 01", icon: GitBranch },
    { id: "tp-2", label: "04. Turning Point 02", icon: Layers },
    { id: "tp-3", label: "05. Turning Point 03", icon: Settings },
    { id: "tp-4", label: "06. Turning Point 04", icon: Compass },
    { id: "tp-5", label: "07. Turning Point 05", icon: Activity },
    { id: "outcomes", label: "08. Outcomes", icon: CheckCircle },
    { id: "reflection", label: "09. Reflection", icon: MessageSquare },
];

export default function UniverseCPage() {
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
            rootMargin: "-30% 0px -30% 0px", // focus on the viewport center area
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

    console.log("Rendering UniverseCPage!");

    return (
        <div className="min-h-screen bg-[#070708] text-[#e4e4e7] flex font-sans selection:bg-emerald-500/20 selection:text-emerald-400">

            {/* Left Sidebar - Navigation */}
            <aside className="hidden lg:flex flex-col w-80 h-screen sticky top-0 bg-[#0c0c0e] border-r border-[#1f1f23] p-6 justify-between shrink-0 overflow-y-auto">
                <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] font-semibold">
                            Gyan Bharatam
                        </span>
                        <h2 className="text-lg font-serif italic text-white/90">
                            Case Study
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
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-mono transition-all text-left ${isActive
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
                    <span className="text-sm font-mono text-zinc-400 uppercase tracking-widest block">
                        Story Mode v1.0
                    </span>
                </div>
            </aside>

            {/* Main Content Scroll */}
            <main className="flex-1 max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-36">

                {/* Chapter 1: The Executive Overview - HIGH-IMPACT HERO */}
                <section id="overview" className="scroll-mt-16 space-y-16 min-h-[90vh] flex flex-col justify-center border-b border-[#1f1f23] pb-24">

                    {/* Eyebrow & Title */}
                    <div className="space-y-6">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.3em] block">
                            {"CASE STUDY • Government Digital Transformation"}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans text-white leading-[3rem] lg:leading-[4.5rem] font-light tracking-tight">
                            {"Designing a Discovery Platform That Scaled "}
                            <span className="font-sans text-6xl font-semibold">{"100K"}</span>
                            {" Legacy Records to "}
                            <span className="font-sans text-6xl font-semibold">{"14.3M+"}</span>
                            {" Manuscripts"}
                        </h1>
                    </div>

                    {/* Transformation Statement */}
                    <div className="max-w-3xl">
                        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light font-sans">
                            {"Contributed to product strategy and led UX direction for Gyan Bharatam, helping transform a fragmented manuscript ecosystem into a scalable national platform for discovery, digitisation, and institutional collaboration. Guided a multidisciplinary design team, aligned stakeholders across government and engineering, and delivered experiences designed to support long-term growth."}
                        </p>
                    </div>

                    {/* Platform Scale Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8 border-t border-b border-[#1f1f23] border-dashed">
                        {/* Platform stats */}
                        <div className="space-y-8">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">{"Platform"}</span>
                            <div className="space-y-6">
                                <div>
                                    <span className="text-4xl md:text-5xl font-sans text-white block tracking-tight font-light">{"14.3M+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Manuscripts"}</span>
                                </div>
                                <div>
                                    <span className="text-4xl md:text-5xl font-sans text-white block tracking-tight font-light">{"11.6M+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Digitisation Requests"}</span>
                                </div>
                                <div>
                                    <span className="text-4xl md:text-5xl font-sans text-white block tracking-tight font-light">{"60+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Institutions"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Adoption stats */}
                        <div className="space-y-8">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">{"Adoption"}</span>
                            <div className="space-y-6">
                                <div>
                                    <span className="text-4xl md:text-5xl font-sans text-white block tracking-tight font-light">{"10K+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Users"}</span>
                                </div>
                                <div>
                                    <span className="text-4xl md:text-5xl font-sans text-white block tracking-tight font-light">{"10K+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"App Downloads"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Leadership stats */}
                        <div className="space-y-8">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">{"Leadership"}</span>
                            <div className="space-y-6">
                                <div>
                                    <span className="text-4xl md:text-5xl font-sans text-white block tracking-tight font-light">{"3"}</span>
                                    <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Designers Led"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Role & Ownership */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <span className="text-sm font-mono uppercase text-zinc-500 block">{"Role"}</span>
                            <span className="text-lg font-serif text-white block mt-1">{"Design Manager"}</span>
                        </div>
                        <div className="md:col-span-2">
                            <span className="text-sm font-mono uppercase text-zinc-500 block">{"Ownership Scope"}</span>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <ul className="text-[15px] text-zinc-300 leading-relaxed space-y-2 font-mono">
                                    <li className="flex items-center gap-2">
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full" />
                                        <span>{"Contributed to Product Strategy"}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full" />
                                        <span>{"Led UX Direction"}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full" />
                                        <span>{"Led Team"}</span>
                                    </li>
                                </ul>
                                <ul className="text-[15px] text-zinc-300 leading-relaxed space-y-2 font-mono">
                                    <li className="flex items-center gap-2">
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full" />
                                        <span>{"Stakeholder Alignment"}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full" />
                                        <span>{"Cross-functional Collaboration"}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full" />
                                        <span>{"Design Delivery"}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Transformation Visual */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl space-y-4">
                        <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">{"System Transformation Model"}</span>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
                            <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-center w-full md:w-auto">
                                <span className="font-mono text-[15px] text-zinc-300 leading-relaxed">{"Legacy Platform"}</span>
                            </div>
                            <div className="text-zinc-600 hidden md:block">{"➔"}</div>
                            <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-center w-full md:w-auto">
                                <span className="font-mono text-[15px] text-zinc-300 leading-relaxed">{"Scalable Discovery Platform"}</span>
                            </div>
                            <div className="text-zinc-600 hidden md:block">{"➔"}</div>
                            <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-center w-full md:w-auto">
                                <span className="font-mono text-[15px] text-zinc-300 leading-relaxed">
                                    <span className="font-sans font-normal">{"60+"}</span>
                                    {" Connected Institutions"}
                                </span>
                            </div>
                            <div className="text-zinc-600 hidden md:block">{"➔"}</div>
                            <div className="px-4 py-2.5 bg-emerald-950/20 border border-emerald-500/20 rounded-lg text-center w-full md:w-auto shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                                <span className="font-mono text-sm text-emerald-400 font-bold">
                                    <span className="font-sans font-bold text-emerald-400">{"14.3M+"}</span>
                                    {" Searchable Manuscripts"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center pt-8">
                        <button
                            onClick={() => scrollToSection("mission")}
                            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors text-sm font-mono"
                        >
                            <span>{"How We Got Here"}</span>
                            <ChevronDown size={16} className="animate-bounce" />
                        </button>
                    </div>

                </section>

                {/* Chapter 2: The Mission - CONTEXTUAL BACKGROUND */}
                <section id="mission" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"THE PRODUCT CHALLENGE"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Why Digitisation Alone Wasn't Enough"}
                        </h2>
                        <p className="text-zinc-300 leading-relaxed text-base md:text-lg font-light">
                            {"Preserving manuscripts was only the first step. The larger challenge was making millions of records discoverable across institutions with different cataloguing methods, metadata standards, and languages. Without a unified approach, valuable knowledge remained scattered, difficult to search, and inaccessible to researchers and the public."}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-3">
                            <span className="text-sm font-mono text-emerald-400 uppercase">{"The Preservation Challenge"}</span>
                            <p className="text-[15px] text-zinc-300 leading-relaxed">
                                {"Many manuscripts existed only as fragile physical documents. Even when digitised, they remained vulnerable if records were incomplete, inconsistent, or difficult to maintain. Long-term preservation required more than scanning it required structured, reliable digital records."}
                            </p>
                        </div>
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-3">
                            <span className="text-sm font-mono text-emerald-400 uppercase">{"The Discovery Challenge"}</span>
                            <p className="text-[15px] text-zinc-300 leading-relaxed">
                                {"Collections were distributed across institutions using different metadata structures, naming conventions, and cataloguing practices. Finding a specific manuscript often required searching multiple systems, making discovery slow and inconsistent for both researchers and citizens."}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chapter 3: TP 01 - Browsing Was No Longer Enough */}
                <section id="tp-1" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"TURNING POINT 01"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Browsing Was No Longer Enough"}
                        </h2>
                    </div>

                    {/* Timeline Infographic */}
                    <div className="relative pl-8 space-y-8 border-l border-emerald-500/20 max-w-4xl">
                        <div className="relative space-y-2">
                            <span className="absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-emerald-500/40">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-sm font-mono text-zinc-400 uppercase">
                                {"Legacy Platform"}
                            </span>
                            <h4 className="text-base font-semibold text-white">{"Search Had Limited Context"}</h4>
                            <p className="text-base text-zinc-300 leading-relaxed max-w-2xl font-light">
                                {"The legacy platform supported basic keyword search, but discovery was constrained by inconsistent metadata and limited searchable fields. Users often struggled to find relevant manuscripts because the search experience depended on incomplete or differently structured catalog information."}
                            </p>
                        </div>

                        <div className="relative space-y-2">
                            <span className="absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-emerald-500/40">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-sm font-mono text-zinc-400 uppercase">
                                {"As the Platform Grew"}
                            </span>
                            <h4 className="text-base font-semibold text-white">{"Discovery Became Increasingly Complex"}</h4>
                            <p className="text-base text-zinc-300 leading-relaxed max-w-2xl font-light">
                                {"As the platform expanded to include manuscripts from multiple institutions, the challenge became more pronounced. Different metadata standards, languages, and cataloguing practices reduced search relevance, making it harder for users to consistently discover the manuscripts they were looking for."}
                            </p>
                        </div>

                        <div className="relative space-y-2">
                            <span className="absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-sm font-mono text-emerald-400 uppercase font-bold">{"Decision Point"}</span>
                            <h4 className="text-sm font-bold text-white">{"The Realisation"}</h4>
                            <p className="text-sm text-zinc-200 max-w-2xl italic font-sans">
                                {"\"We realised the problem wasn't search it was what search could understand. Improving discoverability required rethinking metadata before redesigning the search experience.\""}
                            </p>
                        </div>

                        <div className="relative space-y-2">
                            <span className="absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-emerald-500/40">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-sm font-mono text-zinc-400 uppercase">{"Transformation"}</span>
                            <h4 className="text-sm font-semibold text-emerald-400">{"Better Metadata. Better Discovery."}</h4>
                            <p className="text-base text-zinc-300 leading-relaxed max-w-2xl font-light">
                                {"Rather than focusing only on the search interface, we prioritised improving how manuscript information was structured and presented. Standardising metadata, simplifying terminology, and redesigning the search experience together created a more reliable and discoverable platform."}
                            </p>
                        </div>
                    </div>

                    {/* Consolidated 4-part Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"The Challenge"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"Metadata from different institutions varied in structure, naming conventions, and completeness. Since the search engine relied on these fields, inconsistent metadata often resulted in less relevant search results and made manuscript discovery more difficult."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"The Decision"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"We prioritised discoverability over adding more search features. Instead of expanding search capabilities, we focused on improving metadata quality, simplifying search interactions, and surfacing the most relevant information first."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"Execution & Outcome"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"The search experience was redesigned with clearer information hierarchy, simplified terminology, search suggestions, and metadata-driven improvements. These changes established a stronger foundation for discovering manuscripts across a growing collection of more than 14.3 million records."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Reflection"}</span>
                                <p className="text-sm text-zinc-200 italic font-sans">
                                    {"\"This project changed how I think about search. A search experience is only as effective as the information behind it. Improving discoverability meant designing both the interface and the data that powered it.\""}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 4: TP 02 - We Designed for Future Scale */}
                <section id="tp-2" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"TURNING POINT 02"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"We Designed for Future Scale"}
                        </h2>
                    </div>

                    {/* Ecosystem Schema Mapping */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl space-y-6 max-w-4xl">
                        <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">{"Bringing 60+ Institutions into One Search Experience"}</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div className="border border-zinc-800 bg-zinc-900/50 p-4 rounded-lg space-y-3">
                                <span className="text-sm font-mono text-zinc-400 uppercase tracking-wider block">
                                    <span className="font-sans font-normal">{"60+"}</span>
                                    {" Institutions"}
                                </span>
                                <div className="space-y-1">
                                    <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono">{"Library A"}</div>
                                    <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono">{"Library B"}</div>
                                    <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono">{"Library C"}</div>
                                    <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-500">{"..."}</div>
                                </div>
                                <p className="text-[15px] text-zinc-300 leading-relaxed leading-normal">
                                    {"Each institution managed manuscripts using its own metadata structure, naming conventions, and cataloguing practices."}
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-zinc-600 hidden md:block">{"➔"}</span>
                                <span className="text-sm font-mono text-emerald-400 text-center py-1">{"Common Metadata Framework"}</span>
                            </div>
                            <div className="border border-emerald-500/20 bg-emerald-950/10 p-4 rounded-lg space-y-3">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block">{"One Search Across All Collections"}</span>
                                <div className="space-y-1">
                                    <div className="px-2 py-1 bg-zinc-950 border border-emerald-500/20 rounded text-sm font-mono text-zinc-300 font-bold">
                                        <span className="font-sans">{"14.3M+"}</span>
                                        {" Manuscripts"}
                                    </div>
                                    <div className="px-2 py-1 bg-zinc-950 border border-emerald-500/20 rounded text-xs font-mono text-zinc-400">{"Consistent Search"}</div>
                                    <div className="px-2 py-1 bg-zinc-950 border border-emerald-500/20 rounded text-xs font-mono text-zinc-400">{"Standardised Metadata"}</div>
                                    <div className="px-2 py-1 bg-zinc-950 border border-emerald-500/20 rounded text-xs font-mono text-zinc-400">{"Reliable Discovery"}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Consolidated 4-part Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"The Challenge"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"Every participating institution described manuscripts differently. Variations in metadata, terminology, and cataloguing practices made it difficult to deliver consistent search results across a growing national collection. Without a shared structure, users would receive incomplete or inconsistent results depending on where the manuscript originated."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"The Decision"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"We established a common metadata framework that allowed institutions to preserve their local cataloguing practices while mapping essential fields into a consistent structure for discovery. This created a single search experience without requiring every institution to redesign its existing records."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"Execution & Outcome"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"The platform introduced a consistent metadata model for discovery, supported by improved validation, clearer field structures, and standardized search behaviour. This enabled users to search across more than 14.3 million manuscript records from over 60 participating institutions through a unified experience."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Reflection"}</span>
                                <p className="text-sm text-zinc-200 italic font-sans">
                                    {"\"Designing for scale taught me that consistency isn't about making every institution work the same way. It's about creating a shared language that allows different systems to work together while remaining simple for the people searching.\""}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 5: TP 03 - We Chose Not to Build Everything */}
                <section id="tp-3" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"TURNING POINT 03"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"We Chose Not to Build Everything"}
                        </h2>
                    </div>

                    {/* Decision Matrix Table */}
                    <div className="border border-[#1f1f23] bg-[#0c0c0e] rounded-xl overflow-hidden max-w-4xl">
                        <div className="p-4 border-b border-[#1f1f23] bg-zinc-900/50">
                            <span className="text-sm font-mono text-zinc-400 uppercase tracking-wider">{"Strategic Prioritisation"}</span>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[#1f1f23] text-zinc-400 font-mono text-xs uppercase">
                                    <th className="p-4">{"Option"}</th>
                                    <th className="p-4">{"Investment"}</th>
                                    <th className="p-4">{"Impact"}</th>
                                    <th className="p-4">{"Decision"}</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-[#1f1f23] text-zinc-300">
                                <tr>
                                    <td className="p-4 font-semibold text-white">{"Full Design System"}</td>
                                    <td className="p-4">{"High effort across design and engineering"}</td>
                                    <td className="p-4 text-red-400">{"Would delay MVP delivery"}</td>
                                    <td className="p-4"><span className="px-2 py-0.5 bg-red-950/20 border border-red-500/20 text-red-400 rounded-full font-mono text-[10px]">{"DEFERRED"}</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-emerald-400">{"Core Design Foundations"}</td>
                                    <td className="p-4">{"Low effort with immediate usability benefits"}</td>
                                    <td className="p-4 text-emerald-400">{"Enabled faster product delivery"}</td>
                                    <td className="p-4"><span className="px-2 py-0.5 bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 rounded-full font-mono text-[10px]">{"CHOSEN"}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Consolidated 4-part Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"The Challenge"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"As a first-of-its-kind product, many workflows, user journeys, and requirements were still evolving. Investing heavily in a comprehensive design system too early risked slowing delivery before we had validated the product itself."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"The Decision"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"We deliberately postponed building a full design system and instead established lightweight design foundations—shared typography, colours, spacing, components, and interaction patterns. This allowed the team to maintain consistency while adapting quickly as the product evolved."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"Execution & Outcome"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"The team worked from a shared set of reusable UI foundations rather than a fully documented design system. This reduced unnecessary design effort, improved collaboration between designers and frontend developers, and helped us focus on validating the product experience during the initial launch."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Reflection"}</span>
                                <p className="text-sm text-zinc-200 italic font-sans">
                                    {"\"This decision changed how I think about design systems. A design system should help a product scale—it shouldn't slow down a product that is still discovering what it needs to become. We invested in consistency where it mattered most and allowed the system to mature alongside the product.\""}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 6: TP 04 - We Prioritized Discovery Before Contribution */}
                <section id="tp-4" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"TURNING POINT 04"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"We Prioritized Discovery Before Contribution"}
                        </h2>
                    </div>

                    {/* Dialogue-style Storyboard */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl">
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-2">
                            <span className="text-sm font-mono text-zinc-400 uppercase">{"01 / Stakeholder Goal"}</span>
                            <h5 className="text-sm font-bold text-white">{"Always-Visible Upload Button"}</h5>
                            <p className="text-[15px] text-zinc-300 leading-relaxed">
                                {"Stakeholders wanted a prominent “Request for Digitisation” action on the homepage so users could immediately contribute manuscript information."}
                            </p>
                        </div>
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-2">
                            <span className="text-sm font-mono text-zinc-400 uppercase">{"02 / User Goal"}</span>
                            <h5 className="text-sm font-bold text-white">{"Discover Before They Contribute"}</h5>
                            <p className="text-[15px] text-zinc-300 leading-relaxed">
                                {"For most users, the first task was exploring the collection—not submitting a request. They needed confidence that a manuscript wasn't already available before taking any action."}
                            </p>
                        </div>
                        <div className="border border-red-500/20 bg-red-950/10 p-6 rounded-xl space-y-2">
                            <span className="text-sm font-mono text-zinc-400 uppercase">{"03 / The Product Tension"}</span>
                            <h5 className="text-sm font-bold text-red-400">{"Competing Priorities"}</h5>
                            <p className="text-[15px] text-zinc-300 leading-relaxed">
                                {"A persistent homepage CTA encouraged contribution before discovery. This risked distracting users from the platform's primary purpose and increased the likelihood of duplicate digitisation requests."}
                            </p>
                        </div>
                        <div className="border border-emerald-500/20 bg-emerald-950/10 p-6 rounded-xl space-y-2">
                            <span className="text-sm font-mono text-zinc-400 uppercase">{"04 / The Resolution"}</span>
                            <h5 className="text-sm font-bold text-emerald-400">{"Context Instead of Constant Visibility"}</h5>
                            <p className="text-[15px] text-zinc-300 leading-relaxed">
                                {"Instead of a floating action button, we introduced a contextual \"Request for Digitisation\" banner. Users were encouraged to contribute only after exploring the collection and determining that a manuscript was not already available."}
                            </p>
                        </div>
                    </div>

                    {/* Consolidated 4-part Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"The Challenge"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"The homepage needed to serve a broad audience—from researchers and students to citizens discovering manuscripts for the first time. Making contribution the most prominent action conflicted with the platform's primary objective: helping users discover existing knowledge before requesting digitisation."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"The Decision"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"We recommended removing the persistent homepage FAB and replacing it with a contextual call to action. This balanced stakeholder goals with user needs, keeping discovery as the primary experience while still providing a clear path for manuscript requests."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"Execution & Outcome"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"The homepage was redesigned to emphasise search and discovery. A dedicated banner introduced the digitisation request flow without interrupting exploration, resulting in a cleaner experience that better aligned with the platform's purpose."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Reflection"}</span>
                                <p className="text-sm text-zinc-200 italic font-sans">
                                    {"\"This decision reinforced an important lesson for me: every prominent action on a screen shapes user behaviour. Good product leadership isn't about making every feature more visible—it's about making the right behaviour feel natural.\""}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 7: TP 05 - Leadership Was About Aligning People More Than Designing Screens */}
                <section id="tp-5" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"TURNING POINT 05"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Leadership Was About Aligning People More Than Designing Screens"}
                        </h2>
                    </div>

                    {/* Workflow Diagram */}
                    <div className="border border-[#1f1f23] bg-[#0c0c0e] p-8 rounded-xl max-w-4xl space-y-4">
                        <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">{"How We Kept Delivery Moving"}</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-2">
                                <span className="text-sm font-mono text-emerald-400 uppercase block">{"Aligning Stakeholders"}</span>
                                <h5 className="text-sm font-bold text-white font-sans">{"Resolving Ambiguity"}</h5>
                                <p className="text-[15px] text-zinc-300 leading-relaxed">
                                    {"I worked closely with stakeholders to clarify evolving requirements before they reached the broader design and development teams. Product decisions were discussed, validated, and refined before becoming implementation work."}
                                </p>
                            </div>
                            <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-2">
                                <span className="text-sm font-mono text-emerald-400 uppercase block">{"Keeping Delivery Stable"}</span>
                                <h5 className="text-sm font-bold text-white font-sans">{"Protecting Delivery"}</h5>
                                <p className="text-[15px] text-zinc-300 leading-relaxed">
                                    {"While requirements continued to evolve, the remaining designers focused on stable UI components and developer handoffs. This allowed engineering to continue building without constantly reworking completed features."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Consolidated 4-part Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"The Challenge"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"As a first-of-its-kind government platform, requirements frequently evolved through stakeholder discussions. Translating changing expectations directly into development would have created unnecessary rework and slowed delivery."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"The Decision"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"Instead of involving the entire team in every evolving discussion, I acted as the primary point of alignment with stakeholders. Once decisions were sufficiently clear, I communicated priorities, design direction, and implementation details to the wider design team, allowing delivery to continue with minimal disruption."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-400 uppercase">{"Execution & Outcome"}</span>
                                <p className="text-[15px] text-zinc-200 leading-relaxed">
                                    {"Regular design reviews, collaborative discussions, and shared UI foundations helped the team maintain consistency while adapting to changing requirements. This approach enabled three designers and engineering to continue delivering without losing momentum during the initial launch."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Reflection"}</span>
                                <p className="text-sm text-zinc-200 italic font-sans">
                                    {"\"This project changed my understanding of leadership. My responsibility wasn't to have every answer—it was to reduce uncertainty for the team. The more ambiguity I absorbed through stakeholder alignment, the more confidently designers and developers could focus on building the product.\""}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 8: Outcomes - DATA GRID */}
                <section id="outcomes" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"OUTCOMES"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Measuring Success"}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Product Outcomes */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">
                                {"PRODUCT OUTCOMES"}
                            </span>
                            <ul className="text-[15px] text-zinc-300 leading-relaxed space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Search became the primary path for manuscript discovery."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Metadata standardisation enabled more consistent search results across institutions."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Simplified terminology and information hierarchy improved accessibility for researchers and general users."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Discovery remained the primary experience while preserving a clear contribution journey."}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Platform Stats */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">
                                {"PLATFORM IMPACT"}
                            </span>
                            <div className="space-y-3">
                                <div>
                                    <span className="text-2xl font-sans text-white block">{"14.3M+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono">{"Manuscripts"}</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-sans text-white block">{"11.6M+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono">{"Digitisation Requests"}</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-sans text-white block">{"60+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono">{"Participating Institutions"}</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-sans text-white block">{"10K+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono">{"Platform Users"}</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-sans text-white block">{"10K+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono">{"Android App Downloads"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Leadership Metrics */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">
                                {"LEADERSHIP OUTCOMES"}
                            </span>
                            <ul className="text-[15px] text-zinc-300 leading-relaxed space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Aligned stakeholders across evolving product requirements."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Led a multidisciplinary design team through an ambiguous first-of-its-kind government initiative."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Balanced delivery speed with long-term scalability through deliberate product prioritisation."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Established reusable design foundations that enabled consistent product development."}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Chapter 9: Reflection & Ending */}
                <section id="reflection" className="scroll-mt-16 space-y-12 min-h-[90vh] flex flex-col justify-center max-w-3xl mx-auto py-12">
                    {/* Header */}
                    <div className="space-y-4 text-center">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"REFLECTION"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"What This Project Taught Me"}
                        </h2>
                    </div>

                    {/* Large Memorable Quote */}
                    <div className="py-8 border-t border-b border-[#1f1f23] border-dashed text-center">
                        <blockquote className="text-xl md:text-3xl font-serif text-emerald-400 leading-normal max-w-2xl mx-auto italic">
                            {"\"Great product design isn't about creating more features. It's about helping people make better decisions at scale.\""}
                        </blockquote>
                    </div>

                    {/* 5 Leadership Principles */}
                    <div className="space-y-8">
                        <h3 className="text-sm font-mono uppercase text-zinc-500 tracking-wider">
                            {"What I'll Carry Forward"}
                        </h3>
                        <div className="space-y-6">
                            {/* Principle 1 */}
                            <div className="flex gap-4 items-start">
                                <span className="text-emerald-400 text-lg shrink-0 mt-0.5">{"✓"}</span>
                                <div className="space-y-1">
                                    <h4 className="text-base font-sans text-white font-semibold">{"Design for future scale"}</h4>
                                    <p className="text-sm font-mono text-emerald-400/90 font-medium tracking-wide">{"Design for the future, not today's scale."}</p>
                                    <p className="text-[15px] text-zinc-300 leading-relaxed">{"Discovery, metadata, and information architecture should anticipate growth rather than react to it."}</p>
                                </div>
                            </div>

                            {/* Principle 2 */}
                            <div className="flex gap-4 items-start">
                                <span className="text-emerald-400 text-lg shrink-0 mt-0.5">{"✓"}</span>
                                <div className="space-y-1">
                                    <h4 className="text-base font-sans text-white font-semibold">{"Prioritize the product first"}</h4>
                                    <p className="text-sm font-mono text-emerald-400/90 font-medium tracking-wide">{"Prioritize the product before the system."}</p>
                                    <p className="text-[15px] text-zinc-300 leading-relaxed">{"Foundations matter, but only after the core experience has been validated."}</p>
                                </div>
                            </div>

                            {/* Principle 3 */}
                            <div className="flex gap-4 items-start">
                                <span className="text-emerald-400 text-lg shrink-0 mt-0.5">{"✓"}</span>
                                <div className="space-y-1">
                                    <h4 className="text-base font-sans text-white font-semibold">{"Discovery before contribution"}</h4>
                                    <p className="text-sm font-mono text-emerald-400/90 font-medium tracking-wide">{"Let user intent guide product decisions."}</p>
                                    <p className="text-[15px] text-zinc-300 leading-relaxed">{"Discovery came before contribution because understanding existing knowledge was the platform's primary purpose."}</p>
                                </div>
                            </div>

                            {/* Principle 4 */}
                            <div className="flex gap-4 items-start">
                                <span className="text-emerald-400 text-lg shrink-0 mt-0.5">{"✓"}</span>
                                <div className="space-y-1">
                                    <h4 className="text-base font-sans text-white font-semibold">{"Align people before processes"}</h4>
                                    <p className="text-sm font-mono text-emerald-400/90 font-medium tracking-wide">{"Alignment is a leadership skill."}</p>
                                    <p className="text-[15px] text-zinc-300 leading-relaxed">{"Reducing ambiguity for designers, developers, and stakeholders created more value than solving interface problems alone."}</p>
                                </div>
                            </div>

                            {/* Principle 5 */}
                            <div className="flex gap-4 items-start">
                                <span className="text-emerald-400 text-lg shrink-0 mt-0.5">{"✓"}</span>
                                <div className="space-y-1">
                                    <h4 className="text-base font-sans text-white font-semibold">{"Simplicity creates trust"}</h4>
                                    <p className="text-sm font-mono text-emerald-400/90 font-medium tracking-wide">{"Simplicity is a product strategy."}</p>
                                    <p className="text-[15px] text-zinc-300 leading-relaxed">{"The most impactful improvements weren't additional features—they were making the right actions easier to understand."}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Closing Line */}
                    <div className="pt-6 border-t border-[#1f1f23] text-center">
                        <p className="text-[15px] text-zinc-400 font-mono italic">
                            {"These principles continue to shape how I lead product teams and approach large-scale digital transformation projects."}
                        </p>
                    </div>
                </section>

            </main>
        </div>
    );
}
