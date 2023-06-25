import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const Team = ({ title, members }) => {
  return (
    <section
      id="team"
      className="py-10 bg-gradient-to-r from-indigo-700 to-purple-600 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-white dark:text-gray-100 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {member.position}
                  </p>
                  <div className="mt-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-600 dark:text-rose-300 hover:underline flex items-center justify-center"
                    >
                      <FaLinkedin className="mr-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
