import React from 'react';

import Link from 'next/link';

import Group from './style';

import { Container } from '~/public/styles/global';

const cpGroup: React.FC = () => (
  <Group>
    <Container className="container">
      <div>
        <div>
          <h1 className="default-title">
            <strong>Mais empresas do Grupo</strong>
          </h1>
        </div>

        <div>
          <Link href="/bravus-seguros">
            <a href="/bravus-seguros" title="Confira">
              <img
                src={require('~/public/images/bravus-seguros.jpg')}
                alt="Bravus Seguros"
                title="Bravus Seguros"
                width="500"
                height="200"
              />
            </a>
          </Link>

          <Link href="/bravus-empresas">
            <a href="/bravus-empresas" title="Confira">
              <img
                src={require('~/public/images/bravus-empresas.jpg')}
                alt="Bravus Empresas"
                title="Bravus Empresas"
                width="500"
                height="200"
              />
            </a>
          </Link>
        </div>
      </div>

      <h2>Informações Legais</h2>

      <p>
        A Bravus Investimentos Agentes Autônomos de Investimentos S/S Ltda.
        (&rdquo;Bravus Investimentos&ldquo;) é uma empresa independente
        devidamente registrada na Comissão de Valores Mobiliários
        (&rdquo;CVM&ldquo;) que mantém contrato de distribuição de produtos
        financeiros com a XP Corretora de Títulos e Valores Mobiliários S.A.
        (&rdquo;XP&ldquo;) e pode, por conta e ordem dos seus clientes, operar
        no mercado financeiro segundo a legislação vigente.
        <br />
        PARA INFORMAÇÕES E DÚVIDAS SOBRE PRODUTOS, CONTATE SEU ASSESSOR DE
        INVESTIMENTOS.
        <br />
        PARA RECLAMAÇÕES, CONTATE A OUVIDORIA DA XP PELO TELEFONE 0800 722 3710.
        Ao investir leia as regras de Compliance da XP. Para saber exatamente os
        custos envolvidos em todas as operações atráves da XP, veja aqui.
      </p>

      <strong>
        Copyright &copy;
        {new Date().getFullYear()}| Bravus Investimentos | Todos os direitos
        reservados.
      </strong>

      <div className="logos">
        <img
          src={require('~/public/images/logos/banco-do-brasil.png')}
          alt="Banco do Brasil"
          title="Banco do Brasil"
          width="121"
          height="28"
        />

        <img
          src={require('~/public/images/logos/cvm.png')}
          alt="CVM"
          title="CVM"
          width="60"
          height="33"
        />

        <img
          src={require('~/public/images/logos/cetip.png')}
          alt="CVM"
          title="CVM"
          width="63"
          height="37"
        />

        <img
          src={require('~/public/images/logos/bovespa.png')}
          alt="CVM"
          title="CVM"
          width="110"
          height="32"
        />

        <img
          src={require('~/public/images/logos/fgc.png')}
          alt="CVM"
          title="CVM"
          width="28"
          height="39"
        />

        <img
          src={require('~/public/images/logos/tesouro-direto.png')}
          alt="CVM"
          title="CVM"
          width="114"
          height="18"
        />

        <img
          src={require('~/public/images/logos/ancord.png')}
          alt="CVM"
          title="CVM"
          width="100"
          height="31"
        />

        <img
          src={require('~/public/images/logos/anbima.png')}
          alt="CVM"
          title="CVM"
          width="72"
          height="37"
        />

        <img
          src={require('~/public/images/logos/xp-investimentos.png')}
          alt="CVM"
          title="CVM"
          width="93"
          height="37"
        />
      </div>
    </Container>
  </Group>
);

export default cpGroup;