import React from 'react';
import { motion } from 'framer-motion';

const Sponsorship = ({ title, description, benefits, button }) => {
  const animationVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  const listAnimationDelay = 0.6;

  return (
    <section id="sponsorship" className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-6 text-center"
            variants={animationVariants}
            initial={{ ...animationVariants.initial, delay: 0.2 }}
            animate={{ ...animationVariants.animate, delay: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {description}
          </motion.p>
          <motion.ul
            className="mt-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-start text-gray-700 dark:text-gray-300 text-sm mt-2"
                variants={animationVariants}
                initial={{ ...animationVariants.initial, delay: index * 0.1 + listAnimationDelay }}
                animate={{ ...animationVariants.animate, delay: index * 0.1 + listAnimationDelay }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="mr-2 w-4 h-4 text-rose-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S6 17.514 6 12 10.486 2 16 2zm0 18a8 8 0 100-16 8 8 0 000 16zm.5-4h-1a.5.5 0 000 1h1a.5.5 0 000-1zm0-9h-1a.5.5 0 000 1h1a.5.5 0 000-1zm1 2.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V8a.5.5 0 011 0v1.5h2V8a.5.5 0 011 0v1.5h.5a.5.5 0 01.5.5zM14 16a1 1 0 100 2 1 1 0 000-2zm-2.5-6a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V14a.5.5 0 01-1 0v-1.5h-2V14a.5.5 0 01-1 0v-1.5h-.5a.5.5 0 01-.5-.5zM10 14a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                <span className="flex-grow">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
