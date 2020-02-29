import React from 'react';

import Link from 'next/link';

import CatItem from './style';

interface Iprops {
  title: string;
  slug: string;
}

const cpCatItem: React.FC<Iprops> = ({ title, slug }) => (
  <CatItem>
    <Link href={`/blog/categoria/${slug}`}>
      <a href={`/blog/categoria/${slug}`} title="Confira">
        {title}
      </a>
    </Link>
  </CatItem>
);

export default React.memo(cpCatItem);
