import React from 'react';

import Blog from './style';

import BlogItem from './components/blogItem';

const cpBlog: React.FC = () => (
  <Blog>
    <h1 className="default-title">
      <strong>
        Últimas
        <br />
        no Blog
      </strong>
    </h1>

    <div>
      <BlogItem />

      <BlogItem />

      <BlogItem />
    </div>
  </Blog>
);

export default cpBlog;
