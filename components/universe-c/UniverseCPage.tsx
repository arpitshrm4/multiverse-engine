"use client";

import { motion } from "framer-motion";

export default function UniverseCPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black text-white font-serif overflow-hidden">
            {/* Ambient Storyteller background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 px-6 max-w-xl"
            >
                <span className="font-mono text-emerald-400 text-xs tracking-[0.3em] uppercase block mb-4">
                    Dimension C
                </span>
                <h1 className="text-4xl md:text-5xl font-normal text-white/90 mb-6 font-serif tracking-tight">
                    A New Story Begins
                </h1>
                <div className="w-12 h-px bg-emerald-500/50 mx-auto mb-6" />
                <p className="text-white/60 font-light italic leading-relaxed text-base md:text-lg">
                    This space is ready for your narrative. Open <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded text-emerald-300">components/universe-c/UniverseCPage.tsx</code> to begin building your story.
                </p>
            </motion.div>
        </div>
    );
}
