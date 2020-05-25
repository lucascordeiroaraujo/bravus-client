import React from 'react';

import BlogItem from './style';

import { truncate } from '~/utils';

import Fade from 'react-reveal/Fade';

const cpBlogItem: React.FC = (props: any) => {
  return (
    <BlogItem>
      <Fade bottom delay={props.index * 200}>
        <a href={`/blog/${props.slug}`} title="Confira">
          <img
            src={props.acf.image.sizes['blog-list-home']}
            alt={props.title.rendered}
            title={props.title.rendered}
            width={props.acf.image.sizes['blog-list-home-width']}
            height={props.acf.image.sizes['blog-list-home-height']}
          />
        </a>

        <div>
          <h2>
            <a href={`/blog/${props.slug}`} title="Confira">
              {props.title.rendered}
            </a>
          </h2>

          <p>
            <a href={`/blog/${props.slug}`} title="Confira">
              {truncate(props.acf.description, 100)}
            </a>
          </p>

          <a
            href={`/blog/${props.slug}`}
            title="Confira"
            className="default-button"
          >
            saiba mais..
          </a>
        </div>
      </Fade>
    </BlogItem>
  );
};

export default React.memo(cpBlogItem);
