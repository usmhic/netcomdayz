import React, { useState } from 'react';
import EventComponent from './Event';

const VenuePage = ({ data }) => {
  const { logo, day1, day2 } = data;
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen`}>
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-4">
          <img src={darkMode ? logo.dark : logo.light} alt="Logo" className="h-12" />
          <div className="flex">
            <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 mr-2">
              {darkMode ? <span>&#9728;</span> : <span>&#9728;</span>}
            </button>
            <button onClick={() => alert('Language changed!')} className="text-gray-600 dark:text-gray-300">
              EN
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${darkMode ? 'dark' : ''}`}>
            <h2 className="text-2xl font-semibold mb-4">Day 1 - {day1.date}</h2>
            <p className="text-lg font-medium mb-4 text-gray-600 dark:text-gray-300">
              {day1.day}
            </p>
            <div className="space-y-8">
              {day1.events.map((event, index) => (
                <EventComponent key={index} event={event} darkMode={darkMode} />
              ))}
            </div>
          </div>
          <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${darkMode ? 'dark' : ''}`}>
            <hr className="border-t border-gray-300 dark:border-gray-700 my-8 md:hidden" />
            <h2 className="text-2xl font-semibold mb-4">Day 2 - {day2.date}</h2>
            <p className="text-lg font-medium mb-4 text-gray-600 dark:text-gray-300">
              {day2.day}
            </p>
            <div className="space-y-8">
              {day2.events.map((event, index) => (
                <EventComponent key={index} event={event} darkMode={darkMode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenuePage;
