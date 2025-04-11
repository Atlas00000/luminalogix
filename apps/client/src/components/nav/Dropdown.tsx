"use client";
import React, { useState } from "react";
import Link from "next/link";

interface DropdownProps {
  label: string;
  links: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, links }) => {
  const [open, setOpen] = useState(false);

  // Toggles dropdown on mobile (click) and hover (desktop)
  const toggleDropdown = () => setOpen(!open);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}  // Hover for desktop
      onMouseLeave={() => setOpen(false)} // Hover out for desktop
    >
      <button
        className="hover:text-olive transition md:hidden" // Show only on mobile
        onClick={toggleDropdown} // Toggle on mobile click
      >
        {label}
      </button>

      <button
        className="hover:text-olive transition hidden md:block" // Show only on desktop
      >
        {label}
      </button>

      {/* Dropdown menu - shows on hover for desktop and click for mobile */}
      {open && (
        <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-40">
          {links.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(" ", "-")}`}
              className="block px-3 py-2 text-sm text-charcoal hover:bg-gray-100 rounded-md"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
