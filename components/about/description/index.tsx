import React from 'react';

import Description from './style';

import { Container } from '~/public/styles/global';

const cpDescription: React.FC = () => (
  <Description>
    <Container>
      <h1 className="default-title before-info">
        <strong>Sobre nós</strong>
      </h1>
    </Container>

    <div className="description-content">
      <div>
        <h2>Quem Somos?</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper,
          eros eu sollicitudin condimentum, quam tortor iaculis diam, at lacinia
          enim odio id nunc. Nam sollicitudin volutpat sodales. Nullam aliquam
          maximus augue. Nullam aliquam risus vitae erat volutpat laoreet. Nunc
          convallis aliquam purus at dictum. Phasellus ornare magna vel
          porttitor vestibulum. Nullam et ex lorem. Mauris fermentum porttitor
          scelerisque. Nunc eget urna velit. Maecenas enim ante, egestas nec
          augue at, blandit dignissim tellus. Praesent laoreet tortor eu enim
          laoreet, non varius mi sodales. Nullam urna risus, posuere ut
          dignissim in, ultricies vel ligula. Mauris vitae neque at est placerat
          viverra.
        </p>

        <p>
          Phasellus feugiat risus vel tellus rhoncus facilisis. Ut luctus auctor
          aliquam. Maecenas aliquet sem id rutrum tempor. Aliquam lacinia sapien
          ante, vel luctus lorem ullamcorper nec. Nam sed laoreet turpis. Etiam
          consequat, massa sed pharetra consectetur, metus n
        </p>
      </div>

      <img
        src="https://i.picsum.photos/id/397/1170/650.jpg"
        alt="Quem Somos? - Bravus Investimentos"
        title="Quem Somos? - Bravus Investimentos"
        width="1170"
        height="650"
      />
    </div>
  </Description>
);

export default cpDescription;
