import React from 'react';

import InputMask from 'react-input-mask';

import CallToAction from './style';

const cpCallToAction: React.FC = () => (
  <CallToAction id="abra-sua-conta">
    <div>
      <h1>
        Você merece
        <br />
        mais valor
      </h1>

      <p>
        A Bravus Investimento é o maior escritório credenciado da XP
        Investimentos em Londrina e Região Metropolitana.
      </p>

      <a
        href="https://bravusinvestimentos.com.br"
        title="Confira"
        className="default-button"
      >
        Saiba mais
      </a>
    </div>

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

export default cpCallToAction;
