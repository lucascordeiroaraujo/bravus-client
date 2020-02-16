import * as React from 'react';

import { useSelector } from 'react-redux';

import { Container } from '~/public/styles/global';
import Header from '~/components/global/header';
import CallToAction from '~/components/index/callToAction';
import Work from '~/components/index/work';
import Parallax from '~/components/global/parallax';
import Plans from '~/components/index/plans';
import Blog from '~/components/index/blog';
import Footer from '~/components/global/footer';

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
        customClass="first-index"
      />
      <Container>
        <Plans />
        <Blog />
      </Container>
      <Parallax
        image="http://localhost/bravus-server/wp-content/uploads/2020/02/qg-bravus.jpg"
        title='""Errar, reconhecer, ser transparente, corrigir e seguir em frente"'
        author="Guilherme Benchimol"
        customClass="second-index"
      />
      <Footer />
    </>
  );
};

export default Home;
