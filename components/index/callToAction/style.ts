import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
  div {
    width: calc(100% - calc(400px + 50px));
    max-width: 700px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
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
      color: ${props => props.theme.colors.primary};
      margin: 0px 0px 45px 0px;
      font-size: calc(18px + (24 - 18) * ((100vw - 100px) / (1920 - 100)));
      line-height: calc(24px + (30 - 24) * ((100vw - 100px) / (1920 - 100)));
      @media (min-width: 1920px) {
        font-size: 24px;
        line-height: 30px;
      }
      a {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 130px;
        height: 40px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        font-size: 16px;
        text-transform: lowercase;
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
  }
  form {
    width: 400px;
    padding: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    transition: 0.5s;
    background-color: #fff;
    .react-reveal {
      width: 100%;
    }
    strong {
      width: 100%;
      font-family: 'DINProBold';
      font-size: 35px;
      text-transform: uppercase;
      color: ${props => props.theme.colors.secondary};
      position: relative;
      text-align: right;
      padding-right: 30px;
      margin-bottom: 30px;
      &:after {
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        width: 5px;
        height: 100%;
        border-radius: 10px;
        background-color: ${props => props.theme.colors.secondary};
      }
    }
    input {
      width: 100%;
      height: 45px;
      font-size: 17px;
      padding: 10px;
      text-align: right;
      border: 1px solid ${props => props.theme.colors.secondary};
      margin-bottom: 17px;
      color: ${props => props.theme.colors.secondary};
      &::placeholder {
        color: ${props => props.theme.colors.secondary};
      }
      &:-ms-input-placeholder {
        color: ${props => props.theme.colors.secondary};
      }
      &::-ms-input-placeholder {
        color: ${props => props.theme.colors.secondary};
      }
      &[type='submit'] {
        height: 70px;
        border: 1px solid transparent;
        margin-top: 9px;
        text-align: center;
        font-family: 'DINProBold';
        text-transform: uppercase;
        transition: 0.5s;
        cursor: pointer;
        appearance: none;
        background-color: #ffa92e;
        &:hover {
          color: ${props => props.theme.colors.light};
          background-color: ${props => props.theme.colors.primary};
        }
      }
    }
    span {
      width: 100%;
      font-size: 13px;
      font-family: 'DINProBold';
      text-align: center;
      color: ${props => props.theme.colors.secondary};
    }
    @media (max-width: 992px) {
      width: 100%;
      padding: 20px;
      strong {
        text-align: center;
        padding-right: 0px;
        &:after {
          display: none;
        }
      }
      input {
        text-align: center;
      }
    }
    @keyframes blink-animation {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    &.active {
      animation: blink-animation 1s;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
