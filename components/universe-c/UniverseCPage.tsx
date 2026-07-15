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
    { id: "mission", label: "02. The Mission", icon: BookOpen },
    { id: "tp-1", label: "03. Browsing Was No Longer Enough", icon: GitBranch },
    { id: "tp-2", label: "04. We Designed for Future Scale", icon: Layers },
    { id: "tp-3", label: "05. We Chose Not to Build Everything", icon: Settings },
    { id: "tp-4", label: "06. We Prioritized Discovery Before Contribution", icon: Compass },
    { id: "tp-5", label: "07. Aligning People Over Designing Screens", icon: Activity },
    { id: "outcomes", label: "08. Outcomes", icon: CheckCircle },
    { id: "reflection", label: "09. Reflection & Ending", icon: MessageSquare },
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
                    <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest block">
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
                            {"CASE STUDY // Government Digital Transformation"}
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
                                <ul className="text-sm text-zinc-400 space-y-2 font-mono">
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
                                <ul className="text-sm text-zinc-400 space-y-2 font-mono">
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
                                <span className="font-mono text-sm text-zinc-400">{"Legacy Platform"}</span>
                            </div>
                            <div className="text-zinc-600 hidden md:block">{"➔"}</div>
                            <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-center w-full md:w-auto">
                                <span className="font-mono text-sm text-zinc-400">{"Scalable Discovery Platform"}</span>
                            </div>
                            <div className="text-zinc-600 hidden md:block">{"➔"}</div>
                            <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-center w-full md:w-auto">
                                <span className="font-mono text-sm text-zinc-400">
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
                            {"Chapter 02 // Cultural Preservation Context"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Why Digitisation Alone Wasn't Enough"}
                        </h2>
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                            {"India possesses centuries of scientific heritage, philosophies, and historical records. However, physical decay and lack of digitization make preservation a pressing challenge. Prior to this project, gaining access to records was slow, often blocked by paper-based validation bottlenecks. Researchers frequently waited months to request manual verifications of copies stored in separate libraries."}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-3">
                            <span className="text-sm font-mono text-emerald-400 uppercase">{"The Preservation Challenge"}</span>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {"Historical texts represent core intellectual assets. Physical deterioration and lack of high-fidelity backups meant centuries of records were at risk of vanishing permanently."}
                            </p>
                        </div>
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-3">
                            <span className="text-sm font-mono text-emerald-400 uppercase">{"The Discovery Challenge"}</span>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {"Early digitisation efforts created disconnected local databases with inconsistent spelling standards. Without a unified query system, researchers could not locate records across institutions."}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chapter 3: TP 01 - Browsing Was No Longer Enough */}
                <section id="tp-1" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 03 // Search Foundations"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Browsing Was No Longer Enough"}
                        </h2>
                    </div>

                    {/* Timeline Infographic */}
                    <div className="relative pl-8 space-y-8 border-l border-emerald-500/20 max-w-4xl">
                        <div className="relative space-y-2">
                            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-emerald-500/40">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-sm font-mono text-zinc-500 uppercase">{"100K Pilot"}</span>
                            <h4 className="text-sm font-semibold text-white">{"Traditional Browse Tree"}</h4>
                            <p className="text-sm text-zinc-400 max-w-2xl">
                                {"The initial catalog pilot supported 100K items. Library partners categorized manuscript folders in a classic taxonomy tree. The browse hierarchy seemed clean and functional."}
                            </p>
                        </div>

                        <div className="relative space-y-2">
                            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-emerald-500/40">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-sm font-mono text-zinc-500 uppercase">{"14.3M+ Target"}</span>
                            <h4 className="text-sm font-semibold text-white">{"Browsing No Longer Worked"}</h4>
                            <p className="text-sm text-zinc-400 max-w-2xl">
                                {"As target scope increased to 14.3M+ items across 60+ institutions, browsing trees collapsed. Multiple scripts, dialect spelling variations, and catalog differences meant identical items were scattered under completely different subfolders."}
                            </p>
                        </div>

                        <div className="relative space-y-2">
                            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-sm font-mono text-emerald-400 uppercase font-bold">{"Decision Point"}</span>
                            <h4 className="text-sm font-bold text-white">{"Tension Hook"}</h4>
                            <p className="text-sm text-zinc-200 max-w-2xl italic font-sans">
                                {"\"At around 100,000 manuscripts, browsing still worked reasonably well. As the repository expanded across institutions, we realized the existing discovery model would not scale.\""}
                            </p>
                        </div>

                        <div className="relative space-y-2">
                            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-emerald-500/40">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-sm font-mono text-zinc-500 uppercase">{"The Transformation"}</span>
                            <h4 className="text-sm font-semibold text-emerald-400">{"Search Became the Primary Experience"}</h4>
                            <p className="text-sm text-zinc-400 max-w-2xl">
                                {"Pivoted the interface architecture to a unified search input, simplifying manuscript lookups across fragmented collections."}
                            </p>
                        </div>
                    </div>

                    {/* Consolidated 4-part Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"The Challenge"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Inconsistent spelling conventions and naming variations across library catalogs made folder browsing increasingly difficult to manage. Restructuring directories manually or using simple tag filters were considered, but a unified manuscript search was required to aggregate results cleanly."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"The Decision"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"We co-defined search as the primary discovery experience, removing the hierarchical folder browse path. This required library partners to structure metadata upfront, but protected researchers from browsing empty or disorganized directories."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"Execution & Outcome"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Designed a search interface that mapped query spelling variations to normalized search parameters. The platform now supports discovery across 14.3M+ manuscripts from 60+ participating institutions."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Reflection"}</span>
                                <p className="text-sm text-zinc-200 italic font-sans">
                                    {"\"Search is not just an interface component; it is the retrieval model that dictates platform utility at scale. Aligning on search over browse protected the platform from catalog fragmentation.\""}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 4: TP 02 - We Designed for Future Scale */}
                <section id="tp-2" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 04 // Information Architecture Scale"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"We Designed for Future Scale"}
                        </h2>
                    </div>

                    {/* Ecosystem Schema Mapping */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl space-y-6 max-w-4xl">
                        <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">{"Data Import & Indexing Pipeline"}</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div className="border border-zinc-800 bg-zinc-900/50 p-4 rounded-lg space-y-2">
                                <span className="text-sm font-mono text-zinc-500 uppercase tracking-wider">{"60+ Institutions"}</span>
                                <div className="space-y-1">
                                    <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono">{"Library A Catalog (Script 1)"}</div>
                                    <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono">{"Library B Catalog (Script 2)"}</div>
                                    <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono">{"Library C Catalog (Script 3)"}</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-zinc-600 hidden md:block">{"➔"}</span>
                                <span className="text-sm font-mono text-emerald-400 text-center py-1">{"Common Metadata Framework"}</span>
                            </div>
                            <div className="border border-emerald-500/20 bg-emerald-950/10 p-4 rounded-lg space-y-2">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider">{"One Search Across All Collections (14.3M+)"}</span>
                                <div className="space-y-1">
                                    <div className="px-2 py-1 bg-zinc-950 border border-emerald-500/20 rounded text-sm font-mono text-zinc-300">{"Standard Tag: 'Rigveda'"}</div>
                                    <div className="px-2 py-1 bg-zinc-950 border border-emerald-500/20 rounded text-sm font-mono text-zinc-300">{"Standard Tag: 'Ayurveda'"}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Consolidated 4-part Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"The Challenge"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Partner libraries used different spelling formats and metadata labels, which prevented accurate search filtering at scale. We had to decide between letting libraries keep custom profiles or enforcing a common metadata framework."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"The Decision"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"We established standard metadata schemas across participating institutions, mapping local variables to core standardized tags. This added friction for catalog catalogers but kept search filters reliable."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"Execution & Outcome"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Created mapping interfaces and data validations for library administrators, integrating 14.3M+ manuscripts into a common framework."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Reflection"}</span>
                                <p className="text-sm text-zinc-200 italic font-sans">
                                    {"\"Designing for scale is about structuring database parameters before building visual layouts. Getting the data schema right ensures the platform remains stable as collections grow.\""}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 5: TP 03 - We Chose Not to Build Everything */}
                <section id="tp-3" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 05 // UI System Prioritization"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"We Chose Not to Build Everything"}
                        </h2>
                    </div>

                    {/* Decision Matrix Table */}
                    <div className="border border-[#1f1f23] bg-[#0c0c0e] rounded-xl overflow-hidden max-w-4xl">
                        <div className="p-4 border-b border-[#1f1f23] bg-zinc-900/50">
                            <span className="text-sm font-mono text-zinc-400 uppercase tracking-wider">{"Strategic Prioritization Matrix"}</span>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[#1f1f23] text-zinc-500 font-mono text-[10px] uppercase">
                                    <th className="p-4">{"Strategy Model"}</th>
                                    <th className="p-4">{"Friction / Cost"}</th>
                                    <th className="p-4">{"Delivery Speed"}</th>
                                    <th className="p-4">{"Status"}</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-[#1f1f23] text-zinc-400">
                                <tr>
                                    <td className="p-4 font-semibold text-white">{"Full custom component library (React/Figma)"}</td>
                                    <td className="p-4">{"High (Consumes significant sprint resources)"}</td>
                                    <td className="p-4 text-red-400">{"Delayed implementation schedule"}</td>
                                    <td className="p-4"><span className="px-2 py-0.5 bg-red-950/20 border border-red-500/20 text-red-400 rounded-full font-mono text-[10px]">{"DEFERRED"}</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-emerald-400">{"Core Visual Tokens & Pattern rules"}</td>
                                    <td className="p-4">{"Low (Minimal setup cost)"}</td>
                                    <td className="p-4 text-emerald-400">{"Unlocked immediate sprints"}</td>
                                    <td className="p-4"><span className="px-2 py-0.5 bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 rounded-full font-mono text-[10px]">{"CHOSEN"}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Consolidated 4-part Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"The Challenge"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Building and maintaining a custom component library would have consumed a significant portion of our design and development sprints, delaying our pilot validation."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"The Decision"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"We postponed building a full design system, choosing instead to enforce core visual tokens and pattern guidelines. This meant accepting minor visual inconsistencies in early code releases to free up design sprint capacity."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"Execution & Outcome"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Created spacing, typography, and color tokens that allowed the team to launch the platform pilot three months ahead of schedule, validating core user workflows with partner institutions."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Reflection"}</span>
                                <p className="text-sm text-zinc-200 italic font-sans">
                                    {"\"Design leadership means balancing UI system maturity against product maturity. Design systems exist to scale patterns that work. Gating system development saved critical validation sprints.\""}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 6: TP 04 - We Prioritized Discovery Before Contribution */}
                <section id="tp-4" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 06 // Alignment & Data Quality"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"We Prioritized Discovery Before Contribution"}
                        </h2>
                    </div>

                    {/* Dialogue-style Storyboard */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl">
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-2">
                            <span className="text-sm font-mono text-zinc-500 uppercase">{"01 / Stakeholder Goal"}</span>
                            <h5 className="text-sm font-bold text-white">{"\"FAB Upload\""}</h5>
                            <p className="text-sm text-zinc-400">
                                {"Stakeholders requested a prominent \"Upload\" FAB on the homepage to boost manuscript ingestion rates."}
                            </p>
                        </div>
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-2">
                            <span className="text-sm font-mono text-zinc-500 uppercase">{"02 / User Goal"}</span>
                            <h5 className="text-sm font-bold text-white">{"Find verified records"}</h5>
                            <p className="text-sm text-zinc-400">
                                {"Users visited the homepage to search and discover existing copies before making digitisation requests."}
                            </p>
                        </div>
                        <div className="border border-red-500/20 bg-red-950/10 p-6 rounded-xl space-y-2">
                            <span className="text-sm font-mono text-zinc-500 uppercase">{"03 / The Conflict"}</span>
                            <h5 className="text-sm font-bold text-red-400">{"Ingest duplicates"}</h5>
                            <p className="text-sm text-zinc-400">
                                {"Prominent upload buttons encouraged duplicate entries of manuscripts before checking the database index."}
                            </p>
                        </div>
                        <div className="border border-emerald-500/20 bg-emerald-950/10 p-6 rounded-xl space-y-2">
                            <span className="text-sm font-mono text-zinc-500 uppercase">{"04 / The Compromise"}</span>
                            <h5 className="text-sm font-bold text-emerald-400">{"Contextual banner"}</h5>
                            <p className="text-sm text-zinc-400">
                                {"We did not ship the FAB. Uploads are contextual, appearing only when a search returns empty results."}
                            </p>
                        </div>
                    </div>

                    {/* Consolidated 4-part Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"The Challenge"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Allowing easy uploads directly from the homepage led to duplicate entries, as users uploaded manuscripts that were already cataloged. Gating contribution behind queries clashed with adoption metric targets."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"The Decision"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"We chose not to ship the homepage upload button, routing contribution flows exclusively through empty search result states. This added friction to the contribution path but protected catalog cleanliness."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"Execution & Outcome"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Implemented contextual contribution triggers that only appear when a search query returns no results, keeping the database catalog clean."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Reflection"}</span>
                                <p className="text-sm text-zinc-200 italic font-sans">
                                    {"\"Design leadership is about defending system value. Choosing where to introduce friction is vital to protect the accuracy of catalog indexes.\""}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 7: TP 05 - Aligning People Over Designing Screens */}
                <section id="tp-5" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 07 // Managing Ambiguity"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Leadership Was About Aligning People More Than Designing Screens"}
                        </h2>
                    </div>

                    {/* Workflow Diagram */}
                    <div className="border border-[#1f1f23] bg-[#0c0c0e] p-8 rounded-xl max-w-4xl space-y-4">
                        <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">{"Dual-Track Sprint Shield Model"}</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-2">
                                <span className="text-sm font-mono text-emerald-400 uppercase block">{"Track 1: Ambiguity Resolution"}</span>
                                <p className="text-sm text-zinc-400">
                                    {"One designer worked directly with policy experts to prototype upcoming layout guidelines, mapping future constraints."}
                                </p>
                            </div>
                            <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-2">
                                <span className="text-sm font-mono text-emerald-400 uppercase block">{"Track 2: Development Sprints"}</span>
                                <p className="text-sm text-zinc-400">
                                    {"Two designers focused on stable interface blocks and development handoff specs to keep engineering active."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Consolidated 4-part Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"The Challenge"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Frequent updates to policy details risked disrupting active development cycles and design sprints, leaving developers waiting for specifications."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"The Decision"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"We structured design sprints to run on parallel tracks: one track resolved policy ambiguity while the other defined stable frontend blocks. This required constant alignment checks but shielded developers from changing requirements."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-zinc-500 uppercase">{"Execution & Outcome"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Established component handoff patterns and co-developed interface frameworks to successfully navigate shifting specifications without delaying the launch."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Reflection"}</span>
                                <p className="text-sm text-zinc-200 italic font-sans">
                                    {"\"Design leaders are shock absorbers. Running dual-track sprints kept engineering focused on stable code blocks while we resolved policy details on the design side.\""}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 8: Outcomes - DATA GRID */}
                <section id="outcomes" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Chapter 08 // Real Impact"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Measuring Success"}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Product Outcomes */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">
                                {"Product Evolution"}
                            </span>
                            <ul className="text-sm text-zinc-400 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Fast discoverability via unified search."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Consistent layout rules matching accessibility."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Simplified terminology for non-expert users."}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Platform Stats */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">
                                {"Platform Impact"}
                            </span>
                            <div className="space-y-3">
                                <div>
                                    <span className="text-2xl font-sans text-white block">{"14.3M+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono">{"Manuscripts cataloged"}</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-sans text-white block">{"11.6M+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono">{"Preservation requests"}</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-sans text-white block">{"60+"}</span>
                                    <span className="text-sm text-zinc-500 font-mono">{"Institutions"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Leadership Metrics */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-sm font-mono uppercase text-emerald-400 tracking-wider block">
                                {"Leadership Outcomes"}
                            </span>
                            <ul className="text-sm text-zinc-400 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Cross-functional alignment across ministries."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Sustained sprint velocity through transitions."}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Pragmatic design governance model."}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Chapter 9: Reflection & Ending */}
                <section id="reflection" className="scroll-mt-16 space-y-8 min-h-[40vh] flex flex-col justify-center max-w-3xl mx-auto">
                    <div className="space-y-4 text-center">
                        <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Chapter 09 // Reflection"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"The Strategic Takeaway"}
                        </h2>
                    </div>

                    <div className="space-y-8 mt-6">
                        <p className="text-xl md:text-2xl text-zinc-200 font-sans italic leading-relaxed text-center">
                            {"\"I entered this project expecting to solve interface problems. Instead, I learned that the hardest design challenges were organizational—aligning policy, engineering, domain experts, and user needs into one coherent product strategy.\""}
                        </p>
                        <div className="w-12 h-px bg-emerald-500/50 mx-auto" />
                        <p className="text-sm md:text-base text-zinc-400 leading-relaxed text-center">
                            {"Gyan Bharatam fundamentally changed how I think about product strategy, design leadership, and designing for national scale. It proved that a design leader's primary tool is alignment—unlocking complex cross-functional pathways to create lasting preservation platforms."}
                        </p>
                    </div>
                </section>

            </main>
        </div>
    );
}
