"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUniverse } from "@/context/UniverseContext";
import { Compass, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";

export default function UniverseEPage() {
    const { setUniverse } = useUniverse();
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            id: "hero",
            title: "The Beginning of the Horizon",
            content: (
                <div className="space-y-8 max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-sans font-light tracking-tight text-white leading-tight">
                        "The most interesting work I'll ever create hasn't been designed yet."
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto pt-4">
                        Growth is never a finished state. What follows is a reflection on the next horizon—the work, the questions, and the leader I am still becoming.
                    </p>
                </div>
            )
        },
        {
            id: "building-toward",
            title: "Section 1 • What I'm Building Toward",
            content: (
                <div className="space-y-8 max-w-2xl mx-auto">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/80 block">Impact over output</span>
                    <h3 className="text-3xl md:text-4xl font-sans font-normal text-white">Designing systems that outlive features</h3>
                    <div className="space-y-6 text-neutral-300 text-base md:text-lg font-light leading-relaxed">
                        <p>
                            I'm less interested in individual screens, and more interested in the collective decision-making environments we build.
                        </p>
                        <p>
                            Great design doesn't just deliver a sprint ticket—it establishes a system of shared understanding that guides product directions years after the initial launch.
                        </p>
                        <p>
                            My goal is to help teams build products that matter, enabling designers and engineers to collaborate with total clarity and zero operational friction.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "questions",
            title: "Section 2 • Questions Shaping the Next Decade",
            content: (
                <div className="space-y-8 max-w-2xl mx-auto">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/80 block">Continuous Inquiry</span>
                    <h3 className="text-3xl md:text-4xl font-sans font-normal text-white">Questions guide us; answers stop us</h3>
                    <div className="space-y-6 font-sans font-light text-base md:text-lg text-neutral-300">
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-md">
                            <p className="font-semibold text-white">Can AI help people think better rather than simply work faster?</p>
                            <p className="text-sm text-neutral-400 mt-1">Shifting the focus from raw generation speed to strategic cognitive partnership.</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-md">
                            <p className="font-semibold text-white">How do we design trust in autonomous enterprise systems?</p>
                            <p className="text-sm text-neutral-400 mt-1">Creating high-visibility audit trails for complex background decision cycles.</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-md">
                            <p className="font-semibold text-white">Can enterprise software become emotionally intelligent?</p>
                            <p className="text-sm text-neutral-400 mt-1">Adapting interface density to match operator stress levels in real-time.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "leader",
            title: "Section 3 • The Leader I Want to Become",
            content: (
                <div className="space-y-8 max-w-2xl mx-auto">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/80 block">Qualities over Titles</span>
                    <h3 className="text-3xl md:text-4xl font-sans font-normal text-white">Leading through clarity, not authority</h3>
                    <div className="space-y-6 text-neutral-300 text-base md:text-lg font-light leading-relaxed">
                        <p>
                            I aspire to be a leader who reduces uncertainty for cross-functional teams, carving out a safe and generous space where curiosity is encouraged rather than penalized.
                        </p>
                        <p>
                            My job is to help the designers around me grow faster and build with more confidence than I did, turning difficult product conversations into milestones of clarity.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "learning",
            title: "Section 4 • What I'm Learning Now",
            content: (
                <div className="space-y-8 max-w-2xl mx-auto">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/80 block">The Living Lab</span>
                    <h3 className="text-3xl md:text-4xl font-sans font-normal text-white">Areas of active exploration</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm font-mono text-neutral-400 uppercase tracking-wider">
                        <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] text-center">AI-Assisted Tokens</div>
                        <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] text-center">Behavioral Psychology</div>
                        <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] text-center">Systems Thinking</div>
                        <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] text-center">Prompt Engineering</div>
                        <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] text-center text-amber-400/90 border-amber-500/20">Storytelling & Leadership</div>
                        <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] text-center">Cognitive Science</div>
                    </div>
                </div>
            )
        },
        {
            id: "changes",
            title: "Section 5 • What I Hope Changes",
            content: (
                <div className="space-y-8 max-w-2xl mx-auto">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/80 block">Humility & Evolution</span>
                    <h3 className="text-3xl md:text-4xl font-sans font-normal text-white">The freedom to change opinions</h3>
                    <div className="space-y-6 text-neutral-300 text-base md:text-lg font-light leading-relaxed">
                        <p>
                            True mastery is knowing that what worked yesterday may not apply tomorrow. I expect future experiences to challenge my current design beliefs and reshape them.
                        </p>
                        <p>
                            I want to stay open, flexible, and humble enough to continue listening to the data, the users, and the engineers on the ground.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "letter",
            title: "Section 6 • Letter to My Future Self",
            content: (
                <div className="space-y-8 max-w-2xl mx-auto border-l border-amber-500/20 pl-6 py-2">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/80 block">A Personal Reminder</span>
                    <h3 className="text-3xl md:text-4xl font-sans font-normal text-white">Stay curious, stay close to the craft</h3>
                    <div className="space-y-6 text-neutral-300 text-base md:text-lg font-light leading-relaxed italic">
                        <p>
                            "Remember that design is a service to others, not an monument to yourself. Keep asking questions. Focus on the character of your work and the growth of your team, and never lose the curiosity that brought you here."
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "closing",
            title: "The Infinite Cycle",
            content: (
                <div className="space-y-12 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-white leading-tight">
                        "I'm still becoming the designer this portfolio is trying to describe."
                    </h2>
                    <p className="text-neutral-500 font-mono text-xs tracking-widest uppercase">
                        The next perspective is waiting to be designed.
                    </p>

                    {/* Minimalist Multiverse Return Navigation */}
                    <div className="pt-12 border-t border-white/[0.05] max-w-lg mx-auto">
                        <span className="text-[10px] font-mono text-neutral-500 tracking-[0.25em] block uppercase mb-6">
                            REVISIT THE MULTIVERSE PERSPECTIVES
                        </span>
                        <div className="flex flex-wrap justify-center gap-4 text-xs font-mono">
                            <button
                                onClick={() => setUniverse('A')}
                                className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-all cursor-pointer"
                            >
                                Human (A)
                            </button>
                            <button
                                onClick={() => setUniverse('B')}
                                className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-all cursor-pointer"
                            >
                                Builder (B)
                            </button>
                            <button
                                onClick={() => setUniverse('C')}
                                className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-all cursor-pointer"
                            >
                                Thinker (C)
                            </button>
                            <button
                                onClick={() => setUniverse('D')}
                                className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-all cursor-pointer"
                            >
                                Curiosity (D)
                            </button>
                            <button
                                onClick={() => setUniverse('LOBBY')}
                                className="px-4 py-2 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-200 hover:text-white transition-all cursor-pointer"
                            >
                                Multiverse Lobby
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-[#050508] text-slate-200 font-sans selection:bg-amber-500/20 selection:text-amber-300 relative overflow-hidden flex flex-col justify-between">
            {/* Ambient Background Glow simulating Sunrise (Calm & Hopeful) */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[350px] bg-gradient-to-t from-amber-950/20 via-orange-950/10 to-transparent blur-[120px] rounded-full opacity-60" />
                <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
            </div>

            {/* Top Minimalist Header */}
            <header className="relative z-20 px-6 md:px-16 pt-8 pb-4 flex justify-between items-center bg-transparent">
                <div className="flex items-center gap-2 text-amber-400/90 font-mono text-xs tracking-widest uppercase font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Dimension E • Future Chapter</span>
                </div>
                <button
                    onClick={() => setUniverse('LOBBY')}
                    className="px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white text-xs font-mono transition-all flex items-center gap-2 cursor-pointer"
                >
                    <span>Lobby</span>
                </button>
            </header>

            {/* Main Interactive Progressive Reveal Step Area */}
            <main className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-6 py-12 flex flex-col justify-center items-center">
                <div className="w-full min-h-[380px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="w-full"
                        >
                            {steps[currentStep].content}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Statically Positioned Navigation controls below the content */}
                <div className="w-full flex items-center justify-between border-t border-white/[0.05] pt-8 mt-12 max-w-2xl">
                    <button
                        onClick={() => {
                            setCurrentStep((prev) => Math.max(0, prev - 1));
                            window.dispatchEvent(new CustomEvent('play-sound', { detail: { type: 'swell' } }));
                        }}
                        disabled={currentStep === 0}
                        className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-all cursor-pointer ${currentStep === 0 ? "opacity-25 pointer-events-none" : "text-neutral-400 hover:text-white"
                            }`}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous</span>
                    </button>

                    <div className="flex items-center gap-1.5">
                        {steps.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentStep(idx);
                                    window.dispatchEvent(new CustomEvent('play-sound', { detail: { type: 'swell' } }));
                                }}
                                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${idx === currentStep ? "bg-amber-400 w-4" : "bg-neutral-700 hover:bg-neutral-500"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1));
                            window.dispatchEvent(new CustomEvent('play-sound', { detail: { type: 'swell' } }));
                        }}
                        disabled={currentStep === steps.length - 1}
                        className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-all cursor-pointer ${currentStep === steps.length - 1 ? "opacity-25 pointer-events-none" : "text-neutral-400 hover:text-white"
                            }`}
                    >
                        <span>Next</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </main>

            {/* Silent Reflective Footer */}
            <footer className="relative z-20 px-6 pt-6 pb-24 text-center border-t border-white/[0.03] bg-transparent">
                <p className="text-xs text-neutral-500 font-mono tracking-widest uppercase">
                    © Arpit Sharma • The Multiverse is still unfolding
                </p>
            </footer>
        </div>
    );
}
