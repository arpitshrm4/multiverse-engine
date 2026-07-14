"use client";

import { motion } from "framer-motion";

export default function DimensionIndicatorB() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="fixed bottom-8 right-8 z-[60] flex items-center gap-3 pointer-events-none"
        >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-serif text-white/40">
                Dimension B — Work (Realist)
            </span>
        </motion.div>
    );
}
