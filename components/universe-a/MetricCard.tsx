"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface MetricCardProps {
    label: string;
    value: string;
    direction?: "increase" | "decrease" | "neutral";
    context?: string;
    delay?: number;
}

// Parse numeric value from string like "+27%" or "-14s"
function parseNumericValue(value: string): { number: number; prefix: string; suffix: string } {
    const match = value.match(/^([+-]?)(\d+\.?\d*)(.*)$/);
    if (!match) return { number: 0, prefix: "", suffix: value };
    return {
        prefix: match[1] || "",
        number: parseFloat(match[2]),
        suffix: match[3] || ""
    };
}

export default function MetricCard({
    label,
    value,
    direction = "neutral",
    context,
    delay = 0
}: MetricCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState("0");

    const parsed = parseNumericValue(value);

    // Animate number count-up in <800ms per PRD
    useEffect(() => {
        if (!isInView) return;

        const duration = 700; // <800ms per PRD
        const startTime = Date.now();
        const startValue = 0;
        const endValue = parsed.number;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            const current = startValue + (endValue - startValue) * eased;

            // Format based on whether original had decimals
            const formatted = value.includes('.')
                ? current.toFixed(1)
                : Math.round(current).toString();

            setDisplayValue(`${parsed.prefix}${formatted}${parsed.suffix}`);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setDisplayValue(value);
            }
        };

        const timer = setTimeout(() => {
            requestAnimationFrame(animate);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [isInView, value, parsed, delay]);

    // Direction color: #00B884 for positive, #286CFF for metrics
    const valueColor = direction === "increase"
        ? "var(--accent-green)"
        : "var(--accent-blue)";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.15, delay, ease: "easeOut" }}
            className="flex flex-col p-6 bg-[var(--bg-primary)] border-r border-b border-[var(--divider-color)] last:border-r-0"
        >
            {/* Value with JetBrains Mono per PRD */}
            <span
                className="text-3xl font-mono font-medium mb-1"
                style={{ color: valueColor }}
            >
                {displayValue}
            </span>

            {/* Label */}
            <span className="text-sm text-[var(--text-secondary)] font-medium uppercase tracking-wide mb-1">
                {label}
            </span>

            {/* Context (optional) */}
            {context && (
                <span className="text-xs text-[var(--text-secondary)] opacity-70">
                    {context}
                </span>
            )}
        </motion.div>
    );
}
