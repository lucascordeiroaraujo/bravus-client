import React from 'react';

import { useSelector } from 'react-redux';

import Author from './style';

const cpAuthor: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.blogPostData.error,
    data: state.blogPostData.data
  }));

  if (error) return null;

  const { user_firstname, user_avatar, user_description } = data.author.acf;

  return (
    <Author>
      <img
        src={user_avatar.sizes.medium}
        alt={user_avatar.alt}
        title={user_avatar.title}
        width={user_avatar.sizes['medium-width']}
        height={user_avatar.sizes['medium-height']}
      />
      <div>
        <strong>{user_firstname}</strong>

        <span className="line" />

        <p>{user_description}</p>
      </div>
    </Author>
  );
};

export default cpAuthor;
