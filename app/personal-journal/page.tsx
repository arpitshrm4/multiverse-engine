import type { Metadata } from "next";
import MultiverseShell from "@/components/multiverse/MultiverseShell";

export const metadata: Metadata = {
  title: "Personal Journal | Arpit Sharma Portfolio",
  description: "Dimension A: Personal journal detailing early life in Aligarh, observations on simplicity, independence, retro computing interfaces, and design reflections.",
};

export default function Page() {
  return <MultiverseShell />;
}
