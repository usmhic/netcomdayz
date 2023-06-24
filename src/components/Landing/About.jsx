import React, { useState } from 'react';

const About = ({ title, description, steps, next, edition, highlights }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
            {description}
          </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-rose-100 dark:bg-rose-900 rounded-md p-4">
                  <span className="text-4xl text-rose-600 dark:text-rose-300 font-bold">
                    {index + 1}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={toggleExpand}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-full shadow-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors duration-300"
            >
              {isExpanded ? `${edition}` : next}
            </button>
            {isExpanded && (
              <>
                <div className="mt-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg flex items-center"
                      >
                        <span className="text-rose-600 dark:text-rose-300 text-3xl mr-4">
                          &#8226;
                        </span>
                        <p className="text-gray-800 dark:text-gray-100">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
