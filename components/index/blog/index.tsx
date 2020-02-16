import React from 'react';
import Link from 'next/link';
import Blog from './style';

const cpBlog: React.FC = () => (
  <Blog>
    <h1 className="default-title">
      <strong>
        Últimas
        <br />
        no Blog
      </strong>
    </h1>
    <div>
      <article>
        <Link href="/sobre-nos">
          <a href="sobre-nos" title="Confira">
            <img src="https://picsum.photos/300/300" alt="" />
          </a>
        </Link>
        <h2>
          <Link href="/sobre-nos">
            <a href="sobre-nos" title="Confira">
              como começar a investir
            </a>
          </Link>
        </h2>
        <p>
          <Link href="/sobre-nos">
            <a href="sobre-nos" title="Confira">
              Investir em uma das maiores instituições financeiras do país é
              muito simples. Em poucos passos, você já estará pronto para
              começar.
            </a>
          </Link>
        </p>
        <Link href="/sobre-nos">
          <a href="/sobre-nos" title="Confira" className="read-more">
            saiba mais..
          </a>
        </Link>
      </article>
      <article>
        <Link href="/sobre-nos">
          <a href="sobre-nos" title="Confira">
            <img src="https://picsum.photos/300/300?random=1" alt="" />
          </a>
        </Link>
        <h2>
          <Link href="/sobre-nos">
            <a href="sobre-nos" title="Confira">
              educação
            </a>
          </Link>
        </h2>
        <p>
          <Link href="/sobre-nos">
            <a href="sobre-nos" title="Confira">
              Aprenda mais sorbe os diversos tipos de investimentos e entenda
              como seu dinheiro pode render de verdade.
            </a>
          </Link>
        </p>
        <Link href="/sobre-nos">
          <a href="/sobre-nos" title="Confira" className="read-more">
            saiba mais..
          </a>
        </Link>
      </article>
      <article>
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
              Fique por dentro dos melhores conteúdos de investimentos, seja
              você iniciante ou especialista.
            </a>
          </Link>
        </p>
        <Link href="/sobre-nos">
          <a href="/sobre-nos" title="Confira" className="read-more">
            saiba mais..
          </a>
        </Link>
      </article>
    </div>
  </Blog>
);

export default cpBlog;
