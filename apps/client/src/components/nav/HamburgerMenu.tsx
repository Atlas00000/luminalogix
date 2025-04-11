import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className="md:hidden flex items-center gap-4">
      <button type="button" onClick={toggleMenu} className="text-charcoal" title="Toggle menu">
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-1 bg-charcoal my-1"
        />
        <motion.div
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-1 bg-charcoal my-1"
        />
        <motion.div
          animate={{ rotate: isOpen ? -90 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-1 bg-charcoal my-1"
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg p-2 z-50">
          <Link href="/" className="block px-3 py-2 text-sm text-charcoal">Home</Link>
          <Link href="/about" className="block px-3 py-2 text-sm text-charcoal">About</Link>
          <Link href="/collections" className="block px-3 py-2 text-sm text-charcoal">Collections</Link>
          <Link href="/contact" className="block px-3 py-2 text-sm text-charcoal">Contact</Link>
          <Link href="/shop" className="block px-3 py-2 text-sm text-charcoal bg-accent text-white rounded-md">Shop Now</Link>
        </div>
      )}
    </div>
  );
};
