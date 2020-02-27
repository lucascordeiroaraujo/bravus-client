import React from 'react';

import { useSelector } from 'react-redux';

import Description from './style';

import { Container } from '~/public/styles/global';

const cpDescription: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.aboutData.error,
    data: state.aboutData.data
  }));

  if (error) return null;

  const { who_we_are, imagem_who_we_are } = data.acf;

  return (
    <Description>
      <Container>
        <h1 className="default-title before-info">
          <strong>Sobre nós</strong>
        </h1>
      </Container>

      <div className="description-content">
        <div>
          <h2>Quem Somos?</h2>

          <div dangerouslySetInnerHTML={{ __html: who_we_are }} />
        </div>

        <img
          src={imagem_who_we_are.url}
          alt="Quem Somos? - Bravus Investimentos"
          title="Quem Somos? - Bravus Investimentos"
          width={imagem_who_we_are.width}
          height={imagem_who_we_are.height}
        />
      </div>
    </Description>
  );
};

export default cpDescription;
