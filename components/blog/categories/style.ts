import styled from 'styled-components';

export default styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;
