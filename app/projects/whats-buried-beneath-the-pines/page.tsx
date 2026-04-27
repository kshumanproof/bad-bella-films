import type { Metadata } from "next";
import WhatsBuriedClient from "./WhatsBuriedClient";

export const metadata: Metadata = {
  title: "What’s Buried Beneath the Pines | Feature Film | Bad Bella Films",
  description:
    "A runaway son returns to his family’s crumbling timber empire after his father’s death, confronting buried truths and a legacy that refuses to stay hidden.",
};

export default function Page() {
  return <WhatsBuriedClient />;
}