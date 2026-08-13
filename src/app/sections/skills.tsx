"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
// import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, SiFirebase, SiPython, SiDocker } from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaWordpress,
  FaCode,
  FaSearch,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiHtml5,
 
  SiBootstrap,
  SiSupabase,
  SiFirebase,
  SiExpress,
 
  SiPostgresql,
  SiMongodb,
  SiJest,

  SiMockserviceworker,
  SiVercel,
  SiCloudinary,
  SiPython,
  SiDocker,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";



const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, level: "Expert", color: "text-blue-400" },
      { name: "Next.js", icon: SiNextdotjs, level: "Expert", color: "text-foreground" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced", color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, level: "Expert", color: "text-yellow-400" },
      { name: "Redux", icon: SiRedux, level: "Advanced", color: "text-purple-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert", color: "text-cyan-400" },
      { name: "HTML5", icon: SiHtml5, level: "Expert", color: "text-orange-500" },
      { name: "CSS3", icon: FaCode , level: "Expert", color: "text-blue-500" },
      { name: "Bootstrap", icon: SiBootstrap, level: "Advanced", color: "text-purple-500" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: "Advanced", color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, level: "Advanced", color: "text-foreground" },
      { name: "REST APIs", icon: FaCode, level: "Advanced", color: "text-green-400" },
      { name: "Supabase", icon: SiSupabase, level: "Advanced", color: "text-emerald-400" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced", color: "text-blue-400" },
      { name: "MongoDB", icon: SiMongodb, level: "Advanced", color: "text-green-400" },
      { name: "Firebase", icon: SiFirebase, level: "Advanced", color: "text-orange-400" },
      { name: "Firestore", icon: SiFirebase, level: "Advanced", color: "text-orange-400" },
    ],
  },
  {
    title: "Testing & Quality",
    skills: [
      { name: "Jest", icon: SiJest, level: "Advanced", color: "text-red-400" },
      { name: "React Testing Library", icon: FaReact, level: "Advanced", color: "text-blue-400" },
      { name: "Playwright", icon: FaCode, level: "Advanced", color: "text-green-400" },
      { name: "MSW", icon: SiMockserviceworker, level: "Advanced", color: "text-pink-400" },
      { name: "TDD", icon: FaCode, level: "Advanced", color: "text-purple-400" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: FaGitAlt, level: "Expert", color: "text-red-400" },
      { name: "GitHub", icon: FaGithub, level: "Expert", color: "text-foreground" },
      { name: "Vercel", icon: SiVercel, level: "Advanced", color: "text-foreground" },
      { name: "Cloudinary", icon: SiCloudinary, level: "Advanced", color: "text-blue-400" },
      { name: "Figma", icon: FaFigma, level: "Advanced", color: "text-pink-400" },
      { name: "VS Code", icon: VscVscode, level: "Expert", color: "text-blue-500" },
      { name: "Docker", icon: SiDocker, level: "Intermediate", color: "text-blue-400" },
      { name: "WordPress", icon: FaWordpress, level: "Advanced", color: "text-blue-500" },
    ],
  },
  {
    title: "AI & Other",
    skills: [
      { name: "Python", icon: SiPython, level: "Intermediate", color: "text-yellow-400" },
      { name: "SEO", icon: FaSearch, level: "Advanced", color: "text-green-400" },
      { name: "Core Web Vitals", icon: FaCode, level: "Advanced", color: "text-purple-400" },
      { name: "Data Structures", icon: FaProjectDiagram, level: "Advanced", color: "text-orange-400" },
      { name: "Algorithms", icon: FaCode, level: "Advanced", color: "text-cyan-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            Tech Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build production-ready applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            >
              <Card className="glow-sm h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <skill.icon className={`h-5 w-5 ${skill.color}`} />
                        <div className="flex-1">
                          <div className="text-sm font-medium">{skill.name}</div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}