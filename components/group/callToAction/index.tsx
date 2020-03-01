import React from 'react';

import { useSelector } from 'react-redux';

import CallToAction from './style';

import { Container } from '~/public/styles/global';

import Fade from 'react-reveal/Fade';

interface Iprops {
  type: string;
}

const cpCallToAction: React.FC<Iprops> = ({ type }) => {
  const { error, data } = useSelector((state: any) => ({
    error: state[`${type}Data`].error,
    data: state[`${type}Data`].data
  }));

  if (error) return null;

  const { call_to_action_title, call_to_action_description } = data.acf;

  return (
    <CallToAction>
      <Container className="container">
        <Fade>
          <h1 className={type}>{call_to_action_title}</h1>
        </Fade>
        <Fade delay={200}>
          <div
            dangerouslySetInnerHTML={{ __html: call_to_action_description }}
          />
        </Fade>
        <Fade delay={400}>
          <a href="#contato" title="Confira" className={type}>
            Quero o contato de um acesso
          </a>
        </Fade>
      </Container>
    </CallToAction>
  );
};

export default cpCallToAction;
