import React from 'react';

import CallToAction from './style';

import { Container } from '~/public/styles/global';

interface Iprops {
  type: string;
}

const cpCallToAction: React.FC<Iprops> = ({ type }) => (
  <CallToAction>
    <Container className="container">
      <h1 className={type}>Traga seu dinheiro para a bravus!</h1>
      <p>
        s id interdum mollis, mi ex bibendum lacus, et varius neque purus sit
        amet ante. Praesent luctus diam tortor, auctor pulvinar felis interdum
        nec. Etiam lacinia nisi massa, non feugiat sapien fermentum vitae.
        Aliquam ac diam id massa suscipit fringilla in in augue. Fusce pretium
        turpis sed tellus fermentum suscipit. Nulla vehicula sit amet quam at
        suscipit. Quisque vel blandit odio. Suspendisse dignissim volutpat
        mauris, at fermentum enim tristiq
      </p>
      <a href="#" title="Confira" className={type}>
        Quero o contato de um acesso
      </a>
    </Container>
  </CallToAction>
);

export default cpCallToAction;
