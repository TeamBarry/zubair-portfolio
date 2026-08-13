import type { MetadataRoute } from "next";
import { projects } from "@/content/projects/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zubairzafar.dev";

  const staticRoutes = [
    "",
    "about",
    "contact",
    "projects",
    "resume",
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
