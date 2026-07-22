"use client";

import { useEffect, useRef, useState } from "react";
import { useUniverse } from "@/context/UniverseContext";
import { UniverseId } from "@/lib/types";

export default function AudioAmbience() {
    const { universe } = useUniverse();
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    // Refs for node gain controls to allow smooth fading
    const gainsRef = useRef<Record<string, GainNode>>({});
    const activeUniverseRef = useRef<UniverseId>("LOBBY");
    const isPlayingRef = useRef(true);
    const hoveredPlanetRef = useRef<string | null>(null);
    const graphSetupDoneRef = useRef(false);

    // Reference to scheduled intervals or timeouts for generative sounds
    const generativeIntervalsRef = useRef<any[]>([]);

    const cleanupGenerative = () => {
        generativeIntervalsRef.current.forEach(clearInterval);
        generativeIntervalsRef.current = [];
    };

    // Helper to synthesize custom interaction sounds
    const playInteractionSound = (type: string) => {
        if (!audioContext || !isPlayingRef.current) return;
        const now = audioContext.currentTime;

        try {
            if (type === "sparkle") {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.type = "sine";
                const freq = 1200 + Math.random() * 800;
                osc.frequency.setValueAtTime(freq, now);
                gain.gain.setValueAtTime(0.015, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.start(now);
                osc.stop(now + 0.5);
            } else if (type === "resonance") {
                const osc = audioContext.createOscillator();
                const osc2 = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.type = "sine";
                osc2.type = "sine";
                osc.frequency.setValueAtTime(523.25, now); // C5
                osc2.frequency.setValueAtTime(783.99, now); // G5
                gain.gain.setValueAtTime(0.02, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
                osc.connect(gain);
                osc2.connect(gain);
                gain.connect(audioContext.destination);
                osc.start(now);
                osc2.start(now);
                osc.stop(now + 1.2);
                osc2.stop(now + 1.2);
            } else if (type === "click") {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.type = "triangle";
                osc.frequency.setValueAtTime(150, now);
                osc.frequency.exponentialRampToValueAtTime(50, now + 0.05);
                gain.gain.setValueAtTime(0.03, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.start(now);
                osc.stop(now + 0.05);
            } else if (type === "bell") {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(220, now); // A3
                gain.gain.setValueAtTime(0.03, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.start(now);
                osc.stop(now + 2.0);
            } else if (type === "paper") {
                const bufferSize = audioContext.sampleRate * 0.2;
                const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
                const noise = audioContext.createBufferSource();
                noise.buffer = buffer;
                const filter = audioContext.createBiquadFilter();
                filter.type = "bandpass";
                filter.frequency.setValueAtTime(1000, now);
                filter.Q.setValueAtTime(1, now);
                const gain = audioContext.createGain();
                gain.gain.setValueAtTime(0.02, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
                noise.connect(filter);
                filter.connect(gain);
                gain.connect(audioContext.destination);
                noise.start(now);
            } else if (type === "swell") {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(329.63, now); // E4
                gain.gain.setValueAtTime(0.001, now);
                gain.gain.linearRampToValueAtTime(0.025, now + 0.8);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.start(now);
                osc.stop(now + 2.5);
            }
        } catch (e) {
            console.error("Interaction sound playback failed:", e);
        }
    };

    // Synthesize the 6 distinct environments
    const setupAmbienceGraph = (ctx: AudioContext) => {
        if (graphSetupDoneRef.current) return;
        graphSetupDoneRef.current = true;

        const now = ctx.currentTime;

        // Master output node
        const masterVolume = ctx.createGain();
        masterVolume.gain.setValueAtTime(0.04, now); // Low master volume
        masterVolume.connect(ctx.destination);

        // -------------------------------------------------------------
        // 1. LOBBY: Deep Space Drone
        // -------------------------------------------------------------
        const gLobby = ctx.createGain();
        gLobby.gain.setValueAtTime(0.12, now); // Set default values immediately
        gLobby.connect(masterVolume);
        gainsRef.current["LOBBY"] = gLobby;

        const lobbyOsc1 = ctx.createOscillator();
        lobbyOsc1.type = "sine";
        lobbyOsc1.frequency.setValueAtTime(55, now); // A1 sub-bass
        const lobbyOsc2 = ctx.createOscillator();
        lobbyOsc2.type = "sine";
        lobbyOsc2.frequency.setValueAtTime(55.4, now); // Detune beats

        const lobbyFilter = ctx.createBiquadFilter();
        lobbyFilter.type = "lowpass";
        lobbyFilter.frequency.setValueAtTime(180, now);

        lobbyOsc1.connect(lobbyFilter);
        lobbyOsc2.connect(lobbyFilter);
        lobbyFilter.connect(gLobby);
        lobbyOsc1.start(now);
        lobbyOsc2.start(now);

        // -------------------------------------------------------------
        // 2. HUMAN (A): Nostalgic Vinyl Tape Hum & Generative Piano Notes
        // -------------------------------------------------------------
        const gA = ctx.createGain();
        gA.gain.setValueAtTime(0.001, now);
        gA.connect(masterVolume);
        gainsRef.current["A"] = gA;

        // Warm tape hum / crackle
        const bufferSize = ctx.sampleRate * 2.0;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            noiseData[i] = (Math.random() * 2 - 1) * 0.05;
        }
        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = noiseBuffer;
        noiseSource.loop = true;
        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = "bandpass";
        noiseFilter.frequency.setValueAtTime(800, now);
        noiseSource.connect(noiseFilter);
        noiseFilter.connect(gA);
        noiseSource.start(now);

        // Generative Piano Note triggers
        const notesPentatonic = [220.00, 246.94, 277.18, 329.63, 392.00]; // A3, B3, C#4, E4, G4
        const triggerPianoA = () => {
            if (activeUniverseRef.current !== "A" || !isPlayingRef.current) return;
            const tNow = ctx.currentTime;
            const pOsc = ctx.createOscillator();
            const pGain = ctx.createGain();
            pOsc.type = "sine";
            const randomNote = notesPentatonic[Math.floor(Math.random() * notesPentatonic.length)];
            pOsc.frequency.setValueAtTime(randomNote, tNow);
            pGain.gain.setValueAtTime(0.008, tNow);
            pGain.gain.exponentialRampToValueAtTime(0.0001, tNow + 3.0);
            pOsc.connect(pGain);
            pGain.connect(gA);
            pOsc.start(tNow);
            pOsc.stop(tNow + 3.0);
        };
        const intervalA = setInterval(triggerPianoA, 3500);
        generativeIntervalsRef.current.push(intervalA);

        // -------------------------------------------------------------
        // 3. BUILDER (B): Technical Low Synth Pulse & Click Hum
        // -------------------------------------------------------------
        const gB = ctx.createGain();
        gB.gain.setValueAtTime(0.001, now);
        gB.connect(masterVolume);
        gainsRef.current["B"] = gB;

        const bOsc = ctx.createOscillator();
        bOsc.type = "triangle";
        bOsc.frequency.setValueAtTime(82.41, now); // E2 precision hum
        const bLFO = ctx.createOscillator();
        bLFO.frequency.setValueAtTime(0.5, now);
        const bLFOGain = ctx.createGain();
        bLFOGain.gain.setValueAtTime(0.015, now);
        bLFO.connect(bLFOGain);
        bLFOGain.connect(gB.gain);

        bOsc.connect(gB);
        bOsc.start(now);
        bLFO.start(now);

        // -------------------------------------------------------------
        // 4. THINKER (C): Evolving Long-Reverb Harmonic Pad
        // -------------------------------------------------------------
        const gC = ctx.createGain();
        gC.gain.setValueAtTime(0.001, now);
        gC.connect(masterVolume);
        gainsRef.current["C"] = gC;

        const chordOscs = [
            ctx.createOscillator(),
            ctx.createOscillator(),
            ctx.createOscillator()
        ];
        chordOscs.forEach(o => {
            o.type = "sine";
            o.connect(gC);
            o.start(now);
        });

        let chordIndex = 0;
        const chords = [
            [110.00, 130.81, 164.81], // Am
            [98.00, 146.83, 196.00],  // G
            [87.31, 130.81, 174.61]   // F
        ];
        const updateThinkerChord = () => {
            if (activeUniverseRef.current !== "C") return;
            const tNow = ctx.currentTime;
            const currentChord = chords[chordIndex];
            chordOscs.forEach((o, i) => {
                o.frequency.exponentialRampToValueAtTime(currentChord[i], tNow + 3.0);
            });
            chordIndex = (chordIndex + 1) % chords.length;
        };
        updateThinkerChord();
        const intervalC = setInterval(updateThinkerChord, 6000);
        generativeIntervalsRef.current.push(intervalC);

        // -------------------------------------------------------------
        // 5. CURIOSITY (D): Crystal Shimmer & High Bell Sparks
        // -------------------------------------------------------------
        const gD = ctx.createGain();
        gD.gain.setValueAtTime(0.001, now);
        gD.connect(masterVolume);
        gainsRef.current["D"] = gD;

        const dOsc = ctx.createOscillator();
        dOsc.type = "sine";
        dOsc.frequency.setValueAtTime(440, now);
        const dLFO = ctx.createOscillator();
        dLFO.frequency.setValueAtTime(0.2, now);
        const dLFOGain = ctx.createGain();
        dLFOGain.gain.setValueAtTime(0.005, now);
        dLFO.connect(dLFOGain);
        dLFOGain.connect(gD.gain);

        dOsc.connect(gD);
        dOsc.start(now);
        dLFO.start(now);

        const triggerSparkleD = () => {
            if (activeUniverseRef.current !== "D" || !isPlayingRef.current) return;
            playInteractionSound("sparkle");
        };
        const intervalD = setInterval(triggerSparkleD, 4000);
        generativeIntervalsRef.current.push(intervalD);

        // -------------------------------------------------------------
        // 6. FUTURE (E): Expansive Sunrise Orchestral Swell
        // -------------------------------------------------------------
        const gE = ctx.createGain();
        gE.gain.setValueAtTime(0.001, now);
        gE.connect(masterVolume);
        gainsRef.current["E"] = gE;

        const eOsc1 = ctx.createOscillator();
        eOsc1.type = "triangle";
        eOsc1.frequency.setValueAtTime(110, now);
        const eOsc2 = ctx.createOscillator();
        eOsc2.type = "sine";
        eOsc2.frequency.setValueAtTime(220, now);

        const eFilter = ctx.createBiquadFilter();
        eFilter.type = "lowpass";
        eFilter.frequency.setValueAtTime(200, now);

        eOsc1.connect(eFilter);
        eOsc2.connect(eFilter);
        eFilter.connect(gE);
        eOsc1.start(now);
        eOsc2.start(now);

        let swellUp = true;
        const triggerSunriseSwell = () => {
            if (activeUniverseRef.current !== "E") return;
            const tNow = ctx.currentTime;
            const targetFreq = swellUp ? 600 : 150;
            eFilter.frequency.exponentialRampToValueAtTime(targetFreq, tNow + 5.0);
            swellUp = !swellUp;
        };
        triggerSunriseSwell();
        const intervalE = setInterval(triggerSunriseSwell, 7000);
        generativeIntervalsRef.current.push(intervalE);
    };

    // Crossfades between worlds over 2.5 seconds
    const crossfadeAmbience = (targetUniverse: UniverseId) => {
        if (!audioContext || gainsRef.current === undefined) return;
        const now = audioContext.currentTime;

        Object.keys(gainsRef.current).forEach((key) => {
            const gainNode = gainsRef.current[key];
            if (!gainNode) return;

            let targetVal = 0.001; // Muted/fade-out level

            if (key === targetUniverse) {
                if (key === "LOBBY") targetVal = 0.12;
                else if (key === "A") targetVal = 0.1;
                else if (key === "B") targetVal = 0.08;
                else if (key === "C") targetVal = 0.1;
                else if (key === "D") targetVal = 0.08;
                else if (key === "E") targetVal = 0.12;
            }

            gainNode.gain.cancelScheduledValues(now);
            gainNode.gain.setValueAtTime(gainNode.gain.value, now);
            gainNode.gain.linearRampToValueAtTime(targetVal, now + 2.5);
        });

        // Trigger transition sound based on new universe
        if (targetUniverse === "A") playInteractionSound("paper");
        else if (targetUniverse === "B") playInteractionSound("click");
        else if (targetUniverse === "C") playInteractionSound("bell");
        else if (targetUniverse === "D") playInteractionSound("resonance");
        else if (targetUniverse === "E") playInteractionSound("swell");
    };

    // Mount context setup
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Read persisted preference
        const storedPref = localStorage.getItem("multiverse_audio_enabled");
        const defaultOn = storedPref !== "false";
        setIsPlaying(defaultOn);
        isPlayingRef.current = defaultOn;

        // Create context
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        setupAmbienceGraph(ctx);
        setAudioContext(ctx);

        return () => {
            cleanupGenerative();
            ctx.close();
        };
    }, []);

    // Watch universe state transitions and trigger crossfade
    useEffect(() => {
        activeUniverseRef.current = universe;
        if (isPlaying) {
            crossfadeAmbience(universe);
        }
    }, [universe, isPlaying]);

    // Setup window listeners for custom interactive sound triggers
    useEffect(() => {
        const handleSoundTrigger = (e: any) => {
            const soundType = e.detail?.type;
            if (soundType) playInteractionSound(soundType);
        };

        const handleHoverTrigger = (e: any) => {
            const planet = e.detail?.planet;
            hoveredPlanetRef.current = planet;

            if (!audioContext || gainsRef.current === undefined || activeUniverseRef.current !== "LOBBY") return;
            const now = audioContext.currentTime;

            Object.keys(gainsRef.current).forEach((key) => {
                if (key === "LOBBY") return;
                const gainNode = gainsRef.current[key];
                if (!gainNode) return;

                const targetVal = key === planet ? 0.05 : 0.001; // Soft blend
                gainNode.gain.cancelScheduledValues(now);
                gainNode.gain.setValueAtTime(gainNode.gain.value, now);
                gainNode.gain.linearRampToValueAtTime(targetVal, now + 1.2);
            });
        };

        window.addEventListener("play-sound", handleSoundTrigger);
        window.addEventListener("hover-planet", handleHoverTrigger);
        return () => {
            window.removeEventListener("play-sound", handleSoundTrigger);
            window.removeEventListener("hover-planet", handleHoverTrigger);
        };
    }, [audioContext]);

    // Window gesture capture for browser autoplay rules
    useEffect(() => {
        const handleGesture = () => {
            if (isPlayingRef.current && audioContext && audioContext.state === "suspended") {
                audioContext.resume().then(() => {
                    // Update initial crossfade to catch current universe
                    crossfadeAmbience(activeUniverseRef.current);
                }).catch(console.error);
            }
        };

        window.addEventListener("click", handleGesture);
        window.addEventListener("keydown", handleGesture);
        return () => {
            window.removeEventListener("click", handleGesture);
            window.removeEventListener("keydown", handleGesture);
        };
    }, [audioContext]);

    const toggleAudio = () => {
        const nextState = !isPlaying;
        setIsPlaying(nextState);
        isPlayingRef.current = nextState;
        localStorage.setItem("multiverse_audio_enabled", String(nextState));

        if (!audioContext) return;

        if (nextState) {
            if (audioContext.state === "suspended") {
                audioContext.resume().then(() => {
                    crossfadeAmbience(universe);
                }).catch(console.error);
            } else {
                crossfadeAmbience(universe);
            }
        } else {
            cleanupGenerative();
            audioContext.suspend().catch(console.error);
        }
    };

    return (
        <button
            onClick={toggleAudio}
            className="fixed bottom-24 right-8 z-[100] p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            aria-label={isPlaying ? "Ambience On" : "Ambience Off"}
        >
            <style>{`
                @keyframes waveSlide {
                    0% { transform: translateX(0px); }
                    100% { transform: translateX(-12px); }
                }
                .wave-anim {
                    animation: waveSlide 1.2s linear infinite;
                }
            `}</style>
            {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="overflow-hidden">
                    <g className="wave-anim">
                        <path d="M -12 12 Q -9 6, -6 12 T 0 12 T 6 12 T 12 12 T 18 12 T 24 12 T 30 12" />
                    </g>
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="4" y1="12" x2="20" y2="12" />
                </svg>
            )}
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-xs rounded text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono tracking-widest uppercase">
                {isPlaying ? "Ambience On" : "Ambience Off"}
            </span>
        </button>
    );
}
