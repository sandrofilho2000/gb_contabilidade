"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";

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
    easing: "cubic-bezier(.03,.98,.52,.99)",
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
  ];

  return (
    <section className="clients" id="clients">
      <div className="container">
        <h2 className="clients_title title">NOSSOS PARCEIROS</h2>
        <div className="clients_wrapper flex flex-wrap justify-center items-center gap-3	">
          {list.map((item, index) => (
            <Tilt key={index} options={defaultOptions}>
              <div className="client_wrapper">
                <Link target="_blank" href={item.link}>
                  <Image
                    src={item.img}
                    alt={item.img}
                    className="h-28 object-cover w-auto"
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
