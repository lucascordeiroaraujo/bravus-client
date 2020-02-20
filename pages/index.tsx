import * as React from 'react';

import { useSelector } from 'react-redux';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import Header from '~/components/global/header';

import CallToAction from '~/components/index/callToAction';

import Work from '~/components/index/work';

import Parallax from '~/components/global/parallax';

import Plans from '~/components/index/plans';

import Blog from '~/components/index/blog';

import Footer from '~/components/global/footer';

import Groups from '~/components/global/groups';

interface Props {
  error: any;
  placeholderData: any;
}

const Home: React.FC<Props> = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.indexData.error,
    data: state.indexData.data
  }));

  console.log('hey', error, data);

  return (
    <>
      <Seo
        title="Bravus Investimentos - Sua XP Investimentos em Londrina"
        description="A Bravus Investimentos é o maior escritório credenciado da XP Investimentos em Londrina e Região Metropolitana. Nós ajudamos nossos clientes a investir melhor. Agende uma assessoria, invista de acordo com seu perfil, acesse e saiba mais."
        image="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-social.jpg"
        slug="/"
      />

      <Container>
        <Header />

        <CallToAction />

        <Work />
      </Container>

      <Parallax
        image="http://localhost/bravus-server/wp-content/uploads/2020/02/coragem-bravus-investimento.jpg"
        title='"A coragem é a primeira das qualidades humanas porque garante
          todas as outras"'
        author="Aristóteles"
        type="first-index"
      />

      <Container>
        <Plans />

        <Blog />
      </Container>

      <Parallax
        image="http://localhost/bravus-server/wp-content/uploads/2020/02/qg-bravus.jpg"
        title='""Errar, reconhecer, ser transparente, corrigir e seguir em frente"'
        author="Guilherme Benchimol"
        type="second-index"
      />

      <Footer type="index" />

      <Groups type="index" />
    </>
  );
};

export default Home;
