import React from 'react';

import InputMask from 'react-input-mask';

import Footer from './style';

import { Container } from '~/public/styles/global';

import Pin from '~/public/images/svg/pin';

import Waze from '~/public/images/svg/waze';

import Parking from '~/public/images/svg/parking';

import Phone from '~/public/images/svg/phone';

import WhatsApp from '~/public/images/svg/whatsapp';

import Email from '~/public/images/svg/email';

interface Iprops {
  customClass: string;
}

const cpFooter: React.FC<Iprops> = ({ customClass }) => (
  <Footer id="contato" className={customClass}>
    <Container className="container">
      <h1 className="default-title">
        <strong>Localização e contatos</strong>
      </h1>

      <div>
        <div className="address-icons">
          <Pin />

          <Waze />
        </div>

        <address>Av. Higienópolis | 1601 | Sala 501 Londrina-PR</address>

        <div className="address-icons parking">
          <Parking />
        </div>

        <p>Estacionamento grátis para clientes em reunião</p>

        <div className="address-icons">
          <Phone />
        </div>

        <a href="tel:554333769999" title="Ligar">
          +55 (43)
          <span> 3376-9999</span>
        </a>

        <div className="address-icons">
          <WhatsApp />
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5543998848855&text=oi"
          target="_blank"
          rel="noopener noreferrer"
          title="Ligar"
        >
          +55 (43)
          <span> 9 9884-8855</span>
        </a>

        <div className="address-icons">
          <Email />
        </div>

        <a
          href="mailto:contato@bravusinvestimentos.com.br"
          title="Enviar E-mail"
        >
          contato@bravusinvestimentos.com.br
        </a>
      </div>

      <form method="post">
        <strong>Envie uma mensagem</strong>

        <input type="text" placeholder="NOME" required />

        <InputMask
          type="tel"
          mask="99-99999999?"
          placeholder="TELEFONE"
          formatChars={{
            9: '[0-9]',
            '?': '[0-9]'
          }}
        />

        <input type="email" placeholder="E-MAIL" required />

        <textarea placeholder="MENSAGEM" />

        <input type="submit" value="Enviar" />
      </form>
    </Container>
  </Footer>
);

export default cpFooter;
