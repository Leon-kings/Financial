/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FormatQuote,
  Close,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { testimonials } from "../../assets/data/data";

export const Testimony = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
      // Reset index when slidesToShow changes to prevent empty space
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, slidesToShow]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(testimonials.length - slidesToShow, prev + 1)
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openTestimonialModal = (testimonial) => {
    setIsAutoPlaying(false);
    setSelectedTestimonial(testimonial);
    document.body.style.overflow = "hidden";
  };

  const closeTestimonialModal = () => {
    setIsAutoPlaying(true);
    setSelectedTestimonial(null);
    document.body.style.overflow = "auto";
  };

  // Calculate visible testimonials
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + slidesToShow
  );

  // Dot indicators
  const totalDots = Math.max(testimonials.length - slidesToShow + 1, 1);

  return (
    <>
      <div
        className="w-full py-8 lg:py-20 bg-gray-50 text-black"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="container px-4 mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid justify-items-center text-center mb-8 lg:mb-16 max-w-2xl mx-auto"
          >
            <span className="inline-block border border-blue-200 rounded-full text-blue-600 bg-blue-50 px-3 sm:px-4 py-1 text-xs sm:text-sm lg:text-base font-medium mb-3 lg:mb-4">
              Testimonial
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4">
              What Our Clients Say!
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Click on any testimonial to read the full story
            </p>
          </motion.div>

          {/* Custom Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full relative"
            ref={carouselRef}
          >
            {/* Carousel Items */}
            <div className="flex justify-center gap-4 px-8 sm:px-12">
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg lg:rounded-xl shadow-sm lg:shadow-md overflow-hidden transition-all h-full cursor-pointer flex-1 min-w-[280px] max-w-[400px]"
                  onClick={() => openTestimonialModal(testimonial)}
                >
                  <div className="p-4 sm:p-5 lg:p-6 pt-10 lg:pt-12 mt-6 lg:mt-8 relative">
                    <div className="absolute -top-4 lg:-top-6 left-4 lg:left-6 bg-white border border-blue-200 rounded-full p-2 lg:p-3 text-blue-600 shadow-sm">
                      <FormatQuote className="text-xl lg:text-2xl" />
                    </div>
                    <p className="text-sm lg:text-base text-gray-600 italic mb-4 lg:mb-6 line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover mr-3 lg:mr-4"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-sm lg:text-base font-semibold text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs lg:text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonial Details Modal */}
        <AnimatePresence>
          {selectedTestimonial && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 lg:p-4"
              onClick={closeTestimonialModal}
            >
              <motion.div
                initial={{ y: 50, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.95 }}
                className="bg-white rounded-lg lg:rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto mx-2 lg:mx-0"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 lg:p-8">
                  <div className="flex justify-between items-start mb-4 lg:mb-6">
                    <div>
                      <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-1 lg:mb-2">
                        {selectedTestimonial.name}
                      </h2>
                      <p className="text-sm lg:text-base text-gray-600">
                        {selectedTestimonial.role}
                      </p>
                    </div>
                    <button
                      onClick={closeTestimonialModal}
                      className="text-gray-500 hover:text-gray-700 p-1"
                      aria-label="Close modal"
                    >
                      <Close className="text-2xl" />
                    </button>
                  </div>

                  <div className="flex items-start mb-4 lg:mb-8">
                    <div className="bg-blue-50 p-3 lg:p-4 rounded-full mr-4 lg:mr-6 flex-shrink-0">
                      <FormatQuote className="text-blue-600 text-2xl lg:text-3xl" />
                    </div>
                    <blockquote className="text-base lg:text-xl italic text-gray-700">
                      "{selectedTestimonial.quote}"
                    </blockquote>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-8">
                    <div>
                      <img
                        src={selectedTestimonial.image}
                        alt={selectedTestimonial.name}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                    <div className="space-y-3 lg:space-y-4">
                      <div className="bg-gray-50 p-3 lg:p-4 rounded-lg">
                        <h3 className="text-sm lg:text-base font-semibold text-gray-800 mb-1 lg:mb-2">
                          Project
                        </h3>
                        <p className="text-sm lg:text-base">
                          {selectedTestimonial.details.project}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 lg:p-4 rounded-lg">
                        <h3 className="text-sm lg:text-base font-semibold text-gray-800 mb-1 lg:mb-2">
                          Duration
                        </h3>
                        <p className="text-sm lg:text-base">
                          {selectedTestimonial.details.duration}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 lg:p-4 rounded-lg">
                        <h3 className="text-sm lg:text-base font-semibold text-gray-800 mb-1 lg:mb-2">
                          Key Results
                        </h3>
                        <p className="text-sm lg:text-base">
                          {selectedTestimonial.details.results}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 lg:mb-8">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 lg:mb-4">
                      Full Story
                    </h3>
                    <p className="text-sm lg:text-base text-gray-700">
                      {selectedTestimonial.details.fullStory}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={closeTestimonialModal}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors text-sm lg:text-base"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
