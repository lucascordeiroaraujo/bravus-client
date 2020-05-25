import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/group/header';

import HowItsWorks from '~/components/group/how-its-works';

import CallToAction from '~/components/group/callToAction';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

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
