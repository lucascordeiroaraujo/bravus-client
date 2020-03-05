import React from 'react';

import { useSelector } from 'react-redux';

import InputMask from 'react-input-mask';

import CallToAction from './style';

import Fade from 'react-reveal/Fade';

import { useRouter } from 'next/router';

const cpCallToAction: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.indexData.error,
    data: state.indexData.data
  }));

  if (error) return null;

  const { section_1_description } = data.acf;

  const router = useRouter();

  return (
    <CallToAction id="abra-sua-conta">
      <Fade>
        <div dangerouslySetInnerHTML={{ __html: section_1_description }} />
      </Fade>

      <form className={(router.asPath = '/#abra-sua-conta' ? 'active' : '')}>
        <Fade bottom>
          <strong>Abra sua conta</strong>
        </Fade>

        <Fade bottom delay={200}>
          <input type="text" placeholder="NOME" required />
        </Fade>

        <Fade bottom delay={400}>
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
        </Fade>

        <Fade bottom delay={600}>
          <input type="submit" value="Cadastrar" />
        </Fade>

        <Fade bottom delay={800}>
          <span>
            Fique tranquilo! Seus dados não serão utilizados
            <br />
            para envio de qualquer tipo de SPAM.
          </span>
        </Fade>
      </form>
    </CallToAction>
  );
};

export default cpCallToAction;
