"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/universe-a/Navbar";
import { siteData } from "@/lib/data";

export default function AboutClient() {
    return (
        <main className="min-h-screen bg-[#070708] text-[#e4e4e7] pt-32 relative font-sans selection:bg-neutral-800 selection:text-white flex flex-col justify-between overflow-x-hidden">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-neutral-900/10 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
            </div>

            <div className="relative z-10 w-full flex-1 flex flex-col justify-between">
                {/* Navbar */}
                <Navbar />

                {/* Main Content Area */}
                <div className="container max-w-3xl px-6 py-16 flex-1 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="space-y-16"
                    >
                        {/* Title: Final Chapter of the Journey */}
                        <div className="space-y-3">
                            <span className="text-xs font-mono uppercase text-neutral-500 tracking-[0.25em] block">
                                FINAL CHAPTER
                            </span>
                            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
                                Beyond the Work
                            </h2>
                        </div>

                        {/* Narrative Story (Uncovered with progressive visual delay) */}
                        <div className="space-y-8 text-neutral-300 text-lg md:text-xl font-sans font-light leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Over the past 13+ years, I've worked across enterprise platforms, fintech, insurance, procurement, healthcare, and public-sector products—helping teams transform complexity into products that are easier to understand, build, and scale.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                But titles, industries, and projects only tell part of the story.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-white font-medium border-l border-neutral-700 pl-6 py-1"
                            >
                                What those experiences have really taught me is that great design is rarely about creating better interfaces. It's about creating shared understanding.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Whether I'm working with designers, engineers, product managers, or business stakeholders, my role is often the same:
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.0 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 text-sm font-mono text-neutral-400 uppercase tracking-widest"
                            >
                                <div className="p-4 rounded bg-neutral-900/40 border border-neutral-800/60 text-center">Reduce Uncertainty</div>
                                <div className="p-4 rounded bg-neutral-900/40 border border-neutral-800/60 text-center">Connect Perspectives</div>
                                <div className="p-4 rounded bg-neutral-900/40 border border-neutral-800/60 text-center">Simplify Complexity</div>
                                <div className="p-4 rounded bg-neutral-900/40 border border-neutral-800/60 text-center">Help Teams Decide</div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                Today, I'm most interested in building thoughtful products, mentoring designers, exploring AI, and continuing to learn through curiosity, observation, and real-world experiences.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                className="text-base text-neutral-400 font-normal"
                            >
                                I don't believe a designer is defined by a portfolio. I believe they're defined by the questions they continue asking.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>

                {/* Reflective Journal-Style Footer */}
                <footer className="relative z-10 w-full py-16 border-t border-neutral-900 bg-[#070708] text-center px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="max-w-2xl mx-auto space-y-6"
                    >
                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">© Arpit Sharma</p>
                        
                        <p className="text-xl md:text-2xl font-serif text-white italic max-w-xl mx-auto leading-relaxed">
                            "Thank you for exploring the Multiverse. Every perspective revealed a different part of the story. The journey continues beyond this website."
                        </p>

                        {/* Subtle Contact & Resume Links */}
                        <div className="flex justify-center items-center gap-6 pt-4 text-xs font-mono tracking-widest uppercase">
                            <a
                                href={`https://${siteData.contact.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                LinkedIn
                            </a>
                            <span className="text-neutral-700">|</span>
                            <a
                                href={`mailto:${siteData.contact.email}`}
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                Email
                            </a>
                            <span className="text-neutral-700">|</span>
                            <a
                                href="/Arpit_Sharma_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                </footer>
            </div>
        </main>
    );
}
