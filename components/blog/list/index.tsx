import React from 'react';

import BlogList from './style';

import BlogItem from '../item';

const cpBlogList: React.FC = () => (
  <BlogList>
    <BlogItem
      title="como começar a investir"
      description="Investir em uma das maiores instituições financeiras do país é muito
        simples. Em poucos passos, você já estará pronto para começar."
      link="#"
      image="https://picsum.photos/530/290?random=2"
    />
    <BlogItem
      title="como começar a investir"
      description="Investir em uma das maiores instituições financeiras do país é muito
        simples. Em poucos passos, você já estará pronto para começar."
      link="#"
      image="https://picsum.photos/530/290?random=3"
    />
    <BlogItem
      title="como começar a investir"
      description="Investir em uma das maiores instituições financeiras do país é muito
        simples. Em poucos passos, você já estará pronto para começar."
      link="#"
      image="https://picsum.photos/530/290?random=1"
    />
  </BlogList>
);

export default cpBlogList;
