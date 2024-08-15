'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Tilt } from 'react-tilt';

const Clients = () => {
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
    gsap.utils
      .toArray('.clients .client_wrapper')
      .forEach((item: any, index: number) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: item,
              start: 'top 10%',
              end: 'bottom 10%',
              scrub: true,
              once: true,
            },
          }
        );
      });
  }, []);
  const list = [
    {
      link: 'https://www.instagram.com/arnaldo_piscinas_/',
      img: '/clients/arnaldo_piscinas.jpg',
    },
    {
      link: 'https://azuosengenharia.com.br/',
      img: '/clients/azuos.jpg',
    },
    {
      link: 'https://www.instagram.com/cantinho_flamengo/',
      img: '/clients/cantinho_do_flamengo.jpg',
    },
    {
      link: 'https://www.instagram.com/darfbazar/',
      img: '/clients/darf_bazar.jpg',
    },
    {
      link: 'https://www.instagram.com/veneto.pizzaria/',
      img: '/clients/veneto.jpg',
    },
    {
      link: 'https://www.instagram.com/ikelele_infantil?',
      img: '/clients/ikelele.jpg',
    },
    {
      link: 'https://www.instagram.com/pasteldoscooby',
      img: '/clients/pastel_do_scooby.jpg',
    },
    {
      link: 'https://www.instagram.com/rofilconstrutora',
      img: '/clients/rofil_construtora.png',
    },
    {
      link: 'https://www.instagram.com/rofilconstrutora',
      img: '/clients/rodrigues_mt_construção.png',
    },
  ];

  return (
    <section
      className="clients"
      id="clients"
    >
      <div className="container">
        <h2 className="clients_title fadein title">NOSSOS PARCEIROS</h2>
        <div className="clients_wrapper flex flex-wrap justify-center items-center gap-3	">
          {list.map((item, index) => (
            <Tilt
              key={index}
              options={defaultOptions}
            >
              <div className="client_wrapper">
                <Link
                  target="_blank"
                  href={item.link}
                >
                  <Image
                    src={item.img}
                    alt={item.img}
                    className="w-28 h-28 object-cover"
                    width={200}
                    height={200}
                    title={item.img}
                  />
                </Link>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
