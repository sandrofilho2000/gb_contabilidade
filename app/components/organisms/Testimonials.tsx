"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
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

  const list = [
    {
      name: "Isabela Carvalho",
      img: "/testimonials/Isabela_Carvalho.jpg",
      quote: '"GB Contabilidade. A melhor!"',
    },
    {
      name: "Leandro Brito Machado",
      img: "/testimonials/Leandro_Brito_Machado.jpg",
      quote: '"A melhor!"',
    },
    {
      name: "Mada Anjos",
      img: "/testimonials/Mada_Anjos.jpg",
      quote:
        '"Presta serviço presta serviço a minha empresa há 8 anos com muita responsabilidade e dedicação."',
    },
    {
      name: "Desiree Oliver",
      img: "/testimonials/Desiree_Oliver.jpg",
      quote: '"Sem dúvida GB Contabilidade!"',
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="testimonials-title title">DEPOIMENTOS</h2>
        <Carousel responsive={responsive}>
          {list.map((item, index) => (
            <div key={index} className="testimonial">
              <div className="pic flex flex-col items-center">
                <Image
                  src={item.img}
                  alt="depoimento"
                  title="depoimento"
                  className="rounded-full mb-3"
                  height={100}
                  width={100}
                />

                <p className="testimonial-name text-center text-xs max-w-[130px]">
                  {item.name}
                </p>
                <hr className="my-3 w-28 opacity-50" />
                <p className="testimonial-quote text-center text-sm max-w-[260px]">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
