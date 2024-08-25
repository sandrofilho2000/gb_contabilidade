"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = () => {
    setIsVisible(window.scrollY > 60);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleIsVisible);

    return () => {
      document.removeEventListener("scroll", handleIsVisible);
    };
  }, []);

  return (
    <a
      target="_BLANK"
      href="https://api.whatsapp.com/send?phone=+5521%2099981-9549&text=Ol%C3%A1%2C+eu+gostaria+de+realizar+um+or%C3%A7amento."
      className="fixed bottom-3 right-3 z-30"
    >
      <Image
        src="./whatsappicon.svg"
        height={60}
        width={60}
        className={` transition-all z-30 ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none transition-all z-30"
        }`}
        alt="Whatsapp float button"
        title="Whatsapp float button"
      />
    </a>
  );
};

export default WhatsAppFloat;
