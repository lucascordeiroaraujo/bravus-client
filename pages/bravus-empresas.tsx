import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/group/header';

import HowItsWorks from '~/components/group/how-its-works';

import CallToAction from '~/components/group/callToAction';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

import styled from 'styled-components';

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

const ContainerBravusCompanies = styled.div`
  width: 100%;
  background: url(${require('~/public/images/background-bravus-companies.jpg')})
    center top no-repeat fixed;
  section {
    width: 100%;
    padding: 100px 0px;
    background: ${props => props.theme.colors.info};
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

  store.dispatch(loadCompaniesData());

  store.dispatch(loadContactData());
};

export default BravusCompanies;
