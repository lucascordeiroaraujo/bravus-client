import React from 'react';

import Link from 'next/link';

import BlogItem from './style';

const cpBlogItem: React.FC = () => (
  <BlogItem>
    <Link href="/sobre-nos">
      <a href="sobre-nos" title="Confira">
        <img src="https://picsum.photos/300/300?random=2" alt="" />
      </a>
    </Link>

    <h2>
      <Link href="/sobre-nos">
        <a href="sobre-nos" title="Confira">
          análise e recomendações
        </a>
      </Link>
    </h2>

    <p>
      <Link href="/sobre-nos">
        <a href="sobre-nos" title="Confira">
          Fique por dentro dos melhores conteúdos de investimentos, seja você
          iniciante ou especialista.
        </a>
      </Link>
    </p>

    <Link href="/sobre-nos">
      <a href="/sobre-nos" title="Confira" className="default-button">
        saiba mais..
      </a>
    </Link>
  </BlogItem>
);

export default React.memo(cpBlogItem);
