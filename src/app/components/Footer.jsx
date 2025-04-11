// src/app/components/Footer.jsx
import Link from "next/link";
import DelayedFadeIn from "../effects/DelayedFadeIn";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
          {/* Company Info */}
          <div className="md:max-w-xs">
            <DelayedFadeIn delay={300}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Legal Line
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Providing professional legal services in South Sudan since 2015.
                Committed to justice, integrity, and excellence.
              </p>
            </DelayedFadeIn>
          </div>

          {/* Quick Links */}
          <div>
            <DelayedFadeIn delay={300}>
              <h4 className="text-lg font-semibold mb-3 sm:mb-4">
                Quick Links
              </h4>
            </DelayedFadeIn>
            <DelayedFadeIn delay={300}>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link
                    href="#home"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </DelayedFadeIn>
          </div>

          {/* Contact Info */}
          <DelayedFadeIn delay={300}>
            <div>
              <h4 className="text-lg font-semibold mb-3 sm:mb-4">
                Contact Info
              </h4>
              <ul className="space-y-2 text-gray-200 text-sm sm:text-base">
                <li>123 Legal Avenue, Juba</li>
                <li>South Sudan</li>
                <li>Phone: +211 123 456 789</li>
                <li>Email: info@legallinesouthsudan.com</li>
              </ul>
            </div>
          </DelayedFadeIn>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-6 text-center text-gray-300 text-sm sm:text-base">
          <p>
            &copy; {new Date().getFullYear()} Legal Line South Sudan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
