"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="https://brilworks.com" className="flex items-center gap-2">
          <Image
            src="/logo-black.svg"
            alt="Brilworks Logo"
            width="155"
            height="46"
            priority={true}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#web" className="hover:text-blue-600 transition-colors">
            Web & Demos
          </a>
          <a
            href="#extension"
            className="hover:text-blue-600 transition-colors"
          >
            Extensions
          </a>
          <a href="#mobile" className="hover:text-blue-600 transition-colors">
            Mobile Apps
          </a>
          <a
            href="https://brilworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Visit Site
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <a
            href="#web"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Web & Demos
          </a>
          <a
            href="#extension"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Extensions
          </a>
          <a
            href="#mobile"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Mobile Apps
          </a>
          <a
            href="https://brilworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold"
          >
            Visit brilworks.com →
          </a>
        </div>
      )}
    </header>
  );
}
