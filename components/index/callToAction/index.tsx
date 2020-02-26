import React from 'react';

import { useSelector } from 'react-redux';

import InputMask from 'react-input-mask';

import CallToAction from './style';

const cpCallToAction: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.indexData.error,
    data: state.indexData.data
  }));

  if (error) return null;

  const { section_1_description } = data.acf;

  return (
    <CallToAction id="abra-sua-conta">
      <div dangerouslySetInnerHTML={{ __html: section_1_description }} />

      <form>
        <strong>Abra sua conta</strong>

        <input type="text" placeholder="NOME" required />

        <InputMask
          type="tel"
          required
          mask="99-99999999?"
          placeholder="TELEFONE"
          formatChars={{
            9: '[0-9]',
            '?': '[0-9]'
          }}
        />

        <input type="submit" value="Cadastrar" />

        <span>
          Fique tranquilo! Seus dados não serão utilizados
          <br />
          para envio de qualquer tipo de SPAM.
        </span>
      </form>
    </CallToAction>
  );
};

export default cpCallToAction;
