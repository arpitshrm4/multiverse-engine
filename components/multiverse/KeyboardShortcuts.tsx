"use client";

import { useState } from "react";
import { Keyboard } from "lucide-react";

interface KeyboardShortcutsProps {
    showPlanetShortcuts?: boolean;
}

export default function KeyboardShortcuts({ showPlanetShortcuts = false }: KeyboardShortcutsProps) {
    const [showShortcuts, setShowShortcuts] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                onClick={() => setShowShortcuts(!showShortcuts)}
                className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-black/60 transition-all duration-300 shadow-2xl cursor-pointer"
                title="Keyboard Shortcuts"
            >
                <Keyboard size={20} className="text-white/80" />
            </button>

            {showShortcuts && (
                <div className="absolute bottom-32 right-0 w-64 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-2xl font-sans">
                    <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Keyboard Shortcuts</h3>
                    <div className="space-y-2 text-xs">
                        {showPlanetShortcuts && (
                            <>
                                <div className="flex justify-between items-center text-white/80">
                                    <span className="font-mono bg-white/10 px-2 py-1 rounded">A</span>
                                    <span className="text-white/60">Human</span>
                                </div>
                                <div className="flex justify-between items-center text-white/80">
                                    <span className="font-mono bg-white/10 px-2 py-1 rounded">B</span>
                                    <span className="text-white/60">Builder</span>
                                </div>
                                <div className="flex justify-between items-center text-white/80">
                                    <span className="font-mono bg-white/10 px-2 py-1 rounded">C</span>
                                    <span className="text-white/60">Thinker</span>
                                </div>
                                <div className="flex justify-between items-center text-white/80">
                                    <span className="font-mono bg-white/10 px-2 py-1 rounded">D</span>
                                    <span className="text-white/60">Explorer</span>
                                </div>
                                <div className="flex justify-between items-center text-white/80">
                                    <span className="font-mono bg-white/10 px-2 py-1 rounded">E</span>
                                    <span className="text-white/60">Future</span>
                                </div>
                                <div className="border-t border-white/10 my-2"></div>
                            </>
                        )}
                        <div className="flex justify-between items-center text-white/80">
                            <span className="font-mono bg-white/10 px-2 py-1 rounded">ESC</span>
                            <span className="text-white/60">Return to Lobby</span>
                        </div>
                        <div className="flex justify-between items-center text-white/80">
                            <span className="font-mono bg-white/10 px-2 py-1 rounded">R</span>
                            <span className="text-white/60">Reset to Lobby</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
