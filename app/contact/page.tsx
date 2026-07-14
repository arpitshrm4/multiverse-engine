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

export default function ContactPage() {
    const { universe } = useUniverse();
    const isB = universe === 'B';
    const content = isB ? siteData.contactB : siteData.contact;
    const activeContent = content || siteData.contact;

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

                <div className="container max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        <h1 className={`leading-tight mb-8 ${isB ? "text-4xl md:text-5xl font-serif" : "text-[56px] font-bold text-[var(--text-primary)]"
                            }`}>
                            {activeContent.heading}
                        </h1>

                        <p className={`mb-12 max-w-xl leading-relaxed ${isB ? "text-lg md:text-xl font-serif text-white/70" : "text-[16px] text-[var(--text-secondary)]"
                            }`}>
                            {activeContent.content}
                        </p>

                        <div className="space-y-8 mb-24">
                            <div>
                                <span className={`uppercase tracking-wide block mb-1 ${isB ? "text-[10px] text-white/30 font-serif" : "text-[13px] text-[var(--text-secondary)]"
                                    }`}>
                                    Email
                                </span>
                                <a
                                    href={`mailto:${siteData.contact.email}`}
                                    className={`transition-colors ${isB ? "text-xl font-serif text-white/90 hover:text-white" : "text-[16px] font-medium text-[var(--text-primary)] hover:text-[var(--accent-blue)]"
                                        }`}
                                >
                                    {siteData.contact.email}
                                </a>
                            </div>

                            <div>
                                <span className={`uppercase tracking-wide block mb-1 ${isB ? "text-[10px] text-white/30 font-serif" : "text-[13px] text-[var(--text-secondary)]"
                                    }`}>
                                    LinkedIn
                                </span>
                                <a
                                    href={`https://${siteData.contact.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-colors ${isB ? "text-xl font-serif text-white/90 hover:text-white" : "text-[16px] font-medium text-[var(--text-primary)] hover:text-[var(--accent-blue)]"
                                        }`}
                                >
                                    {siteData.contact.linkedin}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {isB ? <FooterB /> : <FooterA />}
            </div>
        </main>
    );
}
