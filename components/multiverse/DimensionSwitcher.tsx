"use client";

import { useUniverse } from "@/context/UniverseContext";
import { UniverseId } from "@/lib/types";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";

const dimensions: { id: UniverseId; label: string; color: string }[] = [
    { id: 'A', label: 'Personal Journal (Origin)', color: 'bg-white' },
    { id: 'B', label: 'Work (Realist)', color: 'bg-indigo-900' },
    { id: 'C', label: 'Storytelling (Narrative)', color: 'bg-emerald-900' },
    { id: 'D', label: 'Systems Thinking', color: 'bg-purple-900' },
    { id: 'E', label: 'Mars Signal Station', color: 'bg-teal-900' },
];

export default function DimensionSwitcher() {
    const { universe, setUniverse } = useUniverse();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl flex gap-1 items-center"
        >
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest pl-3 pr-2 border-r border-white/10">
                DIMENSION
            </span>

            {/* Return to Lobby */}
            <button
                onClick={() => setUniverse('LOBBY')}
                className="px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb000]"
                title="Return to Celestial Lobby"
            >
                <LayoutGrid size={14} />
            </button>

            <div className="w-px h-4 bg-white/10 mx-1" />
            {dimensions.map((dim) => (
                <button
                    key={dim.id}
                    onClick={() => {
                        console.log("DimensionSwitcher: User clicked button to switch to ->", dim.id);
                        setUniverse(dim.id);
                    }}
                    className={`
            relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb000]
            ${universe === dim.id
                            ? 'bg-white shadow-lg text-gray-800 scale-105'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'}
          `}
                >
                    {dim.id}
                    {universe === dim.id && (
                        <motion.div
                            layoutId="active-dim"
                            className="absolute inset-0 bg-white rounded-xl -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </button>
            ))}
        </motion.div>
    );
}
