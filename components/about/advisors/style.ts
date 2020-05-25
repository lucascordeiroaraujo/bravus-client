import styled from 'styled-components';

export default styled.section`
  width: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px 0px 0px 2%;
  & > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    @media (max-width: 1270px) {
      padding: 0px 15px;
    }
    &:hover > *,
    &:focus-within > * {
      opacity: 0.3;
    }
    &:hover > :hover,
    &:focus-within > :focus,
    &:hover > :focus:not(:hover) {
      opacity: 1;
    }
  }
  @media (max-width: 992px) {
    h1.default-title strong {
      font-size: calc(41px + (110 - 41) * ((100vw - 100px) / (1920 - 100)));
      line-height: calc(41px + (100 - 41) * ((100vw - 100px) / (1920 - 100)));
    }
  }
`;
