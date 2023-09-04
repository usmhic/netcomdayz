import React, { useState } from 'react';
import EventComponent from './Event';

const Hackathon = ({ data }) => {
  const { logo, day1, day2, day3 } = data;
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderDayEvents = (day, index) => (
    <div
      key={index}
      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${
        darkMode ? 'dark' : ''
      }`}
    >
      <hr className="border-t border-gray-300 dark:border-gray-700 my-8 md:hidden" />
      <h2 className="text-2xl font-semibold mb-4">
        Day {index + 1} - {day.date}
      </h2>
      <p className="text-lg font-medium mb-4 text-gray-600 dark:text-gray-300">
        {day.day}
      </p>
      <div className="space-y-8">
        {day.events.map((event, eventIndex) => (
          <EventComponent key={eventIndex} event={event} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen`}
    >
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-4">
          <img
            src={darkMode ? logo.dark : logo.light}
            alt="Logo"
            className="h-12"
          />
          <div className="flex">
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 mr-2"
            >
              {darkMode ? <span>&#9728;</span> : <span>&#9728;</span>}
            </button>
            <button
              onClick={() => alert('Language changed!')}
              className="text-gray-600 dark:text-gray-300"
            >
              EN
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[day1, day2, day3].map((day, index) => renderDayEvents(day, index))}
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
