import * as React from 'react';

import { useSelector } from 'react-redux';

import { Container } from '~/public/styles/global';
import Header from '~/components/global/header';
import CallToAction from '~/components/index/callToAction';
import Parallax from '~/components/global/parallax';

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
      </Container>
      <Parallax />
    </>
  );
};

export default Home;
