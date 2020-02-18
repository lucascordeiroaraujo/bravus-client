import React from 'react';

import Link from 'next/link';

import CatItem from './style';

interface Iprops {
  title: string;
  link: string;
}

const cpCatItem: React.FC<Iprops> = ({ title, link }) => (
  <CatItem>
    <Link href={link}>
      <a href={link} title="Confira">
        {title}
      </a>
    </Link>
  </CatItem>
);

export default React.memo(cpCatItem);
