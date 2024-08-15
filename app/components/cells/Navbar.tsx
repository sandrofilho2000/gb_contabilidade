'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const handleSticky = () => {
    setSticky(window.scrollY > 20);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleSticky);

    return () => {
      document.removeEventListener('scroll', handleSticky);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar transition-all w-full transition-delay-500 flex items-center  h-16 fixed z-50 ${
        sticky
          ? 'sticky_nav main-color-txt shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
          : 'transparent text-white'
      }`}
      onClick={(e: any) => {
        document.body.classList.toggle('dark');
      }}
    >
      <div className="container flex items-center justify-between ">
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

        <div className="menu-toggle-btn cursor-pointer  text-3xl">
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
