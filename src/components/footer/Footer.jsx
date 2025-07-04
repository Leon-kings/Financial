/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  LocationOn,
  Phone,
  Email,
  Twitter,
  Facebook,
  YouTube,
  LinkedIn,
  Circle
} from '@mui/icons-material';

export const Footer = () => {
  // 1. State Management
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  // 2. Data Configuration
  const footerData = {
    contactInfo: [
      { 
        icon: <LocationOn className="text-gray-400 mr-3 mt-1 flex-shrink-0" />,
        text: "123 Street, New York, USA" 
      },
      { 
        icon: <Phone className="text-gray-400 mr-3" />,
        text: "+012 345 67890" 
      },
      { 
        icon: <Email className="text-gray-400 mr-3" />,
        text: "info@example.com" 
      }
    ],
    services: [
      { name: "Financial Planning", url: "#" },
      { name: "Investment Management", url: "#" },
      { name: "Retirement Planning", url: "#" },
      { name: "Tax Consulting", url: "#" }
    ],
    quickLinks: [
      { name: "About Us", url: "/about" },
      { name: "Contact", url: "/contact" },
      { name: "Careers", url: "/careers" },
      { name: "Blog", url: "/blog" }
    ],
    socialLinks: [
      { icon: <Twitter />, url: "#", name: "Twitter" },
      { icon: <Facebook />, url: "#", name: "Facebook" },
      { icon: <YouTube />, url: "#", name: "YouTube" },
      { icon: <LinkedIn />, url: "#", name: "LinkedIn" }
    ]
  };

  // 3. API Integration
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setFormError('');

    // Basic validation
    if (!email) {
      setFormError('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        'https://api.yourdomain.com/newsletter/subscribe',
        { email },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success('Thank you for subscribing!');
        setEmail('');
      } else {
        throw new Error(response.data.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         'Failed to subscribe. Please try again later.';
      setFormError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4. Component Sections
  const renderContactInfo = () => (
    <div className="mb-8 md:mb-0">
      <h3 className="text-xl font-semibold mb-4">Our Office</h3>
      <ul className="space-y-3">
        {footerData.contactInfo.map((item, index) => (
          <li key={index} className="flex items-start">
            {item.icon}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <div className="flex mt-6 space-x-4">
        {footerData.socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            whileHover={{ y: -3 }}
            className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );

  const renderLinksSection = (title, links) => (
    <div className="mb-8 md:mb-0">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((item, index) => (
          <motion.li key={index} whileHover={{ x: 5 }}>
            <a 
              href={item.url} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );

  const renderNewsletter = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
      <p className="text-gray-400 mb-4">
        Get financial insights and updates delivered to your inbox.
      </p>
      <form onSubmit={handleSubscribe} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setFormError('');
            }}
            placeholder="Your email address"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
          {formError && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1"
            >
              {formError}
            </motion.p>
          )}
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Circle className="animate-spin mr-2" />
              Subscribing...
            </>
          ) : (
            'Subscribe Now'
          )}
        </motion.button>
      </form>
    </div>
  );

  // 5. Main Component Render
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={5000} />
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full bg-gray-900 text-white py-12 md:py-16"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {renderContactInfo()}
            {renderLinksSection("Our Services", footerData.services)}
            {renderLinksSection("Quick Links", footerData.quickLinks)}
            {renderNewsletter()}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Finanza. All rights reserved.</p>
         
          </div>
        </div>
      </motion.footer>
    </>
  );
};