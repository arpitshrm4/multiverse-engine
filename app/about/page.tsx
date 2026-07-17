import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About | Arpit Sharma | Product Designer",
    description: "Learn more about Arpit Sharma, a product designer focused on clarity, systems, and measurable business outcomes.",
    openGraph: {
        title: "About | Arpit Sharma | Product Designer",
        description: "Learn more about Arpit Sharma, a product designer focused on clarity, systems, and measurable business outcomes.",
        type: "profile",
    }
};

export default function AboutPage() {
    return <AboutClient />;
}
