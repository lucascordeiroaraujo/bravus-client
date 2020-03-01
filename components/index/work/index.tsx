import React from 'react';

import { useSelector } from 'react-redux';

import Work from './style';

import Fade from 'react-reveal/Fade';

interface Iprops {
  description: string;
}

const cpWork: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.indexData.error,
    data: state.indexData.data
  }));

  if (error) return null;

  const { section_2_title, section_2_itens } = data.acf;

  return (
    <Work>
      <Fade bottom>
        <h1 className="default-title">
          <strong>{section_2_title}</strong>
        </h1>
      </Fade>

      <ul>
        {section_2_itens.map((item: Iprops, index: number) => (
          <Fade bottom delay={index * 200}>
            <li key={index}>
              <span>{item.description}</span>
            </li>
          </Fade>
        ))}
      </ul>
    </Work>
  );
};

export default cpWork;
