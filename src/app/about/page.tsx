import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Zubair Zafar, a Full-Stack Developer from Lahore, Pakistan. Education, experience, and relocation goals.",
};

export default function AboutPage() {
  return <AboutClient />;
}