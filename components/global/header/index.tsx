import React from 'react';

import Link from 'next/link';

import Header from './style';

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

    <ul>
      <li>
        <Link href="/sobre-nos">
          <a href="/sobre-nos">Sobre nós</a>
        </Link>
      </li>

      <li>
        <Link href="/#planos">Planos</Link>
      </li>

      <li>
        <Link href="/blog">
          <a href="/blog">Blog</a>
        </Link>
      </li>

      <li>
        <Link href="/#contato">Contato</Link>
      </li>

      <li>
        <Link href="/#abra-sua-conta">Abra sua conta</Link>
      </li>
    </ul>
  </Header>
);

export default cpHeader;
