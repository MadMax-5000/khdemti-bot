"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-black/80 backdrop-blur-md"
          : "bg-black/50"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-lg font-semibold text-white">KHDEMTI</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#how"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Fonctionnement
            </Link>
            <Link
              href="#features"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Pourquoi KHDEMTI
            </Link>
            <Link
              href="#chatbot"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Essayer
            </Link>
          </div>

          <Button className="hidden md:inline-flex" size="sm">
            Commencer →
          </Button>
        </div>
      </div>
    </nav>
  );
}
