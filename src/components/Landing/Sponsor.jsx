import React from 'react';

const UpgradeToHyprSol = ({ title, description, ctaText, ctaLink }) => {
  return (
    <section id="sponsor" className="py-20 bg-gradient-to-r from-indigo-600 via-red-600 to-red-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-gray-100 mb-6">{title}</h2>
        <p className="text-xl md:text-2xl text-white dark:text-gray-200 mb-8">{description}</p>
        <a
          href={ctaLink}
          className="inline-block bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 focus:bg-red-600 dark:focus:bg-red-700 text-white dark:text-gray-300 px-6 py-3 rounded-md font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default UpgradeToHyprSol;
