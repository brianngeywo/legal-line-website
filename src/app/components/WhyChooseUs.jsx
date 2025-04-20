// src/app/components/WhyChooseUs.jsx
"use client";

import Link from "next/link";
import DelayedFadeIn from "../effects/DelayedFadeIn";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <DelayedFadeIn delay={300}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Why Choose Us?
            </h2>
            <div className="w-20 h-1 bg-green-700 mx-auto"></div>
          </DelayedFadeIn>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          {/* Left Column - Why Choose Us */}
          <div className="lg:w-1/2">
            <DelayedFadeIn delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    title: "Local & Regional Expertise",
                    desc: "Deep understanding of South Sudan & East African markets",
                  },
                  {
                    title: "Experienced Professionals",
                    desc: "Certified accountants, auditors, and legal advisors",
                  },
                  {
                    title: "Custom Solutions",
                    desc: "Tailored to your industry and business needs",
                  },
                  {
                    title: "Proven Track Record",
                    desc: "Trusted by leading organizations",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 md:text-lg">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href="#contact"
                  className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg text-lg"
                >
                  Partner with Us Today
                </Link>
              </div>
            </DelayedFadeIn>
          </div>

          {/* Right Column - Industries & Testimonials */}
          <div className="lg:w-1/2">
            {/* Industries We Serve */}
            <DelayedFadeIn delay={300}>
              <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-green-800 mb-5">
                  Industries We Serve
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  We cater to a diverse range of industries, including:
                </p>
                <ul className="space-y-4">
                  {[
                    "Banking & Financial Services",
                    "Oil & Gas",
                    "Government & NGOs",
                    "Manufacturing & Trade",
                    "Telecommunications",
                  ].map((industry, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1 text-xl">
                        ✔
                      </span>
                      <span className="text-gray-600 text-lg">{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </DelayedFadeIn>

            {/* Client Testimonials */}
            <DelayedFadeIn delay={300}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-green-800">
                  Client Testimonials
                </h3>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <blockquote className="text-gray-600 italic text-lg mb-4">
                    "Working with E&J Financial Consultancy transformed our tax
                    strategy, saving us thousands annually."
                  </blockquote>
                  <p className="text-gray-800 font-medium text-lg">
                    - Ahmet Samdanli, Account Manager Turkish Airlines
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <blockquote className="text-gray-600 italic text-lg mb-4">
                    "Their forensic team helped uncover fraud within our
                    organization, protecting our assets."
                  </blockquote>
                  <p className="text-gray-800 font-medium text-lg">
                    - ICAP South Sudan
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Link
                    href="#contact"
                    className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg text-lg"
                  >
                    See More Success Stories
                  </Link>
                </div>
              </div>
            </DelayedFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
