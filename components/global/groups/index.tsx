import React from 'react';

import { useSelector } from 'react-redux';

import Link from 'next/link';

import Companies from './style';

import { Container } from '~/public/styles/global';

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
            <h1 className="default-title before-info">
              <strong>
                Mais
                <br /> empresas
                <br /> do Grupo
              </strong>
            </h1>
          </div>

          <div>
            {(type === 'secure' || type === 'companies') && (
              <Link href="/">
                <a href="/" title="Confira">
                  <img
                    src={require('~/public/images/bravus-investments.jpg')}
                    alt="Bravus Empresas"
                    title="Bravus Empresas"
                    width="500"
                    height="200"
                  />
                </a>
              </Link>
            )}

            {type !== 'secure' && (
              <Link href="/bravus-seguros">
                <a href="/bravus-seguros" title="Confira">
                  <img
                    src={require('~/public/images/bravus-secure.jpg')}
                    alt="Bravus Seguros"
                    title="Bravus Seguros"
                    width="500"
                    height="200"
                  />
                </a>
              </Link>
            )}

            {type !== 'companies' && (
              <Link href="/bravus-empresas">
                <a href="/bravus-empresas" title="Confira">
                  <img
                    src={require('~/public/images/bravus-companies.jpg')}
                    alt="Bravus Empresas"
                    title="Bravus Empresas"
                    width="500"
                    height="200"
                  />
                </a>
              </Link>
            )}
          </div>
        </div>

        <h2>Informações Legais</h2>

        <div dangerouslySetInnerHTML={{ __html: description }} />

        <strong>
          Copyright &copy;
          {new Date().getFullYear()}| Bravus Investimentos | Todos os direitos
          reservados.
        </strong>

        <div className="logos">
          {logos.map((item: any, index: number) => (
            <img
              src={item.image.url}
              alt={item.image.alt}
              title={item.image.title}
              width={item.image.width}
              height={item.image.height}
              className={type}
              key={index}
            />
          ))}
        </div>
      </Container>
    </Companies>
  );
};

export default cpCompanies;
