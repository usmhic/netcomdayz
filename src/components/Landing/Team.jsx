import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Team = ({ title, description, members }) => {
  return (
    <section id="team" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">{title}</h2>
        <p className="text-center text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-full p-6 ring-1 ring-slate-900/5 shadow-xl flex flex-col items-center hover:ring-2 hover:ring-indigo-500 transition duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{member.position}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-500 dark:text-red-500 hover:text-indigo-600 dark:hover:text-red-600 transition duration-300"
                >
                  <FaLinkedin className="w-5 h-5 mr-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
