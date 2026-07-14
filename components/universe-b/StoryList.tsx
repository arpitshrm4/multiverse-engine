"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import Link from "next/link";

export default function StoryList() {
    return (
        <section id="stories" className="py-32 px-8 md:px-16 lg:px-24">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-sm uppercase tracking-widest text-white/40 mb-16"
                >
                    Selected Stories
                </motion.h2>

                {/* Story Cards */}
                <div className="space-y-16">
                    {siteData.projects.map((project, index) => {
                        const storyContent = project.universeContent.B;
                        if (!storyContent) return null;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className="group"
                            >
                                <Link href={`/stories/${project.id}`} className="block">
                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-serif text-white/90 mb-4 group-hover:text-white transition-colors duration-300">
                                        {storyContent.title}
                                    </h3>

                                    {/* Hook - split by newlines */}
                                    <div className="mb-6">
                                        {storyContent.hook.split('\n').map((line, i) => (
                                            <p
                                                key={i}
                                                className="text-lg text-white/50 font-light leading-relaxed"
                                            >
                                                {line}
                                            </p>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <span className="inline-flex items-center text-white/60 group-hover:text-white transition-colors duration-300">
                                        <span className="mr-2">Read the Story</span>
                                        <motion.span
                                            className="inline-block"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                </Link>

                                {/* Divider */}
                                {index < siteData.projects.length - 1 && (
                                    <div className="mt-16 border-b border-white/10" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
