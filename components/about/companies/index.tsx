import React from 'react';

import Companies from './style';

import { Container } from '~/public/styles/global';

const cpCompanies: React.FC = () => (
  <Companies>
    <Container>
      <h1 className="default-title before-info">
        <strong>Outras empresas</strong>
      </h1>
    </Container>

    <div className="container-companies">
      <div>
        <img
          src={require('~/public/images/bravus-secure.jpg')}
          alt="Bravus - Seguros"
          title="Bravus - Seguros"
        />

        <div>
          <strong>Bravus - Seguros</strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper, eros eu sollicitudin condimentum, quam tortor iaculis diam,
            at lacinia enim odio id nunc. Nam sollicitudin volutpat sodales.
            Nullam aliquam maximus augue. Nullam aliquam risus vitae erat
            volutpat laoreet. Nunc convallis aliquam purus at dictum. Phasellus
            ornare magna vel porttitor vestibulum. Nullam et ex lorem. Mauris
            fermentum porttitor scelerisque. Nunc eget urna velit. Maecenas enim
            ante, egestas nec augue at, blandit dignissim tellus. Praesent
            laoreet tortor eu enim laoreet, non varius mi sodtra consetus n
          </p>

          <a href="#" title="">
            Faça uma cotação
          </a>
        </div>
      </div>

      <div>
        <img
          src={require('~/public/images/bravus-companies.jpg')}
          alt="Bravus - Empresas"
          title="Bravus - Empresas"
        />

        <div>
          <strong>Bravus - Empresas</strong>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper, eros eu sollicitudin condimentum, quam tortor iaculis diam,
            at lacinia enim odio id nunc. Nam sollicitudin volutpat sodales.
            Nullam aliquam maximus augue. Nullam aliquam risus vitae erat
            volutpat laoreet. Nunc convallis aliquam purus at dictum. Phasellus
            ornare magna vel porttitor vestibulum. Nullam et ex lorem. Mauris
            fermentum porttitor scelerisque. Nunc eget urna velit. Maecenas enim
            ante, egestas nec augue at, blandit dignissim tellus. Praesent
            laoreet tortor eu enim laoreet, non varius mi sodtra consetus n
          </p>

          <a href="#" title="">
            Faça uma cotação
          </a>
        </div>
      </div>
    </div>
  </Companies>
);

export default cpCompanies;
