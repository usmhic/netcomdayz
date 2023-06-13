import React from 'react';

const Contact = ({ title, description, contactInfo }) => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6">{description}</p>
        <p className="mb-4">
          Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </p>
        <p>Phone: {contactInfo.phone}</p>
      </div>
    </section>
  );
};

export default Contact;
