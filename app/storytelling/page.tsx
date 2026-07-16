import type { Metadata } from "next";
import MultiverseShell from "@/components/multiverse/MultiverseShell";

export const metadata: Metadata = {
  title: "Gyan Bharatam Case Study | Arpit Sharma Portfolio",
  description: "Dimension C: Case study on designing a unified discovery platform scaling 100K legacy manuscript records to 14.3M+ records across 60+ institutions.",
};

export default function Page() {
  return <MultiverseShell />;
}
