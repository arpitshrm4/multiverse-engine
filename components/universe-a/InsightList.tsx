"use client";

export default function InsightList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3 mt-4">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    );
}
