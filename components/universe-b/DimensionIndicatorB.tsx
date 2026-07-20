"use client";

import { motion } from "framer-motion";
import { useUniverse } from "@/context/UniverseContext";

export default function DimensionIndicatorB({ onSwitchDimension }: { onSwitchDimension?: () => void }) {
    const { setUniverse } = useUniverse();

    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onClick={onSwitchDimension || (() => setUniverse('LOBBY'))}
            className="fixed bottom-8 right-8 z-[60] flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 shadow-2xl hover:border-cyan-400 transition-all cursor-pointer group"
        >
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-mono text-cyan-300 font-semibold group-hover:text-white transition-colors">
                Perspective B — Builder
            </span>
        </motion.button>
    );
}
