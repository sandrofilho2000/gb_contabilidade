'use client';
import Image from 'next/image';
import React from 'react';
import Button from '../atoms/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutMe = () => {
  useGSAP(() => {
    gsap.utils.toArray('.about_me .fadein').forEach((item: any) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: 'top 50%',
            end: 'bottom 10%',
            once: true,
          },
        }
      );
    });
  }, []);
  return (
    <section
      className="about_me"
      id="about_me"
    >
      <div className="container">
        <h2 className="about_me_title fadein title">SOBRE</h2>
        <div className="about_me_wrapper  flex flex-col justify-center items-center gap-4">
          <div className="about_me_img">
            <Image
              height={400}
              width={400}
              src="/gisele.jpg"
              className="rounded-sm fadein w-[70%] max-w-[300px] block mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              title="Contadora Gisele"
              alt="Contadora Gisele"
            />
          </div>

          <div className="about_me_text max-w-[400px]">
            <p className="fadein text-center text-sm font-medium ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              iste doloribus, consequatur expedita minima id fugit ipsam dolorum
              non quo magnam voluptatum culpa vitae sint eos? Nobis possimus
              iure commodi.
            </p>
            <Button
              text="FAÇA UM ORÇAMENTO"
              link="#"
              classes="mx-auto mt-4 block fadein"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
