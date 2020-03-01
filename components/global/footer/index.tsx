import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import InputMask from 'react-input-mask';

import Footer from './style';

import { Container } from '~/public/styles/global';

import Pin from '~/public/images/svg/pin';

import Waze from '~/public/images/svg/waze';

import Parking from '~/public/images/svg/parking';

import Phone from '~/public/images/svg/phone';

import WhatsApp from '~/public/images/svg/whatsapp';

import Email from '~/public/images/svg/email';

import { URL_API } from '~/utils/config';

import { toggleFeedbackUser } from '~/store/global/actions';

interface Iprops {
  type: string;
}

const cpFooter: React.FC<Iprops> = ({ type }) => {
  const { error, data } = useSelector((state: any) => ({
    error: state.contactData.error,
    data: state.contactData.data
  }));

  if (error) return null;

  const { address_text, parking, phone, whatsapp, email } = data.acf;

  const splitPhone = phone.split(' ');

  const splitWhatsApp = whatsapp.split(' ');

  const [state, setState] = React.useState({
    name: {
      key: 'Nome',
      value: ''
    },
    email: {
      key: 'E-mail',
      value: ''
    },
    phone: {
      key: 'Telefone',
      value: ''
    },
    message: {
      key: 'Mensagem',
      value: ''
    }
  });

  const dispatch = useDispatch();

  const sendContact = async (event: any) => {
    event.preventDefault();

    dispatch(
      toggleFeedbackUser('Aguarde, enviando seu contato', true, false, false)
    );

    const response = await fetch(`${URL_API}/bravus/sendContact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        body: Object.values(state)
      })
    });

    const result = await response.json();

    if (response.ok && result.status) {
      dispatch(
        toggleFeedbackUser(
          '<span class="emoji success">✔</span><br/> Mensagem enviada com sucesso.',
          false,
          false,
          true
        )
      );
    } else {
      dispatch(
        toggleFeedbackUser(
          '<span class="emoji error">⚠</span><br/> Falha ao enviar seu contato.',
          false,
          true,
          false
        )
      );
    }
  };

  return (
    <Footer id="contato" className={type}>
      <Container className="container">
        <h1 className="default-title before-info">
          <strong>Localização e contatos</strong>
        </h1>

        <div>
          <div className="address-icons">
            <Pin />

            <Waze />
          </div>

          <address>{address_text}</address>

          {parking && (
            <>
              <div className="address-icons parking">
                <Parking />
              </div>

              <p>{parking}</p>
            </>
          )}

          {phone && (
            <>
              <div className="address-icons">
                <Phone />
              </div>

              <a
                href={`tel:${splitPhone.join('').replace(/[+()-]/g, '')}`}
                title="Ligar"
              >
                {`${splitPhone[0]} ${splitPhone[1]}`}
                <span> {splitPhone[2]}</span>
              </a>
            </>
          )}

          {whatsapp && (
            <>
              <div className="address-icons">
                <WhatsApp />
              </div>

              <a
                href={`https://api.whatsapp.com/send?phone=${splitWhatsApp
                  .join('')
                  .replace(
                    /[+()-]/g,
                    ''
                  )}&text=Olá, estou entrando em contato através do site.`}
                target="_blank"
                rel="noopener noreferrer"
                title="Ligar"
              >
                {`${splitWhatsApp[0]} ${splitWhatsApp[1]}`}
                <span> {`${splitWhatsApp[2]} ${splitWhatsApp[3]}`}</span>
              </a>
            </>
          )}

          {email && (
            <>
              <div className="address-icons">
                <Email />
              </div>

              <a href={`mailto:${email}`} title="Enviar E-mail">
                {email}
              </a>
            </>
          )}
        </div>

        <form method="post" onSubmit={sendContact}>
          <strong>Envie uma mensagem</strong>

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

          <InputMask
            type="tel"
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

          <input
            type="email"
            placeholder="E-MAIL"
            required
            value={state.email.value}
            onChange={e =>
              setState({
                ...state,
                email: {
                  ...state.email,
                  value: e.target.value
                }
              })
            }
          />

          <textarea
            placeholder="MENSAGEM"
            required
            value={state.message.value}
            onChange={e =>
              setState({
                ...state,
                message: {
                  ...state.message,
                  value: e.target.value
                }
              })
            }
          />

          <input type="submit" value="Enviar" />
        </form>
      </Container>
    </Footer>
  );
};

export default cpFooter;
