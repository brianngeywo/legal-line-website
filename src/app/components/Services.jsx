// src/app/components/Services.jsx
import DelayedFadeIn from "../effects/DelayedFadeIn";

export default function Services() {
  const services = [
    {
      title: "Corporate Law",
      description:
        "Legal advice for businesses including incorporation, contracts, and compliance.",
      icon: "🏢",
    },
    {
      title: "Family Law",
      description:
        "Divorce, child custody, adoption, and other family-related legal matters.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Property Law",
      description:
        "Land disputes, property transactions, and real estate legal services.",
      icon: "🏠",
    },
    {
      title: "Immigration Law",
      description: "Visa applications, work permits, and residency issues.",
      icon: "🛂",
    },
    {
      title: "Criminal Defense",
      description:
        "Representation in criminal cases at all levels of the judicial system.",
      icon: "⚖️",
    },
    {
      title: "Legal Consultancy",
      description: "General legal advice and opinion on various matters.",
      icon: "💼",
    },
  ];

  return (
    <section id="services" className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Our Services
          </h2>
          <div className="w-16 md:w-20 h-1 bg-green-700 mx-auto"></div>
        </div>

        {/* Grid Layout - mobile-first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <DelayedFadeIn delay={300} key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </DelayedFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
