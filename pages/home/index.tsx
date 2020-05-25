import * as React from 'react';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import Header from '~/components/header';

import CallToAction from './components/callToAction';

import Work from './components/work';

import Parallax from '~/components/parallax';

import Plans from './components/plans';

import Blog from './components/blog';

import Footer from '~/components/footer';

import Groups from '~/components/groups';

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
    <Seo page="index" />

    <Container>
      <Header />

      <CallToAction />

      <Work />
    </Container>

    <Parallax item="section_3" type="first-index" />

    <Container id="planos">
      <Plans />

      <Blog />
    </Container>

    <Parallax item="section_5" type="second-index" />

    <Footer type="index" />

    <Groups type="index" />
  </>
);

Home.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  if (!store.getState().indexData.data) {
    store.dispatch(loadIndexData());
  }

  if (!store.getState().blogData.data) {
    store.dispatch(loadBlogData(''));
  }

  if (!store.getState().contactData.data) {
    store.dispatch(loadContactData());
  }
};

export default Home;
