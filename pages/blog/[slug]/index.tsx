import * as React from 'react';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import Header from '~/components/header';

import BlogHeader from '../components/header';

import Description from './components/description';

import Author from './components/author';

import Relateds from './components/relateds';

import Footer from '~/components/footer';

import Groups from '~/components/groups';

import { loadBlogCategoriesData } from '~/store/blog-categories/actions';

import { loadBlogPostData } from '~/store/blog-post/actions';

// import { loadBlogData } from '~/store/blog/actions';

import { loadContactData } from '~/store/contact/actions';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const BlogPost: any = () => (
  <>
    <Seo page="blogPost" />

    <Container>
      <Header />

      <BlogHeader />

      <Description />

      <Author />

      <Relateds />
    </Container>

    <Footer type="blog-post" />

    <Groups type="blog-post" />
  </>
);

BlogPost.getInitialProps = async (props: Iprops) => {
  const { store, query } = props.ctx;

  if (!store.getState().blogCategoriesData.data) {
    store.dispatch(loadBlogCategoriesData());
  }

  if (!store.getState().blogPostData.data) {
    store.dispatch(loadBlogPostData(query.slug));
  }

  // store.dispatch(loadBlogData(''));

  if (!store.getState().contactData.data) {
    store.dispatch(loadContactData());
  }
};

export default BlogPost;
