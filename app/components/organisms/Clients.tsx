"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Clients = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 4,
    },
  };

  const list = [
    {
      link: "https://www.instagram.com/arnaldo_piscinas_/",
      img: "/clients/arnaldo_piscinas.jpg",
    },
    {
      link: "https://azuosengenharia.com.br/",
      img: "/clients/azuos.jpg",
    },
    {
      link: "https://www.instagram.com/cantinho_flamengo/",
      img: "/clients/cantinho_do_flamengo.jpg",
    },
    {
      link: "https://www.instagram.com/darfbazar/",
      img: "/clients/darf_bazar.jpg",
    },
    {
      link: "https://www.instagram.com/veneto.pizzaria/",
      img: "/clients/veneto.jpg",
    },
    {
      link: "https://www.instagram.com/ikelele_infantil?",
      img: "/clients/ikelele.jpg",
    },
    {
      link: "https://www.instagram.com/pasteldoscooby",
      img: "/clients/pastel_do_scooby.jpg",
    },
    {
      link: "https://www.instagram.com/rofilconstrutora",
      img: "/clients/rofil_construtora.png",
    },
    {
      link: "https://trevocorretoradeseguros.com/",
      img: "/clients/trevo_corretora.jpg",
    },
    {
      link: "#",
      img: "/clients/araujo_costa_mecanica.png",
    },
    {
      link: "#",
      img: "/clients/gutymar.jpg",
    },
    {
      link: "#",
      img: "/clients/cx_engenharia.jpg",
    },
    {
      link: "#",
      img: "/clients/fisio+.png",
    },
    {
      link: "#",
      img: "/clients/Logo-RBR-Solar.png",
    },
    {
      link: "#",
      img: "/clients/tech&mais_produtos.jpg",
    },
    {
      link: "#",
      img: "/clients/soluções_catering_buffet.jpg",
    },
  ];

  return (
    <section id="clients" className="clients">
      <div className="container">
        <h2 className="clients-title title">NOSSOS PARCEIROS</h2>
        <Carousel
          showDots={false}
          autoPlay={true}
          arrows={false}
          infinite={true}
          autoPlaySpeed={2000}
          responsive={responsive}
        >
          {list.map((item, index) => (
            <div
              key={index}
              className="pic flex client w-60 items-center justify-center"
            >
              <Image
                src={item.img}
                alt="depoimento"
                draggable={false}
                title="depoimento"
                className="object-cover w-auto max-w-52 max-h-36 select-none h-auto"
                width={200}
                height={200}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;
