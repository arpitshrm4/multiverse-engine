"use client";

import { useUniverse } from "@/context/UniverseContext";
import { UniverseId } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import UniverseAPage from "@/components/universe-a/UniverseAPage";
import UniverseBPage from "@/components/universe-b/UniverseBPage";
import UniverseCPage from "@/components/universe-c/UniverseCPage";
import UniverseEPage from "@/components/universe-e/UniverseEPage";
import DimensionSwitcher from "@/components/multiverse/DimensionSwitcher";
import SystemOverlay from "@/components/multiverse/SystemOverlay";
import BootSequence from "@/components/multiverse/BootSequence";
import SpaceBackground from "@/components/multiverse/SpaceBackground";
import PlanetaryLobby from "@/components/multiverse/PlanetaryLobby";
import KeyboardShortcuts from "@/components/multiverse/KeyboardShortcuts";
import AudioAmbience from "@/components/multiverse/AudioAmbience";

// Placeholder components for future universes
const UniversePlaceholder = ({ id }: { id: string }) => (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
        <div className="text-center">
            <h1 className="text-4xl font-mono mb-4 text-gray-500">
                Dimension {id} <span className="text-red-500">OFFLINE</span>
            </h1>
            <p className="font-mono text-sm text-gray-700">Sequence not yet initiated.</p>
        </div>
    </div>
);

const warpTransition = {
    initial: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    transition: { duration: 0.4, ease: "easeInOut" as const }
};

export default function MultiverseShell() {
    const { universe, setUniverse } = useUniverse();
    const [booted, setBooted] = useState(false);
    const inLobby = universe === 'LOBBY';

    useEffect(() => {
        console.log("MultiverseShell state change - universe:", universe, "booted:", booted, "inLobby:", inLobby);
    }, [universe, booted, inLobby]);

    // ESC and R key handlers to return to lobby
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            // Don't trigger if user is typing in an input field
            const target = event.target as HTMLElement;
            if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
                return;
            }

            const key = event.key.toUpperCase();
            // ESC or R to return to lobby (R works anytime, ESC only when not in lobby)
            if ((key === 'ESCAPE' && !inLobby && booted) || (key === 'R' && booted)) {
                event.preventDefault();
                setUniverse('LOBBY');
            }
        };

        window.addEventListener('keydown', handleKeyPress, true); // Use capture phase
        return () => window.removeEventListener('keydown', handleKeyPress, true);
    }, [inLobby, booted, setUniverse]);

    const handleUniverseSelect = (id: UniverseId) => {
        setUniverse(id);
    };

    return (
        <>
            <SystemOverlay universe={universe} />
            {/* <AudioAmbience /> */}

            {!booted && <BootSequence onComplete={() => setBooted(true)} />}

            {booted && inLobby && (
                <PlanetaryLobby onSelect={handleUniverseSelect} />
            )}

            {booted && !inLobby && (
                <>
                    <SpaceBackground />
                    <AnimatePresence mode="wait">
                        {universe === 'A' && (
                            <motion.div key="A" {...warpTransition}>
                                <UniverseAPage />
                            </motion.div>
                        )}
                        {universe === 'B' && (
                            <motion.div key="B" {...warpTransition}>
                                <UniverseBPage />
                            </motion.div>
                        )}
                        {universe === 'C' && (
                            <motion.div key="C" {...warpTransition}>
                                <UniverseCPage />
                            </motion.div>
                        )}
                        {universe === 'E' && (
                            <motion.div key="E" {...warpTransition}>
                                <UniverseEPage />
                            </motion.div>
                        )}
                        {universe === 'D' && (
                            <motion.div key="D" {...warpTransition}>
                                <UniversePlaceholder id="D" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <DimensionSwitcher />
                    <KeyboardShortcuts showPlanetShortcuts={false} />
                </>
            )}
        </>
    );
}
