"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Keyboard } from "lucide-react";

const lines = [
    "INITIALIZING CORE...",
    "LOADING PERSONALITY MATRIX A...",
    "ESTABLISHING NEURAL LINK...",
    "SYSTEMS ONLINE.",
    "WELCOME, USER."
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
    const [started, setStarted] = useState(false);
    const [currentLine, setCurrentLine] = useState(0);

    // Listen for any keypress or click to boot the site
    useEffect(() => {
        if (started) return;

        const handleInitiate = () => {
            setStarted(true);
        };

        window.addEventListener("click", handleInitiate);
        window.addEventListener("keydown", handleInitiate);
        return () => {
            window.removeEventListener("click", handleInitiate);
            window.removeEventListener("keydown", handleInitiate);
        };
    }, [started]);

    // Handle typing animation lines
    useEffect(() => {
        if (!started) return;

        if (currentLine < lines.length) {
            const timeout = setTimeout(() => {
                setCurrentLine(prev => prev + 1);
            }, 600); // Speed of each line
            return () => clearTimeout(timeout);
        } else {
            setTimeout(onComplete, 800); // Wait a bit after last line
        }
    }, [currentLine, started, onComplete]);

    if (!started) {
        return (
            <div className="fixed inset-0 bg-[#040407] z-[200] flex flex-col items-center justify-center font-mono text-amber-500 p-8 select-none">
                <div className="max-w-xl w-full text-center space-y-12">
                    <div className="space-y-4">
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="text-xs tracking-[0.3em] uppercase text-amber-400/60"
                        >
                            Hey you
                        </motion.div>
                        <h2 className="text-xl md:text-2xl font-bold tracking-wider text-white">
                            Entering the Multiverse...
                        </h2>
                    </div>

                    {/* Flashing Call to Action to Trigger Audio Autoplay */}
                    <motion.div
                        animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.7, 1, 0.7] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="py-4 px-6 border border-amber-500/20 bg-amber-950/10 rounded-xl cursor-pointer hover:border-amber-400/40 hover:bg-amber-950/20 transition-all shadow-[0_0_30px_rgba(245,158,11,0.05)]"
                    >
                        <span className="text-sm tracking-widest text-amber-400 font-bold uppercase block">
                            [ Click or Press Any Key to Initiate ]
                        </span>
                    </motion.div>
                    {/* Keyboard Controls Notice Removed */}
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-[#040407] z-[200] flex items-center justify-center font-mono text-amber-500 p-8 select-none">
            <div className="max-w-xl w-full">
                {lines.slice(0, currentLine + 1).map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-3 text-sm tracking-wide"
                    >
                        <span className="opacity-40 mr-4">{`0${i + 1} >`}</span>
                        {line}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2.5 h-4 bg-amber-500 mt-4"
                />
            </div>
        </div>
    );
}
