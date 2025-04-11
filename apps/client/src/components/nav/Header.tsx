"use client";
import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-light/80 backdrop-blur-md shadow-sm">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-display font-semibold text-charcoal">
          Luminalogix
        </Link>
      </nav>
    </header>
  );
};
