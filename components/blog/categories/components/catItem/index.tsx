import React from 'react';

import Link from 'next/link';

import CatItem from './style';

import Fade from 'react-reveal/Fade';

interface Iprops {
  title: string;
  slug: string;
  index: number;
}

const cpCatItem: React.FC<Iprops> = ({ title, slug, index }) => (
  <CatItem>
    <Fade delay={index * 200}>
      <Link href={`/blog/categoria/${slug}`}>
        <a href={`/blog/categoria/${slug}`} title="Confira">
          {title}
        </a>
      </Link>
    </Fade>
  </CatItem>
);

export default React.memo(cpCatItem);
