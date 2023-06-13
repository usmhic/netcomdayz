import React from 'react';

const Footer = ({ text }) => {
  return (
    <footer className="py-4 text-center text-gray-600 dark:text-gray-400">
      <div className="container mx-auto">{text}</div>
    </footer>
  );
};

export default Footer;
