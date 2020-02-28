import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/group/header';

import HowItsWorks from '~/components/group/how-its-works';

import CallToAction from '~/components/group/callToAction';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

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
  background: url(${require('~/public/images/background-bravus-safe.jpg')})
    center top no-repeat fixed;
  section {
    width: 100%;
    padding: 100px 0px;
    background: ${props => props.theme.colors.light};
  }
`;

const BravusSafe: any = () => (
  <>
    <Seo
      title="Bravus Investimentos - Sua XP Investimentos em Londrina"
      description="A Bravus Investimentos é o maior escritório credenciado da XP Investimentos em Londrina e Região Metropolitana. Nós ajudamos nossos clientes a investir melhor. Agende uma assessoria, invista de acordo com seu perfil, acesse e saiba mais."
      image="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-social.jpg"
    />

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
  const { store, isServer } = props.ctx;

  if (!store.getState().data) {
    store.dispatch(loadSafeData());
  }

  if (!store.getState().data) {
    store.dispatch(loadContactData());
  }

  return { isServer };
};

export default BravusSafe;
