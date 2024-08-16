"use client";
import React from "react";
import { useSystem } from "../../context/systemContext";
import Button from "../atoms/Button";
import Link from "next/link";

const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen }: any = useSystem();

  return (
    <aside
      className={`w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-auto block lg:hidden transition-all transition-delay-800 second-bg fixed top-16 transform z-30 ${
        isMobileMenuOpen
          ? "opacity-1 pointer-events-initial"
          : " opacity-0 pointer-events-none"
      }`}
    >
      <div className="container flex h-full items-center">
        <ul
          onClick={() => {
            setIsMobileMenuOpen(false);
          }}
          className="flex flex-col justify-center gap-3 mx-auto "
        >
          <li className="text-center">
            <Link className="menu-link mb-0" href="#hero">
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link className="menu-link mb-0 " href="#services">
              Serviços
            </Link>
          </li>
          <li className="text-center">
            <Link className="menu-link mb-0 " href="#about-me">
              Sobre
            </Link>
          </li>
          <li className="text-center">
            <Link className="menu-link mb-0 " href="#clients">
              Nossos Parceiros
            </Link>
          </li>
          <li className="text-center">
            <Link className="menu-link mb-0 " href="#google-maps">
              Faça uma visita
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MobileMenu;
