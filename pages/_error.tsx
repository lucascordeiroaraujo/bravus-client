import React from 'react';

import Head from 'next/head';

import { loadContactData } from '~/store/contact/actions';

import { Container } from '~/public/styles/global';

import Header from '~/components/global/header';

import Footer from '~/components/global/footer';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const ErrorPage: any = (props: any) => {
  console.log(props);

  return (
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
};

ErrorPage.getInitialProps = async (props: Iprops) => {
  const { store, err, query } = props.ctx;

  store.dispatch(loadContactData());

  return {
    err,
    query
  };
};

export default ErrorPage;
