"use client";

import { motion } from "framer-motion";
import { useUniverse } from "@/context/UniverseContext";
import NavbarA from "@/components/universe-a/Navbar";
import NavbarB from "@/components/universe-b/NavbarB";
import FooterA from "@/components/universe-a/Footer";
import FooterB from "@/components/universe-b/FooterB";
import { siteData } from "@/lib/data";
import SpaceBackground from "@/components/multiverse/SpaceBackground";
import StoryBackground from "@/components/universe-b/StoryBackground";
import SystemOverlay from "@/components/multiverse/SystemOverlay";

export default function ProcessPage() {
    const { universe } = useUniverse();
    const isB = universe === 'B';
    const content = isB ? siteData.processB : siteData.process;

    // Default to A if B content is missing for some reason
    const activeContent = content || siteData.process;

    const mainClasses = isB
        ? "min-h-screen bg-black text-white pt-32 relative"
        : "min-h-screen bg-[var(--bg-primary)] pt-32 relative";

    return (
        <main data-universe={universe} className={mainClasses}>
            {isB && (
                <>
                    <SpaceBackground />
                    <div className="fixed inset-0 pointer-events-none z-0">
                        <StoryBackground />
                    </div>
                </>
            )}
            <SystemOverlay universe={universe} />

            <div className="relative z-10">
                {isB ? <NavbarB /> : <NavbarA />}

                <div className="container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        <h1 className={`leading-tight mb-16 ${isB ? "text-4xl md:text-5xl font-serif" : "text-[56px] font-bold text-[var(--text-primary)]"
                            }`}>
                            {activeContent.heading}
                        </h1>

                        <div className="space-y-12 mb-24">
                            {activeContent.steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.15, delay: i * 0.05 }}
                                    className={`pl-8 ${isB ? "border-l border-white/20" : "border-l-2 border-[var(--divider-color)]"
                                        }`}
                                >
                                    <h3 className={`mb-3 ${isB ? "text-xl md:text-2xl font-serif text-white/90" : "text-[24px] font-bold text-[var(--text-primary)]"
                                        }`}>
                                        {step.title}
                                    </h3>
                                    <p className={`leading-relaxed ${isB ? "text-lg text-white/50 font-serif" : "text-[16px] text-[var(--text-secondary)]"
                                        }`}>
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                {isB ? <FooterB /> : <FooterA />}
            </div>
        </main>
    );
}
