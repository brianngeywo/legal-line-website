// src/app/components/Footer.jsx
"use client"; // Add this for interactivity

import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import DelayedFadeIn from "../effects/DelayedFadeIn";

export default function Footer() {
  // const showConsultationAlert = () => {
  //   alert(
  //     "Get in touch for a consultation!\n\nOur experts are ready to help you with:\n- Tax Advisory\n- Audit Services\n- Financial Strategy\n- Risk Management\n\nContact us today to schedule a meeting."
  //   );
  // };

  // const showInsightsAlert = () => {
  //   alert(
  //     "Explore our insights!\n\nWe regularly publish articles on:\n- Financial trends in East Africa\n- Tax law updates\n- Business compliance\n- Risk management strategies\n\nCheck back often for new content."
  //   );
  // };

  return (
    <footer className="bg-green-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <DelayedFadeIn delay={300}>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-gray-200">
                <div>
                  <h4 className="font-semibold">Headquarters</h4>
                  <p>Malakia – MCC building First floor, Juba, South Sudan</p>
                </div>
                <div className="flex items-start">
                  <FaPhone className="mt-1 mr-2" />
                  <span>Phone: +211 924999781 - +211 911291626</span>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mt-1 mr-2" />
                  <span>Email: info@ejfinancial.com</span>
                </div>
                <div className="flex items-start">
                  <FaGlobe className="mt-1 mr-2" />
                  <span>Website: www.ejfinancial.com</span>
                </div>
              </div>
            </DelayedFadeIn>
          </div>

          {/* East Africa Partners */}
          <div>
            <DelayedFadeIn delay={300}>
              <h3 className="text-xl font-bold mb-4">East Africa Partners</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-200">
                <div>📍 Kenya</div>
                <div>📍 Uganda</div>
                <div>📍 Tanzania</div>
                <div>📍 Rwanda</div>
                <div>📍 Ethiopia</div>
              </div>
              {/* <button
                onClick={showConsultationAlert}
                className="mt-4 bg-white text-green-800 hover:bg-green-100 font-medium py-2 px-4 rounded transition-colors"
              >
                Get in Touch for a Consultation
              </button> */}
            </DelayedFadeIn>
          </div>

          {/* Blog/Insights */}
          <div>
            <DelayedFadeIn delay={300}>
              <h3 className="text-xl font-bold mb-4">Blog/Insights</h3>
              <p className="text-gray-200 mb-4">
                Stay updated with the latest financial trends, tax laws, and
                business insights in South Sudan and East Africa.
              </p>
              {/* <button
                onClick={showInsightsAlert}
                className="bg-white text-green-800 hover:bg-green-100 font-medium py-2 px-4 rounded transition-colors"
              >
                Read Our Insights
              </button> */}
            </DelayedFadeIn>
          </div>

          {/* Quick Links */}
          <div>
            <DelayedFadeIn delay={300}>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <Link
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </DelayedFadeIn>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-green-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <DelayedFadeIn delay={300}>
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a
                  href="#"
                  className="text-2xl hover:text-green-300 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-green-300 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-green-300 transition-colors"
                >
                  <FaFacebook />
                </a>
              </div>
            </DelayedFadeIn>

            <DelayedFadeIn delay={300}>
              <p className="text-gray-300 text-sm md:text-base">
                © {new Date().getFullYear()} E&J Financial Consultancy. All
                Rights Reserved.
              </p>
            </DelayedFadeIn>
          </div>
        </div>
      </div>
    </footer>
  );
}
