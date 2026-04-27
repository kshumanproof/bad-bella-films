import type { Metadata } from "next";
import BobbiDupreeClient from "./BobbiDupreeClient";

export const metadata: Metadata = {
  title: "Who Stole the Head of Bobbi Dupree? | Feature Film | Bad Bella Films",
  description:
    "A worn-out bounty hunter and a grifter hunt a severed head hiding a treasure map in this character-driven adventure-western from Bad Bella Films.",
};

export default function Page() {
  return <BobbiDupreeClient />;
}