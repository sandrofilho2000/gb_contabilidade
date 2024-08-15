'use client';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      showDots: true,
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      showDots: true,
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      showDots: true,
      breakpoint: { max: 1024, min: 720 },
      items: 2,
    },
    mobile: {
      showDots: true,
      breakpoint: { max: 720, min: 0 },
      items: 1,
    },
  };

  const testimonials = [
    {
      name: 'John Doe',
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      quote:
        '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aliquid cupiditate."',
    },
    {
      name: 'John Doe',
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      quote:
        '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aliquid cupiditate."',
    },
    {
      name: 'John Doe',
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      quote:
        '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aliquid cupiditate."',
    },
    {
      name: 'John Doe',
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      quote:
        '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aliquid cupiditate."',
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials"
    >
      <div className="container">
        <h2 className="testimonials-title title">DEPOIMENTOS</h2>
        <Carousel responsive={responsive}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial"
            >
              <div className="pic flex flex-col items-center">
                <Image
                  src={item.img}
                  alt="depoimento"
                  title="depoimento"
                  className="rounded-full mb-3"
                  height={100}
                  width={100}
                />

                <p className="testimonial-name text-center max-w-[130px]">
                  {item.name}
                </p>
                <hr className="my-3 w-28" />
                <p className="testimonial-quote text-center text-sm max-w-[260px]">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
