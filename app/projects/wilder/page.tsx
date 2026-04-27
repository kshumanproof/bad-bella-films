import type { Metadata } from "next";
import WilderClient from "./WilderClient";

export const metadata: Metadata = {
  title: "Wilder | Feature Film | Bad Bella Films",
  description:
    "A struggling single mom cons her way into the life of a reclusive NASCAR legend—an unlikely bond offering a final lap at redemption.",
};

export default function Page() {
  return <WilderClient />;
}