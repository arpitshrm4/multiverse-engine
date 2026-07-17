import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact | Arpit Sharma | Product Designer",
    description: "Get in touch with Arpit Sharma for collaborations, product design projects, fintech design, or systems architecture consultations.",
    openGraph: {
        title: "Contact | Arpit Sharma | Product Designer",
        description: "Get in touch with Arpit Sharma for collaborations, product design projects, fintech design, or systems architecture consultations.",
        type: "website",
    }
};

export default function ContactPage() {
    return <ContactClient />;
}
