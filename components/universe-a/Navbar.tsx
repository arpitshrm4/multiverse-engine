"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { href: "/personal-journal", label: "Human" },
    { href: "/work", label: "Builder" },
    { href: "/storytelling", label: "Thinker" },
    { href: "/systems-thinking", label: "Curiosity" },
    { href: "/about", label: "About" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--divider-color)]"
        >
            <div className="container h-20 flex items-center justify-between">
                {/* Left: Name */}
                <Link
                    href="/"
                    className="font-bold text-lg tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
                >
                    Arpit Sharma
                </Link>

                {/* Right: Multiverse Perspective Links */}
                <div className="flex gap-6">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm ${isActive
                                        ? "text-[var(--text-primary)] pointer-events-none cursor-default font-semibold border-b border-[var(--text-primary)] pb-1"
                                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                    }`}
                                onClick={isActive ? (e) => e.preventDefault() : undefined}
                                tabIndex={isActive ? -1 : undefined}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </motion.nav>
    );
}
