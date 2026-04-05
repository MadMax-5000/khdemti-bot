"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#how", label: "Fonctionnement" },
    { href: "#features", label: "Pourquoi KHDEMTI" },
    { href: "#chatbot", label: "Essayer" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/8 bg-black/90 backdrop-blur-md"
            : "bg-black/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Logo size={20} />
              <span className="text-base sm:text-lg font-semibold text-white">
                KHDEMTI
              </span>
            </Link>

            <div className="hidden items-center gap-6 md:gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#chatbot"
                className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
              >
                Commencer →
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center rounded-md p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/95 pt-14 sm:pt-16"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-center gap-8 px-6 py-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#chatbot"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-indigo-500 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-indigo-600"
            >
              Commencer →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
