"use client";
import Image from "next/image";
import React from "react";
import Button from "../atoms/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const AboutMe = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".about-me .fadein--top").forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.65,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 10%",
            once: true,
          },
        }
      );
    });
  }, []);
  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <h2 className="about-me_title fadein--top title lg:hidden">SOBRE</h2>
        <div className="about-me_wrapper  flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="about-me_img">
            <Image
              height={350}
              width={350}
              src="/gisele.jpg"
              className="rounded-sm fadein--top w-[70%] lg:w-full max-w-[300px] lg:max-w-[350px] block mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              title="Contadora Gisele"
              alt="Contadora Gisele"
            />
          </div>

          <div className="about-me_text flex flex-col items-center lg:items-start max-w-[400px]">
            <h2 className="about-me_title title hidden lg:inline-block ml-0 relative left-0 translate-x-0">
              SOBRE
            </h2>
            <p className="fadein--top text-center lg:text-left text-sm font-medium">
              Me chamo Gisele, filha de José Alberto e Gilcilea, mãe de Rafaele
              e Lucas. Meu interesse pela contabilidade começou com meu avô,
              Gessy, que tinha um escritório em Itaboraí nos anos 70. Nos anos
              80, meu pai seguiu o mesmo caminho, abrindo seu escritório em
              Alcântara. Desde pequena, eu o acompanhava em visitas a clientes e
              me apaixonei pela profissão. Sou formada em Direito e Técnica em
              Contabilidade desde 2014. Iniciei minha carreira e, em 2020,
              conquistei meus primeiros clientes. Desde então, venho construindo
              minha própria jornada e sempre buscando me aprimorar.
            </p>
            <Button
              text="Faça um orçamento"
              link="#footer"
              classes="mx-auto mt-4 lg:ml-0 block fadein--top transition-all transition-delay-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
