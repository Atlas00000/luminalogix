"use client";
import React, { useState } from "react";
import Link from "next/link";

interface DropdownProps {
  label: string;
  links: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="hover:text-olive transition">{label}</button>
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
