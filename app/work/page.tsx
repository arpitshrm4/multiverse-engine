import type { Metadata } from "next";
import MultiverseShell from "@/components/multiverse/MultiverseShell";

export const metadata: Metadata = {
  title: "Design Work Portfolio | Arpit Sharma",
  description: "Dimension B: Explore selected product design work, mobile applications, case studies, and user experiences delivered by Arpit Sharma.",
};

export default function Page() {
  return <MultiverseShell />;
}
