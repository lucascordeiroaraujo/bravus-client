import React from 'react';

import AdvItem from './style';

interface Iprops {
  name: string;
  image: any;
  whatsapp: string;
  phone: string;
  email: string;
}

const cpAdvItem: React.FC<Iprops> = ({
  name,
  image,
  whatsapp,
  phone,
  email
}) => {
  const splitPhone = phone.split(' ');

  const splitWhatsApp = whatsapp.split(' ');

  return (
    <AdvItem>
      <img
        src={image.url}
        alt={name}
        title={name}
        width={image.width}
        height={image.height}
      />

      <div className="advisor-informations">
        <h1>{name}</h1>

        <div>
          {whatsapp && (
            <a
              href={`https://api.whatsapp.com/send?phone=${splitWhatsApp
                .join('')
                .replace(
                  /[+()-]/g,
                  ''
                )}&text=Olá, estou entrando em contato através do site.`}
              title="Direto no WhatsApp"
            >
              {whatsapp}
            </a>
          )}

          {phone && (
            <a
              href={`tel:${splitPhone.join('').replace(/[+()-]/g, '')}`}
              title="Ligar"
            >
              {phone}
            </a>
          )}

          {email && (
            <a href={`mailto:${email}`} title="Enviar E-mail">
              {email}
            </a>
          )}
        </div>
      </div>

      <div>
        <img
          src={image.url}
          alt={name}
          title={name}
          width={image.width}
          height={image.height}
          className="effect-zoom"
        />
      </div>
    </AdvItem>
  );
};

export default React.memo(cpAdvItem);
