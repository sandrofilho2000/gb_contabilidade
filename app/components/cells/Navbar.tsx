"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ThemeToggle from "../atoms/ThemeToggle";
import { useSystem } from "../../context/systemContext";
import Link from "next/link";

const Navbar = ({ classes }: { classes?: string }) => {
  const [sticky, setSticky] = useState(false);
  const { isMobileMenuOpen, setIsMobileMenuOpen }: any = useSystem();

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
        sticky || isMobileMenuOpen
          ? "sticky_nav main-color-txt shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          : "transparent text-white"
      } ${classes}`}
    >
      <div className="container lg:flex items-center justify-between flex">
        <h1 className="logo">
          <Link href="/">
            <Image
              src="logo.svg"
              height={40}
              width={60}
              alt="GB Contabilidade"
              title="GB Contabilidade"
            />
          </Link>
        </h1>

        <ul className="lg:flex justify-center gap-8 hidden ">
          <li>
            <Link className="menu-link mb-0" href="#hero">
              Home
            </Link>
          </li>
          <li>
            <Link className="menu-link mb-0 " href="#services">
              Serviços
            </Link>
          </li>
          <li>
            <Link className="menu-link mb-0 " href="#about-me">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="menu-link mb-0 " href="#clients">
              Nossos Parceiros
            </Link>
          </li>
          <li>
            <Link className="menu-link mb-0 " href="#google-maps">
              Faça uma visita
            </Link>
          </li>
        </ul>

        <div
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="menu-toggle-btn cursor-pointer text-3xl lg:hidden"
        >
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
