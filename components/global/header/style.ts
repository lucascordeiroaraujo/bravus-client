import styled from 'styled-components';

export default styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    img {
      margin: 10px 30px 10px 0px;
      height: auto;
    }
    @media (min-width: 992px) and (max-width: 1135px) {
      &:first-child {
        width: 364px;
      }
    }
    @media (max-width: 700px) {
      &:first-child {
        max-width: 220px;
        img {
          margin: 0px 20px 0px 0px;
          max-width: 80px;
          &:first-child {
            margin-bottom: 10px;
            max-width: none;
          }
        }
      }
    }
  }
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    li {
      margin-right: -1px;
      a {
        padding: 10px 12px 14px 12px;
        transition: 0.5s;
        border: 1px solid transparent;
        font-size: 21px;
        line-height: 20px;
        font-family: 'DINProBold';
        color: ${props => props.theme.colors.primary};
      }
      &:hover a {
        color: ${props => props.theme.colors.light};
        border: 1px solid ${props => props.theme.colors.light};
      }
    }
    @media (max-width: 992px) {
      position: absolute;
      z-index: 4;
      top: 100px;
      right: 15px;
      width: 200px;
      flex-direction: column;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0px 2px 8px rgba(215, 215, 173, 0.7);
      opacity: 0;
      pointer-events: none;
      transition: 0.5s;
      background-color: ${props => props.theme.colors.light};
      &:before {
        content: '';
        width: 30px;
        height: 30px;
        position: absolute;
        z-index: 2;
        top: -19px;
        right: 0px;
        transform: rotate(180deg);
        mask: url(${require('~/public/images/arrow.svg')});
        mask-size: 100% auto;
        background-color: ${props => props.theme.colors.light};
      }
      li {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0px;
        }
        &:hover a {
          color: ${props => props.theme.colors.info};
        }
      }
      &.active {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
  button {
    width: 30px;
    height: 26px;
    position: relative;
    appearance: none;
    border: none;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    background: transparent;
    cursor: pointer;
    &:before,
    span,
    &:after {
      content: '';
      position: absolute;
      left: 0px;
      width: 100%;
      height: 2px;
      transition: 0.5s;
      background-color: ${props => props.theme.colors.light};
    }
    &:before {
      top: 0px;
    }
    span {
      top: 50%;
      transform: translate(0px, -50%);
    }
    &:after {
      bottom: 0px;
    }
    &.active {
      &:before,
      &:after {
        background-color: ${props => props.theme.colors.info};
      }
      &:before {
        top: 12px;
        transform: rotate(45deg);
      }
      span {
        opacity: 0;
      }
      &:after {
        bottom: 12px;
        transform: rotate(-45deg);
      }
    }
    @media (max-width: 992px) {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
