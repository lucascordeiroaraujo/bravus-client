import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/companies/header';

import HowItsWorks from '~/components/companies/how-its-works';

import Footer from '~/components/global/footer';

import Companies from '~/components/global/companies';

import styled from 'styled-components';

const ContainerBravusSeguros = styled.div`
  width: 100%;
  background: url(${require('~/public/images/background-bravus-seguros.jpg')})
    center top no-repeat fixed;
  section {
    width: 100%;
    padding: 100px 0px;
    background: ${props => props.theme.colors.light};
  }
`;

interface Props {
  error: any;
  placeholderData: any;
}

const BravusSeguros: React.FC<Props> = () => (
  <>
    <Seo
      title="Bravus Investimentos - Sua XP Investimentos em Londrina"
      description="A Bravus Investimentos é o maior escritório credenciado da XP Investimentos em Londrina e Região Metropolitana. Nós ajudamos nossos clientes a investir melhor. Agende uma assessoria, invista de acordo com seu perfil, acesse e saiba mais."
      image="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-social.jpg"
      slug="/"
    />

    <ContainerBravusSeguros>
      <Header />

      <section>
        <HowItsWorks />
      </section>
    </ContainerBravusSeguros>

    <Footer customClass="seguros" />

    <Companies customClass="seguros" />
  </>
);

export default BravusSeguros;
