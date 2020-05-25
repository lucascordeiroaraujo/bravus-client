import React from 'react';

import { useSelector } from 'react-redux';

import BlogList from './style';

import BlogItem from '../item';

import { truncate } from '~/utils';

const cpBlogList: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.blogData.error,
    data: state.blogData.data
  }));

  if (error) return null;

  return (
    <BlogList>
      {data.map((item: any, index: number) => (
        <BlogItem
          key={index}
          title={item.title.rendered}
          description={truncate(item.acf.description, 100)}
          slug={item.slug}
          image={item.acf.image}
        />
      ))}
    </BlogList>
  );
};

export default cpBlogList;
