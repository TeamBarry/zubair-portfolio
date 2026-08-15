"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight shrink-0">
          Zubair<span className="text-primary">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === link.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="https://github.com/TeamBarry"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/zubair-zafar-026334370"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </Link>
          <Button size="sm" asChild>
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 flex flex-col">
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold tracking-tight"
              >
                Zubair<span className="text-primary">.dev</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex-1 px-5 py-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative flex items-center rounded-lg px-3 py-3 text-base font-medium transition-all ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-full bg-primary" />
                      )}
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="mt-6">
                <Button className="w-full" size="lg" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Hire Me
                  </Link>
                </Button>
              </div>
            </nav>

            <Separator />

            {/* Mobile Footer */}
            <div className="px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <Link
                    href="https://github.com/TeamBarry"
                    target="_blank"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/zubair-zafar-026334370"
                    target="_blank"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </Link>
                </div>
                <span className="text-xs text-muted-foreground">
                  &copy; 2026
                </span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}