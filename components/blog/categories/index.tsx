import React from 'react';

import { useSelector } from 'react-redux';

import Categories from './style';

import CatItem from './components/catItem';

const cpCategories: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.blogCategoriesData.error,
    data: state.blogCategoriesData.data
  }));

  if (error) return null;

  return (
    <Categories>
      {data.map((item: any, index: number) => (
        <CatItem key={index} title={item.name} slug={item.slug} />
      ))}
    </Categories>
  );
};

export default React.memo(cpCategories);
