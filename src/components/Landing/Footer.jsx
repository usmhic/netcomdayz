import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = ({ text, socialMedia }) => {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {text}
            <span className="ml-2 flex">
              {Object.entries(socialMedia).map(([platform, link], index) => {
                let icon;
                switch (platform) {
                  case 'facebook':
                    icon = <FaFacebook />;
                    break;
                  case 'linkedin':
                    icon = <FaLinkedin />;
                    break;
                  case 'instagram':
                    icon = <FaInstagram />;
                    break;
                  default:
                    icon = null;
                }
                return (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 ml-2"
                  >
                    {icon}
                  </a>
                );
              })}
            </span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
