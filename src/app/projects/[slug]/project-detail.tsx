"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/types";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects">
              <FaArrowLeft className="mr-2 h-3.5 w-3.5" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {project.description}
          </p>
        </motion.div>

        {/* Thumbnail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative h-64 md:h-96 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-8 glow-md"
        >
          <span className="text-6xl md:text-8xl font-bold text-muted-foreground/20">
            {project.title[0]}
          </span>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {project.metrics.map((metric) => (
            <Card key={metric.label} className="glow-sm text-center">
              <CardContent className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {metric.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-lg font-semibold mb-3">Key Features</h2>
          <ul className="space-y-2">
            {project.features?.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {feature}
              </li>
            )) || (
              <li className="text-muted-foreground">
                Full feature list coming soon.
              </li>
            )}
          </ul>
        </motion.div>

        {/* What I Learned */}
        {project.whatILearned && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-lg font-semibold mb-3">What I Learned</h2>
            <ul className="space-y-2">
              {project.whatILearned.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <Separator className="my-8" />

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="flex-1" asChild>
            <Link href={project.liveUrl} target="_blank">
              <FaExternalLinkAlt className="mr-2 h-4 w-4" />
              View Live Demo
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="flex-1" asChild>
            <Link href={project.githubUrl} target="_blank">
              <FaGithub className="mr-2 h-4 w-4" />
              View Source Code
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}