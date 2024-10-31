"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cardBg py-6 border-t border-gray-300">
      <div className="container mx-auto px-6 text-center">
        {/* Navigation Links */}
        <nav className="mb-4">
          <Link href="/" passHref>
            <span className="text-text hover:text-hoverGreen transition-colors mx-2">
              الرئيسية
            </span>
          </Link>
          <Link href="/surah" passHref>
            <span className="text-text hover:text-hoverGreen transition-colors mx-2">
              قائمة السور
            </span>
          </Link>
          <Link href="/reciters" passHref>
            <span className="text-text hover:text-hoverGreen transition-colors mx-2">
              قائمة القراء
            </span>
          </Link>

          <Link href="/api" passHref>
            <span className="text-text hover:text-hoverGreen transition-colors mx-2">
              API
            </span>
          </Link>
        </nav>

        {/* Copyright Section */}
        <p className="text-text">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
