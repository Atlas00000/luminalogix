// apps/client/src/components/layout/Footer.tsx
"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Brand or Tagline */}
        <div className="text-xl font-semibold mb-4">Luminalogix</div>

        {/* Footer Links */}
        <div className="flex gap-6 mb-6">
          <Link href="/" className="hover:text-olive">Home</Link>
          <Link href="/about" className="hover:text-olive">About</Link>
          <Link href="/shop" className="hover:text-olive">Shop</Link>
          <Link href="/contact" className="hover:text-olive">Contact</Link>
        </div>

        {/* Social Media Links  */}
        <div className="flex gap-6 mb-6">
          <a href="#" className="hover:text-olive">Facebook</a>
          <a href="#" className="hover:text-olive">Twitter</a>
          <a href="#" className="hover:text-olive">Instagram</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} Luminalogix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
