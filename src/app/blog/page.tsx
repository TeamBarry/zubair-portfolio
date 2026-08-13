import type { Metadata } from "next";
import BlogList from "./blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles and tutorials by Zubair Zafar on React, Next.js, TypeScript, and web development.",
};

export default function BlogPage() {
  return <BlogList />;
}