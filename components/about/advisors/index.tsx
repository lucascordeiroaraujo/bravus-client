import React from 'react';

import { useSelector } from 'react-redux';

import Advisors from './style';

import { Container } from '~/public/styles/global';

import AdvItem from './components/advItem';

interface Iprops {
  name: string;
  image: any;
  whatsapp: string;
  phone: string;
  email: string;
}

const cpAdvisors: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.aboutData.error,
    data: state.aboutData.data
  }));

  if (error) return null;

  const { advisors } = data.acf;

  return (
    <Advisors>
      <Container>
        <h1 className="default-title before-info">
          <strong>Assessores</strong>
        </h1>
      </Container>

      <div>
        {advisors.map((item: Iprops, index: number) => (
          <AdvItem key={index} {...item} />
        ))}
      </div>
    </Advisors>
  );
};

export default cpAdvisors;
