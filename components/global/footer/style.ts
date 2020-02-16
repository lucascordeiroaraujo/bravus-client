import styled from 'styled-components';

export default styled.footer`
  width: 100%;
  background-image: url(${require('~/public/images/background-city-footer.jpg')});
  background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
  div.container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    & > div {
      width: 55%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      div.address-icons {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        svg {
          width: 35px;
          height: 35px;
          fill: ${props => props.theme.colors.info};
          &.waze {
            margin-left: 10px;
          }
        }
        &.parking {
          margin-bottom: 0px;
          svg {
            transform: scaleX(-1);
            width: 45px;
            height: 45px;
          }
        }
      }
      address,
      p,
      a {
        font-size: calc(18px + (24 - 18) * ((100vw - 250px) / (1920 - 250)));
        line-height: calc(18px + (24 - 18) * ((100vw - 250px) / (1920 - 250)));
        color: ${props => props.theme.colors.light};
        margin-bottom: 55px;
        @media (min-width: 1920px) {
          font-size: 24px;
          line-height: 24px;
        }
        span {
          font-size: 36px;
        }
      }
      a {
        transition: 0.5s;
        &:hover {
          color: ${props => props.theme.colors.info};
        }
      }
      @media (max-width: 992px) {
        align-items: center;
        justify-content: center;
        div.address-icons {
          justify-content: center;
        }
        address,
        p,
        a {
          text-align: center;
        }
      }
    }
    form {
      width: 45%;
      height: 100%;
      padding: 70px 8%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: ${props => props.theme.colors.secondary};
      strong {
        font-family: 'DINProBold';
        font-size: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
        line-height: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
        text-transform: uppercase;
        color: ${props => props.theme.colors.light};
        margin-bottom: 40px;
        text-align: center;
        @media (min-width: 1920px) {
          font-size: 50px;
          line-height: 50px;
        }
      }
      input,
      textarea {
        width: 100%;
        height: 45px;
        text-align: right;
        font-size: 17px;
        color: ${props => props.theme.colors.light};
        padding: 10px;
        margin-bottom: 13px;
        border: 1px solid ${props => props.theme.colors.light};
        background: transparent;
        resize: none;
        transition: 0.5s;
        &[type='submit'] {
          height: 70px;
          text-transform: uppercase;
          color: ${props => props.theme.colors.secondary};
          background: #16ea61;
          margin-bottom: 0px;
          font-family: 'DINProBold';
          text-align: center;
          border: none;
          cursor: pointer;
          &:hover {
            background: #50f78b;
          }
        }
        &::placeholder {
          color: ${props => props.theme.colors.light};
        }
        &:-ms-input-placeholder {
          color: ${props => props.theme.colors.light};
        }
        &::-ms-input-placeholder {
          color: ${props => props.theme.colors.light};
        }
        &:focus {
          border: 1px solid ${props => props.theme.colors.info};
        }
      }
      textarea {
        height: 210px;
      }
      @media (max-width: 992px) {
        padding: 15px;
      }
    }
    @media (max-width: 992px) {
      & > div,
      form {
        width: 100%;
        input {
          text-align: center;
        }
      }
    }
    @media (max-width: 580px) {
      h1.default-title strong {
        font-size: calc(36px + (60 - 36) * ((100vw - 100px) / (1920 - 100)));
        line-height: calc(40px + (64 - 40) * ((100vw - 100px) / (1920 - 100)));
      }
    }
  }
  @media (max-width: 992px) {
    padding: 50px 0px;
  }
`;
