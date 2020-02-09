import * as React from 'react';
// import styled from "styled-components";

import { useSelector } from 'react-redux';

import { ROBOTS } from '~/utils/config';

interface Props {
  error: any;
  placeholderData: any;
}

const Home: React.FC<Props> = () => {
  const { error, placeholderData } = useSelector((state: any) => ({
    error: state.indexData.error,
    placeholderData: state.indexData.placeholderData
  }));

  console.log(error, placeholderData);

  return (
    <div>
      <span>1</span>
      <span>2</span>
      {ROBOTS}
    </div>
  );
};

export default Home;
