import React from 'react';

import BlogItem from './style';

import Fade from 'react-reveal/Fade';

interface Iprops {
  title: string;
  description: string;
  slug: string;
  image: any;
}

const cpBlogItem: React.FC<Iprops> = ({ title, description, slug, image }) => (
  <BlogItem>
    <div>
      <Fade>
        <h1>{title}</h1>
      </Fade>
      <Fade delay={200}>
        <p>{description}</p>
      </Fade>
      <a href={`/blog/${slug}`} title="Confira" className="default-button">
        saiba mais..
      </a>
    </div>

    <div>
      <a href={`/blog/${slug}`} title="Confira">
        <Fade>
          <img
            src={image ? image.sizes['blog-list-page'] : ''}
            alt={title}
            title={title}
            width={image ? image.sizes['blog-list-page-width'] : ''}
            height={image ? image.sizes['blog-list-page-height'] : ''}
          />
        </Fade>
      </a>
    </div>
  </BlogItem>
);

export default cpBlogItem;
