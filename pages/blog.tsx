import * as React from 'react';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import Header from '~/components/global/header';

import BlogHeader from '~/components/blog/header';

import BlogList from '~/components/blog/list';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

import { loadBlogData } from '~/store/blog/actions';

import { loadContactData } from '~/store/contact/actions';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const Blog: any = () => (
  <>
    <Seo
      title="Bravus Investimentos - Sua XP Investimentos em Londrina"
      description="A Bravus Investimentos é o maior escritório credenciado da XP Investimentos em Londrina e Região Metropolitana. Nós ajudamos nossos clientes a investir melhor. Agende uma assessoria, invista de acordo com seu perfil, acesse e saiba mais."
      image="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-social.jpg"
    />

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
  const { store, isServer } = props.ctx;

  store.dispatch(loadBlogData());

  store.dispatch(loadContactData());

  return { isServer };
};

export default Blog;
