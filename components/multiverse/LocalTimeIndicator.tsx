"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Timezone to Country mapping
const timezoneToCountry: Record<string, string> = {
    // Asia
    "Asia/Kolkata": "India",
    "Asia/Calcutta": "India",
    "Asia/Kabul": "Afghanistan",
    "Asia/Tashkent": "Uzbekistan",
    "Asia/Baku": "Azerbaijan",
    "Asia/Yerevan": "Armenia",
    "Asia/Tbilisi": "Georgia",
    "Asia/Dubai": "United Arab Emirates",
    "Asia/Karachi": "Pakistan",
    "Asia/Dhaka": "Bangladesh",
    "Asia/Colombo": "Sri Lanka",
    "Asia/Kathmandu": "Nepal",
    "Asia/Rangoon": "Myanmar",
    "Asia/Bangkok": "Thailand",
    "Asia/Jakarta": "Indonesia",
    "Asia/Singapore": "Singapore",
    "Asia/Manila": "Philippines",
    "Asia/Shanghai": "China",
    "Asia/Hong_Kong": "Hong Kong",
    "Asia/Taipei": "Taiwan",
    "Asia/Seoul": "South Korea",
    "Asia/Tokyo": "Japan",
    // Europe
    "Europe/London": "United Kingdom",
    "Europe/Dublin": "Ireland",
    "Europe/Paris": "France",
    "Europe/Berlin": "Germany",
    "Europe/Rome": "Italy",
    "Europe/Madrid": "Spain",
    "Europe/Amsterdam": "Netherlands",
    "Europe/Brussels": "Belgium",
    "Europe/Vienna": "Austria",
    "Europe/Zurich": "Switzerland",
    "Europe/Stockholm": "Sweden",
    "Europe/Oslo": "Norway",
    "Europe/Copenhagen": "Denmark",
    "Europe/Helsinki": "Finland",
    "Europe/Moscow": "Russia",
    "Europe/Athens": "Greece",
    "Europe/Istanbul": "Turkey",
    // America
    "America/New_York": "United States",
    "America/Chicago": "United States",
    "America/Denver": "United States",
    "America/Los_Angeles": "United States",
    "America/Anchorage": "United States",
    "America/Honolulu": "United States",
    "America/Toronto": "Canada",
    "America/Vancouver": "Canada",
    "America/Mexico_City": "Mexico",
    "America/Sao_Paulo": "Brazil",
    "America/Buenos_Aires": "Argentina",
    "America/Santiago": "Chile",
    "America/Bogota": "Colombia",
    "America/Lima": "Peru",
    "America/Caracas": "Venezuela",
    // Australia
    "Australia/Sydney": "Australia",
    "Australia/Melbourne": "Australia",
    "Australia/Brisbane": "Australia",
    "Australia/Adelaide": "Australia",
    "Australia/Perth": "Australia",
    "Australia/Hobart": "Australia",
    "Australia/Darwin": "Australia",
    // Pacific
    "Pacific/Auckland": "New Zealand",
    "Pacific/Fiji": "Fiji",
    // Africa
    "Africa/Cairo": "Egypt",
    "Africa/Johannesburg": "South Africa",
    "Africa/Lagos": "Nigeria",
    "Africa/Nairobi": "Kenya",
    "Africa/Casablanca": "Morocco"
};

function getCountryFromTimezone(timezone: string): string {
    if (timezoneToCountry[timezone]) {
        return timezoneToCountry[timezone];
    }
    // Fallback: extract the city/region name and format it
    const parts = timezone.split("/");
    if (parts.length > 1) {
        return parts[parts.length - 1].replace(/_/g, " ");
    }
    return timezone;
}

export default function LocalTimeIndicator() {
    const [timeString, setTimeString] = useState("");
    const [countryName, setCountryName] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            const minutesStr = minutes < 10 ? "0" + minutes : minutes;
            setTimeString(`${hours}:${minutesStr} ${ampm}`);
        };

        const handle = requestAnimationFrame(() => {
            let country = "Local";
            try {
                const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                country = getCountryFromTimezone(tz);
            } catch {
                // Ignore
            }
            setCountryName(country);
            updateClock();
            setMounted(true);
        });

        const intervalId = setInterval(updateClock, 1000);

        return () => {
            cancelAnimationFrame(handle);
            clearInterval(intervalId);
        };
    }, []);

    // Prevent hydration mismatch
    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-8 z-[60] flex items-center gap-2 select-none pointer-events-auto cursor-default font-mono text-[9px] tracking-widest text-[var(--text-secondary)] uppercase"
        >
            <span>{timeString}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-secondary)] opacity-50" />
            <span>{countryName}</span>
        </motion.div>
    );
}
