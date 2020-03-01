import React from 'react';

import { Menu, MenuMobile } from './style';

import Link from 'next/link';

import OutsideClickHandler from 'react-outside-click-handler';

import { useRouter } from 'next/router';

import Fade from 'react-reveal/Fade';

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
        <Fade delay={800}>
          <li className={router.pathname === '/sobre-nos' ? 'active' : ''}>
            <Link href="/sobre-nos">
              <a href="/sobre-nos" onClick={() => setState(false)}>
                Sobre nós
              </a>
            </Link>
          </li>
        </Fade>

        <Fade delay={600}>
          <li>
            <Link href="/#planos">
              <a href="/#planos" onClick={() => setState(false)}>
                Planos
              </a>
            </Link>
          </li>
        </Fade>

        <Fade delay={400}>
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
        </Fade>

        <Fade delay={200}>
          <li>
            <Link href="/#contato">
              <a href="/#contato" onClick={() => setState(false)}>
                Contato
              </a>
            </Link>
          </li>
        </Fade>

        <Fade>
          <li>
            <Link href="/#abra-sua-conta">
              <a href="/#abra-sua-conta" onClick={() => setState(false)}>
                Abra sua conta
              </a>
            </Link>
          </li>
        </Fade>
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
