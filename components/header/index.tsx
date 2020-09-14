import React from 'react';

import Header from './style';

import Menu from './components/menu';

import Fade from 'react-reveal/Fade';

const cpHeader: React.FC = () => (
  <Header>
    <div>
      <Fade>
        <a href="/">
          <img
            src={require('~/public/images/bravus-investimentos.png')}
            alt="Bravus Investimentos"
            title="Bravus Investimentos"
          />
        </a>
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
    </div>

    <Menu />
  </Header>
);

export default cpHeader;
