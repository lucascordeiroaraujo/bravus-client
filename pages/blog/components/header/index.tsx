import React from 'react';

import Header from './style';

import Categories from '../categories';

import Fade from 'react-reveal/Fade';

const cpHeader: React.FC = () => (
  <Header>
    <Fade>
      <h1 className="default-title">
        <strong>Blog</strong>
      </h1>
    </Fade>
    <div>
      <Categories />
    </div>
  </Header>
);

export default cpHeader;
