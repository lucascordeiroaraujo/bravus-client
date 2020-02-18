import React from 'react';

import Link from 'next/link';

import Header from './style';

import Menu from './components/menu';

const cpHeader: React.FC = () => (
  <Header>
    <div>
      <Link href="/">
        <a href="/">
          <img
            src={require('~/public/images/bravus-investimentos.png')}
            alt="Bravus Investimentos"
            title="Bravus Investimentos"
          />
        </a>
      </Link>

      <img
        src={require('~/public/images/xp-investimentos.png')}
        alt="XP Investimentos"
        title="XP Investimentos"
      />
      <img src={require('~/public/images/s20.png')} alt="S20" title="S20" />
    </div>

    <Menu />
  </Header>
);

export default cpHeader;
