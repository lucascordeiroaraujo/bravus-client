import React from 'react';

import Plan from './style';

interface Iprops {
  title: string;
  sub_title: string;
  image: any;
}

const cpPlan: React.FC<Iprops> = ({ title, sub_title, image }) => (
  <Plan>
    <div>
      <div>
        <h2>{title}</h2>
      </div>

      <p>{sub_title}</p>
    </div>

    <img
      src={image.sizes.medium_large}
      alt={image.alt}
      title={image.description}
      width={image.sizes['medium_large-width']}
      height={image.sizes['medium_large-height']}
    />
  </Plan>
);

export default React.memo(cpPlan);
