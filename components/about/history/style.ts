import styled from 'styled-components';

export default styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 52%;
    height: auto;
  }
  & > div {
    width: 35%;
    margin-left: 4%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    h2 {
      font-family: 'DINProBold';
      font-weight: normal;
      font-size: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
      line-height: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
      color: ${props => props.theme.colors.info};
      margin-bottom: 50px;
      @media (min-width: 1920px) {
        font-size: 50px;
        line-height: 50px;
      }
    }
    p {
      font-size: 18px;
      line-height: 26px;
      color: ${props => props.theme.colors.light};
      margin: 0px 0px 30px 0px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
  @media (max-width: 1270px) {
    padding: 0px 15px;
    flex-direction: column-reverse;
    img,
    & > div {
      width: 100%;
    }
    & > div {
      margin: 0px 0px 50px 0px;
    }
  }
`;
