import styled from 'styled-components';

export default styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    img {
      margin: 10px 30px 10px 0px;
      height: auto;
    }
    @media (min-width: 992px) and (max-width: 1135px) {
      &:first-child {
        width: 364px;
      }
    }
    @media (max-width: 700px) {
      &:first-child {
        max-width: 220px;
        img {
          margin: 0px 20px 0px 0px;
          max-width: 80px;
          &:first-child {
            margin-bottom: 10px;
            max-width: none;
          }
        }
      }
    }
  }
`;
