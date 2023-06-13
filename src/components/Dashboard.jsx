import { FiMail, FiPhone, FiMapPin, FiUser, FiLink, FiSun, FiMoon, FiTwitter, FiFacebook, FiLinkedin, FiInstagram} from 'react-icons/fi';
import React, { useState } from 'react';
import QrCode from 'qrcode.react';
import cardData from './cardData.json';

const BusinessCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { name, title, company, email, phone, address, description, social, imageURL } = cardData;

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const socialIcons = {
    website: <FiLink />,
    twitter: <FiTwitter />,
    facebook: <FiFacebook />,
    linkedin: <FiLinkedin />,
    instagram: <FiInstagram />,
  };

  return (
    <div className={`flex items-center justify-center h-screen ${darkMode ? 'dark:bg-gray-800' : ''}`}>
      <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-800 ${darkMode ? 'dark:text-white' : ''}`}>
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-700 text-base">{title}</p>
            <p className="text-gray-700 text-sm">{company}</p>
          </div>
          <div>
            <button className="focus:outline-none" onClick={handleExpand}>
              {expanded ? (
                <QrCode value={email} size={120} />
              ) : (
                <img src={imageURL} alt="Profile" className="w-12 h-12 rounded-full" />
              )}
            </button>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className={`text-gray-700 text-sm ${expanded ? 'block' : 'hidden'}`}>
            <div className="flex items-center text-gray-700">
              <FiMail className="mr-2" />
              <span>{email}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FiPhone className="mr-2" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FiMapPin className="mr-2" />
              <span>{address}</span>
            </div>
            <p className="text-gray-700 text-sm mt-2">
              <FiUser className="mr-2" />
              <span>{description}</span>
            </p>
            <div className="mt-4">
              <span className="text-gray-700 font-bold">Social:</span>
              <ul className="mt-2 flex">
                {Object.entries(social).map(([key, value]) => (
                  <li key={key} className="mr-2">
                    <a
                      href={value}
                      className={`text-gray-700 hover:text-blue-500 ${darkMode ? 'dark:text-white' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {socialIcons[key]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              darkMode ? 'dark:bg-gray-700' : ''
            }`}
            onClick={handleExpand}
          >
            {expanded ? 'Collapse' : 'Expand'}
          </button>
          <button
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${
              darkMode ? 'dark:bg-gray-800 text-white' : ''
            }`}
            onClick={handleToggleDarkMode}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
