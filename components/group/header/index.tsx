import React from 'react';

import { useSelector } from 'react-redux';

import Header from './style';

import Link from 'next/link';

import { Container } from '~/public/styles/global';

import Fade from 'react-reveal/Fade';

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
              <Fade>
                <img
                  src={logo.url}
                  alt="Bravus Seguros"
                  title="Bravus Seguros"
                  width={logo.width}
                  height={logo.height}
                />
              </Fade>
            </a>
          </Link>
        </div>

        <div>
          <Fade>
            <h1>O que fazemos?</h1>
          </Fade>

          <Fade delay={200}>
            <div dangerouslySetInnerHTML={{ __html: what_we_do }} />
          </Fade>
        </div>

        <div>
          <Fade>
            <img
              src={require('~/public/images/xp-investimentos.png')}
              alt="XP Investimentos"
              title="XP Investimentos"
              width="239"
              height="95"
            />
          </Fade>

          <Fade delay={200}>
            <img
              src={require('~/public/images/s20.png')}
              alt="S20"
              title="S20"
              width="227"
              height="58"
            />
          </Fade>
        </div>
      </Container>
    </Header>
  );
};

export default cpHeader;
