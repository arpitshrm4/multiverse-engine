"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { UniverseId } from '@/lib/types';

interface UniverseContextType {
    universe: UniverseId;
    setUniverse: (id: UniverseId) => void;
}

const UniverseContext = createContext<UniverseContextType | undefined>(undefined);

const pathnameMap: Record<string, UniverseId> = {
    '/human': 'A',
    '/personal-journal': 'A',
    '/builder': 'B',
    '/work': 'B',
    '/thinker': 'C',
    '/storytelling': 'C',
    '/curiosity': 'D',
    '/systems-thinking': 'D',
    '/future': 'E',
    '/mars-signal-station': 'E',
};

const universeUrlMap: Record<UniverseId, string> = {
    'LOBBY': '/',
    'A': '/human',
    'B': '/builder',
    'C': '/thinker',
    'D': '/curiosity',
    'E': '/future',
};

export function UniverseProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    // Get initial state from pathname (either on server or on client mount)
    const [universe, setUniverseState] = useState<UniverseId>(() => {
        return pathnameMap[pathname] || 'LOBBY';
    });

    // Synchronize pathname changes directly during render to avoid cascading effects
    const [prevPathname, setPrevPathname] = useState(pathname);
    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        const targetUniverse = pathnameMap[pathname] || 'LOBBY';
        if (universe !== targetUniverse) {
            setUniverseState(targetUniverse);
        }
    }

    // Push new path to address bar and update state
    const setUniverse = (id: UniverseId) => {
        setUniverseState(id);
        const targetPath = universeUrlMap[id] || '/';
        if (typeof window !== 'undefined' && window.location.pathname !== targetPath) {
            window.history.pushState(null, '', targetPath);
        }
    };

    // Keep state in sync with history popstate event (back/forward browser buttons)
    useEffect(() => {
        const handlePopState = () => {
            const currentPath = window.location.pathname;
            const targetUniverse = pathnameMap[currentPath] || 'LOBBY';
            setUniverseState(targetUniverse);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

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
