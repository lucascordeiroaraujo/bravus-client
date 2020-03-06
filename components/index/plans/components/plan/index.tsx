import React from 'react';

import Plan from './style';

import Fade from 'react-reveal/Fade';

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

      <Fade bottom delay={200}>
        <p>{sub_title}</p>
      </Fade>
    </div>

    <Fade>
      <img
        src={image.sizes.medium_large}
        alt={image.alt}
        title={image.description}
        width={image.sizes['medium_large-width']}
        height={image.sizes['medium_large-height']}
      />
    </Fade>
  </Plan>
);

export default React.memo(cpPlan);
