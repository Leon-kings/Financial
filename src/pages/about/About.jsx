/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Business,
  Groups,
  SupportAgent,
  Visibility,
  Flag,
  History,
} from "@mui/icons-material";

export const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const features = [
    {
      icon: <Business className="text-white text-xl" />,
      title: "No Hidden Cost",
      description: "Transparent pricing with no surprises or hidden fees",
      delay: 0.1,
    },
    {
      icon: <Groups className="text-white text-xl" />,
      title: "Dedicated Team",
      description: "Expert professionals committed to your financial success",
      delay: 0.3,
    },
    {
      icon: <SupportAgent className="text-white text-xl" />,
      title: "24/7 Available",
      description: "Round-the-clock support whenever you need assistance",
      delay: 0.5,
    },
  ];

  const tabContent = {
    story: {
      title: "Our Story",
      content: [
        "Founded in 2010, Finanza began as a small team of financial enthusiasts dedicated to making wealth management accessible to everyone.",
        "Over the years, we've grown into a trusted partner for thousands of clients, helping them navigate complex financial landscapes with confidence and clarity.",
      ],
      icon: <History className="text-blue-500 mr-2" />,
    },
    mission: {
      title: "Our Mission",
      content: [
        "To empower individuals and businesses with financial knowledge and tools that enable informed decision-making.",
        "We believe everyone deserves access to quality financial guidance regardless of their economic status or background.",
      ],
      icon: <Flag className="text-blue-500 mr-2" />,
    },
    vision: {
      title: "Our Vision",
      content: [
        "To create a world where financial literacy is universal and wealth-building opportunities are accessible to all.",
        "We envision a future where our clients achieve financial freedom through our innovative solutions and personalized approach.",
      ],
      icon: <Visibility className="text-blue-500 mr-2" />,
    },
  };

  return (
    <>
      <div className="w-full mt-4 sm:mt-4 bg-gray-100 mb-2 px-3 sm:px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-10 md:mb-12">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="w-full h-auto rounded-lg shadow-xl object-cover sm:max-h-[500px] lg:h-full"
              
              />

            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <span className="inline-block border border-blue-200 rounded-full text-blue-600 bg-blue-50 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
                We Help Our Clients To Grow Their Business
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">
                At Finanza, we combine financial expertise with innovative
                technology to deliver comprehensive solutions tailored to your
                unique needs. Our approach is rooted in transparency, integrity,
                and a deep commitment to your financial well-being.
              </p>

              {/* Tabs */}
              <div className="border border-gray-200 rounded-xl p-4 sm:p-5 md:p-6 shadow-sm">
                <div className="grid grid-cols-3 gap-2 border-b border-gray-200 mb-4 sm:mb-5 md:mb-6">
                  <button
                    onClick={() => setActiveTab("story")}
                    className={`pb-3 sm:pb-4 px-2 sm:px-3 font-medium text-xs sm:text-sm md:text-base flex items-center justify-center ${
                      activeTab === "story"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <History className="mr-1 sm:mr-2 text-base sm:text-lg" />
                    <span className="whitespace-nowrap">Story</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("mission")}
                    className={`pb-3 sm:pb-4 px-2 sm:px-3 font-medium text-xs sm:text-sm md:text-base flex items-center justify-center ${
                      activeTab === "mission"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Flag className="mr-1 sm:mr-2 text-base sm:text-lg" />
                    <span className="whitespace-nowrap">Mission</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("vision")}
                    className={`pb-3 sm:pb-4 px-2 sm:px-3 font-medium text-xs sm:text-sm md:text-base flex items-center justify-center ${
                      activeTab === "vision"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Visibility className="mr-1 sm:mr-2 text-base sm:text-lg" />
                    <span className="whitespace-nowrap">Vision</span>
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
                    {tabContent[activeTab].icon}
                    <span className="ml-2">{tabContent[activeTab].title}</span>
                  </h3>
                  {tabContent[activeTab].content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-600 text-sm sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-xl p-4 sm:p-5 md:p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  viewport={{ once: true }}
                  className={`p-2 sm:p-3 ${
                    index < 2 ? "sm:border-r sm:border-gray-200" : ""
                  } ${index === 0 ? "lg:border-r lg:border-gray-200" : ""} ${
                    index === 1 ? "lg:border-r lg:border-gray-200" : ""
                  }`}
                >
                  <div className="grid grid-cols-[auto,1fr] gap-3 sm:gap-4">
                    <div className="bg-blue-600 rounded-full p-2 sm:p-3 flex items-center justify-center">
                      {React.cloneElement(feature.icon, {
                        className: "text-white text-lg sm:text-xl",
                      })}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
