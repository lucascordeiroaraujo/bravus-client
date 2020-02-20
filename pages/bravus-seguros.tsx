import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/group/header';

import HowItsWorks from '~/components/group/how-its-works';

import CallToAction from '~/components/group/callToAction';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

import styled from 'styled-components';

const ContainerBravusSecure = styled.div`
  width: 100%;
  background: url(${require('~/public/images/background-bravus-secure.jpg')})
    center top no-repeat fixed;
  section {
    width: 100%;
    padding: 100px 0px;
    background: ${props => props.theme.colors.light};
  }
`;

const BravusSeguros: React.FC = () => (
  <>
    <Seo
      title="Bravus Investimentos - Sua XP Investimentos em Londrina"
      description="A Bravus Investimentos é o maior escritório credenciado da XP Investimentos em Londrina e Região Metropolitana. Nós ajudamos nossos clientes a investir melhor. Agende uma assessoria, invista de acordo com seu perfil, acesse e saiba mais."
      image="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-social.jpg"
      slug="/"
    />

    <ContainerBravusSecure>
      <Header type="secure" />

      <section>
        <HowItsWorks type="secure" />

        <CallToAction type="secure" />
      </section>
    </ContainerBravusSecure>

    <Footer type="secure" />

    <Groups type="secure" />
  </>
);

export default BravusSeguros;
