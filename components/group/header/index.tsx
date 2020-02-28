import React from 'react';

import { useSelector } from 'react-redux';

import Header from './style';

import Link from 'next/link';

import { Container } from '~/public/styles/global';

interface Iprops {
  type: string;
}

const cpHeader: React.FC<Iprops> = ({ type }) => {
  const { error, data } = useSelector((state: any) => ({
    error: state[`${type}Data`].error,
    data: state[`${type}Data`].data
  }));

  if (error) return null;

  const { what_we_do, logo } = data.acf;

  return (
    <Header>
      <Container className="container">
        <div>
          <Link href="/">
            <a href="/">
              <img
                src={logo.url}
                alt="Bravus Seguros"
                title="Bravus Seguros"
                width={logo.width}
                height={logo.height}
              />
            </a>
          </Link>
        </div>

        <div>
          <h1>O que fazemos?</h1>

          <div dangerouslySetInnerHTML={{ __html: what_we_do }} />
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
};

export default cpHeader;
