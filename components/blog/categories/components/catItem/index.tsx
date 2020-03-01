import React from 'react';

import CatItem from './style';

interface Iprops {
  title: string;
  slug: string;
  index: number;
}

const cpCatItem: React.FC<Iprops> = ({ title, slug }) => (
  <CatItem>
    <a href={`/blog/categoria/${slug}`} title="Confira">
      {title}
    </a>
  </CatItem>
);

export default React.memo(cpCatItem);
