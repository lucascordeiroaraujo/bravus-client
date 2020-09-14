import React from 'react';

import { useSelector } from 'react-redux';

import Companies from './style';

import { Container } from '~/public/styles/global';

import Item from './components/item';

import Fade from 'react-reveal/Fade';

interface Iprops {
  name: string;
  description: string;
  image: any;
  link: string;
}

const cpCompanies: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.aboutData.error,
    data: state.aboutData.data
  }));

  if (error) return null;

  const { companies } = data.acf;

  return (
    <Companies>
      <Container>
        <Fade>
          <h1 className="default-title before-info">
            <strong>Outras empresas</strong>
          </h1>
        </Fade>
      </Container>

      <div className="container-companies">
        {companies.map((item: Iprops, index: number) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </Companies>
  );
};

export default cpCompanies;
