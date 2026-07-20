"use client";

import { siteData } from "@/lib/data";

export default function FooterB() {
    return (
        <footer className="py-12 px-6 md:px-16 border-t border-slate-800/80 bg-slate-950 font-sans">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start text-sm text-slate-400">
                <div className="space-y-1">
                    <p>© {siteData.footer.copyright}</p>
                    <p className="text-white font-semibold">Builder</p>
                    <p className="text-xs text-slate-300 font-mono">Perspective 02 of the Multiverse</p>
                    <p className="text-xs text-slate-500 pt-0.5 font-mono">Leading products through clarity.</p>
                </div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="https://linkedin.com/in/arpitshrma" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Resume</a>
                </div>
            </div>
        </footer>
    );
}
