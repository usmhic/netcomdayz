import React, { useState } from 'react';

const About = ({ title, description, steps }) => {
  const [selectedStep, setSelectedStep] = useState(null);

  const handleStepClick = (index) => {
    setSelectedStep(index === selectedStep ? null : index);
  };

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mx-auto max-w-lg mb-6">{description}</p>
        <div className="flex flex-wrap justify-center items-center">
          {steps && Array.isArray(steps) && (
            <div className="max-w-5xl grid grid-cols-3 gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all ${
                    index === selectedStep ? 'transform scale-105' : ''
                  }`}
                  onMouseEnter={() => handleStepClick(index)}
                  onMouseLeave={() => handleStepClick(null)}
                >
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-lg">{index + 1}</span>
                  </div>
                  <p
                    className={`mt-4 text-gray-800 dark:text-white ${
                      index === selectedStep ? 'text-center font-bold text-lg' : 'text-center text-lg'
                    }`}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8">
          <button className="bg-purple-500 text-white py-3 px-6 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out hover:bg-purple-600">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
