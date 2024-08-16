"use client";
import React, { useEffect } from "react";

const MadeBy = () => {
  useEffect(() => {
    console.log("Made by:"),
      console.log(
        "%c▷%c▷%c▷%c www.sandrofilho.dev",
        "font-size: 24px;",
        "color:#FC5214;font-size: 24px; margin-left: -13px;",
        "color:initial;font-size: 24px; margin-left: -13px;",
        "font-size: 16px;"
      );
  }, []);
  return (
    <section className="made_by" id="made_by">
      <div className="container p-1">
        <a
          href="https://sandrofilho.dev"
          className="block mx-auto text-center text-xs"
          target="_blank"
        >
          Feito com ❤️ por{" "}
          <strong>
            Sandro <span className="text-[#FC5214]">Filho DEV</span>
          </strong>
        </a>
      </div>
    </section>
  );
};

export default MadeBy;
