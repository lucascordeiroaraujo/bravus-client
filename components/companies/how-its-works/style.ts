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
    font-size: calc(30px + (60 - 30) * ((100vw - 250px) / (1920 - 250)));
    color: ${props => props.theme.seguros.primary};
    @media (min-width: 1920px) {
      font-size: 60px;
    }
  }
  h2 {
    font-size: calc(50px + (100 - 50) * ((100vw - 250px) / (1920 - 250)));
    line-height: calc(50px + (100 - 50) * ((100vw - 250px) / (1920 - 250)));
    color: ${props => props.theme.seguros.secondary};
    margin-bottom: 80px;
    @media (min-width: 1920px) {
      font-size: 100px;
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
      &:last-child {
        margin-bottom: 0px;
      }
    }
    img {
      width: 100%;
      height: auto;
    }
    &:last-child {
      padding-top: 60px;
    }
  }
`;
