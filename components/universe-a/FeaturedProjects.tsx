"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import MetricCard from "./MetricCard";
import Link from 'next/link';

export default function FeaturedProjects() {
    return (
        <section className="py-[var(--section-spacing,96px)]">
            <div className="container space-y-24">
                {siteData.projects.map((project, index) => {
                    const content = project.universeContent.A;

                    return (
                        <Link key={project.id} href={`/projects/${project.id}`} className="block group cursor-pointer">
                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.15 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-end"
                            >
                                <div className="md:col-span-8">
                                    {/* Index number */}
                                    <span className="text-[var(--accent-blue)] font-mono text-[13px] mb-4 block">
                                        0{index + 1}
                                    </span>
                                    {/* H2: 36px per PRD */}
                                    <h2 className="text-[36px] font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-blue)] transition-colors">
                                        {content.title}
                                    </h2>
                                    {/* Problem statement */}
                                    <p className="text-[16px] text-[var(--text-secondary)] max-w-2xl">
                                        {content.goal}
                                    </p>
                                </div>
                                <div className="md:col-span-4 flex justify-start md:justify-end">
                                    <span className="text-sm font-medium text-[var(--text-primary)] border-b border-[var(--text-primary)] pb-1 group-hover:border-[var(--accent-blue)] group-hover:text-[var(--accent-blue)] transition-colors">
                                        View Full Case Study →
                                    </span>
                                </div>
                            </motion.div>

                            {/* Metrics Grid - 3 metrics per PRD */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[var(--divider-color)] border border-[var(--divider-color)]">
                                {content.metrics.slice(0, 3).map((metric, i) => (
                                    <MetricCard
                                        key={i}
                                        label={metric.label}
                                        value={metric.value}
                                        direction={metric.value.startsWith('+') ? 'increase' : metric.value.startsWith('-') ? 'decrease' : 'neutral'}
                                        delay={i * 0.1}
                                    />
                                ))}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
