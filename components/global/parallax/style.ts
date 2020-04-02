import styled from 'styled-components';

export default styled.div`
  width: calc(100% - 30px);
  margin: 60px 15px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  img {
    width: 100%;
    height: auto;
    max-height: 90vh;
    opacity: 0;
  }
  & > div {
    position: absolute;
    bottom: 9%;
    left: 50%;
    transform: translate(-50%, 0px);
    width: 100%;
    max-width: 1270px;
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
      font-size: calc(1rem + ((1vw - 2.5px) * 2.994));
      line-height: calc(1rem + ((1vw - 2.5px) * 2.994));
      @media (min-width: 1920px) {
        font-size: 66px;
        line-height: 66px;
      }
    }
    span {
      font-size: calc(0.875rem + ((1vw - 2.5px) * 0.2395));
      color: ${props => props.theme.colors.light};
      text-transform: uppercase;
      @media (min-width: 1920px) {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 992px) {
    background: none !important;
    img {
      opacity: 1;
    }
    & > div p {
      margin: 0px 0px 20px 0px;
    }
  }
  &.second-index > div {
    top: 50%;
    transform: translate(-50%, -50%);
    bottom: auto;
  }
`;
