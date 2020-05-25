import React from 'react';

import CatItem from './style';

import { useRouter } from 'next/router';

interface Iprops {
  title: string;
  slug: string;
  index: number;
}

const cpCatItem: React.FC<Iprops> = ({ title, slug }) => {
  const router = useRouter();

  return (
    <CatItem
      className={
        typeof router.query.category !== 'undefined' &&
        router.query.category === slug
          ? 'active'
          : ''
      }
    >
      <a href={`/blog/categoria/${slug}`} title="Confira">
        {title}
      </a>
    </CatItem>
  );
};

export default React.memo(cpCatItem);
