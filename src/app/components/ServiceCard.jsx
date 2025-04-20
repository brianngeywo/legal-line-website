// src/app/components/ServiceCard.jsx
"use client";
import Link from "next/link";

export default function ServiceCard({ service }) {
  //   const showContactAlert = () => {
  //     alert(
  //       `Contact us today!\n\nEmail: info@example.com\nPhone: +211 123 456 789\nOffice: Central Business District, Juba, South Sudan`
  //     );
  //   };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="mb-6 space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="#contact"
        className="mt-auto bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded transition-colors"
      >
        {service.cta}
      </Link>
    </div>
  );
}
