"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyWebsite</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Icon for hamburger */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links - Visible on larger screens */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="text-gray-200 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-200 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-200 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu - Shown when hamburger is clicked */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li>
            <Link
              href="/"
              className="block text-gray-200 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block text-gray-200 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-gray-200 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
