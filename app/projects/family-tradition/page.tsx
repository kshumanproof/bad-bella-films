import type { Metadata } from "next";
import FamilyTraditionClient from "./FamilyTraditionClient";

export const metadata: Metadata = {
  title: "Family Tradition | Feature Film | Bad Bella Films",
  description:
    "A guilty man’s diner confession risks exposing a legacy of violence—and resurrecting the killer they thought was buried for good.",
};

export default function Page() {
  return <FamilyTraditionClient />;
}