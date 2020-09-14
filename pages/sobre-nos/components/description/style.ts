import styled from 'styled-components';

export default styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 100px 0px;
  div.description-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    & > div {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 50px;
      h2,
      p {
        width: 100%;
      }
      h2 {
        font-family: 'DINProBold';
        font-weight: normal;
        font-size: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
        line-height: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
        color: ${props => props.theme.colors.info};
        margin-bottom: 30px;
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
        text-align: justify;
        &:last-child {
          margin-bottom: 0px;
        }
      }
      @media (max-width: 992px) {
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
    & > img {
      width: 100%;
      height: auto;
      pointer-events: none;
    }
    @media (max-width: 1390px) {
      max-width: 1270px;
      padding: 0px 15px;
    }
    @media (max-width: 1270px) {
      & > div {
        width: 100%;
        margin-bottom: 50px;
      }
      & > img {
        width: 100%;
      }
    }
  }
  @media (max-width: 992px) {
    margin: 50px 0px;
  }
`;
