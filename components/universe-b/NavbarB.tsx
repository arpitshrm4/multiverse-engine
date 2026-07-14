"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useUniverse } from "@/context/UniverseContext";

export default function NavbarB() {
    const { setUniverse } = useUniverse();

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-[100] px-8 md:px-16 py-8 flex justify-between items-center"
        >
            <Link
                href="/"
                onClick={() => setUniverse('LOBBY')}
                className="text-white font-serif text-lg tracking-tight hover:opacity-70 transition-opacity"
            >
                Arpit Sharma
            </Link>
        </motion.nav>
    );
}
