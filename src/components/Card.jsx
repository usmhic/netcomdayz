import React, { useState } from 'react';

const BusinessCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleModeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  const cardClasses = `w-full sm:max-w-md mx-auto bg-${isDarkMode ? 'gray-800' : 'white'} text-${isDarkMode ? 'white' : 'black'} rounded-md shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
    isExpanded ? 'h-screen' : 'h-16'
  }`;

  const headerClasses = `flex flex-row items-center bg-${isDarkMode ? 'gray-700' : 'gray-200'} px-4 py-2`;

  return (
    <div className={cardClasses} onClick={handleCardClick}>
      <div className={headerClasses}>
        <div className="flex-grow font-semibold">{isDarkMode ? 'John Doe (Dark)' : 'John Doe'}</div>
        <img className="h-12 w-12 rounded-full" src="/path/to/image.jpg" alt="Profile" />
      </div>
      {isExpanded && (
        <div className="px-4 py-2">
          <p>
            Phone: 123-456-7890
            <br />
            Email: johndoe@example.com
            <br />
            Address: 123 Main St, City, State, Zip
          </p>
        </div>
      )}
      <div className="flex justify-center mt-4">
        <button
          className={`bg-${isDarkMode ? 'gray-300' : 'gray-700'} text-${isDarkMode ? 'black' : 'white'} rounded-full px-4 py-2`}
          onClick={handleModeSwitch}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default BusinessCard;
