import React, { useState } from 'react';
import { FiCalendar, FiClock, FiUsers, FiCoffee, FiUserPlus, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Event = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderCategoryIcon = () => {
    switch (event.category) {
      case 'Conference':
        return <FiUsers size={20} />;
      case 'Workshops':
        return <FiUserPlus size={20} />;
      case 'Hackathon':
        return <FiUsers size={20} />;
      case 'Break':
        return <FiCoffee size={20} />;
      default:
        return null;
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`mb-8 border rounded-lg p-4 bg-white dark:bg-gray-700 ${isExpanded ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="flex items-center mb-2 cursor-pointer" onClick={toggleExpand}>
        <div className={`mr-2 ${event.category === 'Break' ? 'text-yellow-500' : event.category === 'Conference' ? 'text-blue-500' : event.category === 'Workshops' ? 'text-green-500' : 'text-gray-500'}`}>
          {renderCategoryIcon()}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{event.name}</h2>
          <p className="text-gray-600 dark:text-gray-400">{event.startTime} - {event.endTime}</p>
        </div>
        <div className="ml-auto">
          {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </div>
      </div>

      {isExpanded && (
        <div>
          <p className="mb-4">{event.description}</p>

          {event.category === 'Conference' && event.subtopics && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Subtopics:</h3>
              <ul className="list-disc pl-6">
                {event.subtopics.map((subtopic, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">{subtopic}</li>
                ))}
              </ul>
            </div>
          )}

          {event.category === 'Workshops' && event.workshopTopics && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Workshop Topics:</h3>
              <ul className="list-disc pl-6">
                {event.workshopTopics.map((topic, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">{topic}</li>
                ))}
              </ul>
            </div>
          )}

          {event.category === 'Hackathon' && event.details && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Details:</h3>
              {event.details.map((detail, index) => (
                <div key={index} className="mb-2">
                  <h4 className="text-gray-600 dark:text-gray-400">{detail.name}</h4>
                  <p className="text-sm">{detail.startTime} - {detail.endTime}</p>
                  <p className="text-gray-600 dark:text-gray-300">{detail.description}</p>
                </div>
              ))}
            </div>
          )}

          {event.category === 'Workshops' && event.activities && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Activities:</h3>
              <ul className="list-disc pl-6">
                {event.activities.map((activity, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">{activity}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <FiMapPin size={18} className="text-gray-400 mr-1" />
              <p className="text-gray-600 dark:text-gray-400">Location: {event.location || 'TBD'}</p>
            </div>
            <div className="flex items-center">
              <a href={`#${event.name}`} className="text-blue-500 hover:underline">
                Jump to Event
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
