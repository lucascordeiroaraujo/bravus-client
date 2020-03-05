import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import InputMask from 'react-input-mask';

import CallToAction from './style';

import Fade from 'react-reveal/Fade';

import { useRouter } from 'next/router';

import { toggleFeedbackUser } from '~/store/global/actions';

import { URL_API } from '~/utils/config';

const cpCallToAction: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.indexData.error,
    data: state.indexData.data
  }));

  if (error) return null;

  const { section_1_description } = data.acf;

  const router = useRouter();

  const INITIAL_STATE = {
    name: {
      key: 'Nome',
      value: ''
    },
    phone: {
      key: 'Telefone',
      value: ''
    }
  };

  const [state, setState] = React.useState(INITIAL_STATE);

  const dispatch = useDispatch();

  const saveOpenAccount = async (event: any) => {
    event.preventDefault();

    dispatch(
      toggleFeedbackUser('Aguarde, salvando informações', true, false, false)
    );

    const response = await fetch(`${URL_API}/bravus/saveOpenAccount`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        body: Object.values(state)
      })
    });

    if (response.status === 200) {
      dispatch(
        toggleFeedbackUser(
          '<span class="emoji success">✔</span><br/> Informações salvas com sucesso.<br/> Em breve um de nossos assessores entratá em contato',
          false,
          false,
          true
        )
      );

      setState(INITIAL_STATE);
    } else {
      dispatch(
        toggleFeedbackUser(
          '<span class="emoji error">⚠</span><br/> Falha ao salvar suas informações.',
          false,
          true,
          false
        )
      );
    }
  };

  return (
    <CallToAction id="abra-sua-conta">
      <Fade>
        <div dangerouslySetInnerHTML={{ __html: section_1_description }} />
      </Fade>

      <form
        className={(router.asPath = '/#abra-sua-conta' ? 'active' : '')}
        onSubmit={saveOpenAccount}
      >
        <Fade bottom>
          <strong>Abra sua conta</strong>
        </Fade>

        <Fade bottom delay={200}>
          <input
            type="text"
            placeholder="NOME"
            required
            value={state.name.value}
            onChange={e =>
              setState({
                ...state,
                name: {
                  ...state.name,
                  value: e.target.value
                }
              })
            }
          />
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
            value={state.phone.value}
            onChange={e =>
              setState({
                ...state,
                phone: {
                  ...state.phone,
                  value: e.target.value
                }
              })
            }
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
