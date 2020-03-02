import * as React from 'react';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import Header from '~/components/global/header';

import BlogHeader from '~/components/blog/header';

import Description from '~/components/blog-post/description';

import Author from '~/components/blog-post/author';

// import Relateds from '~/components/blog-post/relateds';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

import { loadBlogCategoriesData } from '~/store/blog-categories/actions';

import { loadBlogPostData } from '~/store/blog-post/actions';

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

      {/* <Relateds /> */}
    </Container>

    <Footer type="blog-post" />

    <Groups type="blog-post" />
  </>
);

BlogPost.getInitialProps = async (props: Iprops) => {
  const { store, query } = props.ctx;

  store.dispatch(loadBlogCategoriesData());

  store.dispatch(loadBlogPostData(query.slug));

  store.dispatch(loadContactData());
};

export default BlogPost;
