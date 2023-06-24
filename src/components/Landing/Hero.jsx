import React from 'react';

const Hero = ({ title, description, buttons, gallery, isDarkMode }) => {
  const sectionStyle = {
    background: `linear-gradient(
      45deg,
      ${isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 154, 158, 0.6)'},
      ${isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(250, 208, 196, 0.6)'},
      ${isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(250, 208, 196, 0.6)'},
      ${isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(161, 196, 253, 0.6)'},
      ${isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(194, 233, 251, 0.6)'},
      ${isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(161, 196, 253, 0.6)'},
      ${isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(180, 235, 242, 0.6)'},
      ${isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(224, 195, 252, 0.6)'},
      ${isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(224, 195, 252, 0.6)'},
      ${isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(142, 197, 252, 0.6)'},
      ${isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(142, 197, 252, 0.6)'}
    )`,
    opacity: isDarkMode ? 0.9 : 0.6,
    animation: 'heroBgAnimation 15s ease infinite',
  };

  const animatedStyle = {
    opacity: 1,
    transform: 'scale(1)',
    transition: 'opacity 0.5s, transform 0.5s',
  };

  return (
    <section
      id="hero"
      style={Object.assign({}, sectionStyle, animatedStyle)}
      className={`${
        isDarkMode ? 'bg-gray-900 dark' : 'bg-gray-100'
      } py-16`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center lg:text-left">
              {title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {description}
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  className="py-2 px-4 bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 rounded-md text-white text-lg font-medium transition-colors duration-300"
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="rounded-md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
