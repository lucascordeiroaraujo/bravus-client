import React from 'react';

import { useSelector } from 'react-redux';

import CallToAction from './style';

const cpCallToAction: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.indexData.error,
    data: state.indexData.data
  }));

  if (error) return null;

  const { section_1_description } = data.acf;

  return (
    <CallToAction dangerouslySetInnerHTML={{ __html: section_1_description }} />
  );
};

export default cpCallToAction;
