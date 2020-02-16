import styled from 'styled-components';

export default styled.section`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
  margin-top: 100px;
  h1.default-title br {
    display: none;
    @media (max-width: 775px) {
      display: block;
    }
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
  }
`;
