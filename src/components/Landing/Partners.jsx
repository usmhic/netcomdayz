import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Partners = ({ title, description, ctaText, ctaLink, items }) => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-r from-indigo-600 via-red-600 to-red-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-gray-100 mb-6">{title}</h2>
        <p className="text-xl md:text-2xl text-white dark:text-gray-200 mb-8">{description}</p>
        <a
          href={ctaLink}
          className="inline-block bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 focus:bg-red-600 dark:focus:bg-red-700 text-white dark:text-gray-300 px-6 py-3 rounded-md font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {ctaText}
        </a>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {items.map((partner, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl flex flex-col items-center"
            >
              <img
                src={partner.image}
                alt={partner.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-slate-900 dark:text-white mt-2 text-xl font-bold text-center">
                {partner.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
