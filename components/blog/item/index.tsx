import React from 'react';

import Link from 'next/link';

import BlogItem from './style';

interface Iprops {
  title: string;
  description: string;
  link: string;
  image: string;
}

const cpBlogItem: React.FC<Iprops> = ({ title, description, link, image }) => (
  <BlogItem>
    <div>
      <h1>{title}</h1>

      <p>{description}</p>

      <Link href={link}>
        <a href={link} title="Confira" className="default-button">
          saiba mais..
        </a>
      </Link>
    </div>

    <div>
      <Link href={link}>
        <a href={link} title="Confira">
          <img src={image} alt={title} title={title} />
        </a>
      </Link>
    </div>
  </BlogItem>
);

export default cpBlogItem;
