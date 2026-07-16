import type { Metadata } from "next";
import MultiverseShell from "@/components/multiverse/MultiverseShell";

export const metadata: Metadata = {
  title: "Arpit Sharma | Product Designer Portfolio",
  description: "Explore the multiverse design portfolio of Arpit Sharma, featuring personal journal reflections, selected works, storytelling case studies, and systems thinking.",
};

export default function Home() {
  return <MultiverseShell />;
}
