"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/content/projects/data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const categories = ["All", "SaaS", "EdTech", "Fintech", "Healthcare", "AI/ML"];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-grade applications built with modern tech stacks.
            Each project solves a real problem.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={cat === "All" ? "default" : "outline"}
              className="cursor-pointer px-4 py-1.5 text-sm"
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-lift glow-sm h-full overflow-hidden group">
                {/* Thumbnail Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <span className="text-4xl font-bold text-muted-foreground/30">
                    {project.title[0]}
                  </span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                </div>

                <CardContent className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
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

                  {/* Metrics */}
                  <div className="flex gap-4 mb-4 text-xs text-muted-foreground">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <span className="font-semibold text-foreground">{m.value}</span>{" "}
                        {m.label}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
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
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}