import React from 'react';

import { useSelector } from 'react-redux';

import Plans from './style';

import Fade from 'react-reveal/Fade';

const cpPlans: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.indexData.error,
    data: state.indexData.data
  }));

  if (error) return null;

  const { section_4_image } = data.acf;

  return (
    <Plans>
      <h1 className="default-title">
        <Fade bottom>
          <strong>Planos</strong>
        </Fade>
        <Fade bottom delay={200}>
          <span>Linha fina</span>
        </Fade>
      </h1>

      <img src={section_4_image} alt="" />
    </Plans>
  );
};

export default cpPlans;
