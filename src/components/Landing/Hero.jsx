import React from 'react';

const Hero = ({ title, description }) => {
  return (
    <section className="py-40 bg-gradient-to-r from-pink-500 to-purple-500 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-extrabold text-white dark:text-gray-100 mb-10">{title}</h1>
        <p className={`text-xl text-white mb-16 mx-auto max-w-2xl`}>
          {description}
        </p>        <div className="flex justify-center">
          <button className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white py-4 px-10 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out mr-6">
            Get Started
          </button>
          <a href="#about" className="bg-purple-500 text-white hover:bg-white hover:text-purple-500 py-4 px-10 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
