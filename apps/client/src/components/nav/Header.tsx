"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu"; // Import Hamburger menu

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-light/80 backdrop-blur-md shadow-sm">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-display font-semibold text-charcoal">
          Luminalogix
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-charcoal">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
          <button className="text-white bg-olive hover:bg-olive-dark px-6 py-2 rounded-full transition">
            Shop Now
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <HamburgerMenu isOpen={isMobileMenuOpen} toggleMenu={() => setMobileMenuOpen(!isMobileMenuOpen)} />
        </div>
      </nav>

      {/* Mobile Menu (Toggle visibility on mobile) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white shadow-md">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
          <button className="text-white bg-olive hover:bg-olive-dark px-6 py-2 rounded-full transition">
            Shop Now
          </button>
        </div>
      )}
    </header>
  );
};
