import React from 'react';

import { useSelector } from 'react-redux';

import Companies from './style';

import { Container } from '~/public/styles/global';

import Fade from 'react-reveal/Fade';

interface Iprops {
  type: string;
}

const cpCompanies: React.FC<Iprops> = ({ type }) => {
  const { error, data } = useSelector((state: any) => ({
    error: state.contactData.error,
    data: state.contactData.data
  }));

  if (error) return null;

  const { description, logos } = data.acf;

  return (
    <Companies className={type}>
      <Container className="container">
        <div>
          <div>
            <Fade>
              <h1 className="default-title before-info">
                <strong>
                  Mais
                  <br /> empresas
                  <br /> do Grupo
                </strong>
              </h1>
            </Fade>
          </div>

          <div>
            {(type === 'safe' || type === 'companies') && (
              <a href="/" title="Confira">
                <img
                  src={require('~/public/images/bravus-investments.jpg')}
                  alt="Bravus Empresas"
                  title="Bravus Empresas"
                  width="500"
                  height="200"
                />
              </a>
            )}

            {type !== 'safe' && (
              <a href="/bravus-seguros" title="Confira">
                <img
                  src={require('~/public/images/bravus-safe.jpg')}
                  alt="Bravus Seguros"
                  title="Bravus Seguros"
                  width="500"
                  height="200"
                />
              </a>
            )}

            {type !== 'companies' && (
              <a href="/bravus-empresas" title="Confira">
                <img
                  src={require('~/public/images/bravus-companies.jpg')}
                  alt="Bravus Empresas"
                  title="Bravus Empresas"
                  width="500"
                  height="200"
                />
              </a>
            )}
          </div>
        </div>

        <Fade>
          <h2>Informações Legais</h2>
        </Fade>

        <Fade delay={200}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Fade>

        <Fade delay={400}>
          <strong>
            Copyright &copy;
            {new Date().getFullYear()}| Bravus Investimentos | Todos os direitos
            reservados.
          </strong>
        </Fade>

        <div className="logos">
          {logos.map((item: any, index: number) => (
            <Fade bottom delay={index * 100} key={index}>
              <img
                src={item.image.url}
                alt={item.image.alt}
                title={item.image.title}
                width={item.image.width}
                height={item.image.height}
                className={type}
              />
            </Fade>
          ))}
        </div>
      </Container>
    </Companies>
  );
};

export default cpCompanies;
