import React from 'react';

import { useSelector } from 'react-redux';

import Companies from './style';

import { Container } from '~/public/styles/global';

import Item from './components/item';

interface Iprops {
  name: string;
  description: string;
  image: any;
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
        <h1 className="default-title before-info">
          <strong>Outras empresas</strong>
        </h1>
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
