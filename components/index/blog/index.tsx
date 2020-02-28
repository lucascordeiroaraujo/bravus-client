import React from 'react';

import { useSelector } from 'react-redux';

import Blog from './style';

import BlogItem from './components/blogItem';

const cpBlog: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.blogData.error,
    data: state.blogData.data
  }));

  if (error) return null;

  return (
    <Blog>
      <h1 className="default-title">
        <strong>Últimas no Blog</strong>
      </h1>

      <div>
        {data.map((item: any, index: number) => (
          <BlogItem key={index} {...item} />
        ))}
      </div>
    </Blog>
  );
};

export default cpBlog;
