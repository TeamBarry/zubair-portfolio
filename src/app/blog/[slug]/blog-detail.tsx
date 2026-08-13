"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BlogPost } from "@/types";
import { FaCalendar, FaClock, FaArrowLeft } from "react-icons/fa";

interface BlogDetailProps {
  post: BlogPost;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blog">
              <FaArrowLeft className="mr-2 h-3.5 w-3.5" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <FaCalendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <FaClock className="h-3.5 w-3.5" />
              {post.readingTime} read
            </span>
          </div>

          <Separator className="mb-8" />

          <div className="prose prose-slate dark:prose-invert max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-semibold mt-8 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.trim() === "") {
                return <div key={i} className="h-4" />;
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {line}
                </p>
              );
            })}
          </div>
        </motion.article>
      </div>
    </div>
  );
}