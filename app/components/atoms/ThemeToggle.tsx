"use client";
import { IoMoon, IoSunnySharp } from "react-icons/io5";

import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");
  const handleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      setTheme("dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  };

  return (
    <div onClick={handleTheme} className="text-2xl">
      {theme == "dark" ? <IoMoon /> : <IoSunnySharp />}
    </div>
  );
};

export default ThemeToggle;
