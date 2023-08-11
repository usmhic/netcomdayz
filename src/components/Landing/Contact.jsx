import React from 'react';

const ContactComponent = ({ title, description, ctaText, ctaLink }) => {
  return (
    <section id="contact" className="py-12 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">{title}</h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">{description}</p>
          <a
            href={ctaLink}
            className="inline-block bg-red-500 dark:bg-indigo-600 hover:bg-red-600 dark:hover:bg-indigo-700 focus:bg-red-600 dark:focus:bg-indigo-700 text-white dark:text-gray-300 px-6 py-3 rounded-md font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
