import type { Metadata } from "next";
import TheLastStopClient from "./TheLastStopClient";

export const metadata: Metadata = {
  title: "The Last Stop | Short Film | Bad Bella Films",
  description:
    "On the day he plans to meet Death, a grieving widower’s life takes an unexpected turn when an autistic boy helps him rediscover joy—and a reason to live.",
};

export default function Page() {
  return <TheLastStopClient />;
}