import React from 'react';

import { useSelector } from 'react-redux';

import Relateds from './style';

import BlogItem from '../../../components/item';

const cpRelateds: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.blogPostData.error,
    data: state.blogPostData.data
  }));

  if (error || data.relateds.length === 0) return null;

  return (
    <Relateds>
      <h2>Confira também:</h2>

      <div className={data.relateds.length <= 2 ? 'alignment-start' : ''}>
        {data.relateds.map((item: any, index: number) => (
          <BlogItem key={index} {...item} {...index} />
        ))}
      </div>
    </Relateds>
  );
};

export default cpRelateds;
