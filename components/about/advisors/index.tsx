import React from 'react';

import { useSelector } from 'react-redux';

import Advisors from './style';

import { Container } from '~/public/styles/global';

import AdvItem from './components/advItem';

import Fade from 'react-reveal/Fade';

interface cpProps {
  title: string;
  type: string;
}

interface Iprops {
  name: string;
  image: any;
  whatsapp: string;
  phone: string;
  email: string;
}

const cpAdvisors: React.FC<cpProps> = ({ title, type }) => {
  const { error, data } = useSelector((state: any) => ({
    error: state.aboutData.error,
    data: state.aboutData.data
  }));

  if (error) return null;

  return (
    <Advisors>
      <Container>
        <Fade>
          <h1 className="default-title before-info">
            <strong>{title}</strong>
          </h1>
        </Fade>
      </Container>

      <div>
        {data.acf[type].map((item: Iprops, index: number) => (
          <AdvItem key={index} {...item} />
        ))}
      </div>
    </Advisors>
  );
};

export default cpAdvisors;
