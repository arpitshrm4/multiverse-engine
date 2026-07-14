"use client";

import { motion } from "framer-motion";
import SignalWindow from "./SignalWindow";

export default function UniverseEPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center font-mono overflow-hidden bg-[var(--bg-primary)]">
            {/* Signal Window */}
            <SignalWindow />

            {/* Main Content Area */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-4xl px-8 text-center"
            >
                <div className="backdrop-blur-xl bg-black/40 border border-emerald-500/20 rounded-lg p-12 shadow-2xl shadow-emerald-500/10">
                    <h1 className="text-4xl md:text-6xl font-mono text-emerald-400 mb-6 tracking-wider">
                        MARS SIGNAL STATION
                    </h1>
                    <p className="text-emerald-300/70 text-lg font-mono mb-8">
                        Receiving and transmitting data packets from Mars surface operations
                    </p>
                    <div className="space-y-4 text-left text-emerald-400/60 text-sm font-mono">
                        <div className="border-l-2 border-emerald-500/30 pl-4">
                            <div className="text-emerald-400">Status: Active</div>
                            <div className="text-emerald-400/50">Connection: Stable</div>
                            <div className="text-emerald-400/50">Latency: ~3.2s</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
