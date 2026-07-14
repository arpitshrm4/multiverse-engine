"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function IntroSection() {
    const intro = siteData.intro;
    if (!intro) return null;

    return (
        <section className="py-32 px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl mx-auto">
                {intro.content.map((paragraph, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        className={`text-xl md:text-2xl font-serif leading-relaxed mb-8 ${i === intro.content.length - 1
                                ? "text-white/80"
                                : "text-white/50"
                            }`}
                    >
                        {paragraph}
                    </motion.p>
                ))}
            </div>
        </section>
    );
}
