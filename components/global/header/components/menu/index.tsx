import React from 'react';

import { Menu, MenuMobile } from './style';

import Link from 'next/link';

import OutsideClickHandler from 'react-outside-click-handler';

import { useRouter } from 'next/router';

const cpMenu: React.FC = () => {
  const [state, setState] = React.useState(false);

  const router = useRouter();

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setState(false);
      }}
    >
      <Menu className={state ? 'active' : ''}>
        <li className={router.pathname === '/sobre-nos' ? 'active' : ''}>
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

        <li
          className={
            router.pathname === '/blog' || router.pathname === '/blog-post'
              ? 'active'
              : ''
          }
        >
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
      </Menu>

      <MenuMobile
        type="button"
        className={state ? ' active' : ''}
        onClick={() => setState(!state)}
      >
        <span />
      </MenuMobile>
    </OutsideClickHandler>
  );
};

export default cpMenu;
