"use client";

import { useEffect, useRef, useState } from "react";
import { useUniverse } from "@/context/UniverseContext";

export default function AudioAmbience() {
    const { universe } = useUniverse();
    const inLobby = universe === 'LOBBY';
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    // Refs to keep track of nodes to clean up
    const oscillatorsRef = useRef<OscillatorNode[]>([]);
    const gainNodesRef = useRef<GainNode[]>([]);

    useEffect(() => {
        // Initialize AudioContext on mount (but it will be suspended)
        const initAudio = () => {
            if (typeof window !== 'undefined' && !audioContext) {
                const ctx = new (window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
                setAudioContext(ctx);
            }
        };
        initAudio();

        return () => {
            if (audioContext) {
                audioContext.close();
            }
        };
    }, []);

    const startAudio = async () => {
        if (!audioContext) return;

        if (audioContext.state === 'suspended') {
            await audioContext.resume();
        }

        if (oscillatorsRef.current.length > 0) return;

        // Create a deep drone (Space Hum synth drone)
        const osc1 = audioContext.createOscillator();
        const gain1 = audioContext.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(55, audioContext.currentTime); // A1
        gain1.gain.setValueAtTime(0.04, audioContext.currentTime); // Low volume

        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(57, audioContext.currentTime); // Detuned for drift beats
        gain2.gain.setValueAtTime(0.04, audioContext.currentTime);

        const osc3 = audioContext.createOscillator();
        const gain3 = audioContext.createGain();
        osc3.type = 'triangle';
        osc3.frequency.setValueAtTime(110, audioContext.currentTime); // A2 Airy shimmer
        gain3.gain.setValueAtTime(0.01, audioContext.currentTime);

        // LFO for volume modulation
        const lfo = audioContext.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.08; // Very slow drift
        const lfoGain = audioContext.createGain();
        lfoGain.gain.value = 0.015;
        lfo.connect(lfoGain);
        lfoGain.connect(gain1.gain);
        lfoGain.connect(gain2.gain);

        // Lowpass filter to dampen low end
        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(350, audioContext.currentTime);

        osc1.connect(gain1);
        osc2.connect(gain2);
        osc3.connect(gain3);
        gain1.connect(filter);
        gain2.connect(filter);
        gain3.connect(filter);
        filter.connect(audioContext.destination);

        osc1.start();
        osc2.start();
        osc3.start();
        lfo.start();

        oscillatorsRef.current = [osc1, osc2, osc3, lfo];
        gainNodesRef.current = [gain1, gain2, gain3, lfoGain];

        setIsPlaying(true);
    };

    const stopAudio = () => {
        oscillatorsRef.current.forEach(osc => {
            try {
                osc.stop();
                osc.disconnect();
            } catch (e) {}
        });

        gainNodesRef.current.forEach(gain => {
            try {
                gain.disconnect();
            } catch (e) {}
        });

        oscillatorsRef.current = [];
        gainNodesRef.current = [];
    };

    // Ref to track play state immediately for event handlers
    const shouldPlayRef = useRef(true);

    const toggleAudio = async () => {
        if (!audioContext) return;

        const willPlay = !isPlaying;
        setIsPlaying(willPlay);
        shouldPlayRef.current = willPlay;

        if (willPlay && inLobby) {
            if (audioContext.state === 'suspended') {
                await audioContext.resume();
            }
            startAudio();
        } else {
            stopAudio();
        }
    };

    // Automatically manage audio playback based on Lobby vs Dimension view
    useEffect(() => {
        if (!audioContext) return;

        if (inLobby && shouldPlayRef.current) {
            startAudio().catch(console.error);
        } else {
            stopAudio();
        }
    }, [inLobby, audioContext]);

    // Initial user interaction triggers for browser autoplay policies
    useEffect(() => {
        const handleInteraction = () => {
            if (!audioContext) return;
            if (!shouldPlayRef.current || !inLobby) return;

            if (oscillatorsRef.current.length === 0) {
                startAudio().catch(console.error);
            } else if (audioContext.state === 'suspended') {
                audioContext.resume().catch(console.error);
            }
        };

        window.addEventListener('click', handleInteraction, { once: true });
        window.addEventListener('keydown', handleInteraction, { once: true });
        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, [audioContext, inLobby]);

    return (
        <button
            onClick={(e) => {
                toggleAudio();
            }}
            className="fixed bottom-24 right-8 z-[100] p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            aria-label={isPlaying ? "Mute Sound" : "Enable Sound"}
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
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-xs rounded text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {isPlaying ? "Mute Ambience" : "Enable Audio"}
            </span>
        </button>
    );
}
