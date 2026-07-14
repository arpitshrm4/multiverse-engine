"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CaseStudyUniverseB } from "@/lib/types";
import NavbarB from "./NavbarB";
import FooterB from "./FooterB";
import DimensionIndicatorB from "./DimensionIndicatorB";
import MetricCard from "../universe-a/MetricCard";
import SystemOverlay from "../multiverse/SystemOverlay";
import SpaceBackground from "../multiverse/SpaceBackground";
import StoryBackground from "./StoryBackground";

interface StoryPageProps {
    story: CaseStudyUniverseB;
}

export default function StoryPage({ story }: StoryPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-black text-white selection:bg-white/20">
            {/* Background elements */}
            <SpaceBackground />
            <div className="fixed inset-0 pointer-events-none z-0">
                <StoryBackground />
            </div>
            <SystemOverlay universe="B" />

            {/* Content */}
            <div className="relative z-10">
                <NavbarB />

                <main className="pt-32">
                    {/* Story Header */}
                    <section className="px-8 md:px-16 lg:px-24 mb-32">
                        <div className="max-w-4xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="text-4xl md:text-5xl font-serif mb-8 text-white/90"
                            >
                                {story.title}
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.5 }}
                                className="text-xl md:text-2xl font-serif text-white/50 italic leading-relaxed"
                            >
                                {story.hook.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* Chapters */}
                    <div className="space-y-[40vh] pb-[20vh]">
                        {story.chapters.map((chapter, index) => (
                            <ChapterSection key={index} chapter={chapter} index={index} />
                        ))}
                    </div>

                    {/* Results & Metrics */}
                    <section className="px-8 md:px-16 lg:px-24 py-32 border-t border-white/5 bg-black/30 backdrop-blur-sm">
                        <div className="max-w-4xl mx-auto">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-sm uppercase tracking-[0.3em] text-white/40 mb-16"
                            >
                                The Result
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
                            >
                                {story.metrics.map((metric, i) => (
                                    <MetricCard
                                        key={i}
                                        label={metric.label}
                                        value={metric.value}
                                        direction={metric.value.includes('+') ? 'increase' : 'decrease'}
                                        delay={i * 0.1}
                                    />
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="max-w-2xl"
                            >
                                <h3 className="text-sm uppercase tracking-widest text-white/40 mb-6 italic">Reflection</h3>
                                <div className="text-xl md:text-2xl font-serif text-white/80 leading-relaxed whitespace-pre-wrap">
                                    {story.narrativeReflection}
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </main>

                <FooterB />
            </div>

            <DimensionIndicatorB />
        </div>
    );
}

function ChapterSection({ chapter, index }: { chapter: { title: string; content: string[] }; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.4, 1], [20, 0, -20]);

    return (
        <motion.section
            ref={ref}
            style={{ opacity, y }}
            className="px-8 md:px-16 lg:px-24 flex flex-col items-center text-center"
        >
            <div className="max-w-2xl">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">
                    Chapter {index + 1} &mdash; {chapter.title}
                </span>
                <div className="space-y-6">
                    {chapter.content.map((para, i) => (
                        <p key={i} className="text-xl md:text-2xl font-serif text-white/80 leading-relaxed">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
