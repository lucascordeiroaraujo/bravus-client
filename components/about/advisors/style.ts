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
`;
