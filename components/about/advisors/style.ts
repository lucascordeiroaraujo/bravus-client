import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  & > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    @media (max-width: 1270px) {
      padding: 0px 15px;
    }
  }
  @media (max-width: 992px) {
    h1.default-title strong {
      font-size: calc(41px + (110 - 41) * ((100vw - 100px) / (1920 - 100)));
      line-height: calc(41px + (100 - 41) * ((100vw - 100px) / (1920 - 100)));
    }
  }
`;
