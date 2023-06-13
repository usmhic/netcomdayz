import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const Pricing = ({ title, description, plans }) => {
  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-lg text-center mb-6">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div key={index} className="p-6 border border-gray-300 rounded">
              <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">
                <span className="text-2xl font-bold">{plan.price}</span>
              </p>
              <ul className="list-disc ml-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-purple-500 text-white py-2 px-4 mt-6 rounded-full shadow-md hover:bg-purple-600 transition duration-300 ease-in-out">
                Get Started
                <FaArrowRight className="inline-block ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
