"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/content/projects/data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const categories = ["All", "SaaS", "EdTech", "Fintech", "Healthcare", "AI/ML"];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of production-grade applications I have built.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="min-w-[80px]"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="card-lift glow-sm h-full overflow-hidden group">
                  <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground/30">
                      {project.title[0]}
                    </span>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                  </div>

                  <CardContent className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex gap-3 mb-4 text-xs text-muted-foreground">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="bg-muted/50 px-2 py-1 rounded">
                          <span className="font-semibold text-foreground">{m.value}</span> {m.label}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-full border text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <FaGithub className="mr-1.5 h-3.5 w-3.5" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <Link href={project.liveUrl} target="_blank">
                          <FaExternalLinkAlt className="mr-1.5 h-3 w-3" />
                          Live
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}