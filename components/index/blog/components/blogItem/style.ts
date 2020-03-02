import styled from 'styled-components';

export default styled.article`
  width: 31%;
  div.react-reveal {
    width: 100%;
  }
  img,
  p,
  a {
    transition: 0.5s;
  }
  a:not(.default-button) {
    width: 100%;
  }
  img {
    width: 100%;
    height: auto;
    max-height: 280px;
    filter: grayscale(100%);
    filter: gray;
  }
  h2 {
    font-weight: normal;
    margin: 30px 0px 15px 0px;
    padding-bottom: 15px;
    a {
      font-size: calc(30px + (52 - 30) * ((100vw - 250px) / (1920 - 250)));
      line-height: calc(30px + (52 - 30) * ((100vw - 250px) / (1920 - 250)));
      color: ${props => props.theme.colors.light};
      display: inline;
      text-transform: lowercase;
      @media (min-width: 1920px) {
        font-size: 52px;
        line-height: 52px;
      }
    }
  }
  p a {
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.light};
    opacity: 0.8;
  }
  a.default-button {
    opacity: 0;
    margin-top: 30px;
  }
  &:hover {
    img {
      filter: none;
    }
    h2 a {
      color: ${props => props.theme.colors.secondary};
      background-color: #d7d7ad;
    }
    p,
    a {
      opacity: 1;
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    img {
      max-height: none;
    }
    a.default-button {
      opacity: 1;
      left: 50%;
      margin-left: -65px;
    }
    div.react-reveal {
      display: flex;
      justify-content: center;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
