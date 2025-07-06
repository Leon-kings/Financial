/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  ArrowForwardIos, 
  ArrowBackIos, 
  Close, 
  Info, 
  MonetizationOn, 
  TrendingUp, 
  Savings, 
  CreditScore,
  ChevronRight,
  ChevronLeft
} from '@mui/icons-material';
import { slides } from '../../assets/data/data';

const FinancialSupportModal = ({ isOpen, onClose }) => {
  const services = [
    {
      icon: <MonetizationOn className="text-blue-500 text-3xl md:text-4xl" />,
      title: "Investment Planning",
      description: "Comprehensive strategies to grow your wealth through diversified investment portfolios."
    },
    {
      icon: <TrendingUp className="text-green-500 text-3xl md:text-4xl" />,
      title: "Market Analysis",
      description: "Expert insights and data-driven analysis to navigate financial markets effectively."
    },
    {
      icon: <Savings className="text-yellow-500 text-3xl md:text-4xl" />,
      title: "Retirement Solutions",
      description: "Tailored plans to secure your financial future and ensure comfortable retirement."
    },
    {
      icon: <CreditScore className="text-purple-500 text-3xl md:text-4xl" />,
      title: "Credit Management",
      description: "Strategies to improve your credit score and manage debt effectively."
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-6 text-black">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Financial Support Services</h3>
                <button 
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <Close />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="flex items-center mb-3 md:mb-4">
                      {service.icon}
                      <h3 className="text-lg md:text-xl font-semibold ml-3">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-4 md:p-6 rounded-lg mb-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 flex items-center">
                  <Info className="text-blue-500 mr-2" /> How It Works
                </h3>
                <ul className="list-disc pl-5 space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
                  <li>Schedule a free consultation with our financial experts</li>
                  <li>Get a personalized financial assessment</li>
                  <li>Receive tailored recommendations and strategies</li>
                  <li>Ongoing support and adjustment of your financial plan</li>
                </ul>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  toast.success('Consultation request received! We will contact you shortly.');
                  onClose();
                }}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Request Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, slides.length]);


  return (
    <div 
      className="relative w-full h-screen text-black overflow-hidden"
      ref={carouselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000}
        toastClassName="text-sm"
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="" 
            className="w-full h-full object-cover"
           
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl"
              >

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-all flex items-center text-sm sm:text-base"
                >
                  {slides[currentSlide].buttonText}
                  <ArrowForwardIos className="ml-2 text-xs sm:text-sm" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>


  

      <FinancialSupportModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};