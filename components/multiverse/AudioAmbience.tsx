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

    // Reference to scheduled intervals or timeouts for generative sounds
    const generativeIntervalsRef = useRef<any[]>([]);

    useEffect(() => {
        // Read persisted preference on mount
        const storedPref = localStorage.getItem("multiverse_audio_enabled");
        if (storedPref === "false") {
            setIsPlaying(false);
            isPlayingRef.current = false;
        } else {
            setIsPlaying(true);
            isPlayingRef.current = true;
            localStorage.setItem("multiverse_audio_enabled", "true");
        }

        // Initialize AudioContext
        const initAudio = () => {
            if (typeof window !== 'undefined' && !audioContext) {
                const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
                setAudioContext(ctx);
            }
        };
        initAudio();

        return () => {
            cleanupGenerative();
            if (audioContext) {
                audioContext.close();
            }
        };
    }, []);

    const cleanupGenerative = () => {
        generativeIntervalsRef.current.forEach(clearInterval);
        generativeIntervalsRef.current = [];
    };

    // Helper to synthesize custom interaction sounds
    const playInteractionSound = (type: string) => {
        if (!audioContext || !isPlayingRef.current) return;
        const now = audioContext.currentTime;

        if (type === "sparkle") {
            // High frequency chimes (Curiosity)
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
            // Rich crystal resonance (Curiosity node click)
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
            // Technical relay click (Builder)
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
            // Deep resonant bell (Thinker)
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
            // Paper rustle / page turn (Human)
            const bufferSize = audioContext.sampleRate * 0.2; // 200ms
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
            // Optimistic Sunrise Swell (Future)
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
    };

    // Synthesize the 6 distinct environments
    const setupAmbienceGraph = () => {
        if (!audioContext) return;
        const now = audioContext.currentTime;

        // Master output node
        const masterVolume = audioContext.createGain();
        masterVolume.gain.setValueAtTime(0.04, now); // Quiet comfortable master level
        masterVolume.connect(audioContext.destination);

        // -------------------------------------------------------------
        // 1. LOBBY: Deep Space Drone
        // -------------------------------------------------------------
        const gLobby = audioContext.createGain();
        gLobby.gain.setValueAtTime(0.001, now);
        gLobby.connect(masterVolume);
        gainsRef.current["LOBBY"] = gLobby;

        const lobbyOsc1 = audioContext.createOscillator();
        lobbyOsc1.type = "sine";
        lobbyOsc1.frequency.setValueAtTime(55, now); // A1 sub-bass
        const lobbyOsc2 = audioContext.createOscillator();
        lobbyOsc2.type = "sine";
        lobbyOsc2.frequency.setValueAtTime(55.4, now); // Detune beats

        const lobbyFilter = audioContext.createBiquadFilter();
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
        const gA = audioContext.createGain();
        gA.gain.setValueAtTime(0.001, now);
        gA.connect(masterVolume);
        gainsRef.current["A"] = gA;

        // Warm tape hum / crackle
        const bufferSize = audioContext.sampleRate * 2.0;
        const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            noiseData[i] = (Math.random() * 2 - 1) * 0.05;
        }
        const noiseSource = audioContext.createBufferSource();
        noiseSource.buffer = noiseBuffer;
        noiseSource.loop = true;
        const noiseFilter = audioContext.createBiquadFilter();
        noiseFilter.type = "bandpass";
        noiseFilter.frequency.setValueAtTime(800, now);
        noiseSource.connect(noiseFilter);
        noiseFilter.connect(gA);
        noiseSource.start(now);

        // Generative Piano Note triggers (Pentatonic warm scale)
        const notesPentatonic = [220.00, 246.94, 277.18, 329.63, 392.00]; // A3, B3, C#4, E4, G4
        const triggerPianoA = () => {
            if (activeUniverseRef.current !== "A" || !isPlayingRef.current) return;
            const tNow = audioContext.currentTime;
            const pOsc = audioContext.createOscillator();
            const pGain = audioContext.createGain();
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
        const gB = audioContext.createGain();
        gB.gain.setValueAtTime(0.001, now);
        gB.connect(masterVolume);
        gainsRef.current["B"] = gB;

        const bOsc = audioContext.createOscillator();
        bOsc.type = "triangle";
        bOsc.frequency.setValueAtTime(82.41, now); // E2 precision hum
        const bLFO = audioContext.createOscillator();
        bLFO.frequency.setValueAtTime(0.5, now); // Technical 2-second pulse
        const bLFOGain = audioContext.createGain();
        bLFOGain.gain.setValueAtTime(0.015, now);
        bLFO.connect(bLFOGain);
        bLFOGain.connect(gB.gain);

        bOsc.connect(gB);
        bOsc.start(now);
        bLFO.start(now);

        // -------------------------------------------------------------
        // 4. THINKER (C): Evolving Long-Reverb Harmonic Pad
        // -------------------------------------------------------------
        const gC = audioContext.createGain();
        gC.gain.setValueAtTime(0.001, now);
        gC.connect(masterVolume);
        gainsRef.current["C"] = gC;

        const chordOscs = [
            audioContext.createOscillator(),
            audioContext.createOscillator(),
            audioContext.createOscillator()
        ];
        chordOscs.forEach(o => {
            o.type = "sine";
            o.connect(gC);
            o.start(now);
        });

        // Slow evolving chord cycle (Am -> G -> F)
        let chordIndex = 0;
        const chords = [
            [110.00, 130.81, 164.81], // Am
            [98.00, 146.83, 196.00],  // G
            [87.31, 130.81, 174.61]   // F
        ];
        const updateThinkerChord = () => {
            if (activeUniverseRef.current !== "C") return;
            const tNow = audioContext.currentTime;
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
        const gD = audioContext.createGain();
        gD.gain.setValueAtTime(0.001, now);
        gD.connect(masterVolume);
        gainsRef.current["D"] = gD;

        const dOsc = audioContext.createOscillator();
        dOsc.type = "sine";
        dOsc.frequency.setValueAtTime(440, now);
        const dLFO = audioContext.createOscillator();
        dLFO.frequency.setValueAtTime(0.2, now); // Ethereal drift
        const dLFOGain = audioContext.createGain();
        dLFOGain.gain.setValueAtTime(0.005, now);
        dLFO.connect(dLFOGain);
        dLFOGain.connect(gD.gain);

        dOsc.connect(gD);
        dOsc.start(now);
        dLFO.start(now);

        // Random crystal sparkles
        const triggerSparkleD = () => {
            if (activeUniverseRef.current !== "D" || !isPlayingRef.current) return;
            playInteractionSound("sparkle");
        };
        const intervalD = setInterval(triggerSparkleD, 4000);
        generativeIntervalsRef.current.push(intervalD);

        // -------------------------------------------------------------
        // 6. FUTURE (E): Expansive Sunrise Orchestral Swell
        // -------------------------------------------------------------
        const gE = audioContext.createGain();
        gE.gain.setValueAtTime(0.001, now);
        gE.connect(masterVolume);
        gainsRef.current["E"] = gE;

        const eOsc1 = audioContext.createOscillator();
        eOsc1.type = "triangle";
        eOsc1.frequency.setValueAtTime(110, now); // Warm base
        const eOsc2 = audioContext.createOscillator();
        eOsc2.type = "sine";
        eOsc2.frequency.setValueAtTime(220, now);

        const eFilter = audioContext.createBiquadFilter();
        eFilter.type = "lowpass";
        eFilter.frequency.setValueAtTime(200, now);

        eOsc1.connect(eFilter);
        eOsc2.connect(eFilter);
        eFilter.connect(gE);
        eOsc1.start(now);
        eOsc2.start(now);

        // Sunrise filter swell cycle
        let swellUp = true;
        const triggerSunriseSwell = () => {
            if (activeUniverseRef.current !== "E") return;
            const tNow = audioContext.currentTime;
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
                // Determine target universe specific level
                if (key === "LOBBY") targetVal = 0.12;
                else if (key === "A") targetVal = 0.1;
                else if (key === "B") targetVal = 0.08;
                else if (key === "C") targetVal = 0.1;
                else if (key === "D") targetVal = 0.08;
                else if (key === "E") targetVal = 0.12;
            }

            // Crossfade over 2.5 seconds (linear curve scheduling)
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

    // Initial audio initiation (on click/keydown)
    const stopAudio = () => {
        if (audioContext) {
            audioContext.suspend().catch(console.error);
        }
    };

    const initiateAmbience = async () => {
        if (!audioContext) return;
        if (audioContext.state === "suspended") {
            await audioContext.resume();
        }
        setupAmbienceGraph();
        crossfadeAmbience(universe);
    };

    const toggleAudio = () => {
        const nextState = !isPlaying;
        setIsPlaying(nextState);
        isPlayingRef.current = nextState;
        localStorage.setItem("multiverse_audio_enabled", String(nextState));

        if (nextState) {
            initiateAmbience().catch(console.error);
        } else {
            cleanupGenerative();
            stopAudio();
        }
    };

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

            // Softly blend hovered planet's sound in the lobby
            if (!audioContext || gainsRef.current === undefined || activeUniverseRef.current !== "LOBBY") return;
            const now = audioContext.currentTime;

            Object.keys(gainsRef.current).forEach((key) => {
                if (key === "LOBBY") return;
                const gainNode = gainsRef.current[key];
                if (!gainNode) return;

                const targetVal = key === planet ? 0.15 : 0.001; // Blend at low volume
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

    // Window gesture capture for browsers autoplay policy
    useEffect(() => {
        const handleGesture = () => {
            if (isPlaying && audioContext && audioContext.state === "suspended") {
                initiateAmbience().catch(console.error);
            }
        };
        window.addEventListener("click", handleGesture, { once: true });
        window.addEventListener("keydown", handleGesture, { once: true });
        return () => {
            window.removeEventListener("click", handleGesture);
            window.removeEventListener("keydown", handleGesture);
        };
    }, [audioContext, isPlaying]);

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
