import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '~/store';

import GlobalStyles from '~/public/styles/global';
import 'react-app-polyfill/ie9';

interface StoreProps {
  Component: React.Component;
  store: any;
}

class MyApp extends App<StoreProps> {
  static async getInitialProps({
    Component,
    ctx
  }: {
    Component: any;
    ctx: any;
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <Head>
          <title>Bravus Investimentos</title>
        </Head>
        <Provider store={store}>
          <GlobalStyles />
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
