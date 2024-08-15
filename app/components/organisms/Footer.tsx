import React, { useRef } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdLocationPin, MdOutlineEmail } from 'react-icons/md';
import Button from '../atoms/Button';
import Form from '../cells/Form';

const Footer = () => {
  return (
    <footer
      className="footer"
      id="footer"
    >
      <div className="container flex items-center flex-col lg:flex-row justify-center gap-4">
        <div className="menu_wrapper flex flex-col md:flex-row justify-between w-full ">
          <ul className="flex flex-col justify-center">
            <li className="flex justify-start">
              <a
                className="footer_link"
                href="#hero"
              >
                Home
              </a>
            </li>
            <li className="flex justify-start">
              <a
                className="footer_link "
                href="#about"
              >
                Sobre
              </a>
            </li>
            <li className="flex justify-start">
              <a
                className="footer_link "
                href="#services"
              >
                Serviços
              </a>
            </li>
            <li className="flex justify-start">
              <a
                className="footer_link "
                href="#testimonials"
              >
                Nossos Parceiros
              </a>
            </li>
            <li className="flex justify-start">
              <a
                className="footer_link "
                href="#google-maps"
              >
                Faça uma visita
              </a>
            </li>
          </ul>
          <ul className="flex flex-col justify-center">
            <li className="flex">
              <a
                className="footer_link flex items-center gap-1"
                href="#"
              >
                <FaWhatsapp className="text-lg" />
                +55 21 99981-9549
              </a>
            </li>
            <li className="flex">
              <a
                className="footer_link flex items-center gap-1"
                href="https://www.instagram.com/gbassessoriacontabil/"
              >
                <FaInstagram className="text-lg" />
                @gbassessoriacontabil
              </a>
            </li>
            <li className="flex">
              <a
                className="footer_link flex items-center gap-1"
                href="#"
              >
                <FaFacebook className="text-lg" />
                Facebook
              </a>
            </li>
            <li className="flex">
              <a
                className="footer_link flex items-center gap-1"
                href="#"
              >
                <MdOutlineEmail className="text-lg" />
                E-mail
              </a>
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
