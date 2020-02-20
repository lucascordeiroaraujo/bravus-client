import React from 'react';

import Header from './style';

import Link from 'next/link';

import { Container } from '~/public/styles/global';

interface Iprops {
  type: string;
}

const cpHeader: React.FC<Iprops> = ({ type }) => (
  <Header>
    <Container className="container">
      <div>
        {type === 'secure' && (
          <Link href="/">
            <a href="/">
              <img
                src={require(`~/public/images/bravus-secure-group.png`)}
                alt="Bravus Seguros"
                title="Bravus Seguros"
                width="675"
                height="196"
              />
            </a>
          </Link>
        )}

        {type === 'companies' && (
          <Link href="/">
            <a href="/">
              <img
                src={require(`~/public/images/bravus-companies-group.png`)}
                alt="Bravus Seguros"
                title="Bravus Seguros"
                width="675"
                height="196"
              />
            </a>
          </Link>
        )}
      </div>

      <div>
        <h1>O que fazemos?</h1>

        <p>
          s id interdum mollis, mi ex bibendum lacus, et varius neque purus sit
          amet ante. Praesent luctus diam tortor, auctor pulvinar felis interdum
          nec. Etiam lacinia nisi massa, non feugiat sapien fermentum vitae.
          Aliquam ac diam id massa suscipit fringilla in in augue. Fusce pretium
          turpis sed tellus fermentum suscipit. Nulla vehicula sit amet quam at
          suscipit. Quisque vel blandit odio. Suspendisse dignissim volutpat
          mauris, at fermentum enim tristiq
        </p>
      </div>

      <div>
        <img
          src={require('~/public/images/xp-investimentos.png')}
          alt="XP Investimentos"
          title="XP Investimentos"
          width="239"
          height="95"
        />

        <img
          src={require('~/public/images/s20.png')}
          alt="S20"
          title="S20"
          width="227"
          height="58"
        />
      </div>
    </Container>
  </Header>
);

export default cpHeader;
