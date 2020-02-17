import React from 'react';

import Plan from './style';

const cpPlan: React.FC = () => (
  <Plan>
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
  </Plan>
);

export default React.memo(cpPlan);
