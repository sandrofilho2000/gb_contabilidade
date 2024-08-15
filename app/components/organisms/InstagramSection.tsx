'use client';
import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import Carousel from 'react-multi-carousel';
import Button from '../atoms/Button';
import { FaInstagram } from 'react-icons/fa';

const InstagramSection = () => {
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
  const posts = [
    'https://www.instagram.com/p/CgXHFIwONDP/',
    'https://www.instagram.com/p/C8fLlk5OR6k/',
    'https://www.instagram.com/p/B8G3wfCF7bg/',
  ];
  return (
    <section
      className="about_me"
      id="about_me"
    >
      <div className="container">
        <h2 className="about_me_title fadein title">NOSSO INSTAGRAM</h2>
        <div className="instagram_wrapper">
          <Carousel responsive={responsive}>
            {posts.map((item, index) => (
              <div
                key={index}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <InstagramEmbed
                  url={item}
                  width={328}
                />
              </div>
            ))}
          </Carousel>

          <Button
            text="VISITE NOSSO INSTAGRAM"
            link="#"
            classes="mx-auto block"
            icon={<FaInstagram className="text-lg" />}
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
