"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DimensionIndicatorProps {
    onSwitchDimension?: () => void;
}

export default function DimensionIndicator({ onSwitchDimension }: DimensionIndicatorProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.5 }}
            className="fixed bottom-6 right-6 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={onSwitchDimension}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--divider-color)] text-[var(--text-secondary)] text-xs font-medium tracking-wide hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
            >
                <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
                <span>Dimension A — Personal Journal (Origin)</span>
            </button>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.1 }}
                        className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[var(--text-primary)] text-white text-xs whitespace-nowrap"
                    >
                        Click to explore other dimensions
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
