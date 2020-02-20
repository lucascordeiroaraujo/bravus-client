import React from 'react';

import { Parallax } from 'react-parallax';

import Container from './style';

interface Iprops {
  image: string;
  title: string;
  author: string;
  type: string;
}

const cpParallax: React.FC<Iprops> = ({ image, title, author, type }) => (
  <Container className={type}>
    <Parallax bgImage={image} bgImageAlt="Bravus" strength={400}>
      <div>
        <p>{title}</p>
        <span>{author}</span>
      </div>

      <div style={{ height: '98vh' }} />
    </Parallax>
  </Container>
);

export default cpParallax;
