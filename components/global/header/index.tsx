import React from 'react';

import Link from 'next/link';

import Header from './style';

import Menu from './components/menu';

import Fade from 'react-reveal/Fade';

const cpHeader: React.FC = () => (
  <Header>
    <div>
      <Fade>
        <Link href="/">
          <a href="/">
            <img
              src={require('~/public/images/bravus-investimentos.png')}
              alt="Bravus Investimentos"
              title="Bravus Investimentos"
            />
          </a>
        </Link>
      </Fade>
      <Fade delay={200}>
        <img
          src={require('~/public/images/xp-investimentos.png')}
          alt="XP Investimentos"
          title="XP Investimentos"
          width="156"
          height="62"
        />
      </Fade>
      <Fade delay={400}>
        <img
          src={require('~/public/images/s20.png')}
          alt="S20"
          title="S20"
          width="148"
          height="38"
        />
      </Fade>
    </div>

    <Menu />
  </Header>
);

export default cpHeader;
