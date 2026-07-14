"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioAmbience() {
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

        // Create a deep drone
        // Oscillator 1: Very low frequency bass (Deep Space Hum)
        const osc1 = audioContext.createOscillator();
        const gain1 = audioContext.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(55, audioContext.currentTime); // A1
        gain1.gain.setValueAtTime(0.05, audioContext.currentTime); // Low volume

        // Oscillator 2: Slightly detuned for "beating" effect
        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(57, audioContext.currentTime); // Detuned
        gain2.gain.setValueAtTime(0.05, audioContext.currentTime);

        // Oscillator 3: Higher airy tone (Ethereal)
        const osc3 = audioContext.createOscillator();
        const gain3 = audioContext.createGain();
        osc3.type = 'triangle';
        osc3.frequency.setValueAtTime(110, audioContext.currentTime); // A2
        gain3.gain.setValueAtTime(0.01, audioContext.currentTime); // Very quiet

        // LFO for volume modulation (Drifting feel)
        const lfo = audioContext.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.1; // Very slow drift
        const lfoGain = audioContext.createGain();
        lfoGain.gain.value = 0.02;
        lfo.connect(lfoGain);
        lfoGain.connect(gain1.gain);
        lfoGain.connect(gain2.gain);

        // Filter to dampen harshness
        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, audioContext.currentTime);

        // Connect graph
        osc1.connect(gain1);
        osc2.connect(gain2);
        osc3.connect(gain3);

        gain1.connect(filter);
        gain2.connect(filter);
        gain3.connect(filter);

        filter.connect(audioContext.destination);

        // Start
        osc1.start();
        osc2.start();
        osc3.start();
        lfo.start();

        oscillatorsRef.current = [osc1, osc2, osc3, lfo];
        gainNodesRef.current = [gain1, gain2, gain3, lfoGain];

        setIsPlaying(true);
    };

    const stopAudio = () => {
        // Stop and disconnect all oscillators
        oscillatorsRef.current.forEach(osc => {
            try {
                osc.stop();
                osc.disconnect();
            } catch (e) {
                // Oscillator might already be stopped
            }
        });

        // Disconnect all gain nodes
        gainNodesRef.current.forEach(gain => {
            try {
                gain.disconnect();
            } catch (e) {
                // Node might already be disconnected
            }
        });

        // Clear the refs
        oscillatorsRef.current = [];
        gainNodesRef.current = [];

        setIsPlaying(false);
    };

    // Ref to track play state immediately for event handlers
    const shouldPlayRef = useRef(true);

    // Toggle audio state
    const toggleAudio = async () => {
        if (!audioContext) return;

        const willPlay = !isPlaying;
        setIsPlaying(willPlay);
        shouldPlayRef.current = willPlay;

        if (willPlay) {
            if (audioContext.state === 'suspended') {
                await audioContext.resume();
            }
            // Start new oscillators
            startAudio();
        } else {
            // Stop and clean up oscillators
            stopAudio();
        }
    };

    useEffect(() => {
        // Initial interaction listener to start audio context if needed
        const handleInteraction = (e: Event) => {
            if (!audioContext) return;

            // Check if loop is intended to play
            if (!shouldPlayRef.current) return;

            // If we are set to playing but haven't started the oscillators, start them now
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
    }, [audioContext]); // Removed isPlaying dependency to avoid re-binding

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (audioContext) {
                audioContext.close();
            }
        }
    }, [audioContext]);


    return (
        <button
            onClick={(e) => {
                // e.stopPropagation(); // relying on ref logic instead, but keeping it is fine.
                toggleAudio();
            }}
            className="fixed bottom-6 right-6 z-50 p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 group"
            aria-label={isPlaying ? "Mute Sound" : "Enable Sound"}
        >
            {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
            )}
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-xs rounded text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {isPlaying ? "Mute Ambience" : "Enable Audio"}
            </span>
        </button>
    );
}
