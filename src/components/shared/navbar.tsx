"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Zubair<span className="text-primary">.dev</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="https://github.com/TeamBarry" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/zubair-zafar-026334370" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaLinkedin className="h-5 w-5" />
          </Link>
          <Button size="sm" asChild>
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <ThemeToggle />
                <Link href="https://github.com/TeamBarry" target="_blank">
                  <FaGithub className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com/in/zubair-zafar-026334370" target="_blank">
                  <FaLinkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}