import React from 'react';

import Plans from './style';

import Plan from './components/plan';

const cpPlans: React.FC = () => (
  <Plans id="planos">
    <h1 className="default-title">
      <strong>Planos</strong>
      <span>Linha fina</span>
    </h1>

    <Plan />

    <Plan />

    <Plan />

    <Plan />
  </Plans>
);

export default cpPlans;
