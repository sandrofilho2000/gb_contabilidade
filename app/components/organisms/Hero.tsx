'use client';
import Image from 'next/image';
import React from 'react';
import Button from '../atoms/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  useGSAP(() => {
    gsap.utils.toArray('.fadein_1').forEach((item: any, index: number) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 1,
        }
      );
    });
    gsap.utils.toArray('.fadein_2').forEach((item: any, index: number) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 1.5,
        }
      );
    });
    gsap.utils.toArray('.fadein_3').forEach((item: any, index: number) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 2,
        }
      );
    });
  }, []);
  return (
    <header
      id="hero"
      className="hero bg-white relative bg-[url('https://images.pexels.com/photos/4476378/pexels-photo-4476378.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-fixed	bg-no-repeat bg-cover"
    >
      <Image
        width={375}
        height={562}
        className="relative top-0 left-0 w-full h-screen opacity-0"
        title="Imagem de fundo de sseão hero onde há um contador"
        alt="Imagem de fundo de sseão hero onde há um contador"
        src="https://images.pexels.com/photos/4476378/pexels-photo-4476378.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <div className="hero-overlay"></div>

      <div className="hero-center h-auto transform -translate-x-1/2 -translate-y-1/2 gap-4 flex flex-col items-center max-w-[340px] w-full text-center z-20 absolute top-1/2 left-1/2  text-white">
        <h1 className="text-3xl uppercase fadein_1 font-bold">
          Lorem <span className="main-color-txt">ipsum dolor</span> site ammet
        </h1>
        <p className="text-white fadein_2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo
          temporibus psum dolor si.
        </p>
        <Button
          classes="hero-btn relative fadein_3"
          text="Faça um orçamento"
          link="#contact"
        />
      </div>
    </header>
  );
};

export default Hero;
