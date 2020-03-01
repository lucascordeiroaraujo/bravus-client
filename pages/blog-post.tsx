import * as React from 'react';

import { Container } from '~/public/styles/global';

// import Seo from '~/seo';

import Header from '~/components/global/header';

import BlogHeader from '~/components/blog/header';

import Description from '~/components/blog-post/description';

import Author from '~/components/blog-post/author';

// import Relateds from '~/components/blog-post/relateds';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

import { loadIndexData } from '~/store/index/actions';

import { loadBlogData } from '~/store/blog/actions';

import { loadBlogCategoriesData } from '~/store/blog-categories/actions';

import { loadContactData } from '~/store/contact/actions';

import { loadAboutData } from '~/store/about/actions';

import { loadSafeData } from '~/store/safe/actions';

import { loadCompaniesData } from '~/store/companies/actions';

// import fetch from 'isomorphic-unfetch';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const BlogPost: any = (props: any) => {
  console.log(props);
  return (
    <>
      {/* <Seo
        title="Bravus Investimentos - Sua XP Investimentos em Londrina"
        description="A Bravus Investimentos é o maior escritório credenciado da XP Investimentos em Londrina e Região Metropolitana. Nós ajudamos nossos clientes a investir melhor. Agende uma assessoria, invista de acordo com seu perfil, acesse e saiba mais."
        image="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-social.jpg"
      /> */}

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
};

BlogPost.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  store.dispatch(loadIndexData());

  store.dispatch(loadBlogData());

  store.dispatch(loadBlogCategoriesData());

  store.dispatch(loadContactData());

  store.dispatch(loadAboutData());

  store.dispatch(loadSafeData());

  store.dispatch(loadCompaniesData());

  return {
    slug: props.ctx.query
  };
};

export default BlogPost;
