'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import SearchBar from './SearchBar';

type NavLink = {
  href: string;
  label: string;
};

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#ffd700] hover:text-[#4a9eff] transition-colors p-2 rounded-lg
                 hover:bg-[#4a9eff]/10 active:scale-95 transform duration-150"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#2a1f3d] border-t border-[#4a9eff]/30
                      shadow-lg animate-slideDown backdrop-blur-lg bg-opacity-95">
          <div className="p-4">
            <SearchBar />
          </div>
          <nav className="max-w-6xl mx-auto px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-[#4a9eff] hover:text-[#ffd700] transition-colors
                         zelda-title text-lg hover:bg-[#4a9eff]/10 rounded-lg mb-1
                         transform hover:translate-x-2 duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
} 