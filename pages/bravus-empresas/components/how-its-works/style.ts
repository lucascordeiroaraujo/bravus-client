import styled from 'styled-components';

export default styled.article`
  width: 100%;
  padding: 0px 15px;
  max-width: 1600px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  h1,
  h2 {
    width: 100%;
    font-family: 'DINProBold';
    font-weight: normal;
    text-transform: uppercase;
  }
  h1 {
    font-size: calc(20px + (60 - 20) * ((100vw - 250px) / (1920 - 250)));
    @media (min-width: 1920px) {
      font-size: 60px;
    }
    &.safe {
      color: ${props => props.theme.safe.primary};
    }
    &.companies {
      color: ${props => props.theme.companies.primary};
    }
  }
  h2 {
    font-size: calc(30px + (100 - 30) * ((100vw - 250px) / (1920 - 250)));
    line-height: calc(30px + (100 - 30) * ((100vw - 250px) / (1920 - 250)));
    margin-bottom: 80px;
    @media (min-width: 1920px) {
      font-size: 100px;
    }
    &.safe {
      color: ${props => props.theme.safe.secondary};
    }
    &.companies {
      color: ${props => props.theme.companies.secondary};
    }
  }
  & > div {
    width: 47%;
    p {
      width: 100%;
      font-family: 'DINProBold';
      font-size: 18px;
      line-height: 32px;
      margin-bottom: 25px;
      color: ${props => props.theme.colors.light};
      &:last-child {
        margin-bottom: 0px;
      }
    }
    img {
      width: 100%;
      height: auto;
      box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
    }
    &:last-child {
      padding-top: 60px;
    }
  }
  @media (max-width: 992px) {
    h1,
    h2,
    p {
      text-align: center;
    }
    h2 {
      margin-bottom: 40px;
    }
    & > div {
      width: 100%;
      &:last-child {
        padding-top: 30px;
      }
    }
  }
`;
