"use client";

import { useUniverse } from "@/context/UniverseContext";
import { UniverseId } from "@/lib/types";

const universes: { id: UniverseId; label: string }[] = [
    { id: 'A', label: 'Personal Journal (Origin)' },
    { id: 'B', label: 'Work (Realist)' },
    { id: 'C', label: 'Storytelling (Narrative)' },
    { id: 'D', label: 'Systems Thinking' },
    { id: 'E', label: 'Mars Signal Station' },
];

export default function UniverseSwitcher() {
    const { universe, setUniverse } = useUniverse();

    return (
        <div className="fixed bottom-6 right-6 z-50 flex gap-2 p-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
            {universes.map((u) => (
                <button
                    key={u.id}
                    onClick={() => setUniverse(u.id)}
                    className={`
            px-3 py-1 text-xs font-mono rounded-full transition-all
            ${universe === u.id
                            ? 'bg-black text-white'
                            : 'text-gray-500 hover:text-black'}
          `}
                >
                    {u.id}
                </button>
            ))}
        </div>
    );
}
