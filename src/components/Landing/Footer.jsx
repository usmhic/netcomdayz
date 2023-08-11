import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = ({ logo, darkMode, socialLinks, copyright }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-200 dark:bg-gray-900 py-8`}>
      <div className={`container mx-auto px-4 flex flex-col items-center justify-center`}>
        <div className={`flex items-center`}><img src={darkMode ? logo.dark : logo.light} alt="NetComDayz" className={`h-12`} /></div>
        <div className={`flex space-x-4 mt-4`}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className={`hover:text-red-700 transition duration-300 flex items-center text-gray-800 dark:text-gray-100`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text === 'Instagram' && <FaInstagram className={`w-5 h-5 mr-1`} />}
              {link.text === 'LinkedIn' && <FaLinkedin className={`w-5 h-5 mr-1`} />}
              {link.text === 'Facebook' && <FaFacebook className={`w-5 h-5 mr-1`} />}
            </a>
          ))}
        </div>
        <div className={`mt-4 text-center`}>
          &copy; {currentYear} {copyright} {' '}
          <a
            href="https://www.netcomdayz.com"
            className={`text-red-700 dark:text-red-300 hover:text-red-600 dark:hover:text-red-500 ml-1 transition duration-300`}
            target="_blank"
            rel="noopener noreferrer"
          >
            NetComDayz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
