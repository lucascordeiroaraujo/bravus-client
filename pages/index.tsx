import * as React from 'react';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import Header from '~/components/global/header';

import CallToAction from '~/components/index/callToAction';

import Work from '~/components/index/work';

import Parallax from '~/components/global/parallax';

import Plans from '~/components/index/plans';

import Blog from '~/components/index/blog';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

import { loadIndexData } from '~/store/index/actions';

import { loadBlogData } from '~/store/blog/actions';

import { loadContactData } from '~/store/contact/actions';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const Home: any = () => (
  <>
    <Seo
      title="Bravus Investimentos - Sua XP Investimentos em Londrina"
      description="A Bravus Investimentos é o maior escritório credenciado da XP Investimentos em Londrina e Região Metropolitana. Nós ajudamos nossos clientes a investir melhor. Agende uma assessoria, invista de acordo com seu perfil, acesse e saiba mais."
      image="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-social.jpg"
    />

    <Container>
      <Header />

      <CallToAction />

      <Work />
    </Container>

    <Parallax item="section_3" type="first-index" />

    <Container>
      <Plans />

      <Blog />
    </Container>

    <Parallax item="section_5" type="second-index" />

    <Footer type="index" />

    <Groups type="index" />
  </>
);

Home.getInitialProps = async (props: Iprops) => {
  const { store, isServer } = props.ctx;

  if (!store.getState().data) {
    store.dispatch(loadIndexData());
  }

  if (!store.getState().data) {
    store.dispatch(loadBlogData());
  }

  if (!store.getState().data) {
    store.dispatch(loadContactData());
  }

  return { isServer };
};

export default Home;
