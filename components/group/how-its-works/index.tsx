import React from 'react';

import { useSelector } from 'react-redux';

import HowItsWorks from './style';

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
      <h1 className={type}>{how_it_works_title}</h1>

      <h2 className={type}>Como Funciona?</h2>

      <div dangerouslySetInnerHTML={{ __html: how_it_works_description }} />

      <div>
        <img
          src={how_it_works_image.url}
          alt="Como Funciona?"
          title="Como Funciona?"
          width={how_it_works_image.width}
          height={how_it_works_image.height}
        />
      </div>
    </HowItsWorks>
  );
};

export default cpHowItsWorks;
