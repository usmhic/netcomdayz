import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Hero = ({ title, description, ctaText, ctaLink, gallery, isDarkMode }) => {
  const totalImages = 3; // Total number of images in the gallery
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="py-16 md:py-32 bg-gradient-to-r from-indigo-600 to-red-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800">
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white dark:text-gray-100 mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white dark:text-gray-200 mb-8">
              {description}
            </p>
            <a
              href={ctaLink}
              className="inline-block bg-red-500 dark:bg-indigo-600 hover:bg-red-600 dark:hover:bg-indigo-700 focus:bg-red-600 dark:focus:bg-indigo-700 text-white dark:text-gray-300 px-6 py-3 rounded-md font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {ctaText}
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <Carousel
            selectedItem={currentImage}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            showIndicators={false}
            onChange={(index) => setCurrentImage(index)}
          >
            {[1, 2, 3].map((imageIndex) => (
              <div
                key={imageIndex}
                style={{
                  backgroundImage: `url('/assets/gallery/netcomday_${imageIndex}.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '300px', // Adjust the height as needed
                }}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
