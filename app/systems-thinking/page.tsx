import type { Metadata } from "next";
import MultiverseShell from "@/components/multiverse/MultiverseShell";

export const metadata: Metadata = {
  title: "Systems Thinking | Arpit Sharma Portfolio",
  description: "Dimension D: Conceptual models, visual layouts, and strategic design frameworks analyzing complex systems, architectures, and products.",
};

export default function Page() {
  return <MultiverseShell />;
}
