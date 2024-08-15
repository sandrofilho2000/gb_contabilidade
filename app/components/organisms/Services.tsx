'use client';
import React from 'react';
import Button from '../atoms/Button';
import { IoDocumentAttachSharp } from 'react-icons/io5';
import { GiFactory } from 'react-icons/gi';
import { MdAttachMoney } from 'react-icons/md';
import { Tilt } from 'react-tilt';
import { FaHandshake } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Services = () => {
  const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '.services-title',
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 70%',
          end: 'bottom 50%',
          once: true,
        },
      }
    );
    gsap.utils.toArray('.service').forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 50%',
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      className="services"
      id="services"
    >
      <div className="container">
        <h2 className="services-title title">SERVIÇOS</h2>

        <div className="services-wrapper grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-6 place-items-center">
          <Tilt options={defaultOptions}>
            <div className="service card">
              <MdAttachMoney className="text-4xl" />
              <h3 className="uppercase font-semibold">Imposto de renda</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Tilt>

          <Tilt options={defaultOptions}>
            <div className="service card">
              <GiFactory className="text-4xl" />
              <h3 className="uppercase font-semibold">Abertura de empresa</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Tilt>

          <Tilt options={defaultOptions}>
            <div className="service card">
              <IoDocumentAttachSharp className="text-4xl" />
              <h3 className="uppercase font-semibold">Criação de MEI</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Tilt>

          <Tilt options={defaultOptions}>
            <div className="service card">
              <FaHandshake className="text-4xl" />
              <h3 className="uppercase font-semibold">Contabilidade geral</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Tilt>
        </div>

        <div className="btns w-full flex justify-center">
          <Button
            text="Faça um orçamento"
            link="#contact"
            classes="mx-auto mt-4 transition-all transition-delay-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
