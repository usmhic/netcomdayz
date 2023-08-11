import React, { useEffect, useState } from 'react';
import HeaderComponent from './Landing/Header';
import HeroComponent from './Landing/Hero';
import AboutComponent from './Landing/About';
import PartnersComponent from './Landing/Partners';
import TeamComponent from './Landing/Team';
import SponsorComponent from './Landing/Sponsor';
import ContactComponent from './Landing/Contact';
import FooterComponent from './Landing/Footer';

import enData from '/public/locales/en/landing.json';
import esData from '/public/locales/es/landing.json';
import arData from '/public/locales/ar/landing.json';
import frData from '/public/locales/fr/landing.json';

const Landing = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

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

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const scrollToSection = () => {
    // Implement scroll functionality to scroll to the specified section
  };

  const data = {
    en: enData,
    es: esData,
    ar: arData,
    fr: frData,
  };

  const {
    header,
    hero,
    about,
    partners,
    team,
    sponsor,
    contact,
    footer
  } = data[language];

  const isRtl = language === 'ar';

  return (
    <div className={`bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 ${isRtl ? 'rtl' : ''}`}>
      <HeaderComponent
        logo={header.logo}
        menuItems={header.menuItems}
        darkMode={isDarkMode}
        onDarkModeToggle={handleToggle}
        onLanguageChange={handleLanguageChange}
        selectedLanguage={language}
        scrollToSection={scrollToSection}
      />
      <HeroComponent 
        title={hero.title} 
        description={hero.description} 
        ctaText={hero.ctaText} 
        ctaLink={hero.ctaLink} 
        gallery={hero.gallery} 
      />
      <AboutComponent
        title={about.title}
        description={about.description}
        items={about.items}
      />
      <PartnersComponent
        title={partners.title}
        description={partners.description}
        items={partners.items}
        ctaText={partners.ctaText}
        ctaLink={partners.ctaLink}
      />
      <TeamComponent
        title={team.title}
        description={team.description}
        members={team.members}
        ctaText={team.ctaText}
        ctaLink={team.ctaLink}
      />
      <SponsorComponent
        title={sponsor.title}
        description={sponsor.description}
        ctaText={sponsor.ctaText}
        ctaLink={sponsor.ctaLink}
      />
      <ContactComponent 
        title={contact.title}
        description={contact.description}
        ctaText={contact.ctaText}
        ctaLink={contact.ctaLink}
      />
      <FooterComponent 
        logo={footer.logo} 
        darkMode={isDarkMode}
        socialLinks={footer.socialLinks} 
        copyright={footer.copyright}
      />
    </div>
  );
};

export default Landing;
