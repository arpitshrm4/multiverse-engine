"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import Link from "next/link";

export default function HeroB() {
    const hero = siteData.hero.B;
    if (!hero) return null;

    return (
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-4xl"
            >
                {/* Headline - split by newline for dramatic effect */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-tight text-white/90 mb-8">
                    {hero.headline.split('\n').map((line, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 + i * 0.3 }}
                            className="block"
                        >
                            {line}
                        </motion.span>
                    ))}
                </h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-lg md:text-xl text-white/60 font-light mb-12 max-w-2xl"
                >
                    {hero.subtext}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        href="#stories"
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300"
                    >
                        Enter the Stories
                    </Link>
                    <Link
                        href="#work"
                        className="px-8 py-4 border border-white/10 text-white/70 font-medium hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                        See the Work
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
