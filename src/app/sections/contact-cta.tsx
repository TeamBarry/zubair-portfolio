"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactCTA() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-mesh rounded-2xl border p-8 md:p-12 text-center glow-md"
        >
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let us build something{" "}
            <span className="text-gradient">amazing together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            I am currently open to freelance projects, full-time roles, and
            collaboration opportunities. Whether you have a question or just
            want to say hi, I will try my best to get back to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <Link href="/contact">Send Message</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resume">View Resume</Link>
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="https://github.com/zubair-zafar"
              target="_blank"
              className="p-2.5 rounded-full border hover:bg-muted transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/zubair-zafar-026334370"
              target="_blank"
              className="p-2.5 rounded-full border hover:bg-muted transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:zubairzafar396@gmail.com"
              className="p-2.5 rounded-full border hover:bg-muted transition-colors"
            >
              <MdEmail className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}