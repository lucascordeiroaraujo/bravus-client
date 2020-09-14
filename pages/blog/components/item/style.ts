import styled from 'styled-components';

export default styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  h1,
  p,
  img,
  a {
    transition: 0.5s;
  }
  h1 {
    font-size: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
    color: ${props => props.theme.colors.light};
    font-weight: normal;
    margin: 0px 0px 30px 0px;
    display: inline;
    @media (min-width: 1920px) {
      font-size: 50px;
    }
  }
  p {
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.theme.colors.light};
    margin: 0px 0px 30px 0px;
  }
  a {
    width: 100%;
    &.default-button {
      opacity: 0;
    }
  }
  img {
    width: 100%;
    height: auto;
    filter: grayscale(100%);
    filter: gray;
  }
  & > div {
    width: 48%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    &:first-child {
      order: 2;
    }
    &:last-child {
      order: 1;
    }
  }
  &:nth-child(odd) > div {
    &:first-child {
      order: 1;
    }
    &:last-child {
      order: 2;
    }
  }
  &:last-child {
    margin-bottom: 0px;
  }
  &:hover {
    h1 {
      color: ${props => props.theme.colors.secondary};
      background-color: ${props => props.theme.colors.info};
    }
    img {
      filter: none;
    }
    a.default-button {
      opacity: 1;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    & > div {
      width: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
      &:first-child {
        order: 1;
        margin-bottom: 40px;
      }
      &:last-child {
        order: 2;
      }
      a {
        opacity: 1 !important;
      }
    }
  }
`;
