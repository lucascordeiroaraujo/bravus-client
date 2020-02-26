import React from 'react';

import { useSelector } from 'react-redux';

import { Parallax } from 'react-parallax';

import Container from './style';

interface Iprops {
  item: string;
  type: string;
}

const cpParallax: React.FC<Iprops> = ({ item, type }) => {
  const { error, data } = useSelector((state: any) => ({
    error: state.indexData.error,
    data: state.indexData.data
  }));

  if (error) return null;

  return (
    <Container className={type}>
      <Parallax
        bgImage={data.acf[`${item}_image`].url}
        bgImageAlt="Bravus"
        strength={400}
      >
        <div>
          <p>{data.acf[`${item}_description`]}</p>
          <span>{data.acf[`${item}_author`]}</span>
        </div>

        <div style={{ height: '98vh' }} />
      </Parallax>
    </Container>
  );
};

export default cpParallax;
