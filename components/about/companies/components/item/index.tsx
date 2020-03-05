import React from 'react';

import Item from './style';

import Fade from 'react-reveal/Fade';

import { handleCustomScroll } from '~/utils';

interface Iprops {
  name: string;
  description: string;
  image: any;
}

const cpItem: React.FC<Iprops> = ({ name, description, image }) => (
  <Item>
    <Fade>
      <img
        src={image.url}
        alt={name}
        title={name}
        width={image.width}
        height={image.height}
      />
    </Fade>
    <div>
      <Fade>
        <strong>{name}</strong>
      </Fade>

      <Fade delay={200}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Fade>

      <Fade delay={400}>
        <a
          href="#contato"
          title=""
          data-element="footer#contato"
          onClick={e => handleCustomScroll(e)}
        >
          Faça uma cotação
        </a>
      </Fade>
    </div>
  </Item>
);

export default React.memo(cpItem);
