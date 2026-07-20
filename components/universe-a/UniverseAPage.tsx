"use client";

import { motion } from "framer-motion";
import { useUniverse } from "@/context/UniverseContext";
import Navbar from "@/components/universe-a/Navbar";
import Footer from "@/components/universe-a/Footer";
import DimensionIndicator from "@/components/universe-a/DimensionIndicator";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";

// Slow, calm, cinematic motion variants
const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }
    }
};

const reflectionVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, delay: 0.2, ease: "easeOut" as const }
    }
};

export default function UniverseAPage({ onReturnToLobby }: { onReturnToLobby?: () => void }) {
    const { setUniverse } = useUniverse();

    return (
        <div
            data-universe="A"
            className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative overflow-x-hidden selection:bg-[#ffb000]/30 selection:text-white font-sans"
        >
            <Navbar />

            <main className="relative pt-20">

                {/* Hero Section - Journal Entrance */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="pb-[140px] pt-[140px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-[90px] items-center">
                        <div className="flex flex-col gap-[32px] items-center w-full max-w-[952px] text-center">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffb000]/10 border border-[#ffb000]/20 text-[#ffb000] text-xs font-mono tracking-widest uppercase mb-2">
                                <BookOpen className="w-3.5 h-3.5" />
                                <span>Personal Journal • Perspective A</span>
                            </div>
                            <h1 className="font-serif font-semibold text-[#eaeaea] text-3xl md:text-[88px] leading-[1.05] tracking-tight w-full">
                                This is not my portfolio. This is everything that shaped how I think before I ever designed anything.
                            </h1>
                        </div>

                        <div className="flex flex-col gap-[40px] items-center w-full">
                            <div className="flex flex-col gap-[16px] items-center w-full text-center">
                                <span className="font-sans font-semibold text-[#ffb000] text-[13px] uppercase tracking-widest">
                                    Manifesto
                                </span>
                                <p className="font-sans font-normal leading-relaxed text-[#a0a0a0] text-[19px] max-w-[580px]">
                                    If you're still here, this might take a few minutes.
                                </p>
                            </div>
                            <div className="h-[300px] md:h-[520px] w-full max-w-[1100px] relative rounded-[6px] overflow-hidden bg-zinc-900/60 border border-white/5 group shadow-2xl">
                                <img alt="Journal Spotlight" className="absolute inset-0 object-cover w-full h-full filter brightness-90 group-hover:scale-105 transition-transform duration-1000" src="/images/hero-spotlight.png" />
                                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[11px] font-mono text-white/70">
                                    Journal Artifact • Personal Memory
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="w-full">
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20">
                        <div className="bg-[#262626] h-px w-full" />
                    </div>
                </div>

                {/* Section 01: Where I come from - Pattern: Full-Width Image Banner First */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="py-[120px] md:py-[220px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-12 md:gap-[90px] items-start">
                        {/* Section Header */}
                        <div className="flex gap-[32px] items-center w-full">
                            <div className="flex flex-col gap-[12px] items-start shrink-0">
                                <span className="font-mono font-semibold text-[#ffb000] text-[14px]">
                                    (01)
                                </span>
                                <div className="bg-[#ffb000] h-[2px] w-[40px]" />
                            </div>
                            <h2 className="font-serif font-semibold text-[#eaeaea] text-4xl md:text-[84px] leading-none">
                                Where I come from
                            </h2>
                        </div>

                        {/* Rhythm Variation: Full-width Image First */}
                        <div className="w-full relative rounded-[4px] overflow-hidden bg-zinc-900/50 h-[300px] md:h-[480px] border border-white/5">
                            <img alt="Where I come from" className="object-cover w-full h-full filter brightness-95" src="/images/where-i-come-from.png" />
                            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded border border-white/10 text-[11px] font-mono text-white/70">
                                Aligarh Archive • Original Roots
                            </div>
                        </div>

                        {/* Story Text */}
                        <div className="max-w-[900px] font-sans font-normal gap-[40px] flex flex-col items-start leading-[1.9]">
                            <div className="space-y-6">
                                <p className="text-[28px] md:text-[36px] font-serif italic text-[#eaeaea] leading-tight">
                                    Life there was simple. Predictable. Structured.
                                </p>
                                <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                    I was born in Aligarh, Uttar Pradesh. There wasn't much exposure to design or technology. What I had instead was time. Time to observe.
                                </p>
                                <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                    At sixteen, I moved to Faridabad for education. A new place. New expectations. That was my first real shift.
                                </p>
                            </div>

                            <p className="text-[26px] md:text-[30px] font-serif italic text-[#eaeaea] leading-relaxed border-l-2 border-[#ffb000] pl-6 py-2 my-4">
                                "I didn't realise it then, but <span className="text-[#ffb000] font-semibold">environment quietly changes how you think</span>."
                            </p>

                            {/* Present-Day Reflection */}
                            <motion.div
                                variants={reflectionVariants}
                                className="w-full mt-4 p-5 rounded-[4px] bg-zinc-900/40 border-l-2 border-[#ffb000]/50 border-y border-r border-white/5"
                            >
                                <span className="font-mono text-xs text-[#ffb000] uppercase tracking-wider block mb-1">
                                    Present-Day Reflection
                                </span>
                                <p className="font-serif italic text-[15px] text-[#d4d4d8] leading-relaxed">
                                    Looking back, Aligarh taught me that constraint isn't a limitation—it's the foundation of acute observation.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 02: Growing up - Pattern: Bold Quote Statement First */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="bg-[#111111] py-[120px] md:py-[220px] relative w-full overflow-hidden"
                >
                    <span className="absolute font-serif font-bold leading-none opacity-5 overflow-hidden text-[#404040] text-[120px] md:text-[500px] whitespace-nowrap pointer-events-none select-none top-[120px] left-0">
                        GROWING UP
                    </span>
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-12 md:gap-[100px] items-start relative z-10">
                        <div className="flex flex-col gap-[24px] items-start w-full md:w-[800px]">
                            <div className="flex flex-col gap-[12px] items-start">
                                <span className="font-mono font-semibold text-[#ffb000] text-[14px]">
                                    (02)
                                </span>
                                <div className="bg-[#ffb000] h-[2px] w-[40px]" />
                            </div>
                            <h2 className="font-serif font-semibold text-[#eaeaea] text-4xl md:text-[84px] leading-none">
                                I wasn't the loudest person in the room.
                            </h2>
                        </div>

                        {/* Rhythm Variation: Bold Opening Statement before Image */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
                            <div className="md:col-span-7 flex flex-col font-sans gap-[32px]">
                                <p className="text-[28px] md:text-[34px] font-serif italic text-[#eaeaea] leading-tight">
                                    I was a curious child. More than that, I was an observer.
                                </p>
                                <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                    I've always been shy. I still am. I spoke less. But I noticed more. I grew up in a well-to-do family, which made me a little stubborn early on. At that time, I didn't see it. Later, I did.
                                </p>
                                <p className="text-[26px] md:text-[28px] font-serif italic text-[#eaeaea] leading-relaxed border-l-2 border-[#ffb000] pl-6 py-2 my-2">
                                    "When I was around ten or eleven, <span className="text-[#ffb000] font-semibold">curiosity turned into action</span>. I started opening my electronic toys. Not to break them. To understand them."
                                </p>

                                {/* Present-Day Reflection */}
                                <motion.div
                                    variants={reflectionVariants}
                                    className="w-full mt-4 p-5 rounded-[4px] bg-zinc-950/60 border-l-2 border-[#ffb000]/50 border-y border-r border-white/5"
                                >
                                    <span className="font-mono text-xs text-[#ffb000] uppercase tracking-wider block mb-1">
                                        Present-Day Reflection
                                    </span>
                                    <p className="font-serif italic text-[15px] text-[#d4d4d8] leading-relaxed">
                                        Being an observer was never about passivity. Taking things apart to understand how they work was my earliest practice of UX empathy.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="md:col-span-5 relative">
                                <div className="h-[320px] md:h-[460px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50 border border-white/5 shadow-xl">
                                    <img alt="Growing up" className="object-cover w-full h-full" src="/images/growing-up.png" />
                                </div>
                                <div className="mt-2 text-right font-mono text-[11px] text-white/50">
                                    Circa 2004 • Electronic Toy Teardowns
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 03: Things that changed me - Pattern: Story Reveal First, Image Second */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="py-[120px] md:py-[220px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-12 md:gap-[90px] items-start">
                        <div className="flex flex-col gap-[24px] items-start w-full max-w-[843px]">
                            <div className="flex flex-col gap-[12px] items-start">
                                <span className="font-mono font-semibold text-[#ffb000] text-[14px]">
                                    (03)
                                </span>
                                <div className="bg-[#ffb000] h-[2px] w-[40px]" />
                            </div>
                            <h2 className="font-serif font-semibold text-[#eaeaea] text-4xl md:text-[84px] leading-none">
                                Things that changed me
                            </h2>
                            <p className="font-serif italic text-[#a0a0a0] text-[22px]">
                                Independence. Responsibility. The price of things.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start w-full">
                            <div className="md:col-span-4 flex flex-col gap-[20px] items-start shrink-0">
                                <span className="font-mono font-semibold text-[#ffb000] text-[12px] uppercase tracking-wider">
                                    03 - Independence
                                </span>
                                <div className="bg-[#ffb000]/40 h-px w-full" />
                                <div className="font-sans font-normal leading-[1.8] text-[#a0a0a0] text-[16px] space-y-2">
                                    <p>I wanted independence early.</p>
                                    <p>To do things on my own.</p>
                                    <p>To understand how life works.</p>
                                </div>
                            </div>

                            <div className="md:col-span-8 flex flex-col gap-[36px] items-start w-full">
                                <div className="font-sans font-normal gap-[24px] flex flex-col items-start leading-[1.9] w-full">
                                    <p className="text-[28px] md:text-[32px] font-serif italic text-[#eaeaea] leading-tight">
                                        If you want something, earn it.
                                    </p>
                                    <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                        I had a Nokia 6265 phone. It was a big deal. Until it wasn't. One day, during a storm, it got wet. And just like that, it was gone. I asked for a new phone. He said no. Not because of money. That confused me.
                                    </p>
                                    <p className="text-[26px] md:text-[28px] font-serif italic text-[#eaeaea] leading-relaxed border-l-2 border-[#ffb000] pl-6 py-2 my-2">
                                        "At that time, it felt unfair. Later, it made sense. <span className="text-[#ffb000] font-semibold">Everything comes with a price</span>."
                                    </p>
                                </div>

                                <div className="h-[280px] md:h-[420px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50 border border-white/5 shadow-xl">
                                    <img alt="Phone in Rain" className="object-cover w-full h-full" src="/images/things-that-changed-me.png" />
                                </div>
                                <div className="font-mono text-[11px] text-white/50 -mt-6">
                                    Nokia 6265 Era • Monsoon Shift
                                </div>

                                {/* Present-Day Reflection */}
                                <motion.div
                                    variants={reflectionVariants}
                                    className="w-full mt-2 p-5 rounded-[4px] bg-zinc-900/40 border-l-2 border-[#ffb000]/50 border-y border-r border-white/5"
                                >
                                    <span className="font-mono text-xs text-[#ffb000] uppercase tracking-wider block mb-1">
                                        Present-Day Reflection
                                    </span>
                                    <p className="font-serif italic text-[15px] text-[#d4d4d8] leading-relaxed">
                                        That lost Nokia phone taught me value over cost—a core perspective I apply to every product feature trade-off today.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 04: When design started making sense */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="bg-[#111111] py-[120px] md:py-[220px] relative w-full overflow-hidden"
                >
                    <span className="absolute font-serif font-bold leading-none opacity-5 overflow-hidden text-[#404040] text-[150px] md:text-[600px] whitespace-nowrap pointer-events-none select-none top-[120px] left-0">
                        DESIGN
                    </span>
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-12 md:gap-[90px] items-start relative z-10">
                        <div className="flex flex-col gap-[24px] items-start w-full md:w-[733px]">
                            <div className="flex flex-col gap-[12px] items-start">
                                <span className="font-mono font-semibold text-[#ffb000] text-[14px]">
                                    (04)
                                </span>
                                <div className="bg-[#ffb000] h-[2px] w-[40px]" />
                            </div>
                            <h2 className="font-serif font-semibold text-[#eaeaea] text-4xl md:text-[84px] leading-none">
                                When design started making sense
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
                            <div className="md:col-span-5 relative">
                                <div className="h-[300px] md:h-[420px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50 border border-white/5 shadow-xl">
                                    <img alt="Retro Computer" className="object-cover w-full h-full" src="/images/retro-computer.png" />
                                </div>
                                <div className="mt-2 font-mono text-[11px] text-white/50">
                                    6th Grade Hardware Course • First CRT Screen
                                </div>
                            </div>

                            <div className="md:col-span-7 flex flex-col font-sans gap-[32px]">
                                <p className="text-[28px] md:text-[34px] font-serif italic text-[#eaeaea] leading-tight">
                                    I stopped looking behind the screen, and started noticing what's on it.
                                </p>
                                <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                    I always wanted a computer. In sixth grade, I asked for one. He asked me what I knew. My answer was simple: Paint. Games. He told me to learn first. So I joined a hardware course.
                                </p>
                                <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                    Something changed there. Interfaces. Layouts. Structure. I couldn't unsee it after that.
                                </p>
                                <p className="text-[26px] md:text-[28px] font-serif italic text-[#eaeaea] leading-relaxed border-l-2 border-[#ffb000] pl-6 py-2 my-2">
                                    "The colors felt off. The layouts felt random. Things didn't make sense. <span className="text-[#ffb000] font-semibold">This could be better</span>."
                                </p>

                                {/* Present-Day Reflection */}
                                <motion.div
                                    variants={reflectionVariants}
                                    className="w-full mt-2 p-5 rounded-[4px] bg-zinc-950/60 border-l-2 border-[#ffb000]/50 border-y border-r border-white/5"
                                >
                                    <span className="font-mono text-xs text-[#ffb000] uppercase tracking-wider block mb-1">
                                        Present-Day Reflection
                                    </span>
                                    <p className="font-serif italic text-[15px] text-[#d4d4d8] leading-relaxed">
                                        Fixation on broken hardware led to an obsession with broken interfaces. The screen is where clarity lives.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 05: What life taught me before design did */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="py-[120px] md:py-[220px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-12 md:gap-[90px] items-start">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-[32px] items-start md:items-center w-full">
                            <div className="flex flex-col gap-[40px] items-start w-full md:w-[843px]">
                                <div className="flex flex-col gap-[12px] items-start">
                                    <span className="font-mono font-semibold text-[#ffb000] text-[14px]">
                                        (05)
                                    </span>
                                    <div className="bg-[#ffb000] h-[2px] w-[40px]" />
                                </div>
                                <h2 className="font-serif font-semibold text-[#eaeaea] text-4xl md:text-[96px] leading-none">
                                    What life taught me before design did
                                </h2>
                            </div>
                            <div className="flex-1 pb-[20px]">
                                <p className="font-serif italic text-[#a0a0a0] text-[22px]">
                                    Patience. Discipline. Control.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start w-full">
                            <div className="md:col-span-4 flex flex-col gap-[20px] items-start shrink-0">
                                <span className="font-mono font-semibold text-[#ffb000] text-[12px] uppercase tracking-wider">
                                    05 - Repetition
                                </span>
                                <div className="bg-[#ffb000]/40 h-px w-full" />
                                <div className="font-sans font-normal leading-[1.8] text-[#a0a0a0] text-[16px] space-y-1">
                                    <p>Life taught me patience.</p>
                                    <p>And discipline.</p>
                                    <p>Not through rules.</p>
                                    <p>Through repetition.</p>
                                </div>
                            </div>

                            <div className="md:col-span-8 flex flex-col gap-[36px] items-start w-full">
                                <div className="h-[280px] md:h-[480px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50 border border-white/5 shadow-xl">
                                    <img alt="Desk workspace" className="object-cover w-full h-full" src="/images/what-life-taught-me.png" />
                                </div>
                                <div className="font-mono text-[11px] text-white/50 -mt-6">
                                    Personal Studio Desk • Focus & Repetition
                                </div>

                                <div className="font-sans font-normal gap-[24px] flex flex-col items-start leading-[1.9] w-full">
                                    <p className="text-[28px] md:text-[32px] font-serif italic text-[#eaeaea] leading-tight">
                                        Earning is not just about money. It's about control.
                                    </p>
                                    <p className="text-[26px] md:text-[28px] font-serif italic text-[#eaeaea] leading-relaxed border-l-2 border-[#ffb000] pl-6 py-2 my-2">
                                        "When you earn, you decide. You stop waiting. You <span className="text-[#ffb000] font-semibold">start owning</span>."
                                    </p>
                                </div>

                                {/* Present-Day Reflection */}
                                <motion.div
                                    variants={reflectionVariants}
                                    className="w-full mt-2 p-5 rounded-[4px] bg-zinc-900/40 border-l-2 border-[#ffb000]/50 border-y border-r border-white/5"
                                >
                                    <span className="font-mono text-xs text-[#ffb000] uppercase tracking-wider block mb-1">
                                        Present-Day Reflection
                                    </span>
                                    <p className="font-serif italic text-[15px] text-[#d4d4d8] leading-relaxed">
                                        Mastery in product design is 10% inspiration and 90% disciplined repetition.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 06: Things I carry with me - Interactive Scroll Reveal Moment */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="bg-[#111111] py-[120px] md:py-[220px] relative w-full overflow-hidden"
                >
                    <span className="absolute font-serif font-bold leading-none opacity-5 overflow-hidden text-[#404040] text-[150px] md:text-[500px] whitespace-nowrap pointer-events-none select-none top-[120px] left-0">
                        CARRYING
                    </span>
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-12 md:gap-[90px] items-start relative z-10">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
                            <div className="flex flex-col gap-[24px] items-start w-full md:w-[733px]">
                                <div className="flex flex-col gap-[12px] items-start">
                                    <span className="font-mono font-semibold text-[#ffb000] text-[14px]">
                                        (06)
                                    </span>
                                    <div className="bg-[#ffb000] h-[2px] w-[40px]" />
                                </div>
                                <h2 className="font-serif font-semibold text-[#eaeaea] text-4xl md:text-[84px] leading-none">
                                    Things I carry with me
                                </h2>
                            </div>
                            <div className="flex flex-col gap-[16px] items-start w-[296px] shrink-0">
                                <span className="font-mono font-normal text-[#ffb000] text-[12px] uppercase tracking-wider">
                                    Today
                                </span>
                                <div className="bg-[#ffb000] h-px w-full" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
                            <div className="md:col-span-5 relative">
                                <div className="h-[300px] md:h-[420px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50 border border-white/5 shadow-xl">
                                    <img alt="Sunset road" className="object-cover w-full h-full" src="/images/things-i-carry.png" />
                                </div>
                                <div className="mt-2 font-mono text-[11px] text-white/50">
                                    Faridabad Highway • Daily Commute
                                </div>
                            </div>

                            {/* Requirement 5: One Memorable Interactive Moment (Sequential Journal Principles Reveal) */}
                            <div className="md:col-span-7 flex flex-col items-start w-full">
                                <ul className="font-sans font-normal leading-[1.9] text-[#eaeaea] text-[20px] w-full space-y-5 list-none pl-0">
                                    {[
                                        "I carry patience.",
                                        "I carry discipline.",
                                        "I believe earning changes how you think.",
                                        "I value independence.",
                                        "But I respect systems.",
                                        "Above all, I trust consistency."
                                    ].map((principle, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.12 }}
                                            className="flex items-start gap-3.5 p-3 rounded hover:bg-white/5 transition-colors"
                                        >
                                            <Sparkles className="w-4 h-4 text-[#ffb000] mt-2 shrink-0" />
                                            <span>
                                                {index === 5 ? (
                                                    <>Above all, I trust <span className="text-[#ffb000] font-semibold">consistency</span>.</>
                                                ) : principle}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Present-Day Reflection */}
                                <motion.div
                                    variants={reflectionVariants}
                                    className="w-full mt-6 p-5 rounded-[4px] bg-zinc-950/60 border-l-2 border-[#ffb000]/50 border-y border-r border-white/5"
                                >
                                    <span className="font-mono text-xs text-[#ffb000] uppercase tracking-wider block mb-1">
                                        Present-Day Reflection
                                    </span>
                                    <p className="font-serif italic text-[15px] text-[#d4d4d8] leading-relaxed">
                                        Systems fail without consistency. Design leadership is about maintaining that line daily.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 07: Where I am now */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="py-[120px] md:py-[220px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-12 md:gap-[90px] items-start">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-[32px] items-start md:items-center w-full">
                            <div className="flex flex-col gap-[40px] items-start w-full md:w-[843px]">
                                <div className="flex flex-col gap-[12px] items-start">
                                    <span className="font-mono font-semibold text-[#ffb000] text-[14px]">
                                        (07)
                                    </span>
                                    <div className="bg-[#ffb000] h-[2px] w-[40px]" />
                                </div>
                                <h2 className="font-serif font-semibold text-[#eaeaea] text-4xl md:text-[84px] leading-none">
                                    Where I am now
                                </h2>
                            </div>
                            <div className="flex-1 pb-[20px]">
                                <p className="font-serif italic text-[#a0a0a0] text-[22px]">
                                    Quiet. Patient. Still curious.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start w-full">
                            <div className="md:col-span-4 flex flex-col gap-[20px] items-start shrink-0">
                                <span className="font-mono font-semibold text-[#ffb000] text-[12px] uppercase tracking-wider">
                                    07 - Clarity
                                </span>
                                <div className="bg-[#ffb000]/40 h-px w-full" />
                                <div className="font-sans font-normal leading-[1.8] text-[#a0a0a0] text-[16px] space-y-1">
                                    <p>I see things more clearly now.</p>
                                    <p>Not because I know everything.</p>
                                    <p>But because I'm okay with not knowing.</p>
                                </div>
                            </div>

                            <div className="md:col-span-8 flex flex-col gap-[36px] items-start w-full">
                                <div className="h-[280px] md:h-[480px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50 border border-white/5 shadow-xl">
                                    <img alt="Bench mountains" className="object-cover w-full h-full" src="/images/where-i-am-now.png" />
                                </div>
                                <div className="font-mono text-[11px] text-white/50 -mt-6">
                                    Quiet Vantage • Current Mindset
                                </div>

                                <div className="font-sans font-normal gap-[24px] flex flex-col items-start leading-[1.9] w-full">
                                    <p className="text-[28px] md:text-[32px] font-serif italic text-[#eaeaea] leading-tight">
                                        I'm still curious. Still observant. Still quiet. But more patient.
                                    </p>
                                    <p className="text-[26px] md:text-[28px] font-serif italic text-[#eaeaea] leading-relaxed border-l-2 border-[#ffb000] pl-6 py-2 my-2">
                                        "I don't rush anymore. I <span className="text-[#ffb000] font-semibold">let things settle</span>."
                                    </p>
                                </div>

                                {/* Present-Day Reflection */}
                                <motion.div
                                    variants={reflectionVariants}
                                    className="w-full mt-2 p-5 rounded-[4px] bg-zinc-900/40 border-l-2 border-[#ffb000]/50 border-y border-r border-white/5"
                                >
                                    <span className="font-mono text-xs text-[#ffb000] uppercase tracking-wider block mb-1">
                                        Present-Day Reflection
                                    </span>
                                    <p className="font-serif italic text-[15px] text-[#d4d4d8] leading-relaxed">
                                        True maturity in design is letting go of ego and letting the user's truth settle naturally.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Requirement 7: Strengthened Ending & Transition into Builder Dimension */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="pb-[260px] pt-[180px] w-full border-t border-zinc-900 bg-gradient-to-b from-transparent via-zinc-950 to-black"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-12 md:gap-[90px] items-start">
                        <div className="flex flex-col md:flex-row gap-8 items-end w-full">
                            <div className="flex flex-col gap-[32px] items-start w-full md:w-[843px]">
                                <div className="flex flex-col gap-[12px] items-start">
                                    <span className="font-mono font-semibold text-[#ffb000] text-[14px]">
                                        (08)
                                    </span>
                                    <div className="bg-[#ffb000] h-[2px] w-[40px]" />
                                </div>
                                <h2 className="font-serif font-semibold text-[#eaeaea] text-4xl md:text-[84px] leading-none">
                                    This was my life. Not my work.
                                </h2>
                            </div>
                            <div className="flex-1 pb-[10px]">
                                <p className="font-serif italic text-[#a0a0a0] text-[22px] leading-relaxed">
                                    You've experienced the human behind the decisions. Now see how this quiet discipline translates into building complex digital products.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start w-full">
                            <div className="md:col-span-4 flex flex-col gap-[20px] items-start shrink-0">
                                <span className="font-mono font-semibold text-[#ffb000] text-[12px] uppercase tracking-wider">
                                    08 - Next World
                                </span>
                                <div className="bg-[#ffb000]/40 h-px w-full" />
                                <div className="font-sans font-normal leading-[1.8] text-[#a0a0a0] text-[16px] space-y-1">
                                    <p>The work is a reflection</p>
                                    <p>of the same patience, discipline,</p>
                                    <p>and curiosity.</p>
                                </div>
                            </div>

                            <div className="md:col-span-8 flex flex-col gap-[48px] items-start w-full">
                                <div className="h-[280px] md:h-[480px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50 border border-white/5 shadow-2xl">
                                    <img alt="Desk artifacts" className="object-cover w-full h-full" src="/images/closing.png" />
                                </div>
                            </div>
                        </div>

                        {/* CTA: Enter the Builder World */}
                        <div className="flex justify-center w-full mt-20">
                            <button
                                onClick={() => setUniverse('B')}
                                className="border border-[#ffb000] border-solid hover:bg-[#ffb000]/10 transition-colors flex gap-[12px] items-center px-[32px] py-[18px] rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb000] group"
                            >
                                <span className="font-mono font-semibold text-[#ffb000] text-[14px] uppercase tracking-wider">
                                    Enter the Builder World
                                </span>
                                <ArrowRight className="w-[18px] h-[18px] text-[#ffb000] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </main>

            <Footer />
            <DimensionIndicator onSwitchDimension={onReturnToLobby || (() => setUniverse('LOBBY'))} />
        </div>
    );
}
