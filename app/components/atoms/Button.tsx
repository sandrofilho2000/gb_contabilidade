import React from "react";

const Button = ({
  text,
  link,
  classes,
  icon,
  target_blank,
}: {
  text: string;
  link?: string;
  classes?: string;
  icon?: JSX.Element;
  target_blank?: boolean;
}) => {
  return (
    <button
      className={`btn main-color-bg p-2 px-4 rounded-sm  hover:bg-transparent hover:border-solid border-2 border-transparent ${classes}`}
    >
      {link ? (
        <a
          className="uppercase flex items-center gap-1 justify-center font-semibold text-white text-xs lg:text-sm"
          href={link}
          target={`${target_blank ? "_BLANK" : "_SELF"} `}
        >
          {icon}
          {text}
        </a>
      ) : (
        <div className="uppercase flex items-center gap-1 justify-center font-semibold text-white text-xs">
          {icon}
          {text}
        </div>
      )}
    </button>
  );
};

export default Button;
