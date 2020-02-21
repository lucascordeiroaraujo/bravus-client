import React from 'react';

import AdvItem from './style';

const cpAdvItem: React.FC = () => (
  <AdvItem>
    <img
      src="https://i.picsum.photos/id/397/370/560.jpg"
      alt="Nome do assessor"
      title="Nome do assessor"
      width="370"
      height="500"
    />

    <div className="advisor-informations">
      <h1>Nome do assessor</h1>

      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5511962067029&text=oi"
          title="Direto no WhatsApp"
        >
          (43) 9 9625-5476
        </a>

        <a href="tel:5543" title="Direto no WhatsApp">
          (43) 3376-9959
        </a>

        <a href="mailto:cassio@bravusi.com.br" title="Enviar E-mail">
          cassio@bravusi.com.br
        </a>
      </div>
    </div>

    <div>
      <img
        src="https://i.picsum.photos/id/397/370/560.jpg"
        alt="Nome do assessor"
        title="Nome do assessor"
        width="370"
        height="500"
        className="effect-zoom"
      />
    </div>
  </AdvItem>
);

export default React.memo(cpAdvItem);
