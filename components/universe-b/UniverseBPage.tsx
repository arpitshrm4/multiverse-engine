"use client";

import StoryBackground from "./StoryBackground";
import NavbarB from "./NavbarB";
import HeroB from "./HeroB";
import IntroSection from "./IntroSection";
import StoryList from "./StoryList";
import FooterB from "./FooterB";
import DimensionIndicatorB from "./DimensionIndicatorB";
import SystemOverlay from "../multiverse/SystemOverlay";
import SpaceBackground from "../multiverse/SpaceBackground";

export default function UniverseBPage() {
    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-white/20">
            {/* Background elements */}
            <SpaceBackground />
            <div className="fixed inset-0 pointer-events-none z-0">
                <StoryBackground />
            </div>
            <SystemOverlay universe="B" />

            {/* Content */}
            <div className="relative z-10">
                <NavbarB />

                <main>
                    <HeroB />
                    <IntroSection />
                    <StoryList />
                </main>

                <FooterB />
            </div>

            <DimensionIndicatorB />
        </div>
    );
}
