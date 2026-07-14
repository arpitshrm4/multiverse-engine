"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getStoryNode, StoryNode } from "@/utils/StoryEngine";
import TypewriterText from "./TypewriterText";

export default function StoryInterface() {
    const [currentNodeId, setCurrentNodeId] = useState("init");
    const [textFinished, setTextFinished] = useState(false);

    const currentNode: StoryNode = getStoryNode(currentNodeId);

    const handleChoice = (nextId: string) => {
        setTextFinished(false);
        setCurrentNodeId(nextId);
    };

    return (
        <div className="relative z-10 p-8 max-w-2xl w-full">
            {/* Terminal Window */}
            <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-lg p-8 shadow-2xl shadow-indigo-500/10 min-h-[400px] flex flex-col justify-between">

                {/* Header */}
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Signal Source: Unknown</span>
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-mono text-red-400">REC</span>
                    </div>
                </div>

                {/* Narrative Text */}
                <div className="flex-grow mb-8">
                    <TypewriterText
                        key={currentNode.id} // Force re-render on new node to restart effect
                        text={currentNode.text}
                        onComplete={() => setTextFinished(true)}
                        speed={25}
                    />
                </div>

                {/* Choices (Only show when text finishes) */}
                <div className="space-y-3 min-h-[100px]">
                    <AnimatePresence>
                        {textFinished && currentNode.choices.map((choice, index) => (
                            <motion.button
                                key={choice.label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleChoice(choice.nextId)}
                                className={`
                                    w-full text-left p-4 rounded border font-mono text-sm transition-all duration-300
                                    ${choice.type === 'danger' ? 'border-red-900/50 hover:bg-red-950/30 text-red-200' :
                                        choice.type === 'success' ? 'border-indigo-900/50 hover:bg-indigo-950/30 text-indigo-200' :
                                            'border-white/10 hover:bg-white/5 text-gray-300'}
                                    hover:translate-x-1 hover:border-opacity-50
                                `}
                            >
                                <span className="mr-3 text-xs opacity-50">{index + 1} &gt;</span>
                                {choice.label}
                            </motion.button>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
