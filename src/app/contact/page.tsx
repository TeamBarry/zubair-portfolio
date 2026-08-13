"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { Metadata } from "next";




const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Something went wrong");
    }

    setIsSubmitted(true);
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let us <span className="text-gradient">Talk</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I would love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glow-sm h-full">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Fill out the form or reach out directly through any of these channels.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:zubairzafar396@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="p-2 rounded-full bg-primary/10">
                      <MdEmail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">zubairzafar396@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/zubair-zafar-026334370"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="p-2 rounded-full bg-primary/10">
                      <FaLinkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">linkedin.com/in/zubair-zafar</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/zubair-zafar"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="p-2 rounded-full bg-primary/10">
                      <FaGithub className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">GitHub</div>
                      <div className="text-sm text-muted-foreground">github.com/zubair-zafar</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <div className="p-2 rounded-full bg-primary/10">
                      <FaMapMarkerAlt className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">Lahore, Pakistan (Open to Relocation)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glow-sm">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">🎉</div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Name</label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Your name"
                        className="w-full h-10 px-3 rounded-md border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full h-10 px-3 rounded-md border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Subject</label>
                      <input
                        {...register("subject")}
                        type="text"
                        placeholder="Project inquiry"
                        className="w-full h-10 px-3 rounded-md border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      {errors.subject && (
                        <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="w-full px-3 py-2 rounded-md border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}