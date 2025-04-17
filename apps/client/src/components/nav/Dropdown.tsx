'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface DropdownProps {
  label: string;
  /** list of links: { label: string; href: string } */
  links: { label: string; href: string }[];
}

/** fully‑functional dropdown; satisfies ESLint */
const Dropdown: React.FC<DropdownProps> = ({ label, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="text-sm md:text-base hover:text-olive transition"
      >
        {label}
      </button>

      {open && (
        <ul className="absolute top-full left-0 mt-2 w-44 bg-white shadow-lg rounded-md z-50">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block px-4 py-2 text-charcoal hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
