"use client";

import DelayedFadeIn from "../effects/DelayedFadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <DelayedFadeIn delay={300}>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-green-700 mx-auto"></div>
          </DelayedFadeIn>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 h-[250px] md:h-[400px]">
            <img
              src="/images/contact-image.jpg"
              alt="Contact Legal Line"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}

          <div className="w-full md:w-1/2">
            <DelayedFadeIn delay={300}>
              <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-4">
                Get in Touch
              </h3>
            </DelayedFadeIn>
            <DelayedFadeIn delay={300}>
              <p className="text-gray-600 mb-6">
                Have a legal question or need representation? We’re just a
                message away! Feel free to reach out, and we'll get back to you
                as soon as possible.
              </p>
            </DelayedFadeIn>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start">
                <DelayedFadeIn delay={300}>
                  <div className="text-green-700 mr-4 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </DelayedFadeIn>

                <DelayedFadeIn delay={300}>
                  <div>
                    <h4 className="font-medium text-gray-800">Headquarters </h4>
                    <p className="text-gray-600">
                      Malakia – MCC building First floor, Juba, South Sudan
                    </p>
                  </div>
                </DelayedFadeIn>
              </div>

              <div className="flex items-start">
                <DelayedFadeIn delay={300}>
                  <div className="text-green-700 mr-4 mt-1">
                    <svg
                      className="w-6 h-6"
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
                  </div>
                </DelayedFadeIn>

                <DelayedFadeIn delay={300}>
                  <div>
                    <DelayedFadeIn delay={300}>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                    </DelayedFadeIn>
                    <DelayedFadeIn delay={300}>
                      <p className="text-gray-600">
                        +211 924999781 / +211 911291626
                      </p>
                    </DelayedFadeIn>
                  </div>
                </DelayedFadeIn>
              </div>

              <div className="flex items-start">
                <DelayedFadeIn delay={300}>
                  <div className="text-green-700 mr-4 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </DelayedFadeIn>

                <DelayedFadeIn delay={300}>
                  <div>
                    <DelayedFadeIn delay={300}>
                      <h4 className="font-medium text-gray-800">Email</h4>
                    </DelayedFadeIn>

                    <DelayedFadeIn delay={300}>
                      <p className="text-gray-600">info@ejfinancial.com</p>
                    </DelayedFadeIn>
                  </div>
                </DelayedFadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
