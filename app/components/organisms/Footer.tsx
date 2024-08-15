import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdLocationPin, MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer
      className="footer"
      id="footer"
    >
      <div className="container flex items-center flex-col lg:flex-row justify-center gap-4">
        <div className="menu_wrapper flex justify-between w-[80%] max-w-[460px]">
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

        <div className="form_wrapper w-[80%] max-w-[460px]">
          <form action="">
            <div className="input_wrapper justify-between flex gap-2">
              <input
                type="text"
                name="name"
                placeholder="Nome:"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail:"
              />
            </div>
            <div className="input_wrapper w-full mt-2 flex">
              <textarea
                name="message"
                id="message"
                placeholder="Sua mensagem:"
                className="w-full"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
