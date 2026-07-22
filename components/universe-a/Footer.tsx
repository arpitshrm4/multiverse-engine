"use client";

import { siteData } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-[var(--divider-color)] bg-[var(--bg-primary)]">
            <div className="container flex flex-col md:flex-row justify-between items-start text-sm text-[var(--text-secondary)]">
                <div className="space-y-1">
                    <p>© {siteData.footer.copyright}</p>
                    <p className="text-[var(--text-primary)] font-medium">{siteData.footer.dimension}</p>
                    <p>{siteData.footer.perspective}</p>
                    <p className="text-xs opacity-70 pt-0.5">{siteData.footer.tagline}</p>
                </div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="https://linkedin.com/in/arpitshrma" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm">LinkedIn</a>
                    <a href="/Arpit_Sharma_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm">Resume</a>
                </div>
            </div>
        </footer>
    );
}
