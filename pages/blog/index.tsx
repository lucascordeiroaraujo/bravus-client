import * as React from 'react';

import { Container } from '~/public/styles/global';

// import Seo from '~/seo';

import Header from '~/components/header';

import BlogHeader from './components/header';

import BlogList from './components/list';

import Footer from '~/components/footer';

import Groups from '~/components/groups';

import { loadBlogData } from '~/store/blog/actions';

import { loadBlogCategoriesData } from '~/store/blog-categories/actions';

import { loadContactData } from '~/store/contact/actions';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const Blog: any = () => (
  <>
    {/* <Seo
      title="Bravus Investimentos - Sua XP Investimentos em Londrina"
      description="A Bravus Investimentos é o maior escritório credenciado da XP Investimentos em Londrina e Região Metropolitana. Nós ajudamos nossos clientes a investir melhor. Agende uma assessoria, invista de acordo com seu perfil, acesse e saiba mais."
      image="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-social.jpg"
    /> */}

    <Container>
      <Header />
      <BlogHeader />
      <BlogList />
    </Container>

    <Footer type="blog" />

    <Groups type="blog" />
  </>
);

Blog.getInitialProps = async (props: Iprops) => {
  const { store, query } = props.ctx;

  if (!store.getState().blogData.data) {
    store.dispatch(loadBlogData(query.slug ? query.slug : ''));
  }

  if (!store.getState().blogCategoriesData.data) {
    store.dispatch(loadBlogCategoriesData());
  }

  if (!store.getState().contactData.data) {
    store.dispatch(loadContactData());
  }
};

export default Blog;
