import * as React from 'react';

import { useSelector } from 'react-redux';

import { ROBOTS } from '~/utils/config';

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
    <div>
      <span>1</span>
      <span>2</span>
      {ROBOTS}
    </div>
  );
};

export default Home;
