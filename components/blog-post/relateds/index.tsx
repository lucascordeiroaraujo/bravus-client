import React from 'react';

import Relateds from './style';

import BlogItem from '../../index/blog/components/blogItem';

const cpRelateds: React.FC = () => (
  <Relateds>
    <h2>Confira também:</h2>

    <div>
      <BlogItem />

      <BlogItem />

      <BlogItem />
    </div>
  </Relateds>
);

export default cpRelateds;
