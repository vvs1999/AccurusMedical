"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/logo.jpg` : "/logo.jpg"}
                alt="Celestimed Logo"
                width={50}
                height={50}
                priority
              />
              <span className="text-lg font-bold whitespace-nowrap">Celestimed</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-black text-2xl">
            ☰
          </button>

          {/* Navigation Links */}
          <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${open ? "block" : "hidden"} md:flex md:items-center md:space-x-6`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
              <NavLink href="/" text="Home" />
              <NavLink href="/services" text="Services" />
              <NavLink href="/pricing" text="Pricing" />
              <NavLink href="/about" text="About" />
              <NavLink href="/contact" text="Contact" />
            </ul>
          </div>

          {/* Free Audit Button */}
          <div className="hidden md:block">
            <Link
              href="/free-audit"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 whitespace-nowrap"
            >
              Get a Free Audit
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

// NavLink Component for Highlighting Active Page
const NavLink = ({ href, text }: { href: string; text: string }) => {
  const pathname = usePathname(); // Get current route

  return (
    <li className="md:inline-block text-center py-2 md:py-0">
      <Link
        href={href}
        className={`block px-4 py-2 text-gray-700 hover:text-black ${
          pathname === href ? "font-bold border-b-2 border-blue-500 bg-gray-100 rounded-md" : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
};
