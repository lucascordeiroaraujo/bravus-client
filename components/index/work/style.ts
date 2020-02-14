import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 130px 0px;
  h1 {
    width: 100%;
    padding: 50px 0px 50px 50px;
    margin: 0px 0px 60px 0px;
    position: relative;
    font-family: 'DINProBold';
    font-size: calc(60px + (120 - 50) * ((100vw - 100px) / (1920 - 100)));
    line-height: calc(60px + (120 - 50) * ((100vw - 100px) / (1920 - 100)));
    color: ${props => props.theme.colors.light};
    text-transform: uppercase;
    &:before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 4px;
      height: 100%;
      background-color: ${props => props.theme.colors.light};
    }
    @media (min-width: 1920px) {
      font-size: 120px;
      line-height: 120px;
    }
  }
  ul {
    width: 100%;
    li {
      height: 115px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #ffffff;
        text-align: center;
        font-family: 'DINProBold';
        text-transform: uppercase;
        font-size: calc(18px + (33 - 18) * ((100vw - 100px) / (1920 - 100)));
        line-height: calc(25px + (40 - 25) * ((100vw - 100px) / (1920 - 100)));
        @media (min-width: 1920px) {
          font-size: 33px;
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
