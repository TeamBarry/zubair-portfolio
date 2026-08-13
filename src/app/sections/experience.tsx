"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/content/experience/data";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Work <span className="text-gradient">History</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey building products for clients and personal projects.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 mb-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background md:-translate-x-[5.5px] mt-1.5 z-10" />

              {/* Date (Desktop) */}
              <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
              </div>

              {/* Content Card */}
              <div className="ml-10 md:ml-0 md:w-1/2">
                <div className="card-lift glow-sm rounded-xl border p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <FaBriefcase className="h-4 w-4 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {exp.type}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {exp.company} &bull; {exp.location}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1 md:hidden">
                    {exp.period}
                  </p>
                  <ul className="space-y-1.5 mt-3">
                    {exp.bullets.slice(0, 2).map((bullet, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}