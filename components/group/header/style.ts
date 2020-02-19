import styled from 'styled-components';

export default styled.header`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  div.container {
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    & > div {
      &:first-child,
      &:nth-child(2) {
        width: 49%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      &:first-child img {
        max-width: 90%;
        height: auto;
      }
      &:nth-child(2) {
        h1,
        p {
          width: 100%;
          text-align: center;
        }
        h1 {
          font-family: 'DINProBold';
          font-size: calc(30px + (60 - 30) * ((100vw - 250px) / (1920 - 250)));
          text-transform: uppercase;
          color: ${props => props.theme.colors.light};
          font-weight: normal;
          margin: 0px 0px 60px 0px;
          @media (min-width: 1920px) {
            font-size: 60px;
          }
        }
        p {
          font-size: calc(18px + (24 - 18) * ((100vw - 250px) / (1920 - 250)));
          line-height: 28px;
          color: ${props => props.theme.colors.info};
          @media (min-width: 1920px) {
            font-size: 24px;
          }
        }
      }
      &:last-child {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 130px;
        img {
          margin: 20px 30px;
        }
      }
    }
    @media (max-width: 992px) {
      flex-direction: column;
      & > div {
        width: 100% !important;
        &:first-child {
          margin-bottom: 50px;
          a {
            width: 100%;
            display: flex;
            justify-content: center;
          }
        }
        &:last-child {
          margin-top: 65px;
        }
      }
    }
  }
`;
