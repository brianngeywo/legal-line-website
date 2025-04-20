// src/app/components/About.jsx
"use client"; // Add this directive since we're using interactivity

import Link from "next/link";
import DelayedFadeIn from "../effects/DelayedFadeIn";

export default function About() {
  const showTeamAlert = () => {
    alert(
      `Meet our team of experts!\n\nOur team comprises certified financial professionals with extensive experience in:\n- Tax Advisory\n- Audit & Assurance\n- Risk Management\n- Forensic Accounting\n\nContact us to learn more about our team members and their qualifications.`
    );
  };

  return (
    <section id="about" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <DelayedFadeIn delay={300}>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4">
              About E&J Financial Consultancy
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-green-700 mx-auto"></div>
          </div>
        </DelayedFadeIn>

        {/* Content Section */}
        <DelayedFadeIn>
          <div className="flex flex-col items-center sm:flex-row sm:items-start sm:min-h-[400px]">
            {/* Image Section */}
            <div className="w-full sm:w-1/2 mb-8 sm:mb-0 sm:pr-8 h-[300px] sm:h-[400px]">
              <img
                src="/images/lawyer.jpg" // Update image path
                alt="E&J Financial Consultancy Team"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-full sm:w-1/2">
              <DelayedFadeIn delay={300}>
                <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-4">
                  Who We Are
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  E&J Financial Consultancy is a premier financial consultancy
                  firm headquartered in Juba, South Sudan, with a network of
                  partners across East Africa. We specialize in delivering
                  high-impact financial and advisory services to businesses,
                  governments, and NGOs.
                </p>
              </DelayedFadeIn>

              {/* Mission & Vision Cards */}
              <DelayedFadeIn delay={300}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-5 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Mission
                    </h4>
                    <p className="text-gray-700">
                      To empower businesses with strategic financial insights,
                      ensuring compliance, efficiency, and long-term success.
                    </p>
                  </div>
                  <div className="bg-green-50 p-5 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Vision
                    </h4>
                    <p className="text-gray-700">
                      To be the leading financial consultancy firm in South
                      Sudan and East Africa, recognized for excellence,
                      innovation, and integrity.
                    </p>
                  </div>
                </div>
              </DelayedFadeIn>

              {/* Core Values */}
              <DelayedFadeIn delay={300}>
                <h4 className="font-semibold text-green-800 mb-2">
                  Our Core Values
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">
                      Integrity –
                    </span>
                    <span className="text-gray-700">
                      Ethical practices in all engagements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">
                      Excellence –
                    </span>
                    <span className="text-gray-700">
                      Delivering superior solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">
                      Innovation –
                    </span>
                    <span className="text-gray-700">
                      Leveraging modern financial strategies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">
                      Partnership –
                    </span>
                    <span className="text-gray-700">
                      Building long-term client relationships
                    </span>
                  </li>
                </ul>
              </DelayedFadeIn>

              {/* Call to Action */}
              <DelayedFadeIn delay={300}>
                <Link
                  href="#contact"
                  className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Learn More About Our Team
                </Link>
              </DelayedFadeIn>
            </div>
          </div>
        </DelayedFadeIn>
      </div>
    </section>
  );
}
