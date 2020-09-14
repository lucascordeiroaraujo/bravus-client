import * as React from 'react';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import SiteHeader from '~/components/header';

import Header from './components/header';

import HowItsWorks from './components/how-its-works';

import CallToAction from './components/callToAction';

import Footer from '~/components/footer';

import Groups from '~/components/groups';

import styled from 'styled-components';

import { loadCompaniesData } from '~/store/companies/actions';

import { loadContactData } from '~/store/contact/actions';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const ContainerBravusCompanies = styled.div`
  width: 100%;
  section {
    width: 100%;
    padding: 100px 0px;
  }
`;

const BravusCompanies: any = () => (
  <>
    <Seo page="companies" />

    <ContainerBravusCompanies>
      <Container>
        <SiteHeader />
      </Container>

      <Header type="companies" />

      <section>
        <HowItsWorks type="companies" />

        <CallToAction type="companies" />
      </section>
    </ContainerBravusCompanies>

    <Footer type="companies" />

    <Groups type="companies" />
  </>
);

BravusCompanies.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  if (!store.getState().companiesData.data) {
    store.dispatch(loadCompaniesData());
  }

  if (!store.getState().contactData.data) {
    store.dispatch(loadContactData());
  }
};

export default BravusCompanies;
