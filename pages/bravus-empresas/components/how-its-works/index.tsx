import React from 'react';

import { useSelector } from 'react-redux';

import HowItsWorks from './style';

import Fade from 'react-reveal/Fade';

interface Iprops {
  type: string;
}

const cpHowItsWorks: React.FC<Iprops> = ({ type }) => {
  const { error, data } = useSelector((state: any) => ({
    error: state[`${type}Data`].error,
    data: state[`${type}Data`].data
  }));

  if (error) return null;

  const {
    how_it_works_title,
    how_it_works_description,
    how_it_works_image
  } = data.acf;

  return (
    <HowItsWorks>
      <Fade>
        <h1 className={type}>{how_it_works_title}</h1>
      </Fade>
      <Fade delay={200}>
        <h2 className={type}>Como Funciona?</h2>
      </Fade>
      <Fade delay={400}>
        <div dangerouslySetInnerHTML={{ __html: how_it_works_description }} />
      </Fade>
      <div>
        <Fade>
          <img
            src={how_it_works_image.url}
            alt="Como Funciona?"
            title="Como Funciona?"
            width={how_it_works_image.width}
            height={how_it_works_image.height}
          />
        </Fade>
      </div>
    </HowItsWorks>
  );
};

export default cpHowItsWorks;
