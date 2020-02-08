import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
//import { Provider } from "react-redux";
//import withRedux from "next-redux-wrapper";
//import withReduxSaga from "next-redux-saga";
//import createStore from "../store";

import GlobalStyles from "../public/styles/global";
import "react-app-polyfill/ie9";

interface IProps {
  Component: React.Component;
  store: any;
}

class MyApp extends App<IProps> {
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
    const { Component, pageProps /*, store*/ } = this.props;

    return (
      <Container>
        <Head>
          <title>My page</title>
        </Head>
        {/* <Provider store={store}> */}
        <GlobalStyles />
        <Component {...pageProps} />
        {/* </Provider> */}
      </Container>
    );
  }
}

//export default withRedux(createStore)(withReduxSaga(MyApp));

export default MyApp;
