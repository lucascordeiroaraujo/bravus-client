import React from 'react';

import Description from './style';

const cpBlogPost: React.FC = () => (
  <Description>
    <h1>
      <span>Como começar a investir</span>
    </h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem <a href="#">Ipsum is simply</a> dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown.
    </p>
    <img src="https://i.picsum.photos/id/900/900/480.jpg" alt="" />
    <p>
      Lorem Ipsum is simply <strong>dummy text of</strong> the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, <b>when an unknown</b> printer took a galley of
      type and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. <i>It was popularised</i> in the 1960s
      with the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.
    </p>
    <h2>Começe por aqui</h2>
    <img src="https://i.picsum.photos/id/500/900/480.jpg" alt="" />
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <ul>
      <li>Lorem Ipsum is simply dummy</li>
      <li>when an unknown printer took</li>
    </ul>
    <img src="https://i.picsum.photos/id/700/900/480.jpg" alt="" />
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <ol>
      <li>Lorem Ipsum is simply dummy</li>
      <li>when an unknown printer took</li>
    </ol>
  </Description>
);

export default React.memo(cpBlogPost);
