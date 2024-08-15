'use client';
import React from 'react';
import { GiTrophyCup } from 'react-icons/gi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Awards = () => {
  useGSAP(() => {
    gsap.utils.toArray('.awards .fadein--top').forEach((item: any) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 10%',
            scrub: true,
          },
        }
      );
    });
  }, []);
  return (
    <section
      className="awards relative bg-[url('https://images.pexels.com/photos/5466814/pexels-photo-5466814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-fixed	bg-no-repeat bg-cover"
      id="awards"
    >
      <div className="container relative z-10 flex text-white">
        <GiTrophyCup className="text-6xl fadein--top" />
        <span className="text-center font-bold fadein--top uppercase text-white flex text-sm items-center">
          Duas vezes seguidas eleito como o melhor escritório de contabilidade
          do ano
        </span>
        <GiTrophyCup className="text-6xl fadein--top" />
      </div>
    </section>
  );
};

export default Awards;
