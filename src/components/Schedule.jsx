import React, { useEffect, useState } from 'react';
import scheduleData from '/public/locales/en/event.json';

const EventSchedule = () => {
  const { logo, eventTitle, eventDates, eventLocation, schedule } = scheduleData;
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (day) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-8">
          <img className="h-12 mr-2" src={logo.light} alt="Event Logo" />
          <h1 className="text-2xl font-bold">{eventTitle}</h1>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Event Information</h2>
          <p>{eventDates}</p>
          <p>{eventLocation}</p>
        </div>

        {Object.keys(schedule).map((day, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-700 rounded shadow transition duration-300 ease-in-out hover:shadow-lg mb-4"
          >
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection(day)}>
              <h2 className="text-xl font-semibold mb-2">{schedule[day].date}</h2>
              {openSections[day] ? <span>▼</span> : <span>►</span>}
            </div>

            {openSections[day] && (
              <>
                <h3 className="text-lg font-semibold mb-2">{schedule[day].day}</h3>

                {schedule[day].events.map((event, eventIndex) => (
                  <div key={eventIndex} className="mb-4">
                    <h4 className="text-md font-semibold mb-2">{event.name}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">{`${event.startTime} - ${event.endTime}`}</p>
                    <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                  </div>
                ))}

                {schedule[day].locations && (
                  <div className="mb-4">
                    <h4 className="text-md font-semibold mb-2">Locations</h4>
                    <ul className="list-disc pl-4">
                      {schedule[day].locations.map((location, locationIndex) => (
                        <li key={locationIndex}>{location}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {schedule[day].details && (
                  <div className="mb-4">
                    <h4 className="text-md font-semibold mb-2">Details</h4>
                    <ul className="list-disc pl-4">
                      {Object.keys(schedule[day].details).map((detail, detailIndex) => (
                        <li key={detailIndex}>
                          <strong>{detail}:</strong> {schedule[day].details[detail]}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;
