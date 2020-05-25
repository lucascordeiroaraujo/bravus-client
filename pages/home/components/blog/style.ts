import styled from 'styled-components';

export default styled.section`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
  margin: 100px 0px;
  & > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
  }
`;
