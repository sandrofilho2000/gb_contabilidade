'use client';
import React, { useRef } from 'react';
import Button from '../atoms/Button';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const nameInput = form.current.querySelector(
        'input[name="name"]'
      ) as HTMLInputElement | null;
      const emailInput = form.current.querySelector(
        'input[name="email"]'
      ) as HTMLInputElement | null;
      const phoneInput = form.current.querySelector(
        'input[name="phone"]'
      ) as HTMLInputElement | null;
      const messageTextArea = form.current.querySelector(
        'textarea[name="message"]'
      ) as HTMLTextAreaElement | null;

      if (nameInput && emailInput && messageTextArea && phoneInput) {
        const templateParams = {
          from_name: nameInput.value,
          from_email: emailInput.value,
          from_phone: phoneInput.value,
          message: messageTextArea.value,
        };
        emailjs
          .send(
            'service_6f6b2i4',
            'template_cubfmbb',
            templateParams,
            'kDnZAKKMVzjoMBy92'
          )
          .then(
            (response) => {
              alert('E-mail enviado!');
            },
            (err) => {
              alert(
                'Falha ao enviar o e-mail. Por favor, tente novamente mais tarde.'
              );
              console.log(err);
            }
          );
        form.current.reset();
      }
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendMessage}
    >
      <div className="input_wrapper justify-between flex-col md:flex-row flex gap-4">
        <input
          type="text"
          className="w-full md:w-1/2"
          name="name"
          placeholder="Nome:"
          required
        />
        <input
          type="email"
          className="w-full md:w-1/2"
          name="email"
          placeholder="E-mail:"
          required
        />
        <input
          type="text"
          className="w-full md:w-1/2"
          name="phone"
          placeholder="Telefone:"
          required
        />
      </div>
      <div className="input_wrapper w-full mt-4 flex">
        <textarea
          name="message"
          id="message"
          placeholder="Mensagem:"
          className="w-full"
          required
        ></textarea>
      </div>
      <Button
        text="Enviar mensagem"
        classes="btn-white mt-4 transition-all transition-delay-500"
        icon={<MdOutlineEmail className="text-lg" />}
      />
    </form>
  );
};

export default Form;
