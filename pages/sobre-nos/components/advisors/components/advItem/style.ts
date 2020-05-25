import styled from 'styled-components';

export default styled.article`
  width: 20%;
  position: relative;
  transition: 0.5s;
  img {
    width: 100%;
    height: auto;
    &.effect-zoom {
      z-index: 2;
    }
  }
  img.effect-zoom,
  & > div {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  & > div {
    position: absolute;
    z-index: 3;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    transition: all 0.5s ease-in-out;
    &.advisor-informations {
      &:before {
        content: '';
        width: calc(100% - 40px);
        height: 1px;
        opacity: 0;
        position: absolute;
        bottom: 20px;
        left: 20px;
        transition: all 0.5s ease-in-out;
        background: ${props => props.theme.colors.light};
      }
    }
    &:last-child {
      z-index: 2;
      &:before {
        content: '';
        position: absolute;
        z-index: 3;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        box-shadow: inset 10px 10px 200px 30px rgba(18, 23, 31, 1);
      }
    }
    h1,
    a {
      color: ${props => props.theme.colors.light};
      text-align: center;
    }
    h1 {
      font-family: 'DINProBold';
      font-size: calc(20px + (28 - 20) * ((100vw - 250px) / (1920 - 250)));
      line-height: calc(20px + (28 - 20) * ((100vw - 250px) / (1920 - 250)));
      margin: 0px 0px 20px 0px;
      transition: 0.5s;
      @media (min-width: 1920px) {
        font-size: 28px;
        line-height: 28px;
      }
    }
    div {
      width: 100%;
      transition: all 0.5s ease-in-out;
      max-height: 0px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      a {
        font-size: calc(16px + (22 - 18) * ((100vw - 250px) / (1920 - 250)));
        margin-bottom: 2px;
        word-break: break-all;
        @media (min-width: 1920px) {
          font-size: 22px;
        }
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
  &:hover {
    z-index: 4;
    & > div {
      &.advisor-informations {
        :before {
          opacity: 1;
        }
        div {
          max-height: 110px;
          padding-bottom: 20px;
        }
      }
      &:last-child {
        transform: scale(1.2);
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
      }
    }
  }
  @media (max-width: 1200px) {
    width: 25%;
  }
  @media (max-width: 992px) {
    width: 33.33%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 50%;
  }
  @media (max-width: 350px) {
    width: 100%;
  }
`;
