import styled from 'styled-components';

export default styled.div`
  width: calc(100% - 30px);
  margin: 60px 15px;
  div.react-parallax-content {
    width: 100%;
    max-width: 1270px;
    margin: 0px auto;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 9% 0px;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p,
      span {
        width: 100%;
        text-align: center;
      }
      p {
        font-family: 'DINProBold';
        color: ${props => props.theme.colors.light};
        margin: 0px 0px 50px 0px;
        font-size: calc(33px + (66 - 33) * ((100vw - 100px) / (1920 - 100)));
        line-height: calc(33px + (66 - 33) * ((100vw - 100px) / (1920 - 100)));
        @media (min-width: 1920px) {
          font-size: 66px;
          line-height: 66px;
        }
      }
      span {
        font-size: 18px;
        color: ${props => props.theme.colors.light};
        text-transform: uppercase;
      }
    }
  }
  &.second-index div.react-parallax-content {
    align-items: center;
    padding: 0px;
  }
`;
