import React from 'react';

import { useSelector } from 'react-redux';

import History from './style';

const cpHistory: React.FC = () => {
  const { error, data } = useSelector((state: any) => ({
    error: state.aboutData.error,
    data: state.aboutData.data
  }));

  if (error) return null;

  const { our_story, imagem_our_story } = data.acf;

  return (
    <History>
      <img
        src={imagem_our_story.url}
        alt="Nossa História - Bravus Investimentos"
        title="Nossa História - Bravus Investimentos"
        width={imagem_our_story.width}
        height={imagem_our_story.height}
      />

      <div className="description-content">
        <h2>Nossa História</h2>

        <div dangerouslySetInnerHTML={{ __html: our_story }} />
      </div>
    </History>
  );
};

export default cpHistory;
