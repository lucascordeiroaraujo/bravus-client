import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 50px;
  & > h2 {
    font-size: calc(20px + (30 - 20) * ((100vw - 250px) / (1920 - 250)));
    color: ${props => props.theme.colors.secondary};
    font-weight: normal;
    padding: 10px;
    margin-bottom: 40px;
    background: ${props => props.theme.colors.info};
    @media (min-width: 1920px) {
      font-size: 30px;
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
`;
