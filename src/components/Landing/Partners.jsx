import React from 'react';

const Partners = ({ title, description, ctaText, ctaLink, items }) => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-r from-indigo-600 to-red-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white dark:text-gray-100 mb-6">{title}</h2>
        <p className="text-center text-xl md:text-2xl text-white dark:text-gray-200 mb-8">{description}</p>
        <a
          href={ctaLink}
          className="inline-block bg-red-500 dark:bg-indigo-600 hover:bg-red-600 dark:hover:bg-indigo-700 focus:bg-red-600 dark:focus:bg-indigo-700 text-white dark:text-gray-300 px-6 py-3 rounded-md font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 mb-12"
        >
          {ctaText}
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {items.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" dark:bg-gray-700 rounded-lg p-6 ring-1 ring-gray-900/5 shadow-xl flex flex-col items-center justify-between h-full hover:bg-indigo-600 dark:hover:bg-indigo-800 transition duration-300"
            >
              <img
                src={partner.image}
                alt={partner.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-white dark:text-gray-100 mt-2 text-xl font-bold text-center">
                {partner.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
