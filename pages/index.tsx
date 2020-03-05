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

  store.dispatch(loadIndexData());

  store.dispatch(loadBlogData(''));

  store.dispatch(loadContactData());
};

export default Home;
