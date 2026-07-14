"use client";

export default function FooterB() {
    return (
        <footer className="py-24 px-8 md:px-16 border-t border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="space-y-2">
                    <p className="text-white/40 text-sm font-serif">©2026 Arpit Sharma</p>
                    <p className="text-white/20 text-xs font-serif italic">Dimension B — Work (Realist)</p>
                    <p className="text-white/20 text-[10px] tracking-widest uppercase mt-4">Part of the Multiverse Design Engine</p>
                </div>

                <div className="flex gap-8 text-sm font-serif text-white/40">
                    <a href="https://linkedin.com/in/arpitsharma" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Resume</a>
                    <a href="mailto:hello@arpitsharma.design" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
