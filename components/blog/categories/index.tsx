import React from 'react';

import Categories from './style';

import CatItem from './components/catItem';

const cpCategories: React.FC = () => (
  <Categories>
    <CatItem title="Categoria 1" link="#" />

    <CatItem title="Categoria 2" link="#" />

    <CatItem title="Categoria 3" link="#" />
  </Categories>
);

export default React.memo(cpCategories);
