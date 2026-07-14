"use client";

import { motion } from "framer-motion";
import { UXDecision } from "@/lib/types";

export default function DecisionBlock({ decisions }: { decisions: UXDecision[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {decisions.map((d, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-[#F7F7F5] border border-gray-100 rounded-lg"
                >
                    <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Problem</span>
                        <p className="font-medium text-gray-900 mt-1">{d.problem}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Decision</span>
                        <h4 className="font-bold text-gray-900 mt-1">{d.finalDecision}</h4>
                        <p className="text-sm text-gray-600 mt-2">{d.reason}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
