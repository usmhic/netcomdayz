import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Header = ({ logo, menuItems, isDarkMode, handleToggle, language, handleChangeLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="text-4xl font-bold tracking-wider"
          >
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-base font-medium hover:text-gray-600 cursor-pointer"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center md:hidden">
          <button
            className="focus:outline-none"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 fill-current cursor-pointer" />
            ) : (
              <FiMenu className="w-6 h-6 fill-current cursor-pointer" />
            )}
          </button>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="mt-2 space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block text-base font-medium hover:text-gray-600 cursor-pointer"
                  onClick={handleMenuToggle}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <button
            className="flex items-center focus:outline-none mr-2"
            onClick={handleToggle}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <FiSun className="w-6 h-6 fill-current cursor-pointer" />
            ) : (
              <FiMoon className="w-6 h-6 fill-current cursor-pointer" />
            )}
          </button>

          <select
            value={language}
            onChange={(e) => handleChangeLanguage(e.target.value)}
            className="block py-2 px-3 border border-gray-300 rounded-md text-base font-medium text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 cursor-pointer"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
