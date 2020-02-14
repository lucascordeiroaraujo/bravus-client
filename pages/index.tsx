import * as React from 'react';

import { useSelector } from 'react-redux';

import { Container } from '~/public/styles/global';
import Header from '~/components/global/header';
import CallToAction from '~/components/index/callToAction';
import Work from '~/components/index/work';
import Parallax from '~/components/global/parallax';
import Plans from '~/components/index/plans';

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
      <Parallax />
      <Container>
        <Plans />
      </Container>
    </>
  );
};

export default Home;
