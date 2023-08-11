import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';

const Header = ({
  logo,
  menuItems,
  darkMode,
  onDarkModeToggle,
  onLanguageChange,
  selectedLanguage,
  scrollToSection,
  isSticky,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);

  const handleClick = (link) => {
    const element = document.getElementById(link);
    element.scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false);
    setShowPhoneMenu(false);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handlePhoneMenuToggle = () => {
    setShowPhoneMenu(!showPhoneMenu);
  };

  return (
    <header className={`py-4 px-6 bg-gray-200 dark:bg-slate-800 ${isSticky ? 'sticky top-0 z-50' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={darkMode ? logo.dark : logo.light} alt="Logo" className="h-14" />
        </div>

        <nav
          className={`md:flex items-center ${showMenu ? 'block' : 'hidden'
            } md:space-x-4 mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            {menuItems.map((menuItem, index) => (
              <button
                key={index}
                className="px-3 py-1 rounded-full text-gray-800 dark:text-white hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-600 transition duration-300"
                onClick={() => handleClick(menuItem.link)}
              >
                {menuItem.text}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => onDarkModeToggle()}
            className="text-slate-900 dark:text-white hover:text-red-500 transition duration-300"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <select
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="ar">العربية</option>
            <option value="fr">Français</option>
          </select>
          <button
            className="text-slate-900 dark:text-white hover:text-red-500 transition duration-300 md:hidden"
            onClick={handlePhoneMenuToggle}
          >
            <FiMenu size={20} />
          </button>
        </div>

        {showPhoneMenu && (
          <div className="fixed inset-0 bg-white dark:bg-slate-800 p-4">
            <div className="flex justify-end">
              <button
                className="text-slate-900 dark:text-white hover:text-red-500 transition duration-300"
                onClick={handlePhoneMenuToggle}
              >
                <FiMenu size={20} />
              </button>
            </div>
            <div
              className={`flex flex-col mt-8 space-y-4 ${
                showPhoneMenu ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
              } transition-all duration-500`}
            >
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full text-slate-900 dark:text-white hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-600 transition duration-300"
                  onClick={() => handleClick(item.link)}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
