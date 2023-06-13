import React, { useEffect, useState } from 'react';
import Header from './Landing/Header';
import Hero from './Landing/Hero';
import About from './Landing/About';
import Features from './Landing/Features';
import Pricing from './Landing/Pricing';
import Contact from './Landing/Contact';
import Footer from './Landing/Footer';
import data from '/locales/en.json';

const Landing = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { header, hero, about, features, pricing, contact, footer } = data;

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-100">
      {/* Header */}
      <Header
        logo={header.logo}
        menuItems={header.menuItems}
        isDarkMode={isDarkMode}
        handleToggle={handleToggle}
      />

      {/* Hero section */}
      <Hero title={hero.title} description={hero.description} />

      {/* About section */}
      <About
        title={about.title}
        description={about.description}
        steps={about.steps}
      />

      {/* Features section */}
      <Features title={features.title} list={features.list} />

      {/* Pricing section */}
      <Pricing title={pricing.title} description={pricing.description} plans={pricing.plans} />

      {/* Contact section */}
      <Contact
        title={contact.title}
        description={contact.description}
        contactInfo={contact.contactInfo}
      />

      {/* Footer */}
      <Footer text={footer.text} />
    </div>
  );
};

export default Landing;
