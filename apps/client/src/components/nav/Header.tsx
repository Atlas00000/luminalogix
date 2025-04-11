"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dropdown } from "./Dropdown";

export const Header = () => {
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
          <Dropdown label="Shop" links={["Men", "Women", "New", "Trending"]} />
          <Dropdown label="Collections" links={["AI Picks", "Sustainable Styles"]} />
          <Link href="/about">About</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Search + Cart */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block w-32 group-hover:w-48 transition-all duration-300 ease-in-out px-3 py-1 text-sm rounded-full border border-charcoal/20 bg-white focus:outline-none"
            />
          </div>
          <Link href="/cart">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative p-2 rounded-full bg-charcoal text-white hover:bg-olive transition"
            >
              🛒
              <span className="absolute -top-1 -right-1 text-xs bg-accent text-black rounded-full px-1">2</span>
            </motion.div>
          </Link>
        </div>
      </nav>
    </header>
  );
};
