/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Person,
  Email,
  Phone,
  Subject,
  Message,
  CheckCircle,
  Error,
} from "@mui/icons-material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CallbackForm = () => {
  // 1. State Management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. Form Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

    // Validation rules
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Phone number is required";
    } else if (!phoneRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid phone number";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      // 3. API Integration
      const response = await axios.post(
        "https://api.yourdomain.com/callback",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Your request has been submitted successfully!");
        setIsSuccess(true);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "There was an error submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4. Form Fields Configuration
  const formFields = [
    {
      name: "name",
      placeholder: "Your Name",
      icon: <Person className="text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />,
      type: "text",
      gridClass: "md:col-span-1",
    },
    {
      name: "email",
      placeholder: "Your Email",
      icon: <Email className="text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />,
      type: "email",
      gridClass: "md:col-span-1",
    },
    {
      name: "mobile",
      placeholder: "Your Mobile",
      icon: <Phone className="text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />,
      type: "tel",
      gridClass: "md:col-span-1",
    },
    {
      name: "subject",
      placeholder: "Subject",
      icon: <Subject className="text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />,
      type: "text",
      gridClass: "md:col-span-1",
    },
  ];

  // 5. Main Component Render
  return (
    <>
<div className="w-full mt-4 mb-2 py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
  <ToastContainer position="top-center" autoClose={5000} />
  <div className="container mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Success State */}
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 sm:py-8"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-2" // Added padding to icon container
            >
              <CheckCircle className="text-green-500 text-5xl sm:text-6xl mx-auto mb-3 sm:mb-4 hover:text-green-600 transition-colors" />
            </motion.div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3 hover:text-gray-800 transition-colors">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base hover:text-gray-700 transition-colors">
              We've received your request and will contact you shortly.
            </p>
            <motion.button
              onClick={() => setIsSuccess(false)}
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-medium py-2 px-4 sm:py-2 sm:px-6 rounded-lg text-sm sm:text-base transition-all"
            >
              Submit Another Request
            </motion.button>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-6 sm:mb-8">
              <motion.span
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="inline-block border border-blue-200 rounded-full text-blue-600 bg-blue-50 px-4 py-2 text-xs sm:text-sm font-medium mb-3 sm:mb-4 hover:bg-blue-100 transition-colors" // Increased padding
              >
                Get In Touch
              </motion.span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 hover:text-gray-800 transition-colors">
                Request A Call-Back
              </h2>
              <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base hover:text-gray-700 transition-colors px-2"> {/* Added horizontal padding */}
                Fill out the form below and our team will get back to you
                as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7 mb-4 sm:mb-6"> {/* Increased gap */}
                {/* Render form fields */}
                {formFields.map((field) => (
                  <div key={field.name} className={field.gridClass}>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-hover:text-blue-500 transition-colors pt-1"> {/* Added padding-top */}
                        {React.cloneElement(field.icon, { className: "h-5 w-5 sm:h-6 sm:w-6" })}
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={`pl-12 pr-4 py-3 sm:py-3.5 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-black group-hover:border-blue-300 transition-colors placeholder-gray-400 placeholder-opacity-75 ${
                          errors[field.name]
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        style={{ paddingLeft: '3rem' }} // Increased left padding
                      />
                    </div>
                    {errors[field.name] && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-xs sm:text-sm text-red-600 flex items-center hover:text-red-700 transition-colors pl-1" // Added left padding
                      >
                        <Error className="mr-1 text-xs sm:text-sm hover:text-red-700 transition-colors p-0.5" /> {/* Added padding */}
                        {errors[field.name]}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>

              {/* Message Field */}
              <div className="mb-5 sm:mb-7"> {/* Increased bottom margin */}
                <div className="relative group">
                  <div className="absolute top-3 left-3 group-hover:text-blue-500 transition-colors p-1"> {/* Added padding */}
                    <Message className="text-gray-400 h-5 w-5 sm:h-6 sm:w-6" /> {/* Increased size */}
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows="5" 
                    className={`pl-12 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-black group-hover:border-blue-300 transition-colors placeholder-gray-400 placeholder-opacity-75 ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    style={{ paddingLeft: '3rem' }} // Increased left padding
                  />
                </div>
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs sm:text-sm text-red-600 flex items-center hover:text-red-700 transition-colors pl-1" // Added left padding
                  >
                    <Error className="mr-1 text-xs sm:text-sm hover:text-red-700 transition-colors p-0.5" /> {/* Added padding */}
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg transition-all flex items-center justify-center text-sm sm:text-base" 
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5 sm:h-6 sm:w-6 hover:scale-110 transition-transform p-0.5" /> {/* Increased size and padding */}
                    Submit Now
                  </>
                )}
              </motion.button>
            </form>
          </>
        )}
      </div>
    </motion.div>
  </div>
</div>
    </>
  );
};