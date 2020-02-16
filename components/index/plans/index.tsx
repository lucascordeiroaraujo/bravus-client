import React from 'react';
import Plans from './style';

const cpPlans: React.FC = () => (
  <Plans>
    <h1 className="default-title">
      <strong>Planos</strong>
      <span>Linha fina</span>
    </h1>
    <article>
      <div>
        <div>
          <h2>Premium</h2>
        </div>
        <p>Contato trimestral</p>
      </div>
      <img
        src="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-planos.jpg"
        alt=""
      />
    </article>
    <article>
      <div>
        <div>
          <h2>Privilege</h2>
        </div>
        <p>Contato mensal</p>
      </div>
      <img
        src="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-planos.jpg"
        alt=""
      />
    </article>
    <article>
      <div>
        <div>
          <h2>Private</h2>
        </div>
        <p>Contato continuo</p>
      </div>
      <img
        src="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-planos.jpg"
        alt=""
      />
    </article>
    <article>
      <div>
        <div>
          <h2>High Private</h2>
        </div>
        <p>Contato continuo</p>
      </div>
      <img
        src="http://localhost/bravus-server/wp-content/uploads/2020/02/bravus-planos.jpg"
        alt=""
      />
    </article>
  </Plans>
);

export default cpPlans;
