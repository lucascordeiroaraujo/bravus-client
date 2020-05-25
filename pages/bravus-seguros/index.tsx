import * as React from 'react';

import Seo from '~/seo';

import Header from '../bravus-empresas/components/header';

import HowItsWorks from '../bravus-empresas/components/how-its-works';

import CallToAction from '../bravus-empresas/components/callToAction';

import Footer from '~/components/footer';

import Groups from '~/components/groups';

import styled from 'styled-components';

import { loadSafeData } from '~/store/safe/actions';

import { loadContactData } from '~/store/contact/actions';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const ContainerBravusSafe = styled.div`
  width: 100%;
  section {
    width: 100%;
    padding: 100px 0px;
  }
`;

const BravusSafe: any = () => (
  <>
    <Seo page="safe" />

    <ContainerBravusSafe>
      <Header type="safe" />

      <section>
        <HowItsWorks type="safe" />

        <CallToAction type="safe" />
      </section>
    </ContainerBravusSafe>

    <Footer type="safe" />

    <Groups type="safe" />
  </>
);

BravusSafe.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  if (!store.getState().safeData.data) {
    store.dispatch(loadSafeData());
  }

  if (!store.getState().contactData.data) {
    store.dispatch(loadContactData());
  }
};

export default BravusSafe;
