import styled from 'styled-components';

export const Menu = styled.ul`
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
      color: ${props => props.theme.colors.light};
    }
    &:hover a {
      color: ${props => props.theme.colors.light};
      border: 1px solid ${props => props.theme.colors.light};
    }
    &.active a {
      color: ${props => props.theme.colors.light};
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
      &.active a {
        color: ${props => props.theme.colors.secondary};
      }
    }
    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const MenuMobile = styled.button`
  width: 30px;
  height: 26px;
  position: relative;
  appearance: none;
  border: none;
  transition: 0.5s;
  background: transparent;
  cursor: pointer;
  display: none;
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
    display: block;
  }
`;
