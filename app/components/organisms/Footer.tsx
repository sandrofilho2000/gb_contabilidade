import React, { useRef } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import Button from "../atoms/Button";
import Form from "../cells/Form";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container flex items-center relative flex-col lg:flex-row justify-center pt-32 gap-4 ">
        <Image
          src="Logo_all_white.svg"
          className=" lg:h-[100px]  lg:w-[100px] absolute top-3"
          height={70}
          width={70}
          alt="GB Contabilidade"
          title="GB Contabilidade"
        />
        <div className="menu_wrapper flex flex-col md:flex-row justify-between w-full ">
          <ul className="flex flex-col justify-center">
            <li className="flex justify-start">
              <Link className="footer-link" href="#hero">
                Home
              </Link>
            </li>
            <li className="flex justify-start">
              <Link className="footer-link " href="#about">
                Sobre
              </Link>
            </li>
            <li className="flex justify-start">
              <Link className="footer-link " href="#services">
                Serviços
              </Link>
            </li>
            <li className="flex justify-start">
              <Link className="footer-link " href="#testimonials">
                Nossos Parceiros
              </Link>
            </li>
            <li className="flex justify-start">
              <Link className="footer-link " href="#google-maps">
                Faça uma visita
              </Link>
            </li>
            <li className="flex justify-start">
              <Link className="footer-link " href="/politica-de-privacidade">
                Política de privacidade
              </Link>
            </li>
          </ul>
          <hr className="mb-3 max-w-[200px] ml-2 opacity-50 lg:hidden" />
          <ul className="flex flex-col justify-center">
            <li className="flex">
              <Link className="footer-link flex items-center gap-1" href="#">
                <FaWhatsapp className="text-lg" />
                +55 21 99981-9549
              </Link>
            </li>
            <li className="flex">
              <a
                className="footer-link flex items-center gap-1"
                href="https://www.instagram.com/gbassessoriacontabil/"
              >
                <FaInstagram className="text-lg" />
                @gbassessoriacontabil
              </a>
            </li>
            <li className="flex">
              <Link className="footer-link flex items-center gap-1" href="#">
                <FaFacebook className="text-lg" />
                Facebook
              </Link>
            </li>
            <li className="flex">
              <Link className="footer-link flex items-center gap-1" href="#">
                <MdOutlineEmail className="text-lg" />
                E-mail
              </Link>
            </li>
          </ul>
        </div>

        <div className="form_wrapper w-full ">
          <Form />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
