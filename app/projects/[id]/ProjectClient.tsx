"use client";

import { notFound } from 'next/navigation';
import { siteData } from '@/lib/data';
import { motion } from 'framer-motion';
import InsightList from '@/components/universe-a/InsightList';
import DecisionBlock from '@/components/universe-a/DecisionBlock';
import MetricCard from '@/components/universe-a/MetricCard';

export default function ProjectClient({ id }: { id: string }) {
    const project = siteData.projects.find(p => p.id === id);

    if (!project) return notFound();

    const content = project.universeContent.A;

    return (
        <article className="min-h-screen bg-white pb-32">
            {/* 5.1 Summary Block */}
            <header className="pt-32 pb-20 container border-b border-gray-100">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                    <span className="text-blue-600 font-mono text-sm mb-4 block">CASE STUDY</span>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">{content.title}</h1>
                    <p className="text-2xl text-gray-500 mb-12 max-w-2xl">{content.goal}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <span className="block text-xs uppercase text-gray-400 mb-1">Outcome</span>
                            <span className="block font-medium text-green-600">{content.outcome}</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase text-gray-400 mb-1">Role</span>
                            <span className="block font-medium text-gray-900">{content.role}</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase text-gray-400 mb-1">Timeline</span>
                            <span className="block font-medium text-gray-900">{content.timeframe}</span>
                        </div>
                    </div>
                </motion.div>
            </header>

            <div className="container max-w-4xl mx-auto mt-24 space-y-24">

                {/* 5.2 Problem Context */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">The Problem</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {content.problemContext.problem}
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-sm font-bold uppercase text-gray-400 mb-4">Constraints</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {content.problemContext.constraints.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* 5.3 Insights */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Discovery & Insights</h2>
                    <InsightList items={content.insights} />
                </section>

                {/* 5.4 Design Principles */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Guiding Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {content.designPrinciples.map((p, i) => (
                            <div key={i} className="border-l-2 border-blue-600 pl-4 py-1">
                                <p className="font-medium text-gray-900">{p}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5.5 UX Decisions */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Decisions</h2>
                    <DecisionBlock decisions={content.uxDecisions} />
                </section>

                {/* 5.7 Metrics */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Outcomes</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                        {content.metrics.map((m, i) => (
                            <MetricCard key={i} label={m.label} value={m.value} delay={i * 0.1} />
                        ))}
                    </div>
                </section>

                {/* 5.8 Reflection */}
                <section className="bg-[#F7F7F5] p-8 rounded-lg mt-12">
                    <h3 className="text-sm font-bold uppercase text-gray-400 mb-3">Reflection</h3>
                    <p className="text-gray-700 italic leading-relaxed">{content.reflection}</p>
                </section>

            </div>
        </article>
    );
}
