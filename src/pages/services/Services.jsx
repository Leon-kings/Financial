/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Assessment, // Financial Planning
  MonetizationOn, // Cash Investment
  PeopleAlt, // Financial Consultancy
  Business, // Business Loans
  CheckCircle,
  ArrowForward,
  Close,
} from "@mui/icons-material";

export const Services = () => {
  const [activeTab, setActiveTab] = useState("financial-planning");
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: "financial-planning",
      title: "Financial Planning",
      icon: <Assessment className="text-blue-500 mr-3" />,
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Comprehensive strategies to grow and protect your wealth through careful planning and analysis.",
      features: [
        "Retirement planning",
        "Wealth management",
        "Tax optimization",
        "Estate planning",
      ],
      details: {
        experience: "25+ years of financial planning expertise",
        clients: "10,000+ satisfied clients",
        approach: "Personalized strategies for each client",
      },
    },
    {
      id: "cash-investment",
      title: "Cash Investment",
      icon: <MonetizationOn className="text-blue-500 mr-3" />,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      description:
        "Maximize your returns with our carefully curated investment opportunities.",
      features: [
        "High-yield accounts",
        "Money market funds",
        "Certificates of deposit",
        "Liquidity management",
      ],
      details: {
        experience: "20+ years in investment management",
        clients: "8,500+ investment accounts",
        approach: "Risk-adjusted return strategies",
      },
    },
    {
      id: "financial-consultancy",
      title: "Financial Consultancy",
      icon: <PeopleAlt className="text-blue-500 mr-3" />,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Expert advice tailored to your unique financial situation and goals.",
      features: [
        "Business financial reviews",
        "Cash flow analysis",
        "Debt restructuring",
        "Financial health checks",
      ],
      details: {
        experience: "30+ consultant team",
        clients: "500+ businesses advised",
        approach: "Data-driven recommendations",
      },
    },
    {
      id: "business-loans",
      title: "Business Loans",
      icon: <Business className="text-blue-500 mr-3" />,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Flexible financing solutions to help your business grow and thrive.",
      features: [
        "Startup financing",
        "Equipment loans",
        "Line of credit",
        "Commercial mortgages",
      ],
      details: {
        experience: "15+ years in business lending",
        clients: "3,000+ funded businesses",
        approach: "Fast approval process",
      },
    },
  ];

  const currentService = services.find((service) => service.id === activeTab);

  return (
    <>
      <div className="w-full mt-4 mb-2 bg-gray-200 px-4 py-12 md:py-20 lg:px-8 max-w-7xl mx-auto">
        {/* Service Details Modal */}
        {expandedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setExpandedService(null)}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {expandedService.title} Details
                  </h2>
                  <button
                    onClick={() => setExpandedService(null)}
                    className="text-gray-500 hover:text-gray-700 p-1"
                  >
                    <Close />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="rounded-xl overflow-hidden mb-6">
                      <img
                        src={expandedService.image}
                        alt={expandedService.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {expandedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-blue-500 mr-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Our Expertise
                    </h3>
                    <div className="bg-gray-50 p-5 rounded-lg mb-6">
                      <ul className="space-y-4">
                        <li>
                          <h4 className="font-medium">Experience</h4>
                          <p className="text-gray-600">
                            {expandedService.details.experience}
                          </p>
                        </li>
                        <li>
                          <h4 className="font-medium">Clients Served</h4>
                          <p className="text-gray-600">
                            {expandedService.details.clients}
                          </p>
                        </li>
                        <li>
                          <h4 className="font-medium">Our Approach</h4>
                          <p className="text-gray-600">
                            {expandedService.details.approach}
                          </p>
                        </li>
                      </ul>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg w-full">
                      Request Consultation
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mx-auto mb-12 max-w-2xl"
        >
          <span className="inline-block border border-blue-200 rounded-full text-blue-600 bg-blue-50 px-4 py-1 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Awesome Financial Services For Business
          </h2>
        </motion.div>

        {/* Services Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Services Navigation - Left Column */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  whileHover={{ x: 5 }}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left border rounded-xl p-4 transition-all ${
                    activeTab === service.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center">
                    {service.icon}
                    <h3 className="text-lg font-medium">{service.title}</h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service Details - Right Column */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image Column */}
                <div className="h-64 md:h-full">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Column */}
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {currentService.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {currentService.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {currentService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-blue-500 mr-2 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setExpandedService(currentService)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center"
                  >
                    Read More <ArrowForward className="ml-2" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
