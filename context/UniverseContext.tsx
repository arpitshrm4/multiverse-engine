"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UniverseId } from '@/lib/types';

interface UniverseContextType {
    universe: UniverseId;
    setUniverse: (id: UniverseId) => void;
}

const UniverseContext = createContext<UniverseContextType | undefined>(undefined);

export function UniverseProvider({ children }: { children: ReactNode }) {
    // Start new sessions in the planetary lobby
    const [universe, setUniverse] = useState<UniverseId>('LOBBY');

    return (
        <UniverseContext.Provider value={{ universe, setUniverse }}>
            <div data-universe={universe} className="min-h-screen">
                {children}
            </div>
        </UniverseContext.Provider>
    );
}

export function useUniverse() {
    const context = useContext(UniverseContext);
    if (context === undefined) {
        throw new Error('useUniverse must be used within a UniverseProvider');
    }
    return context;
}
