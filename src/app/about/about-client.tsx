"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/content/experience/data";
import { FaBriefcase, FaGraduationCap, FaGlobe } from "react-icons/fa";

export default function AboutClient() {
  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Zubair <span className="text-gradient">Zafar</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Full-Stack Developer passionate about building products that solve real problems.
          </p>
        </motion.div>

        {/* Bio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glow-sm h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaGraduationCap className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold">Education</h2>
                </div>
                <div>
                  <div className="font-medium">ADPCS Computer Science</div>
                  <div className="text-sm text-muted-foreground">Superior University Lahore</div>
                  <div className="text-sm text-primary font-medium mt-1">CGPA: 3.72</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glow-sm h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaGlobe className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold">Relocation Goals</h2>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇩🇪</span>
                    <span className="text-sm">Germany (Chancenkarte - Primary)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇦🇪</span>
                    <span className="text-sm">UAE (Tax-free, Fast process)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇨🇦</span>
                    <span className="text-sm">Canada (Express Entry)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇳🇱</span>
                    <span className="text-sm">Netherlands (High Skilled Migrant)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Full Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">
            Experience <span className="text-gradient">Timeline</span>
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background md:-translate-x-[5.5px] mt-1.5 z-10" />

                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                </div>

                <div className="ml-10 md:ml-0 md:w-1/2">
                  <Card className="card-lift glow-sm">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <FaBriefcase className="h-4 w-4 text-primary" />
                        <Badge variant="outline" className="text-xs">{exp.type}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                      <p className="text-sm text-primary font-medium mb-2">
                        {exp.company} &bull; {exp.location}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3 md:hidden">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}