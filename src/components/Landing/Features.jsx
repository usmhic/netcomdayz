import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Features = ({ title, list }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <Slider {...settings}>
          {list.map((feature, index) => (
            <div key={index} className="px-4">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={`https://picsum.photos/1920/1080?random=${index}`}
                    alt={feature.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 flex items-end">
                    <div className="bg-gray-900 bg-opacity-75 w-full py-4 px-6">
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Features;
