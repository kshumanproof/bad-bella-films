import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Bad Bella Films",
  description:
    "Contact Bad Bella Films for production, financing, and development inquiries.",
};

export default function Page() {
  return <ContactClient />;
}