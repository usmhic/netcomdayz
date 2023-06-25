import React from 'react';
import { FiExternalLink, FiLinkedin } from 'react-icons/fi';

const Partners = ({ title, list, id }) => {
  return (
    <section
      id={id}
      className="bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 dark:bg-gray-900 py-16"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white dark:text-gray-100 mb-6 text-center">
            {title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {list.map((partner, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <div className="h-64 w-full rounded-t-lg overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {partner.description}
                  </p>
                  <div className="flex justify-between">
                    <a
                      href={partner.website}
                      className="text-rose-600 dark:text-rose-300 hover:underline flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="mr-1" />
                    </a>
                    <a
                      href={partner.linkedin}
                      className="text-rose-600 dark:text-rose-300 hover:underline flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiLinkedin className="mr-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
