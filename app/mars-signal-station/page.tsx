import type { Metadata } from "next";
import MultiverseShell from "@/components/multiverse/MultiverseShell";

export const metadata: Metadata = {
  title: "Mars Signal Station | Arpit Sharma Portfolio",
  description: "Dimension E: Interactive exploration dashboard analyzing telemetry, orbital patterns, and data signals transmitted from the red planet.",
};

export default function Page() {
  return <MultiverseShell />;
}
