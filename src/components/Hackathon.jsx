import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FaClock, FaUsers, FaAngleDown, FaAngleUp, FaMoon, FaLanguage } from 'react-icons/fa';
import moment from 'moment';
import 'moment/locale/en-gb';
import eventScheduleEN from '/public/locales/hackathon/en.json';
import eventScheduleAR from '/public/locales/hackathon/ar.json';

const HackathonComponent = () => {
  moment.locale('en-gb');
  const [selectedDay, setSelectedDay] = useState('day1');
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const handleExpandEvent = (eventIndex) => {
    if (expandedEvent === eventIndex) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(eventIndex);
    }
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    moment.locale(lang === 'en' ? 'en-gb' : 'ar');
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    setShowLanguageMenu(false);
  };

  const renderEventDetails = (details) => (
    <div>
      {details.map((detail, detailIndex) => (
        <div key={detailIndex} className="mb-2">
          <div className="flex items-center text-gray-600">
            <FaClock className="mr-2" />
            <p>
              {moment(detail.startTime, 'h:mm A').format('LT')} -{' '}
              {moment(detail.endTime, 'h:mm A').format('LT')}
            </p>
          </div>
          <h4 className="text-md font-semibold mb-1">{detail.name}</h4>
          <p className="text-gray-700 mb-1">{detail.description}</p>
          {detail.participants && (
            <div className="flex items-center text-gray-600">
              <FaUsers className="mr-2" />
              <p>
                Participants:{' '}
                {Array.isArray(detail.participants)
                  ? detail.participants.join(', ')
                  : detail.participants}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const eventSchedule = language === 'en' ? eventScheduleEN : eventScheduleAR;

  return (
    <div className={`bg-${darkMode ? 'gray-900' : 'gray-100'} py-8 px-4 text-${darkMode ? 'white' : 'black'}`}>
      <div className="flex justify-between mb-8">
        <div className="flex flex-wrap justify-center md:justify-start">
          {Object.keys(eventSchedule).map((day) => (
            <button
              key={day}
              className={`px-4 py-2 rounded-lg mx-2 mt-2 md:mt-0 ${
                selectedDay === day ? 'bg-rose-500 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handleDayChange(day)}
            >
              {eventSchedule[day].day}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <button
            className="mr-2 focus:outline-none"
            onClick={handleDarkModeToggle}
          >
            <FaMoon className={`text-${darkMode ? 'gray-300' : 'rose-500'}`} />
          </button>
          <div className="relative">
            <button
              className="focus:outline-none"
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            >
              <FaLanguage className="text-gray-500" />
            </button>
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
                <button
                  className={`block w-full text-left px-4 py-2 ${
                    language === 'en' ? 'text-rose-500 font-semibold' : 'text-gray-700'
                  }`}
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </button>
                <button
                  className={`block w-full text-left px-4 py-2 ${
                    language === 'ar' ? 'text-rose-500 font-semibold' : 'text-gray-700'
                  }`}
                  onClick={() => handleLanguageChange('ar')}
                >
                  Arabic
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <TransitionGroup>
        {eventSchedule[selectedDay].events.map((event, index) => (
          <CSSTransition key={index} classNames="event" timeout={500}>
            <div className={`bg-white rounded-lg shadow p-4 mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold mr-2">{event.name}</h3>
                  {event.category && <p className="text-gray-600">({event.category})</p>}
                  <div className="flex items-center text-gray-600 ml-4">
                    <FaClock className="mr-2" />
                    <p>
                      {moment(event.startTime, 'h:mm A').format('LT')} -{' '}
                      {moment(event.endTime, 'h:mm A').format('LT')}
                    </p>
                  </div>
                </div>
                <button
                  className="focus:outline-none"
                  onClick={() => handleExpandEvent(index)}
                >
                  {expandedEvent === index ? (
                    <FaAngleUp className={`text-${darkMode ? 'gray-500' : 'gray-500'}`} />
                  ) : (
                    <FaAngleDown className={`text-${darkMode ? 'gray-500' : 'gray-500'}`} />
                  )}
                </button>
              </div>
              {expandedEvent === index && (
                <>
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  {event.details && renderEventDetails(event.details)}
                  {event.subtopics && (
                    <div>
                      <h4 className="text-md font-semibold mb-2">Subtopics:</h4>
                      <ul className="list-disc list-inside pl-4">
                        {event.subtopics.map((subtopic, subtopicIndex) => (
                          <li key={subtopicIndex} className="text-gray-700 mb-1">
                            {subtopic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {event.activities && (
                    <div>
                      <h4 className="text-md font-semibold mb-2">Activities:</h4>
                      <ul className="list-disc list-inside pl-4">
                        {event.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="text-gray-700 mb-1">
                            <FaClock className="mr-2" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default HackathonComponent;
