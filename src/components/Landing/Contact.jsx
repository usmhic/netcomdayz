import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ title, email, phone }) => {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              <a href={`mailto:${email}`} className="text-rose-600 dark:text-rose-300 hover:underline">{email}</a>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
             {phone}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
