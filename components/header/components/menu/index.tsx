import React from 'react';

import { Menu, MenuMobile } from './style';

import OutsideClickHandler from 'react-outside-click-handler';

import { useRouter } from 'next/router';

import Fade from 'react-reveal/Fade';

import { handleCustomScroll } from '~/utils';

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
            <a href="/sobre-nos" onClick={() => setState(false)}>
              Sobre nós
            </a>
          </li>
        </Fade>

        <Fade delay={600}>
          <li>
            <a
              href="/#planos"
              data-element="#planos"
              onClick={e => {
                if (router.pathname === '/') {
                  handleCustomScroll(e);
                }
                setState(false);
              }}
            >
              Planos
            </a>
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
            <a href="/blog" onClick={() => setState(false)}>
              Blog
            </a>
          </li>
        </Fade>

        <Fade delay={200}>
          <li>
            <a
              href="/#contato"
              data-element="footer#contato"
              onClick={e => {
                handleCustomScroll(e);
                setState(false);
              }}
            >
              Contato
            </a>
          </li>
        </Fade>

        <Fade delay={400}>
          <li>
            <a
              href="https://portal.xpi.com.br/?_ga=2.233800986.588288096.1588179279-1417239632.1584447659&_gac=1.213511584.1588179280.EAIaIQobChMIw5GS7IyO6QIViw6RCh0U0ApKEAAYASAAEgLXz_D_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
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
