"use client";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import Carousel from "react-multi-carousel";
import Button from "../atoms/Button";
import { FaInstagram } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const InstagramSection = () => {
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
  const posts = [
    "https://www.instagram.com/p/Cs4ckH_v32e/",
    "https://www.instagram.com/p/Cs3h_VRLAer/",
    "https://www.instagram.com/p/CpAsxszrVBa/",
    "https://www.instagram.com/p/Cop4GJoPGNG/",
    "https://www.instagram.com/p/CoPdTaHuVXh/",
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".instagram .fadein--top").forEach((card: any) => {
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
    <section className="instagram" id="instagram">
      <div className="container">
        <h2 className="instagram_title fadein--top title">NOSSO INSTAGRAM</h2>
        <div className="instagram_wrapper">
          <Carousel responsive={responsive}>
            {posts.map((item, index) => (
              <div
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <InstagramEmbed url={item} width={328} />
              </div>
            ))}
          </Carousel>

          <Button
            text="VISITE NOSSO INSTAGRAM"
            link="#"
            classes="mx-auto block transition-all transition-delay-500"
            icon={<FaInstagram className="text-lg" />}
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
