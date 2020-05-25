import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 130px 0px;
  ul {
    width: 100%;
    li {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #ffffff;
        text-align: center;
        font-family: 'DINProBold';
        text-transform: uppercase;
        font-size: calc(16px + (30 - 16) * ((100vw - 100px) / (1920 - 100)));
        line-height: calc(22px + (40 - 22) * ((100vw - 100px) / (1920 - 100)));
        @media (min-width: 1920px) {
          font-size: 30px;
          line-height: 36px;
        }
      }
      &:first-child {
        span {
          color: #363138;
        }
        background-color: #d7d7ad;
      }
      &:nth-child(2) {
        background-color: #8b8065;
      }
      &:last-child {
        background-color: #363138;
      }
    }
  }
`;
