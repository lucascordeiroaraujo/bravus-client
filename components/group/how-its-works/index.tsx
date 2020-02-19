import React from 'react';

import HowItsWorks from './style';

interface Iprops {
  customClass: string;
}

const cpHowItsWorks: React.FC<Iprops> = ({ customClass }) => (
  <HowItsWorks>
    <h1 className={customClass}>Faça seus seguros com a Bravus!</h1>

    <h2 className={customClass}>Como Funciona?</h2>

    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it{' '}
      </p>

      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <p>Where does it come from?</p>
    </div>

    <div>
      <img
        src="https://picsum.photos/800/530?random=2"
        alt="Como Funciona?"
        title="Como Funciona?"
      />
    </div>
  </HowItsWorks>
);

export default cpHowItsWorks;
