"use client";

import NavbarB from "./NavbarB";
import HeroB from "./HeroB";
import BuilderPhilosophy from "./BuilderPhilosophy";
import OperatingSystemFlow from "./OperatingSystemFlow";
import MissionControl from "./MissionControl";
import DecisionJournal from "./DecisionJournal";
import ImpactMetrics from "./ImpactMetrics";
import FooterB from "./FooterB";
import DimensionIndicatorB from "./DimensionIndicatorB";
import SpaceBackground from "../multiverse/SpaceBackground";

export default function UniverseBPage({ onReturnToLobby }: { onReturnToLobby?: () => void }) {
    return (
        <div
            data-universe="B"
            className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/30 selection:text-white font-sans overflow-x-hidden"
        >
            {/* Background Space Canvas & Blueprint Grid Overlay */}
            <SpaceBackground />
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

            {/* Content */}
            <div className="relative z-10">
                <NavbarB />

                <main className="relative pt-10">
                    <HeroB />
                    <BuilderPhilosophy />
                    <OperatingSystemFlow />
                    <MissionControl />
                    <DecisionJournal />
                    <ImpactMetrics />
                </main>

                <FooterB />
            </div>

            <DimensionIndicatorB onSwitchDimension={onReturnToLobby} />
        </div>
    );
}
