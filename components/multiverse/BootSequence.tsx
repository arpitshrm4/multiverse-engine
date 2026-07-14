"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
    "INITIALIZING CORE...",
    "LOADING PERSONALITY MATRIX A...",
    "ESTABLISHING NEURAL LINK...",
    "SYSTEMS ONLINE.",
    "WELCOME, USER."
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        if (currentLine < lines.length) {
            const timeout = setTimeout(() => {
                setCurrentLine(prev => prev + 1);
            }, 600); // Speed of each line
            return () => clearTimeout(timeout);
        } else {
            setTimeout(onComplete, 800); // Wait a bit after last line
        }
    }, [currentLine, onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-[200] flex items-center justify-center font-mono text-green-500 p-8">
            <div className="max-w-xl w-full">
                {lines.slice(0, currentLine + 1).map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-2"
                    >
                        <span className="opacity-50 mr-4">{`0${i + 1} >`}</span>
                        {line}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-3 h-5 bg-green-500 mt-4"
                />
            </div>
        </div>
    );
}
