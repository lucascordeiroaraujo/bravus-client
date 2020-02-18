import React from 'react';

import Link from 'next/link';

import BlogItem from './style';

interface Iprops {
  title: string;
  description: string;
  slug: string;
  image: string;
}

const cpBlogItem: React.FC<Iprops> = ({ title, description, slug, image }) => (
  <BlogItem>
    <div>
      <h1>{title}</h1>

      <p>{description}</p>

      <Link href={`/blog/${slug}`}>
        <a href={`/blog/${slug}`} title="Confira" className="default-button">
          saiba mais..
        </a>
      </Link>
    </div>

    <div>
      <Link href={`/blog/${slug}`}>
        <a href={`/blog/${slug}`} title="Confira">
          <img src={image} alt={title} title={title} />
        </a>
      </Link>
    </div>
  </BlogItem>
);

export default cpBlogItem;
