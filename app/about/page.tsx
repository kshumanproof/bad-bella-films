import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Bad Bella Films",
  description:
    "Bad Bella Films is a Southern-rooted film and television company focused on bold, character-driven storytelling.",
};

export default function AboutPage() {
  return <AboutClient />;
}