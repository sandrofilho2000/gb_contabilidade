"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ThemeToggle from "../atoms/ThemeToggle";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const handleSticky = () => {
    setSticky(window.scrollY > 20);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleSticky);

    return () => {
      document.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar transition-all w-full transition-delay-500 flex items-center  h-16 fixed z-50 ${
        sticky
          ? "sticky_nav main-color-txt shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          : "transparent text-white"
      }`}
    >
      <div className="container lg:flex items-center justify-between flex">
        <div className="lg:hidden">
          <ThemeToggle />
        </div>
        <h1 className="logo">
          <a href="/">
            <Image
              src="logo.svg"
              height={40}
              width={60}
              alt="GB Contabilidade"
              title="GB Contabilidade"
            />
          </a>
        </h1>

        <ul className="lg:flex justify-center gap-6 hidden ">
          <li>
            <a className="footer_link mb-0" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="footer_link mb-0 " href="#about-me">
              Sobre
            </a>
          </li>
          <li>
            <a className="footer_link mb-0 " href="#services">
              Serviços
            </a>
          </li>
          <li>
            <a className="footer_link mb-0 " href="#clients">
              Nossos Parceiros
            </a>
          </li>
          <li>
            <a className="footer_link mb-0 " href="#google-maps">
              Faça uma visita
            </a>
          </li>

          <ThemeToggle />
        </ul>

        <div className="menu-toggle-btn cursor-pointer text-3xl lg:hidden">
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
