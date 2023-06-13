import React, { useState } from 'react';
import { FiMoon, FiSun, FiGlobe, FiMenu } from 'react-icons/fi'; // Import icons from React Icons

const Header = ({ logo, menuItems, isDarkMode, handleToggle, handleLanguageToggle, language }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (link) => {
    const element = document.getElementById(link);
    element.scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-900">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">{logo}</div>
        <div className="ml-auto">
          <button
            className="md:hidden text-gray-800 dark:text-white focus:outline-none"
            onClick={handleMenuToggle}
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>
      <nav
        className={`md:flex items-start md:items-center ${
          showMenu ? 'block' : 'hidden'
        } md:space-x-4 mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4">
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-800 dark:text-white hover:text-purple-500"
              onClick={() => handleClick(menuItem.link)}
            >
              {menuItem.text}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center space-x-2">
        <label htmlFor="darkModeToggle" className="relative">
          <input
            type="checkbox"
            id="darkModeToggle"
            className="sr-only"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <div className="w-12 h-6 bg-gray-300 rounded-full dark:bg-gray-600">
            <div
              className={`${
                isDarkMode ? 'translate-x-6 bg-purple-500' : 'translate-x-0 bg-yellow-500'
              } w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out`}
            >
              {/* Use the FiMoon and FiSun icons from React Icons */}
              {isDarkMode ? (
                <FiMoon className="absolute top-0.5 left-0.5 -translate-y-0.25 text-white text-lg" />
              ) : (
                <FiSun className="absolute top-0.5 left-0.5 -translate-y-0.25 text-white text-lg" />
              )}
            </div>
          </div>
        </label>

        <div className="relative">
          <select
            className={`opacity-0 absolute top-0 right-0 h-full w-full cursor-pointer ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
            value={language}
            onChange={handleLanguageToggle}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
          {/* Use the FiGlobe icon from React Icons */}
          <FiGlobe
            className={`text-gray-800 dark:text-white text-lg cursor-pointer ${
              isDarkMode ? 'dark:text-gray-200' : 'dark:text-gray-800'
            }`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
