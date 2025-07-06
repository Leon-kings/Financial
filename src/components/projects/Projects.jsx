/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Close,
  CalendarToday,
  People,
  TrendingUp,
  Business,
  MonetizationOn,
  Link
} from '@mui/icons-material';
import { projects } from '../../assets/data/data';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
      setCurrentIndex(0); // Reset index on resize
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying && projects.length > slidesToShow) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, slidesToShow]);



  const handleNext = () => {
    setCurrentIndex(prev => 
      Math.min(projects.length - slidesToShow, prev + 1)
    );
  };



  const openProjectModal = (project) => {
    setIsAutoPlaying(false);
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsAutoPlaying(true);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Calculate visible projects
  const visibleProjects = projects.slice(
    currentIndex, 
    currentIndex + slidesToShow
  );

  // Dot indicators
  const totalDots = Math.max(projects.length - slidesToShow + 1, 1);

  return (
    <section 
      className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 text-black"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12 lg:mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block border border-blue-200 rounded-full text-blue-600 bg-blue-50 px-3 py-1 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Our Projects
          </span>
          <h4 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            We Have Completed Latest Projects
          </h4>
          <p className="text-gray-600 text-sm sm:text-base">
            Click on any project to view detailed case study
          </p>
        </motion.header>

        {/* Custom Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
          ref={carouselRef}
        >


          {/* Carousel Items */}
          <div className="flex gap-4 px-2 sm:px-4 overflow-hidden">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all cursor-pointer flex-shrink-0"
                style={{ width: `calc(${100/slidesToShow}% - ${(slidesToShow-1)*16/slidesToShow}px)` }}
                onClick={() => openProjectModal(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="bg-white p-2 rounded-full text-blue-600">
                      <Link className="text-xl" />
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={closeProjectModal}
            >
              <motion.div
                initial={{ y: 50, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.95 }}
                className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-start p-6 border-b border-gray-100">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 mt-1">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={closeProjectModal}
                    className="text-gray-500 hover:text-gray-700 p-1"
                  >
                    <Close className="text-xl" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <CalendarToday className="text-blue-500" />, label: "Duration", value: selectedProject.details.duration },
                      { icon: <People className="text-blue-500" />, label: "Team", value: selectedProject.details.team },
                      { icon: <TrendingUp className="text-blue-500" />, label: "Results", value: selectedProject.details.results },
                      { icon: <Business className="text-blue-500" />, label: "Client", value: selectedProject.details.client },
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <p>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-100">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                    <p className="text-gray-700">{selectedProject.details.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Services Provided</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.details.services.map((service, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-blue-50 rounded-lg p-3"
                        >
                          <MonetizationOn className="text-blue-500" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      onClick={closeProjectModal}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
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
    </section>
  );
};