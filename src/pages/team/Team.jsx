/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook,
  Twitter,
  Instagram,
  LinkedIn
} from '@mui/icons-material';

export const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Kate Winslet",
      role: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      },
      delay: 0.1
    },
    {
      id: 2,
      name: "Jac Jackson",
      role: "Investment Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      },
      delay: 0.3
    },
    {
      id: 3,
      name: "Doris Jordan",
      role: "Wealth Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      },
      delay: 0.5
    }
  ];

  return (
    <div className="w-full mt-4 mb-2 py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mx-auto mb-12 max-w-2xl"
        >
          <span className="inline-block border border-blue-200 rounded-full text-blue-600 bg-blue-50 px-4 py-1 text-sm font-medium mb-4">
            Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Exclusive Team
          </h1>
          <p className="text-gray-600">
            Meet our team of dedicated financial experts
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: member.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all h-full hover:shadow-lg">
                {/* Team Member Image */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Social Links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a 
                        href={member.social.facebook} 
                        className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label={`${member.name} Facebook`}
                      >
                        <Facebook />
                      </a>
                      <a 
                        href={member.social.twitter} 
                        className="bg-white p-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter />
                      </a>
                      <a 
                        href={member.social.instagram} 
                        className="bg-white p-2 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
                        aria-label={`${member.name} Instagram`}
                      >
                        <Instagram />
                      </a>
                      <a 
                        href={member.social.linkedin} 
                        className="bg-white p-2 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedIn />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Team Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

