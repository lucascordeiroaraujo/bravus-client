import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  h1.default-title,
  & > div {
    width: 50%;
    margin: 0px;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 50px;
    h1.default-title,
    & > div {
      width: 100%;
    }
    & > div {
      margin-top: 40px;
    }
  }
`;
