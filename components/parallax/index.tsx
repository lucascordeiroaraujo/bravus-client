import React from 'react';

import { useSelector } from 'react-redux';

import Container from './style';

import Fade from 'react-reveal/Fade';

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
    <Container
      className={type}
      style={{
        backgroundImage: `url(${data.acf[`${item}_image`].url})`
      }}
    >
      <img src={data.acf[`${item}_image`].url} alt="" />

      <div>
        <Fade bottom>
          <p>{data.acf[`${item}_description`]}</p>
        </Fade>
        <Fade bottom delay={200}>
          <span>{data.acf[`${item}_author`]}</span>
        </Fade>
      </div>
    </Container>
  );
};

export default cpParallax;
