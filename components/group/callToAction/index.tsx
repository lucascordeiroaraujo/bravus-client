import React from 'react';

import { useSelector } from 'react-redux';

import CallToAction from './style';

import { Container } from '~/public/styles/global';

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
        <h1 className={type}>{call_to_action_title}</h1>

        <div dangerouslySetInnerHTML={{ __html: call_to_action_description }} />

        <a href="#contato" title="Confira" className={type}>
          Quero o contato de um acesso
        </a>
      </Container>
    </CallToAction>
  );
};

export default cpCallToAction;
