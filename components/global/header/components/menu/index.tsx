import React from 'react';

import Link from 'next/link';

import OutsideClickHandler from 'react-outside-click-handler';

const cpMenu: React.FC = () => {
  const [state, setState] = React.useState(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setState(false);
      }}
    >
      <ul className={state ? 'active' : ''}>
        <li>
          <Link href="/sobre-nos">
            <a href="/sobre-nos" onClick={() => setState(false)}>
              Sobre nós
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#planos">
            <a href="/#planos" onClick={() => setState(false)}>
              Planos
            </a>
          </Link>
        </li>

        <li>
          <Link href="/blog">
            <a href="/blog" onClick={() => setState(false)}>
              Blog
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#contato">
            <a href="/#contato" onClick={() => setState(false)}>
              Contato
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#abra-sua-conta">
            <a href="/#abra-sua-conta" onClick={() => setState(false)}>
              Abra sua conta
            </a>
          </Link>
        </li>
      </ul>

      <button
        type="button"
        className={state ? ' active' : ''}
        onClick={() => setState(!state)}
      >
        <span />
      </button>
    </OutsideClickHandler>
  );
};

export default cpMenu;
