import * as React from 'react';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import Header from '~/components/header';

import Description from './components/description';

import History from './components/history';

import Advisors from './components/advisors';

import Companies from './components/companies';

import Footer from '~/components/footer';

import Groups from '~/components/groups';

import { loadContactData } from '~/store/contact/actions';

import { loadAboutData } from '~/store/about/actions';

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

    <Advisors title="Sócios" type="partners" />

    <Advisors title="Assessores" type="advisors" />

    <Companies />

    <Footer type="about" />

    <Groups type="about" />
  </>
);

About.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  if (!store.getState().aboutData.data) {
    store.dispatch(loadAboutData());
  }

  if (!store.getState().contactData.data) {
    store.dispatch(loadContactData());
  }
};

export default About;
