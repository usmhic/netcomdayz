import React from 'react';

const About = ({ title, description, items }) => {
  return (
    <section id="about" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">{title}</h2>
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <h3 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-base">{item.description}</p>
              {item.image && (
                <img src={item.image} alt={item.title} className="mt-4 rounded-lg shadow-md" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
