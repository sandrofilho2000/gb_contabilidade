"use client";
import React from "react";
import Button from "../atoms/Button";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { GiFactory } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Service from "../cells/Service";

const Services = () => {
  const list = [
    {
      title: "Imposto de renda",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: <MdAttachMoney className="text-4xl" />,
    },
    {
      title: "Abertura de empresa",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: <GiFactory className="text-4xl" />,
    },
    {
      title: "Criação de MEI",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: <IoDocumentAttachSharp className="text-4xl" />,
    },
    {
      title: "Contabilidade geral",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: <FaHandshake className="text-4xl" />,
    },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".services .fadein--top").forEach((card: any) => {
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
    <section className="services" id="services">
      <div className="container">
        <h2 className="services-title title">SERVIÇOS</h2>

        <div className="services-wrapper grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 place-items-center">
          {list.map((item, index: number) => (
            <Service key={index} item={item} />
          ))}
        </div>

        <div className="btns w-full flex justify-center">
          <Button
            text="Faça um orçamento"
            link="#footer"
            classes="mx-auto mt-4 transition-all transition-delay-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
