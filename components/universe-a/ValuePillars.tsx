"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function ValuePillars() {
    return (
        <section className="py-24 border-t border-[var(--divider-color)]">
            <div className="container">
                {/* 4 equal-width cards per PRD */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {siteData.values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.15, delay: index * 0.05 }}
                            className="flex flex-col"
                        >
                            {/* H3: 24px per PRD */}
                            <h3 className="text-[24px] font-bold text-[var(--text-primary)] mb-3">
                                {value.title}
                            </h3>
                            {/* Body: 16px per PRD */}
                            <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
