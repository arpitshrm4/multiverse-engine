"use client";

import React, { useState } from "react";
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
    { id: "tp-1", label: "03. Browsing Was Never Going to Scale", icon: GitBranch },
    { id: "tp-2", label: "04. Designing for an Unknown Future", icon: Layers },
    { id: "tp-3", label: "05. Why We Deliberately Didn't Build a DS", icon: Settings },
    { id: "tp-4", label: "06. The Button We Chose Not to Ship", icon: Compass },
    { id: "tp-5", label: "07. Leading Without a Playbook", icon: Activity },
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

    console.log("Rendering UniverseCPage!");

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
            <main className="flex-1 max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-36">

                {/* Chapter 1: The Executive Overview - HIGH-IMPACT HERO */}
                <section id="overview" className="scroll-mt-16 space-y-16 min-h-[90vh] flex flex-col justify-center border-b border-[#1f1f23] pb-24">
                    
                    {/* Eyebrow & Title */}
                    <div className="space-y-6">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] block">
                            {"CASE STUDY // Government Digital Transformation"}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight font-light tracking-tight">
                            {"Scaling India's Manuscript Discovery from 100K Legacy Records to 14.3M+ Digital Assets"}
                        </h1>
                    </div>

                    {/* Transformation Statement */}
                    <div className="max-w-3xl">
                        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                            {"Led product strategy, UX direction, stakeholder alignment, and design execution to transform a fragmented manuscript preservation ecosystem into a scalable digital platform supporting discovery, digitization, and collaboration across India."}
                        </p>
                    </div>

                    {/* Platform Scale Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 py-8 border-t border-b border-[#1f1f23] border-dashed">
                        <div>
                            <span className="text-4xl md:text-5xl font-serif text-white block tracking-tight">{"14.3M+"}</span>
                            <span className="text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Digital Manuscripts"}</span>
                        </div>
                        <div>
                            <span className="text-4xl md:text-5xl font-serif text-white block tracking-tight">{"11.6M+"}</span>
                            <span className="text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Digitisation Requests"}</span>
                        </div>
                        <div>
                            <span className="text-4xl md:text-5xl font-serif text-white block tracking-tight">{"60+"}</span>
                            <span className="text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Partner Institutions"}</span>
                        </div>
                        <div>
                            <span className="text-4xl md:text-5xl font-serif text-white block tracking-tight">{"10K+"}</span>
                            <span className="text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Platform Users"}</span>
                        </div>
                        <div>
                            <span className="text-4xl md:text-5xl font-serif text-white block tracking-tight">{"10K+"}</span>
                            <span className="text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Mobile Downloads"}</span>
                        </div>
                        <div>
                            <span className="text-4xl md:text-5xl font-serif text-white block tracking-tight">{"3"}</span>
                            <span className="text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-wider block mt-1">{"Designers Led"}</span>
                        </div>
                    </div>

                    {/* Role & Ownership */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <span className="text-xs font-mono uppercase text-zinc-500 block">{"Role"}</span>
                            <span className="text-lg font-serif text-white block mt-1">{"Design Manager"}</span>
                        </div>
                        <div className="md:col-span-2">
                            <span className="text-xs font-mono uppercase text-zinc-500 block">{"Ownership Scope"}</span>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <ul className="text-xs text-zinc-400 space-y-2 font-mono">
                                    <li className="flex items-center gap-2">
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full" />
                                        <span>{"Product Strategy"}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full" />
                                        <span>{"UX Direction"}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1 w-1 bg-emerald-400 rounded-full" />
                                        <span>{"Team Leadership"}</span>
                                    </li>
                                </ul>
                                <ul className="text-xs text-zinc-400 space-y-2 font-mono">
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
                                        <span>{"Critical Design Execution"}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Transformation Visual */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl space-y-4">
                        <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">{"System Transformation Model"}</span>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
                            <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-center w-full md:w-auto">
                                <span className="font-mono text-xs text-zinc-400">{"100K Legacy Records"}</span>
                            </div>
                            <div className="text-zinc-600 hidden md:block">{"➔"}</div>
                            <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-center w-full md:w-auto">
                                <span className="font-mono text-xs text-zinc-400">{"14.3M+ Manuscripts"}</span>
                            </div>
                            <div className="text-zinc-600 hidden md:block">{"➔"}</div>
                            <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-center w-full md:w-auto">
                                <span className="font-mono text-xs text-zinc-400">{"60+ Partner Institutions"}</span>
                            </div>
                            <div className="text-zinc-600 hidden md:block">{"➔"}</div>
                            <div className="px-4 py-2.5 bg-emerald-950/20 border border-emerald-500/20 rounded-lg text-center w-full md:w-auto shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                                <span className="font-mono text-xs text-emerald-400 font-bold">{"National Digital Heritage Platform"}</span>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center pt-8">
                        <button 
                            onClick={() => scrollToSection("mission")}
                            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors text-xs font-mono"
                        >
                            <span>{"Read The Transformation Story"}</span>
                            <ChevronDown size={16} className="animate-bounce" />
                        </button>
                    </div>

                </section>

                {/* Chapter 2: The Mission - CONTEXTUAL BACKGROUND */}
                <section id="mission" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Chapter 02 // Cultural Preservation Context"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Why India Needed a Unified Manuscript Network"}
                        </h2>
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                            {"Centuries of scientific heritage, philosophies, and historical records are decaying. Gaining access was blocked by paper validation bottlenecks. Scholars waited months to request manual verifications of copies stored in separate libraries."}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-3">
                            <span className="text-xs font-mono text-emerald-400 uppercase">{"Why Manuscript Preservation?"}</span>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                {"Historical texts represent core intellectual assets. Physical deterioration and lack of high-fidelity backups meant centuries of records were at risk of vanishing permanently."}
                            </p>
                        </div>
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-3">
                            <span className="text-xs font-mono text-emerald-400 uppercase">{"Why Ingestion Digitisation Wasn't Enough?"}</span>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                {"Digitisation created thousands of disconnected local PDFs, but no unified index metadata. Scholars couldn't search across libraries, leaving assets undiscovered."}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chapter 3: TP 01 - Browsing Was Never Going to Scale */}
                <section id="tp-1" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-24">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 01 // Search Foundations"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Browsing Was Never Going to Scale"}
                        </h2>
                    </div>

                    {/* Timeline Infographic */}
                    <div className="relative pl-8 space-y-8 border-l border-emerald-500/20 max-w-4xl">
                        <div className="relative space-y-2">
                            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-emerald-500/40">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-xs font-mono text-zinc-500 uppercase">{"100K Pilot"}</span>
                            <h4 className="text-sm font-semibold text-white">{"Traditional Browse Tree"}</h4>
                            <p className="text-xs text-zinc-400 max-w-2xl">
                                {"The initial catalog pilot supported 100K items. Library partners categorized manuscript folders in a classic taxonomy tree. The browse hierarchy seemed clean and functional."}
                            </p>
                        </div>

                        <div className="relative space-y-2">
                            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-emerald-500/40">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-xs font-mono text-zinc-500 uppercase">{"14.3M+ Ingestion Targets"}</span>
                            <h4 className="text-sm font-semibold text-white">{"The Taxonomic Collapse"}</h4>
                            <p className="text-xs text-zinc-400 max-w-2xl">
                                {"As target scope increased to 14.3M+ items across 60+ institutions, browsing trees collapsed. Multiple scripts, dialect spelling variations, and catalog differences meant identical items were scattered under completely different subfolders."}
                            </p>
                        </div>

                        <div className="relative space-y-2">
                            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-xs font-mono text-emerald-400 uppercase font-bold">{"Decision Point"}</span>
                            <h4 className="text-sm font-bold text-white">{"Browsing Was Never Going to Scale"}</h4>
                            <p className="text-xs text-zinc-300 max-w-2xl italic font-serif">
                                {"\"We realized something uncomfortable. Browsing would never survive a repository growing into millions of manuscripts. We had to abandon directory subfolders entirely.\""}
                            </p>
                        </div>

                        <div className="relative space-y-2">
                            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-emerald-500/40">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-xs font-mono text-zinc-500 uppercase">{"The Transformation"}</span>
                            <h4 className="text-sm font-semibold text-emerald-400">{"Semantic Indexed Search Wins"}</h4>
                            <p className="text-xs text-zinc-400 max-w-2xl">
                                {"Pivoted the interface architecture to a unified indexed search input, reducing manuscript lookups from 3.5 minutes to under 22 seconds."}
                            </p>
                        </div>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Challenge"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Inconsistent indexing dialects and library naming schemas made category-based folder browsing impossible to manage."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Options Considered"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Taxonomy folders vs. tag clusters vs. semantic indexed search. Command search wins."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Decision"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"I established search as the primary product strategy: removing the directory browse path entirely and mapping inputs to semantic tag translation engines."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Trade-offs"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Sacrificed general folder browsing pathways. Librarians had to standardise metadata attributes upfront to support indexing rules."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Execution"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Built smart search index translation libraries that mapped different scripts and names to unified tags."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Outcome"}</span>
                                <p className="text-sm text-emerald-400 font-semibold">
                                    {"Average lookup speed fell to 22 seconds, eliminating classification silos."}
                                </p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Leadership Reflection"}</span>
                            <p className="text-sm text-zinc-400 italic font-serif">
                                {"\"Search is not an interface component; it is the data retrieval model that dictates platform utility at scale. Standing firm on search over browse protected the catalog from metadata fragmentation.\""}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chapter 4: TP 02 - We Designed for a Future That Didn't Exist Yet */}
                <section id="tp-2" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 02 // Information Architecture Scale"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"We Designed for a Future That Didn't Exist Yet"}
                        </h2>
                    </div>

                    {/* Ecosystem Schema Mapping */}
                    <div className="bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl space-y-6 max-w-4xl">
                        <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">{"Ingestion & Indexing Data Pipeline"}</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div className="border border-zinc-800 bg-zinc-900/50 p-4 rounded-lg space-y-2">
                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{"60+ Regional Library Networks"}</span>
                                <div className="space-y-1">
                                    <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono">{"Library A Catalog (Script 1)"}</div>
                                    <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono">{"Library B Catalog (Script 2)"}</div>
                                    <div className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono">{"Library C Catalog (Script 3)"}</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-zinc-600 hidden md:block">{"➔"}</span>
                                <span className="text-[10px] font-mono text-emerald-400 text-center py-1">{"Relational Translation Schema"}</span>
                            </div>
                            <div className="border border-emerald-500/20 bg-emerald-950/10 p-4 rounded-lg space-y-2">
                                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">{"Unified Search Catalog (14.3M+)"}</span>
                                <div className="space-y-1">
                                    <div className="px-2 py-1 bg-zinc-950 border border-emerald-500/20 rounded text-[10px] font-mono text-zinc-300">{"Standard Tag: 'Rigveda'"}</div>
                                    <div className="px-2 py-1 bg-zinc-950 border border-emerald-500/20 rounded text-[10px] font-mono text-zinc-300">{"Standard Tag: 'Ayurveda'"}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Challenge"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Inconsistent script referencing and local metadata attributes across regional databases caused search filter failures as volume grew."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Options Considered"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Library-specific customizable profiles vs. unified relational mapping translation schema. Standard mapping chosen."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Decision"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"I re-designed the metadata schema structure, forcing localized input variables to translate into standardized primary search tags at data ingestion."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Trade-offs"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"We increased the catalog mapping setup friction during the library ingestion phase, but protected the system's runtime stability."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Execution"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Created data validation checklists and data mapping screens to allow librarians to easily sync records to standardized tags."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Outcome"}</span>
                                <p className="text-sm text-emerald-400 font-semibold">
                                    {"Indexed 14.3M+ manuscript items without query latency, ensuring future database growth compatibility."}
                                </p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Leadership Reflection"}</span>
                            <p className="text-sm text-zinc-400 italic font-serif">
                                {"\"Designing for scale is database-first, not interface-first. Aligning information architecture parameters before building layouts is what protects product stability under extreme scale.\""}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chapter 5: TP 03 - Why We Deliberately Didn't Build a Design System */}
                <section id="tp-3" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 03 // UI System Prioritization"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Why We Deliberately Didn't Build a Design System"}
                        </h2>
                    </div>

                    {/* Decision Matrix Table */}
                    <div className="border border-[#1f1f23] bg-[#0c0c0e] rounded-xl overflow-hidden max-w-4xl">
                        <div className="p-4 border-b border-[#1f1f23] bg-zinc-900/50">
                            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{"Strategic Prioritization Matrix"}</span>
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
                            <tbody className="text-xs divide-y divide-[#1f1f23] text-zinc-400">
                                <tr>
                                    <td className="p-4 font-semibold text-white">{"Full custom component library (React/Figma)"}</td>
                                    <td className="p-4">{"High (Consumes 40% of sprint resources)"}</td>
                                    <td className="p-4 text-red-400">{"Slowed down by months"}</td>
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

                    {/* Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Challenge"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Building a new platform from scratch. Teams wanted standard custom design systems components built out before workflow validation had occurred."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Options Considered"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Delayed launch to build custom design systems vs. using basic core token constraints first. Token rules chosen."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Decision"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"I made the strategic decision to postpone the design system, prioritizing product validation over layout polish. We established a minimal color/spacing token set and checked styles manually."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Trade-offs"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Accepted visual discrepancies in initial builds to free up 40% of design sprint resources for core flow layout validation."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Execution"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Set up basic spacing and layout visual tokens, conducting manual design checkouts to align styling values."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Outcome"}</span>
                                <p className="text-sm text-emerald-400 font-semibold">
                                    {"Launched the platform pilot three months early, collecting validation metrics and securing future funding."}
                                </p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Leadership Reflection"}</span>
                            <p className="text-sm text-zinc-400 italic font-serif">
                                {"\"Design leadership means balancing UI system maturity against product maturity. Design systems exist to scale patterns that work. Postponing it saved critical validation sprints.\""}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chapter 6: TP 04 - The Button We Chose Not to Ship */}
                <section id="tp-4" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 04 // Alignment & Data Quality"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"The Button We Chose Not to Ship"}
                        </h2>
                    </div>

                    {/* Dialogue-style Storyboard */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl">
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-2">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase">{"01 / Stakeholder Goal"}</span>
                            <h5 className="text-xs font-bold text-white">{"\"Contribute FAB\""}</h5>
                            <p className="text-[11px] text-zinc-400">
                                {"Stakeholders requested a prominent \"Upload\" FAB on the homepage to boost manuscript ingestion rates."}
                            </p>
                        </div>
                        <div className="border border-[#1f1f23] bg-[#0c0c0e]/50 p-6 rounded-xl space-y-2">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase">{"02 / User Goal"}</span>
                            <h5 className="text-xs font-bold text-white">{"Find verified record"}</h5>
                            <p className="text-[11px] text-zinc-400">
                                {"Users visited the homepage to search and discover existing copies before making digitisation requests."}
                            </p>
                        </div>
                        <div className="border border-red-500/20 bg-red-950/10 p-6 rounded-xl space-y-2">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase">{"03 / The Conflict"}</span>
                            <h5 className="text-xs font-bold text-red-400">{"Ingest duplicates"}</h5>
                            <p className="text-[11px] text-zinc-400">
                                {"Prominent upload buttons encouraged duplicate entries of manuscripts before checking the database index."}
                            </p>
                        </div>
                        <div className="border border-emerald-500/20 bg-emerald-950/10 p-6 rounded-xl space-y-2">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase">{"04 / The Compromise"}</span>
                            <h5 className="text-xs font-bold text-emerald-400">{"Contexual banner"}</h5>
                            <p className="text-[11px] text-zinc-400">
                                {"We did not ship the FAB. Uploads are contextual, appearing only when a search returns empty results."}
                            </p>
                        </div>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Challenge"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Stakeholders pushed for homepage contribution buttons, but duplicate submissions threatened database data cleanliness."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Options Considered"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Deploy the homepage upload button vs. gate contribution behind query empty states. Context gating chosen."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Decision"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"I chose to remove the homepage FAB, aligning stakeholders by routing uploads to contextual empty search states."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Trade-offs"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Increased action clicks for contributors, but protected the system catalog from duplicate index entries."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Execution"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Created the \"Request for Digitisation\" banners inside search result blank views."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Outcome"}</span>
                                <p className="text-sm text-emerald-400 font-semibold">
                                    {"Duplicate manuscript registry submissions dropped by 47%, protecting database cleanliness."}
                                </p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Leadership Reflection"}</span>
                            <p className="text-sm text-zinc-400 italic font-serif">
                                {"\"Design leadership is about defending system value. Choosing where to introduce friction is vital to protect the accuracy of data indexing.\""}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chapter 7: TP 05 - Leading Without a Playbook */}
                <section id="tp-5" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Turning Point 05 // Managing Ambiguity"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Leading Without a Playbook"}
                        </h2>
                    </div>

                    {/* Workflow Diagram */}
                    <div className="border border-[#1f1f23] bg-[#0c0c0e] p-8 rounded-xl max-w-4xl space-y-4">
                        <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">{"Dual-Track Sprint Shield Model"}</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-2">
                                <span className="text-xs font-mono text-emerald-400 uppercase block">{"Track 1: Ambiguity Resolution"}</span>
                                <p className="text-[11px] text-zinc-400">
                                    {"One designer worked directly with policy experts to prototype upcoming layout guidelines, mapping future constraints."}
                                </p>
                            </div>
                            <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-2">
                                <span className="text-xs font-mono text-emerald-400 uppercase block">{"Track 2: Development Sprints"}</span>
                                <p className="text-[11px] text-zinc-400">
                                    {"Two designers focused on stable interface blocks and development handoff specs to keep engineering active."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Storytelling Framework */}
                    <div className="space-y-6 max-w-4xl bg-[#0c0c0e] border border-[#1f1f23] p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Challenge"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Shifting guidelines mid-project stalled design loops and left engineering teams waiting for specifications."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Options Considered"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Halt sprints vs. create dual-track sprint shields. Sprint shields chosen."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Decision"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"I set up dual-track work cycles, shielding design sprints and code pipelines from shifting policy directions."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Trade-offs"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Demanded constant align loops on design updates, but kept development timelines 100% active."}
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 border-b border-[#1f1f23]/60 pb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Execution"}</span>
                                <p className="text-sm text-zinc-300">
                                    {"Structured custom frontend specifications matching visual token parameters."}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500 uppercase">{"Outcome"}</span>
                                <p className="text-sm text-emerald-400 font-semibold">
                                    {"Adjusted team roadmaps within 48 hours without launch target delays."}
                                </p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">{"Leadership Reflection"}</span>
                            <p className="text-sm text-zinc-400 italic font-serif">
                                {"\"Design leaders are shock absorbers. Running dual-track sprints kept engineering focused on stable code blocks while we aligned policy details on the design side.\""}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chapter 8: Outcomes - DATA GRID */}
                <section id="outcomes" className="scroll-mt-16 space-y-8 border-b border-[#1f1f23] pb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Chapter 08 // Real Impact"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"Measuring Success"}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Product Outcomes */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">
                                {"Product Evolution"}
                            </span>
                            <ul className="text-xs text-zinc-400 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">{"✓"}</span>
                                    <span>{"Fast discoverability via indexed search."}</span>
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
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">
                                {"Platform Impact"}
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
                                    <span className="text-xs text-zinc-500 font-mono">{"Partner institutions"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Leadership Metrics */}
                        <div className="bg-[#0c0c0e] border border-[#1f1f23] p-6 rounded-xl space-y-4">
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block">
                                {"Leadership Outcomes"}
                            </span>
                            <ul className="text-xs text-zinc-400 space-y-2">
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
                                    <span>{"Pragmatic governance token models."}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Chapter 9: Reflection & Ending */}
                <section id="reflection" className="scroll-mt-16 space-y-8 min-h-[40vh] flex flex-col justify-center max-w-3xl mx-auto">
                    <div className="space-y-4 text-center">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] block">
                            {"Chapter 09 // Reflection"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight">
                            {"The Strategic Takeaway"}
                        </h2>
                    </div>

                    <div className="space-y-8 mt-6">
                        <p className="text-xl md:text-2xl text-zinc-300 font-serif italic leading-relaxed text-center">
                            {"\"The hardest part of designing government products isn't designing interfaces. It's aligning policy, operations, engineering, and user needs into a product that can evolve for years.\""}
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
