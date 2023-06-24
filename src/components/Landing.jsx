import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Header from './Landing/Header';
import Hero from './Landing/Hero';
import About from './Landing/About';
import Partners from './Landing/Partners';
import Sponsorship from './Landing/Sponsorship';
import Team from './Landing/Team';
import Contact from './Landing/Contact';
import Footer from './Landing/Footer';

import enData from '/public/locales/en.json';
import arData from '/public/locales/ar.json';
import frData from '/public/locales/fr.json';
import esData from '/public/locales/es.json';

const Landing = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const languages = {
    en: enData,
    ar: arData,
    fr: frData,
    es: esData,
  };
  const data = languages[language];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    if (language === 'ar') {
      document.documentElement.lang = 'ar';
      document.documentElement.style.fontFamily = 'Your Arabic Font, Arial, sans-serif'; // Replace 'Your Arabic Font' with the actual font name you want to use
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.style.fontFamily = 'Arial, sans-serif'; // Default font for other languages
    }
  }, [language]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className={`bg-white dark:bg-black text-gray-800 dark:text-gray-100 ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <Header
        logo={isDarkMode ? data.header.dark : data.header.light}
        menuItems={data.header.menuItems}
        isDarkMode={isDarkMode}
        handleToggle={handleToggle}
        language={language}
        handleChangeLanguage={handleChangeLanguage}
      />

      {/* Hero section */}
      <Hero
        title={data.hero.title}
        description={data.hero.description}
        buttons={data.hero.buttons}
        gallery={data.hero.gallery}
        id="hero"
      />

      {/* About section */}
      <About
        title={data.about.title}
        description={data.about.description}
        steps={data.about.steps}
        next={data.about.next}
        edition={data.about.edition}
        highlights={data.about.highlights}
        id="about"
      />

      {/* Partners section */}
      <Partners 
        title={data.partners.title} 
        list={data.partners.list} 
        id="partners" 
      />

      {/* Sponsorship section */}
      <Sponsorship
        title={data.sponsorship.title}
        description={data.sponsorship.description}
        benefits={data.sponsorship.benefits}
        button={data.sponsorship.button}
        id="sponsorship"
      />

      {/* Team section */}
      <Team 
        title={data.team.title} 
        members={data.team.members} 
        id="team" 
      />

      {/* Contact section */}
      <Contact
        title={data.contact.title}
        email={data.contact.email}
        phone={data.contact.phone}
        id="contact" 
      />

      {/* Footer */}
      <Footer text={data.footer.text} 
        socialMedia={data.footer.socialMedia} 
        id="footer" 
      /> 
    </div>
  );
};

export default Landing;
