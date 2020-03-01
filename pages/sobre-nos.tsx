import * as React from 'react';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import Header from '~/components/global/header';

import Description from '~/components/about/description';

import History from '~/components/about/history';

import Advisors from '~/components/about/advisors';

import Companies from '~/components/about/companies';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

import { loadIndexData } from '~/store/index/actions';

import { loadBlogData } from '~/store/blog/actions';

import { loadBlogCategoriesData } from '~/store/blog-categories/actions';

import { loadContactData } from '~/store/contact/actions';

import { loadAboutData } from '~/store/about/actions';

import { loadSafeData } from '~/store/safe/actions';

import { loadCompaniesData } from '~/store/companies/actions';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const About: any = () => (
  <>
    <Seo page="about" />

    <Container>
      <Header />
    </Container>

    <Description />

    <History />

    <Advisors />

    <Companies />

    <Footer type="about" />

    <Groups type="about" />
  </>
);

About.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  store.dispatch(loadIndexData());

  store.dispatch(loadBlogData());

  store.dispatch(loadBlogCategoriesData());

  store.dispatch(loadContactData());

  store.dispatch(loadAboutData());

  store.dispatch(loadSafeData());

  store.dispatch(loadCompaniesData());
};

export default About;
