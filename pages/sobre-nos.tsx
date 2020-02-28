import * as React from 'react';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import Header from '~/components/global/header';

import Description from '~/components/about/description';

import History from '~/components/about/history';

import Advisors from '~/components/about/advisors';

import Companies from '~/components/about/companies';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

import { loadAboutData } from '~/store/about/actions';

import { loadContactData } from '~/store/contact/actions';

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const About: any = () => (
  <>
    <Seo
      title="Bravus Investimentos - Sua XP Investimentos em Londrina"
      description="A Bravus Investimentos é o maior escritório credenciado da XP Investimentos em Londrina e Região Metropolitana. Nós ajudamos nossos clientes a investir melhor. Agende uma assessoria, invista de acordo com seu perfil, acesse e saiba mais."
      image="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-social.jpg"
    />

    <Container>
      <Header />
    </Container>

    <Description />

    <History />

    <Advisors />

    <Companies />

    <Footer type="about" />

    <Groups type="about" />
  </>
);

About.getInitialProps = async (props: Iprops) => {
  const { store, isServer } = props.ctx;

  if (!store.getState().data) {
    store.dispatch(loadAboutData());
  }

  if (!store.getState().data) {
    store.dispatch(loadContactData());
  }

  return { isServer };
};

export default About;
