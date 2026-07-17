"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import Link from 'next/link';

export default function Hero() {
    const { headline, subtext } = siteData.hero.A;

    return (
        <section className="min-h-[80vh] flex flex-col justify-center container pt-20">
            {/* H1: 56px / 64px line height per PRD */}
            <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="text-[56px] leading-[64px] font-bold tracking-tight text-[var(--text-primary)] max-w-4xl mb-8"
            >
                {headline}
            </motion.h1>

            {/* Subtext */}
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: 0.05, ease: "easeOut" }}
                className="text-xl text-[var(--text-secondary)] max-w-2xl mb-12"
            >
                {subtext}
            </motion.p>

            {/* CTAs - Left aligned per PRD */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, delay: 0.1 }}
                className="flex gap-6 items-start"
            >
                <Link 
                    href="/projects" 
                    className="px-8 py-4 bg-[var(--text-primary)] text-black font-medium hover:opacity-90 transition-opacity"
                >
                    View Case Studies
                </Link>
                <Link 
                    href="/process" 
                    className="px-8 py-4 border border-[var(--border-color)] text-[var(--text-primary)] font-medium hover:bg-[var(--bg-secondary)] transition-colors"
                >
                    Explore Process
                </Link>
            </motion.div>
        </section>
    );
}
