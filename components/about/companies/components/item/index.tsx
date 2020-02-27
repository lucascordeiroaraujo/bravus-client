import React from 'react';

import Item from './style';

interface Iprops {
  name: string;
  description: string;
  image: any;
}

const cpItem: React.FC<Iprops> = ({ name, description, image }) => (
  <Item>
    <img
      src={image.url}
      alt={name}
      title={name}
      width={image.width}
      height={image.height}
    />

    <div>
      <strong>{name}</strong>

      <div dangerouslySetInnerHTML={{ __html: description }} />

      <a href="#" title="">
        Faça uma cotação
      </a>
    </div>
  </Item>
);

export default React.memo(cpItem);
