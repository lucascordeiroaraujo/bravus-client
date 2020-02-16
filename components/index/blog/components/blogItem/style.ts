import styled from 'styled-components';

export default styled.article`
  width: 31%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  img,
  h2 a,
  p,
  a {
    transition: 0.5s;
  }
  a {
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
  a.read-more {
    position: relative;
    z-index: 2;
    width: 130px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    margin-top: 30px;
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    span {
      font-size: 16px;
      line-height: 20px;
      text-transform: lowercase;
      position: relative;
      top: -1px;
    }
    &:hover {
      color: ${props => props.theme.colors.light};
      background-color: ${props => props.theme.colors.primary};
    }
    @media (max-width: 992px) {
      opacity: 1;
    }
  }
  &:hover {
    img {
      filter: none;
    }
    h2 a {
      color: ${props => props.theme.colors.secondary};
      background-color: #d7d7ad;
    }
    p {
      opacity: 1;
    }
    a:last-child {
      opacity: 1;
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 40px;
    img {
      max-height: 350px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
