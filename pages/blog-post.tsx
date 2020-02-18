import * as React from 'react';

import { useSelector } from 'react-redux';

import { Container } from '~/public/styles/global';

import Seo from '~/seo';

import Header from '~/components/global/header';

import BlogHeader from '~/components/blog/header';

import Description from '~/components/blog-post/description';

import Author from '~/components/blog-post/author';

import Footer from '~/components/global/footer';

import Group from '~/components/global/group';

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
        <BlogHeader />
        <Description />
        <Author />
      </Container>

      <Footer />

      <Group />
    </>
  );
};

export default Home;
