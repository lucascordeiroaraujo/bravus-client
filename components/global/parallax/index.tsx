import React from 'react';
import { Parallax } from 'react-parallax';
import Container from './style';

const cpParallax: React.FC = () => (
  <Container>
    <Parallax
      bgImage="http://localhost/bravus-server/wp-content/uploads/2020/02/coragem-bravus-investimento.jpg"
      bgImageAlt="Bravus"
      strength={-200}
    >
      <p>
        &quot;A coragem é a primeira das qualidades humanas porque garante todas
        as outras&ldquo;
      </p>
      <span>Aristóteles</span>
      <div style={{ height: '1030px' }} />
    </Parallax>
  </Container>
);

export default cpParallax;
