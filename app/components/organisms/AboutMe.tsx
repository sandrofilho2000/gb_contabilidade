'use client';
import Image from 'next/image';
import React from 'react';
import Button from '../atoms/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AboutMe = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.about-me .fadein--top').forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 10%',
            once: true,
          },
        }
      );
    });
  }, []);
  return (
    <section
      className="about-me"
      id="about-me"
    >
      <div className="container">
        <h2 className="about-me_title fadein--top title">SOBRE</h2>
        <div className="about-me_wrapper  flex flex-col justify-center items-center gap-4">
          <div className="about-me_img">
            <Image
              height={400}
              width={400}
              src="/gisele.jpg"
              className="rounded-sm fadein--top w-[70%] max-w-[300px] block mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              title="Contadora Gisele"
              alt="Contadora Gisele"
            />
          </div>

          <div className="about-me_text max-w-[400px]">
            <p className="fadein--top text-center text-sm font-medium ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              iste doloribus, consequatur expedita minima id fugit ipsam dolorum
              non quo magnam voluptatum culpa vitae sint eos? Nobis possimus
              iure commodi.
            </p>
            <Button
              text="FAÇA UM ORÇAMENTO"
              link="#"
              classes="mx-auto mt-4 block fadein--top transition-all transition-delay-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
