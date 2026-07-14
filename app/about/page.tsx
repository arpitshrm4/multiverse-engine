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

export default function AboutPage() {
    const { universe } = useUniverse();
    const isB = universe === 'B';
    const content = isB ? siteData.aboutB : siteData.about;
    const activeContent = content || siteData.about;

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
                        <h1 className={`leading-tight mb-12 ${isB ? "text-4xl md:text-5xl font-serif" : "text-[56px] font-bold text-[var(--text-primary)]"
                            }`}>
                            {activeContent.heading}
                        </h1>

                        <div className="space-y-6 mb-24">
                            {activeContent.content.map((paragraph, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.15, delay: i * 0.05 }}
                                    className={`max-w-2xl leading-relaxed ${isB ? "text-lg md:text-xl font-serif text-white/70" : "text-[16px] text-[var(--text-secondary)]"
                                        }`}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                </div>
                {isB ? <FooterB /> : <FooterA />}
            </div>
        </main>
    );
}
