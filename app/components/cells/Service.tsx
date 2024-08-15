import React from 'react';
import { Tilt } from 'react-tilt';

const Service = ({ item }: any) => {
  console.log('🚀 ~ file: Service.tsx:5 ~ item:', item);
  const {
    title,
    text,
    icon,
  }: { title: string; text: string; icon: JSX.Element } = item;
  const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  };
  return (
    <Tilt
      className="w-full"
      options={defaultOptions}
    >
      <div className="service card fadein--top">
        {icon}
        <h3 className="uppercase font-semibold">{title}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </Tilt>
  );
};

export default Service;
