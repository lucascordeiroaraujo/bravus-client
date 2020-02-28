import styled from 'styled-components';

export default styled.article`
  padding-top: 100px;
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1,
    p {
      width: 100%;
      text-align: center;
    }
    h1 {
      font-family: 'DINProBold';
      text-transform: uppercase;
      font-weight: normal;
      font-size: calc(44px + (88 - 44) * ((100vw - 250px) / (1920 - 250)));
      line-height: calc(44px + (88 - 44) * ((100vw - 250px) / (1920 - 250)));
      margin: 0px;
      max-width: 80%;
      @media (min-width: 1920px) {
        font-size: 88px;
        line-height: 88px;
      }
      &.safe {
        color: ${props => props.theme.safe.primary};
      }
      &.companies {
        color: ${props => props.theme.companies.primary};
      }
    }
    p {
      font-size: calc(18px + (24 - 18) * ((100vw - 250px) / (1920 - 250)));
      line-height: calc(26px + (32 - 26) * ((100vw - 250px) / (1920 - 250)));
      color: ${props => props.theme.colors.secondary};
      margin: 60px 0px;
      @media (min-width: 1920px) {
        font-size: 24px;
        line-height: 32px;
      }
    }
    a {
      width: 100%;
      max-width: 90%;
      padding: 50px 20px;
      text-align: center;
      font-family: 'DINProBold';
      text-transform: uppercase;
      color: ${props => props.theme.colors.light};
      font-size: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
      line-height: calc(29px + (54 - 29) * ((100vw - 250px) / (1920 - 250)));
      transition: 0.5s;
      @media (min-width: 1920px) {
        font-size: 50px;
        line-height: 50px;
      }
      &.safe {
        background: ${props => props.theme.safe.primary};
        &:hover {
          background: ${props => props.theme.safe.secondary};
        }
      }
      &.companies {
        background: ${props => props.theme.companies.primary};
        &:hover {
          opacity: 0.9;
          background: ${props => props.theme.companies.secondary};
        }
      }
    }
    @media (max-width: 992px) {
      h1 {
        max-width: 100%;
      }
      a {
        padding: 30px;
      }
    }
  }
`;
