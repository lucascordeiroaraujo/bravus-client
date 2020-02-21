import React from 'react';

import Advisors from './style';

import { Container } from '~/public/styles/global';

import AdvItem from './components/advItem';

const cpAdvisors: React.FC = () => (
  <Advisors>
    <Container>
      <h1 className="default-title before-info">
        <strong>Assessores</strong>
      </h1>
    </Container>

    <div>
      <AdvItem />

      <AdvItem />

      <AdvItem />

      <AdvItem />

      <AdvItem />

      <AdvItem />

      <AdvItem />

      <AdvItem />

      <AdvItem />

      <AdvItem />
    </div>
  </Advisors>
);

export default cpAdvisors;
