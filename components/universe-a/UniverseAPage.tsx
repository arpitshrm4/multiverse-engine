"use client";

import { motion } from "framer-motion";
import { useUniverse } from "@/context/UniverseContext";
import Navbar from "@/components/universe-a/Navbar";
import Footer from "@/components/universe-a/Footer";
import DimensionIndicator from "@/components/universe-a/DimensionIndicator";
import { ArrowRight } from "lucide-react";
// AbstractShapeImage removed, now using local generated images

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
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

            {/* Main Body Content - Reference from Figma Design, max-width 1200px Centered */}
            <main className="relative pt-20">

                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="pb-[120px] pt-[120px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-[80px] items-center">
                        <div className="flex flex-col gap-[24px] items-center w-full max-w-[952px]">
                            <h1 className="font-serif text-center font-semibold text-[#eaeaea] text-2xl md:text-[90px] leading-[1] w-full">
                                This is not my <span className="font-serif italic text-[#ffb000] font-normal">portfolio</span>. This is everything that shaped how I think before I ever designed anything.
                            </h1>
                            {/* <div className="flex gap-[32px] items-center w-full">
                                <div className="bg-[#ffb000] h-[4px] w-[120px] shrink-0" />
                                <p className="font-serif font-normal text-[#a0a0a0] text-2xl md:text-[42px] leading-snug">
                                    Dimension A - Personal Journal
                                </p>
                            </div> */}
                        </div>
                        <div className="flex flex-col gap-[32px] items-center w-full">
                            <div className="flex flex-col gap-[24px] items-center w-full text-center">
                                <span className="font-sans font-semibold text-[#ffb000] text-[14px] uppercase tracking-wider">
                                    Manifesto
                                </span>
                                <p className="font-sans font-normal leading-[1.6] text-[#eaeaea] text-[20px] max-w-[600px]">
                                    {"If you're still here, this might take a few minutes."}
                                </p>
                            </div>
                            <div className="h-[300px] md:h-[500px] w-full max-w-[952px] relative rounded-[4px] overflow-hidden bg-zinc-900/50">
                                <img alt="Journal Spotlight" className="absolute inset-0 object-cover w-full h-full" src="/images/hero-spotlight.png" />
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

                {/* Section 01: Where I come from */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="py-[100px] md:py-[200px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-10 md:gap-[80px] items-start">
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
                        <div className="flex flex-col md:flex-row gap-10 md:gap-[80px] items-center w-full">
                            <div className="font-sans font-normal gap-[32px] flex flex-col items-start leading-[1.8] w-full md:w-[624px] shrink-0">
                                <div className="space-y-4">
                                    <p className="text-[32px] font-serif italic text-[#eaeaea] leading-tight">
                                        Life there was <span className="text-[#ffb000] font-semibold">simple</span>. <span className="text-[#ffb000] font-semibold">Predictable</span>. <span className="text-[#ffb000] font-semibold">Structured</span>.
                                    </p>
                                    <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                        {"I was born in Aligarh, Uttar Pradesh. There wasn't much exposure to design or technology. What I had instead was "}<span className="text-[#ffb000] font-semibold">time</span>. Time to <span className="text-[#ffb000] font-semibold">observe</span>.
                                    </p>
                                </div>
                                <div className="space-y-4 w-full">
                                    <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                        At sixteen, I moved to Faridabad for education. A new place. New expectations. That was my first <span className="text-[#ffb000] font-semibold">real shift</span>.
                                    </p>
                                    <p className="text-[28px] font-serif italic text-[#eaeaea] leading-relaxed border-l-2 border-[#ffb000] pl-6 py-2">
                                        {"\"I didn't realise it then, but "}<span className="text-[#ffb000] font-semibold">environment</span> quietly <span className="text-[#ffb000] font-semibold">changes</span>{" how you think.\""}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">
                                <div className="h-[400px] md:h-[600px] w-full rounded-[2px] overflow-hidden bg-zinc-900/50">
                                    <img alt="Where I come from" className="object-cover w-full h-full" src="/images/where-i-come-from.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 02: Growing up */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="bg-[#111111] py-[100px] md:py-[200px] relative w-full overflow-hidden"
                >
                    <span className="absolute font-serif font-bold leading-none opacity-5 overflow-hidden text-[#404040] text-[120px] md:text-[500px] whitespace-nowrap pointer-events-none select-none top-[120px] left-0">
                        GROWING UP
                    </span>
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-10 md:gap-[120px] items-start relative z-10">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
                            <div className="flex flex-col gap-[24px] items-start w-full md:w-[733px]">
                                <div className="flex flex-col gap-[12px] items-start">
                                    <span className="font-mono font-semibold text-[#ffb000] text-[14px]">
                                        (02)
                                    </span>
                                    <div className="bg-[#ffb000] h-[2px] w-[40px]" />
                                </div>
                                <h2 className="font-serif font-semibold text-[#eaeaea] text-4xl md:text-[84px] leading-none">
                                    {"I wasn't the loudest person in the room."}
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-[32px] items-center w-full">
                            <div className="h-[300px] md:h-[400px] rounded-[4px] overflow-hidden w-full md:w-[515px] shrink-0 bg-zinc-900/50">
                                <img alt="Growing up" className="object-cover w-full h-full" src="/images/growing-up.png" />
                            </div>
                            <div className="flex-1 flex flex-col font-sans font-normal gap-[32px] items-start w-full">
                                <div className="space-y-4">
                                    <p className="text-[32px] font-serif italic text-[#eaeaea] leading-tight">
                                        I was a <span className="text-[#ffb000] font-semibold">curious child</span>. More than that, I was an <span className="text-[#ffb000] font-semibold">observer</span>.
                                    </p>
                                    <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                        {"I've always been shy. I still am. I "}<span className="text-[#ffb000] font-semibold">spoke less</span>. But I <span className="text-[#ffb000] font-semibold">noticed more</span>.
                                    </p>
                                </div>
                                <div className="space-y-4 w-full">
                                    <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                        {"I grew up in a well-to-do family, which made me a little "}<span className="text-[#ffb000] font-semibold">stubborn</span>{" early on. At that time, I didn't see it. Later, I did."}
                                    </p>
                                    <p className="text-[28px] font-serif italic text-[#eaeaea] leading-tight border-l-2 border-[#ffb000] pl-6 py-2">
                                        {"\"When I was around ten or eleven, "}<span className="text-[#ffb000] font-semibold">curiosity turned into action</span>{". I started opening my electronic toys. Not to break them. To "}<span className="text-[#ffb000] font-semibold">understand them</span>{".\""}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 03: Things that changed me */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="py-[100px] md:py-[200px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-10 md:gap-[80px] items-start">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-[32px] items-start md:items-center w-full">
                            <div className="flex flex-col gap-[40px] items-start w-full md:w-[843px]">
                                <div className="flex flex-col gap-[12px] items-start">
                                    <span className="font-mono font-semibold text-[#ffb000] text-[14px]">
                                        (03)
                                    </span>
                                    <div className="bg-[#ffb000] h-[2px] w-[40px]" />
                                </div>
                                <h2 className="font-serif font-semibold text-[#eaeaea] text-4xl md:text-[84px] leading-none">
                                    Things that changed me
                                </h2>
                            </div>
                            <div className="flex-1 pb-[20px]">
                                <p className="font-serif italic text-[#eaeaea] text-[22px]">
                                    Independence. Responsibility. The price of things.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 md:gap-[32px] items-start w-full">
                            <div className="flex flex-col gap-[20px] items-start w-full md:w-[296px] shrink-0">
                                <span className="font-mono font-semibold text-[#ffb000] text-[12px] uppercase tracking-wider">
                                    03 - Independence
                                </span>
                                <div className="bg-[#ffb000]/40 h-px w-full" />
                                <div className="font-sans font-normal leading-[1.8] text-[#a0a0a0] text-[15px] space-y-1">
                                    <p>I wanted <span className="text-[#ffb000] font-semibold">independence</span> early.</p>
                                    <p>To do things <span className="text-[#ffb000] font-semibold">on my own</span>.</p>
                                    <p>To understand how life works.</p>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-[48px] items-start w-full">
                                <div className="h-[300px] md:h-[600px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50">
                                    <img alt="Phone in Rain" className="object-cover w-full h-full" src="/images/things-that-changed-me.png" />
                                </div>
                                <div className="font-sans font-normal gap-[32px] flex flex-col items-start leading-[1.8] w-full">
                                    <div className="space-y-4">
                                        <p className="text-[32px] font-serif italic text-[#eaeaea] leading-tight">
                                            If you want something, <span className="text-[#ffb000] font-semibold">earn it</span>.
                                        </p>
                                        <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                            {"I had a Nokia 6265 phone. It was a "}<span className="text-[#ffb000] font-semibold">big deal</span>.{" Until it wasn't. One day, during a storm, it got wet. And just like that, it was gone. I asked for a new phone. He said no. Not because of money. That confused me."}
                                        </p>
                                    </div>
                                    <div className="space-y-4 w-full">
                                        <p className="text-[28px] font-serif italic text-[#eaeaea] leading-relaxed border-l-2 border-[#ffb000] pl-6 py-2">
                                            {"\"At that time, it felt unfair. Later, it made sense. "}<span className="text-[#ffb000] font-semibold">Everything comes with a price</span>{".\""}
                                        </p>
                                    </div>
                                </div>
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
                    className="bg-[#111111] py-[100px] md:py-[200px] relative w-full overflow-hidden"
                >
                    <span className="absolute font-serif font-bold leading-none opacity-5 overflow-hidden text-[#404040] text-[150px] md:text-[600px] whitespace-nowrap pointer-events-none select-none top-[120px] left-0">
                        DESIGN
                    </span>
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-10 md:gap-[80px] items-start relative z-10">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
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
                        </div>
                        <div className="flex flex-col md:flex-row gap-[32px] items-center w-full">
                            <div className="h-[300px] md:h-[400px] rounded-[4px] overflow-hidden w-full md:w-[515px] shrink-0 bg-zinc-900/50">
                                <img alt="Retro Computer" className="object-cover w-full h-full" src="/images/retro-computer.png" />
                            </div>
                            <div className="flex-1 flex flex-col font-sans font-normal gap-[32px] items-start w-full">
                                <div className="space-y-4">
                                    <p className="text-[32px] font-serif italic text-[#eaeaea] leading-tight">
                                        {"I stopped looking behind the screen, and started noticing "}<span className="text-[#ffb000] font-semibold">{"what's on it"}</span>.
                                    </p>
                                    <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                        I always wanted a computer. In sixth grade, I asked for one. He asked me what I knew. My answer was simple: Paint. Games. He told me to <span className="text-[#ffb000] font-semibold">learn first</span>. So I joined a hardware course.
                                    </p>
                                </div>
                                <div className="space-y-4 w-full">
                                    <p className="text-[20px] text-[#a0a0a0] leading-relaxed">
                                        Something changed there. <span className="text-[#ffb000] font-semibold">Interfaces. Layouts. Structure.</span>{" I couldn't unsee it after that."}
                                    </p>
                                    <p className="text-[28px] font-serif italic text-[#eaeaea] leading-tight border-l-2 border-[#ffb000] pl-6 py-2">
                                        {"\"The colors felt off. The layouts felt random. Things didn't make sense. "}<span className="text-[#ffb000] font-semibold">This could be better</span>{".\""}
                                    </p>
                                </div>
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
                    className="py-[100px] md:py-[200px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-10 md:gap-[80px] items-start">
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
                                <p className="font-serif italic text-[#eaeaea] text-[22px]">
                                    Patience. Discipline. Control.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 md:gap-[32px] items-start w-full">
                            <div className="flex flex-col gap-[20px] items-start w-full md:w-[296px] shrink-0">
                                <span className="font-mono font-semibold text-[#ffb000] text-[12px] uppercase tracking-wider">
                                    05 - Repetition
                                </span>
                                <div className="bg-[#ffb000]/40 h-px w-full" />
                                <div className="font-sans font-normal leading-[1.8] text-[#a0a0a0] text-[15px] space-y-1">
                                    <p>Life taught me <span className="text-[#ffb000] font-semibold">patience</span>.</p>
                                    <p>And <span className="text-[#ffb000] font-semibold">discipline</span>.</p>
                                    <p>Not through rules.</p>
                                    <p>Through <span className="text-[#ffb000] font-semibold">repetition</span>.</p>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-[48px] items-start w-full">
                                <div className="h-[300px] md:h-[600px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50">
                                    <img alt="Desk workspace" className="object-cover w-full h-full" src="/images/what-life-taught-me.png" />
                                </div>
                                <div className="font-sans font-normal gap-[32px] flex flex-col items-start leading-[1.8] w-full">
                                    <div className="space-y-4">
                                        <p className="text-[32px] font-serif italic text-[#eaeaea] leading-tight">
                                            {"Earning is not just about money. It's about "}<span className="text-[#ffb000] font-semibold">control</span>.
                                        </p>
                                    </div>
                                    <div className="space-y-4 w-full">
                                        <p className="text-[28px] font-serif italic text-[#eaeaea] leading-relaxed border-l-2 border-[#ffb000] pl-6 py-2">
                                            {"\"When you earn, "}<span className="text-[#ffb000] font-semibold">you decide</span>{". You stop waiting. You "}<span className="text-[#ffb000] font-semibold">start owning</span>{".\""}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 06: Things I carry with me */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="bg-[#111111] py-[100px] md:py-[200px] relative w-full overflow-hidden"
                >
                    <span className="absolute font-serif font-bold leading-none opacity-5 overflow-hidden text-[#404040] text-[150px] md:text-[500px] whitespace-nowrap pointer-events-none select-none top-[120px] left-0">
                        CARRYING
                    </span>
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-10 md:gap-[80px] items-start relative z-10">
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
                        <div className="flex flex-col md:flex-row gap-[32px] items-center w-full">
                            <div className="h-[300px] md:h-[400px] rounded-[4px] overflow-hidden w-full md:w-[515px] shrink-0 bg-zinc-900/50">
                                <img alt="Sunset road" className="object-cover w-full h-full" src="/images/things-i-carry.png" />
                            </div>
                            <div className="flex-1 flex flex-col items-start w-full">
                                <ul className="font-sans font-normal leading-[1.8] text-[#eaeaea] text-[20px] w-full space-y-4 list-none pl-0">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#ffb000] mt-1.5 shrink-0">•</span>
                                        <span>I carry <span className="text-[#ffb000] font-semibold">patience</span>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#ffb000] mt-1.5 shrink-0">•</span>
                                        <span>I carry <span className="text-[#ffb000] font-semibold">discipline</span>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#ffb000] mt-1.5 shrink-0">•</span>
                                        <span>I believe <span className="text-[#ffb000] font-semibold">earning changes how you think</span>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#ffb000] mt-1.5 shrink-0">•</span>
                                        <span>I value <span className="text-[#ffb000] font-semibold">independence</span>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#ffb000] mt-1.5 shrink-0">•</span>
                                        <span>But I respect <span className="text-[#ffb000] font-semibold">systems</span>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#ffb000] mt-1.5 shrink-0">•</span>
                                        <span>Above all, I trust <span className="text-[#ffb000] font-semibold">consistency</span>.</span>
                                    </li>
                                </ul>
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
                    className="py-[100px] md:py-[200px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-10 md:gap-[80px] items-start">
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
                                <p className="font-serif italic text-[#eaeaea] text-[22px]">
                                    Quiet. Patient. Still curious.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 md:gap-[32px] items-start w-full">
                            <div className="flex flex-col gap-[20px] items-start w-full md:w-[296px] shrink-0">
                                <span className="font-mono font-semibold text-[#ffb000] text-[12px] uppercase tracking-wider">
                                    07 - Clarity
                                </span>
                                <div className="bg-[#ffb000]/40 h-px w-full" />
                                <div className="font-sans font-normal leading-[1.8] text-[#a0a0a0] text-[15px] space-y-1">
                                    <p>I see things <span className="text-[#ffb000] font-semibold">more clearly</span> now.</p>
                                    <p>Not because I know everything.</p>
                                    <p>{"But because I'm "}<span className="text-[#ffb000] font-semibold">okay with not knowing</span>.</p>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-[48px] items-start w-full">
                                <div className="h-[300px] md:h-[600px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50">
                                    <img alt="Bench mountains" className="object-cover w-full h-full" src="/images/where-i-am-now.png" />
                                </div>
                                <div className="font-sans font-normal gap-[32px] flex flex-col items-start leading-[1.8] w-full">
                                    <div className="space-y-4">
                                        <p className="text-[32px] font-serif italic text-[#eaeaea] leading-tight">
                                            {"I'm still "}<span className="text-[#ffb000] font-semibold">curious</span>. Still observant. Still quiet. But <span className="text-[#ffb000] font-semibold">more patient</span>.
                                        </p>
                                    </div>
                                    <div className="space-y-4 w-full">
                                        <p className="text-[28px] font-serif italic text-[#eaeaea] leading-relaxed border-l-2 border-[#ffb000] pl-6 py-2">
                                            {"\"I don't rush anymore. I "}<span className="text-[#ffb000] font-semibold">let things settle</span>{".\""}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 08: Closing */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                    className="pb-[240px] pt-[200px] w-full"
                >
                    <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20 flex flex-col gap-10 md:gap-[80px] items-start">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-[32px] items-end w-full">
                            <div className="flex flex-col gap-[40px] items-start w-full md:w-[843px]">
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
                            <div className="flex-1 pb-[20px]">
                                <p className="font-serif italic text-[#eaeaea] text-[22px] leading-relaxed w-full">
                                    {"If you're curious how this thinking "}<span className="text-[#ffb000] font-semibold">translates into what I build</span>{", you can explore the next dimension."}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 md:gap-[32px] items-start w-full">
                            <div className="flex flex-col gap-[20px] items-start w-full md:w-[296px] shrink-0">
                                <span className="font-mono font-semibold text-[#ffb000] text-[12px] uppercase tracking-wider">
                                    08 - Next
                                </span>
                                <div className="bg-[#ffb000]/40 h-px w-full" />
                                <div className="font-sans font-normal leading-[1.8] text-[#a0a0a0] text-[15px] space-y-1">
                                    <p>The work is a <span className="text-[#ffb000] font-semibold">reflection</span></p>
                                    <p>of the same <span className="text-[#ffb000] font-semibold">patience</span>, <span className="text-[#ffb000] font-semibold">discipline</span>,</p>
                                    <p>and <span className="text-[#ffb000] font-semibold">curiosity</span>.</p>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-[48px] items-start w-full">
                                <div className="h-[300px] md:h-[600px] rounded-[4px] overflow-hidden w-full bg-zinc-900/50">
                                    <img alt="Desk artifacts" className="object-cover w-full h-full" src="/images/closing.png" />
                                </div>
                            </div>
                        </div>

                        {/* CTA Explore Work */}
                        <div className="flex flex-col gap-[24px] items-center w-full mt-16">
                            <button
                                onClick={() => setUniverse('B')}
                                className="border border-[#ffb000] border-solid hover:bg-[#ffb000]/10 transition-colors flex gap-[12px] items-center px-[28px] py-[18px] rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                            >
                                <span className="font-mono font-semibold text-[#ffb000] text-[14px] uppercase tracking-wider">
                                    Explore Work
                                </span>
                                <ArrowRight className="w-[18px] h-[18px] text-[#ffb000]" aria-hidden="true" />
                            </button>
                            <span className="font-mono font-normal text-white/50 text-[11px] uppercase tracking-wider">
                                Next dimension
                            </span>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Dimension Indicator */}
            <DimensionIndicator onSwitchDimension={onReturnToLobby || (() => setUniverse('LOBBY'))} />
        </div>
    );
}
