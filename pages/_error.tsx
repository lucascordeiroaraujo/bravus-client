import React from 'react';

import Head from 'next/head';

import { loadContactData } from '~/store/contact/actions';

import { Container } from '~/public/styles/global';

import Header from '~/components/header';

import Footer from '~/components/footer';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const ErrorPage: any = () => (
  <>
    <Head>
      <title>Bravus Investimentos</title>
      <meta name="robots" content="noindex" />
    </Head>
    <Container>
      <Header />
    </Container>
    <Footer type="" />
  </>
);

ErrorPage.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  store.dispatch(loadContactData());
};

export default ErrorPage;
