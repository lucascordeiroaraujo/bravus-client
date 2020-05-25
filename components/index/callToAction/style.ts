import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: calc(100vh - 142px);
  h1 {
    font-family: 'DINProBold';
    font-size: calc(44px + (100 - 44) * ((100vw - 100px) / (1920 - 100)));
    line-height: calc(44px + (100 - 44) * ((100vw - 100px) / (1920 - 100)));
    @media (min-width: 1920px) {
      font-size: 100px;
      line-height: 100px;
    }
    text-transform: uppercase;
    font-weight: normal;
    margin: 0px 0px 45px 0px;
    color: ${props => props.theme.colors.light};
  }
  p {
    width: 100%;
    max-width: 700px;
    color: ${props => props.theme.colors.light};
    margin: 0px 0px 45px 0px;
    font-size: calc(18px + (24 - 18) * ((100vw - 100px) / (1920 - 100)));
    line-height: calc(24px + (30 - 24) * ((100vw - 100px) / (1920 - 100)));
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:last-child {
      margin-bottom: 0px;
    }
    @media (min-width: 1920px) {
      font-size: 24px;
      line-height: 30px;
    }
    a {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 290px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      font-size: 22px;
      padding: 20px;
      color: ${props => props.theme.colors.primary};
      border: 1px solid ${props => props.theme.colors.primary};
      span {
        font-size: 16px;
        line-height: 20px;
        text-transform: lowercase;
        position: relative;
        top: -1px;
      }
      &:hover {
        color: ${props => props.theme.colors.light};
        background-color: ${props => props.theme.colors.primary};
      }
      @media (max-width: 992px) {
        opacity: 1;
      }
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    max-width: 100%;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    p {
      display: flex;
      justify-content: center;
    }
  }
`;
