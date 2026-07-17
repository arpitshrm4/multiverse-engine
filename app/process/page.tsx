import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
    title: "My Process | Arpit Sharma | Product Designer",
    description: "Explore the design leadership principles, user research methods, wireframing workflows, and systematic product validation strategies Arpit Sharma uses to design at national scale.",
    openGraph: {
        title: "My Process | Arpit Sharma | Product Designer",
        description: "Explore the design leadership principles, user research methods, wireframing workflows, and systematic product validation strategies Arpit Sharma uses to design at national scale.",
        type: "website",
    }
};

export default function ProcessPage() {
    return <ProcessClient />;
}
