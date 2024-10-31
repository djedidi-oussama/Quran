"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
const links = [
  { href: "/", label: "الرئيسية", index: 0 },
  { href: "/surah", label: "قائمة السور", index: 1 },
  { href: "/reciters", label: "قائمة القراء", index: 2 },
  { href: "/api", label: "API", index: 3 },
];
const Header = ({ index }) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-cardBg w-full shadow-lg sticky top-0 z-50">
      <div className="flex  items-center px-4 py-2 lg:px-6 lg:py-4">
        {/* Logo */}
        <Link href="/" passHref>
          <span>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={80}
              height={80}
              className="cursor-pointer"
            />
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex  w-full items-center justify-center gap-10">
          {links.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <span
                className={`${
                  index === link.index
                    ? "text-primary border-b-2 border-primary"
                    : "text-text"
                } font-semibold transition-colors duration-200 hover:text-hoverGreen pb-1`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-primary focus:outline-none flex justify-end w-full"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-lg py-4 px-6 rounded-b-lg`}
      >
        <nav className="flex flex-col items-start gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <span
                onClick={() => setMobileMenuOpen(false)} // Close the menu on link click
                className={`${
                  index === link.index ? "text-primary font-bold" : "text-text"
                } font-semibold hover:text-hoverGreen transition-colors`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
