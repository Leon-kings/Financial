/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowForward, 
  Close,
  Security, 
  Support, 
  Rocket,
  People,
  TrendingUp,
  Savings,
  BarChart,
  Shield
} from '@mui/icons-material';

export const Features = () => {
  const [exploreModalOpen, setExploreModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Rocket className="text-blue-500" style={{ fontSize: '2.5rem' }} />,
      title: "Fast Executions",
      description: "Real-time transaction processing",
      details: {
        features: [
          "Instant fund transfers",
          "Same-day trade executions",
          "Automated portfolio rebalancing"
        ],
        stats: "98.7% of transactions complete within 15 seconds"
      }
    },
    {
      icon: <Support className="text-blue-500" style={{ fontSize: '2.5rem' }} />,
      title: "Expert Guidance",
      description: "24/7 financial advisor access",
      details: {
        features: [
          "Dedicated account manager",
          "Quarterly strategy reviews",
          "Tax optimization planning"
        ],
        stats: "92% client satisfaction rating"
      }
    },
    {
      icon: <Security className="text-blue-500" style={{ fontSize: '2.5rem' }} />,
      title: "Secure Assets",
      description: "Military-grade protection",
      details: {
        features: [
          "Biometric authentication",
          "AI fraud detection",
          "$1M security guarantee"
        ],
        stats: "Zero security breaches since 2010"
      }
    },
    {
      icon: <BarChart className="text-blue-500" style={{ fontSize: '2.5rem' }} />,
      title: "Market Insights",
      description: "Real-time analytics",
      details: {
        features: [
          "Daily market reports",
          "Customized alerts",
          "Sector deep dives"
        ],
        stats: "85% accurate trend predictions"
      }
    }
  ];

  const advantages = [
    { icon: <People />, title: "15+ Years Experience", text: "Trusted since 2008" },
    { icon: <TrendingUp />, title: "Proven Results", text: "12% avg annual returns" },
    { icon: <Savings />, title: "Low Fees", text: "Up to 60% lower than competitors" },
    { icon: <Shield />, title: "Regulated", text: "FINRA & SEC compliant" }
  ];

  return (
    <div className="w-full bg-gray-100 text-black mt-4 mb-2 px-4 py-12 md:py-20 lg:px-8 xl:px-0 max-w-7xl mx-auto">
      {/* Explore Services Modal */}
      {exploreModalOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setExploreModalOpen(false)}
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Our Financial Services
                </h2>
                <button 
                  onClick={() => setExploreModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <Close />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {services.map((service, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ y: -5 }}
                    onClick={() => setActiveService(service)}
                    className={`border rounded-xl p-5 text-center transition-all ${activeService?.title === service.title ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  >
                    <div className="flex justify-center mb-3">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </motion.button>
                ))}
              </div>

              {activeService && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        {React.cloneElement(activeService.icon, { className: "mr-2" })}
                        {activeService.title} Features
                      </h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {activeService.details.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-700 mb-3">Performance</h4>
                      <p className="text-gray-600 mb-4">{activeService.details.stats}</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm">
                        Request Service Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Why We Stand Out</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {advantages.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      className="bg-blue-50 rounded-lg p-4 text-center"
                    >
                      <div className="text-blue-500 flex justify-center mb-2">
                        {item.icon}
                      </div>
                      <h4 className="font-medium text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button 
                  onClick={() => setExploreModalOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all"
                >
                  Close Overview
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="w-full grid grid-cols-1 text-black lg:grid-cols-2 gap-2 items-center">
        {/* Left Column - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center px-6 lg:text-left w-full"
        >
          <motion.span 
            className="inline-block border border-blue-200 rounded-full text-blue-600 bg-blue-50 px-4 py-1 text-sm font-medium mb-4"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Why Choosing Us!
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Comprehensive Financial Solutions
          </h2>
          
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0">
            We deliver tailored financial strategies combining cutting-edge technology with personalized advisory services to maximize your wealth potential.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8 md:hidden">
            {services.slice(0,2).map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-4 text-center bg-white"
              >
                <div className="flex justify-center mb-2">
                  {service.icon}
                </div>
                <h3 className="text-sm font-medium">{service.title}</h3>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setExploreModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all inline-flex items-center mx-auto lg:mx-0"
          >
            Explore All Services <ArrowForward className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Right Column - Feature Grid */}
        <div className="md:grid grid-cols-2 text-black gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all bg-white"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>
              <button
                onClick={() => {
                  setActiveService(service);
                  setExploreModalOpen(true);
                }}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center mx-auto transition-colors"
              >
                Learn More <ArrowForward className="ml-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

