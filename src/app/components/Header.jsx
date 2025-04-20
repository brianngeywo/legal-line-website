"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 ${isScrolled ? "shadow-md" : ""}`}>
      {/* Top Row - Logo, Contact Info, CTA */}
      <div
        className={`bg-white transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-800">
                LegalLine
              </Link>
            </div>

            {/* Contact Info - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900">
                  9AM - 10PM
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900">
                  +211 921 648 642
                </span>
              </div>

              <Link
                href="#consultation"
                className="bg-green-800 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors"
              >
                Get Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none text-green-800"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
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
        </div>
      </div>

      {/* Bottom Row - Navigation and Social Media */}
      <div
        className={`bg-green-900 text-white transition-all duration-300 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Main Navigation - Desktop */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="hover:text-blue-200 font-medium">
                Home
              </Link>
              <Link href="#about" className="hover:text-blue-200 font-medium">
                Our Firm
              </Link>
              <Link
                href="#services"
                className="hover:text-blue-200 font-medium"
              >
                Practice Areas
              </Link>
              {/* <Link
                href="#attorneys"
                className="hover:text-blue-200 font-medium"
              >
                Attorneys
              </Link> */}
              {/* <Link href="#blog" className="hover:text-blue-200 font-medium">
                Blog
              </Link> */}
              <Link href="#contact" className="hover:text-blue-200 font-medium">
                Contact
              </Link>
            </nav>

            {/* Social Media - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Social Media Icons */}
              {/* Facebook, Twitter, LinkedIn, Instagram */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Contact Info */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-black">
                  9AM - 10PM
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm font-medium text-black">
                  +211 924999781 / +211 911291626{" "}
                </span>
              </div>

              <Link
                href="#contact"
                className="block w-full bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded-md font-medium text-sm text-center transition-colors"
                onClick={toggleMenu}
              >
                Get Consultation
              </Link>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3 mb-6">
              <Link
                href="#home"
                className="text-gray-800 hover:text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-800 hover:text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                Our Firm
              </Link>
              <Link
                href="#services"
                className="text-gray-800 hover:text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                Practice Areas
              </Link>
              {/* <Link
                href="#attorneys"
                className="text-gray-800 hover:text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                Attorneys
              </Link>
              <Link
                href="#blog"
                className="text-gray-800 hover:text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                Blog
              </Link> */}
              <Link
                href="#contact"
                className="text-gray-800 hover:text-blue-600 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
