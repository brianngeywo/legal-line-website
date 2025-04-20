// src/app/components/Services.jsx
import DelayedFadeIn from "../effects/DelayedFadeIn";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Tax Advisory & Compliance",
      description:
        "Navigating tax regulations in South Sudan and East Africa can be complex. Our experts provide:",
      features: [
        "Corporate & Individual Tax Planning",
        "Tax Compliance & Reporting",
        "Cross-Border Tax Advisory",
        "Tax Dispute Resolution",
      ],
      cta: "Optimize Your Tax Strategy Today",
    },
    {
      title: "Audit & Assurance",
      description:
        "We ensure financial transparency and regulatory compliance through:",
      features: [
        "Statutory & Internal Audits",
        "Financial Statement Reviews",
        "Compliance Audits",
        "Special Purpose Audits",
      ],
      cta: "Schedule an Audit",
    },
    {
      title: "Risk & Financial Advisory",
      description: "Mitigate risks and enhance financial performance with:",
      features: [
        "Enterprise Risk Management",
        "Financial Due Diligence",
        "Business Valuation",
        "Corporate Restructuring",
      ],
      cta: "Strengthen Your Financial Strategy",
    },
    {
      title: "Forensic & Investigation Services",
      description: "Uncover financial discrepancies and fraud with:",
      features: [
        "Fraud Investigations",
        "Litigation Support",
        "Asset Recovery",
        "Anti-Corruption Compliance",
      ],
      cta: "Protect Your Business from Fraud",
    },
    {
      title: "Managed Services (Including Legal Managed Services)",
      description:
        "Outsource your financial and legal operations seamlessly with:",
      features: [
        "Legal Compliance & Advisory",
        "Contract Management",
        "Payroll & Accounting Outsourcing",
        "Regulatory Monitoring",
      ],
      cta: "Streamline Your Operations",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <DelayedFadeIn delay={300} key={index}>
              <ServiceCard service={service} />
            </DelayedFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
