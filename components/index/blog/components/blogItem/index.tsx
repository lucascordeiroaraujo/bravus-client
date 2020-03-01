import React from 'react';

import Link from 'next/link';

import BlogItem from './style';

import { truncate } from '~/utils';

import Fade from 'react-reveal/Fade';

const cpBlogItem: React.FC = (props: any) => {
  return (
    <BlogItem>
      <Fade bottom delay={props.index * 200}>
        <Link href={`/blog/${props.slug}`}>
          <a href={`/blog/${props.slug}`} title="Confira">
            <img
              src={props.acf.image.sizes['blog-list-home']}
              alt={props.title.rendered}
              title={props.title.rendered}
              width={props.acf.image.sizes['blog-list-home-width']}
              height={props.acf.image.sizes['blog-list-home-height']}
            />
          </a>
        </Link>

        <h2>
          <Link href={`/blog/${props.slug}`}>
            <a href={`/blog/${props.slug}`} title="Confira">
              {props.title.rendered}
            </a>
          </Link>
        </h2>

        <p>
          <Link href={`/blog/${props.slug}`}>
            <a href={`/blog/${props.slug}`} title="Confira">
              {truncate(props.acf.description, 100)}
            </a>
          </Link>
        </p>

        <Link href={`/blog/${props.slug}`}>
          <a
            href={`/blog/${props.slug}`}
            title="Confira"
            className="default-button"
          >
            saiba mais..
          </a>
        </Link>
      </Fade>
    </BlogItem>
  );
};

export default React.memo(cpBlogItem);
