import React from 'react';

import { useSelector } from 'react-redux';

import Companies from './style';

import { Container } from '~/public/styles/global';

import Fade from 'react-reveal/Fade';

import Facebook from '~/public/images/svg/facebook';

import Instagram from '~/public/images/svg/instagram';

import LinkedIn from '~/public/images/svg/linkedin';

import YouTube from '~/public/images/svg/youtube';

interface Iprops {
  type: string;
}

const cpCompanies: React.FC<Iprops> = ({ type }) => {
  const { error, data } = useSelector((state: any) => ({
    error: state.contactData.error,
    data: state.contactData.data
  }));

  if (error) return null;

  const {
    description,
    logos,
    facebook,
    instagram,
    linkedin,
    youtube
  } = data.acf;

  return (
    <Companies className={type}>
      <Container className="container">
        {!['index', 'about'].includes(type) && (
          <div>
            <div>
              <Fade>
                <h1 className="default-title before-info">
                  <strong>
                    Empresas do
                    <br /> Grupo Bravus
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
                <a
                  href="https://bravusseguros.com.br"
                  title="Confira"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
        )}

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

        {(facebook || instagram || linkedin || youtube) && (
          <div className="social-networks">
            {facebook && (
              <a
                href={facebook}
                title="Curta no Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            )}

            {instagram && (
              <a
                href={instagram}
                title="Siga no Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin}
                title="Acesse nossa página no LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            )}

            {youtube && (
              <a
                href={youtube}
                title="Inscreva-se no canal da Bravus no YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube />
              </a>
            )}
          </div>
        )}

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
