import React from 'react';

import { useSelector } from 'react-redux';

import Plans from './style';

import Plan from './components/plan';

import Fade from 'react-reveal/Fade';

interface Iprops {
  title: string;
  sub_title: string;
  image: any;
}

const cpPlans: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.indexData.error,
    data: state.indexData.data
  }));

  if (error) return null;

  const { section_4_plans } = data.acf;

  return (
    <Plans id="planos">
      <h1 className="default-title">
        <Fade bottom>
          <strong>Planos</strong>
        </Fade>
        <Fade bottom delay={200}>
          <span>Linha fina</span>
        </Fade>
      </h1>

      {section_4_plans.map((item: Iprops, index: number) => (
        <Plan key={index} {...item} />
      ))}
    </Plans>
  );
};

export default cpPlans;
