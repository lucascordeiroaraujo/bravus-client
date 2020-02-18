import React from 'react';

import Header from './style';

import Categories from '../categories';

const cpHeader: React.FC = () => (
  <Header>
    <h1 className="default-title">
      <strong>Blog</strong>
    </h1>

    <div>
      <Categories />
    </div>
  </Header>
);

export default cpHeader;
