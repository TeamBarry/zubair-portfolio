import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Zubair Zafar's portfolio of production-grade applications built with React, Next.js, TypeScript, and Node.js.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}