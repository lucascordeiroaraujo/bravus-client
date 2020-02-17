import React from 'react';

import Work from './style';

const cpWork: React.FC = () => (
  <Work>
    <h1 className="default-title">
      <strong>Nosso trabalho</strong>
    </h1>

    <ul>
      <li>
        <span>Identificamos seu perfil de investidor</span>
      </li>

      <li>
        <span>Oferecemos uma carteira adequada ao seu perfil</span>
      </li>

      <li>
        <span>Acompanhamos sua carteira, periódicamente</span>
      </li>
    </ul>
  </Work>
);

export default cpWork;
