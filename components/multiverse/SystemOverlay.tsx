"use client";

import { useEffect, useState } from "react";

interface SystemOverlayProps {
    universe?: string;
}

export default function SystemOverlay({ universe = "LOBBY" }: SystemOverlayProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const handle = requestAnimationFrame(() => {
            setMounted(true);
        });
        return () => cancelAnimationFrame(handle);
    }, []);

    if (!mounted) return null;

    // Dimension A (Realist) should have NO visual effects per PRD
    // "No gradients. No dark backgrounds. No color animations."
    if (universe === "A") {
        return null;
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
            {/* Noise / Grain */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
            />

            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.2)_100%)]" />
        </div>
    );
}
