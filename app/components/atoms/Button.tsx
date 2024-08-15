import React from 'react';

const Button = ({
  text,
  link,
  classes,
}: {
  text: string;
  link: string;
  classes?: string;
}) => {
  return (
    <button
      className={`btn transition-all transition-delay-500 main-color-bg p-2 px-4 rounded-sm  hover:bg-transparent hover:border-solid border-2 border-transparent ${classes}`}
    >
      <a
        className="uppercase  font-semibold text-white text-xs"
        href={link}
      >
        {text}
      </a>
    </button>
  );
};

export default Button;
