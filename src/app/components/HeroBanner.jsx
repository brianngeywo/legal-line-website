"use client";

import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full min-h-[600px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/legal-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-green-900/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 md:mb-4">
            <span className="text-green-800">Legal</span> Line
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            Your Allies In Legal Matters
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl mb-6 md:mb-8 px-2 sm:px-0">
            Welcome to Legal Line Law Chambers, your gateway to comprehensive
            legal expertise in South Sudan. As a top-tier full-service law firm,
            our team of skilled advocates stands ready to champion your
            interests in various fields of law.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-800 font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg transition-colors duration-300 hover:bg-green-100 mb-8 md:mb-16 xs:mb-8"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-[-50px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full mx-auto">
          {/* Appointment Card */}
          <div className="flex items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-56 md:w-64 lg:w-72">
            <div className="bg-[#163A5F] p-3 md:p-4 flex items-center justify-center">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3M16 7V3M3 11h18M5 11V9a3 3 0 013-3h8a3 3 0 013 3v2M9 16h6M12 16v4"
                ></path>
              </svg>
            </div>
            <div className="p-3 md:p-4">
              <p className="text-gray-500 text-xs md:text-sm">Book Your</p>
              <p className="font-semibold text-green-800 text-sm md:text-base">
                Appointment
              </p>
            </div>
          </div>

          {/* Consultation Card */}
          <div className="flex items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-56 md:w-64 lg:w-72">
            <div className="bg-[#163A5F] p-3 md:p-4 flex items-center justify-center">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </div>
            <div className="p-3 md:p-4">
              <p className="text-gray-500 text-xs md:text-sm">Get An</p>
              <p className="font-semibold text-green-800 text-sm md:text-base">
                Expert Advice
              </p>
            </div>
          </div>

          {/* Careers Card */}
          <div className="flex items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full sm:w-56 md:w-64 lg:w-72">
            <div className="bg-[#163A5F] p-3 md:p-4 flex items-center justify-center">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m4 8v-8m-8 0a8 8 0 1116 0 8 8 0 01-16 0z"
                ></path>
              </svg>
            </div>
            <div className="p-3 md:p-4">
              <p className="text-gray-500 text-xs md:text-sm">
                Open For Hiring
              </p>
              <p className="font-semibold text-green-800 text-sm md:text-base">
                Join Our Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
