"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MouseScroll from "../atoms/MouseScroll";

const Hero = () => {
  useGSAP(() => {
    // Create a GSAP timeline instance
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero .hero-overlay",
      { opacity: 1 },
      {
        opacity: 0.6,
        stagger: 0.65,
      }
    ).fromTo(
      ".hero .fadein--top",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.65,
        delay: 0.3,
      }
    );
  }, []);

  return (
    <header
      id="hero"
      className="hero bg-white relative flex justify-center  items-center bg-[url('https://images.pexels.com/photos/4476378/pexels-photo-4476378.jpeg?auto=compress&cs=tinysrgb&w=600')] lg:bg-[url('https://images.pexels.com/photos/4476375/pexels-photo-4476375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-fixed	bg-no-repeat bg-cover"
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
      <div className="container absolute w-full h-full flex items-center justify-center">
        <div className="hero-center h-auto transform gap-4 flex flex-col items-center  max-w-[340px] lg:max-w-[500px] w-full text-center  z-20  text-white">
          <Image
            src="Logo2.svg"
            className="fadein--top lg:h-[330px] lg:w-[330px]"
            height={220}
            width={220}
            alt="GB Contabilidade"
            title="GB Contabilidade"
          />
          <p className="text-[#f4f4f4] lg:text-[14px]  uppercase  fadein--top">
            Precisão e confiança em cada detalhe da sua contabilidade e
            finanças.
          </p>
          {/*           <Button
            classes="hero-btn relative fadein--top"
            text="Faça um orçamento"
            link="#footer"
          /> */}
        </div>
      </div>
      <MouseScroll classes="transform translate-y-[20%] fadein--top" />
    </header>
  );
};

export default Hero;
