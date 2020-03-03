import React from 'react';

import { useSelector } from 'react-redux';

import Description from './style';

const cpBlogPost: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.blogPostData.error,
    data: state.blogPostData.data
  }));

  if (error) return null;

  const { image, description } = data.post[0].acf;

  return (
    <Description>
      <h1>
        <span>{data.post[0].title.rendered}</span>
      </h1>
      <img
        src={image.url}
        alt={image.alt}
        title={image.description}
        width={image.width}
        height={image.height}
      />
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Description>
  );
};

export default React.memo(cpBlogPost);
