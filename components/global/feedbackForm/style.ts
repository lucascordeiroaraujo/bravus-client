import styled from 'styled-components';

export default styled.div`
  position: fixed;
  z-index: 20;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: 0.5s;
  pointer-events: none;
  background: rgba(18, 23, 31, 0.9);
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  & > div {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${props => props.theme.colors.primary};
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    &:before,
    &:after {
      content: '';
      position: absolute;
      border-radius: 50%;
      border: 3px solid transparent;
      opacity: 0.7;
    }
    &:before {
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-top-color: ${props => props.theme.colors.info};
      -webkit-animation: spin 3s linear infinite;
      animation: spin 3s linear infinite;
    }
    &:after {
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-top-color: ${props => props.theme.colors.light};
      -webkit-animation: spin 1.5s linear infinite;
      animation: spin 1.5s linear infinite;
    }
  }
  & > p {
    margin: 15px 0px 0px 0px;
    font-size: 18px;
    color: ${props => props.theme.colors.light};
    text-align: center;
    span.emoji {
      font-size: 100px;
      position: relative;
      top: -5px;
      &.error {
        color: #d8484f;
      }
      &.success {
        color: #479e4f;
      }
    }
  }
  & > button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    background: transparent;
    &:after,
    &:before {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      top: 18px;
      left: 0px;
      transition: 0.5s;
      background: ${props => props.theme.colors.primary};
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:before {
      transform: rotate(45deg);
    }
    &:hover:after,
    &:hover:before {
      background-color: ${props => props.theme.colors.light};
    }
  }
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
