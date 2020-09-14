import styled from 'styled-components';

export default styled.div`
  width: 100%;
  min-height: 140px;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0px);
  margin: 50px 0px 130px 0px;
  background: url(${require('~/public/images/background-author.png')}) left
    200px bottom no-repeat ${props => props.theme.colors.primary};
  background-size: auto 100%;
  img {
    width: 100%;
    max-width: 170px;
    height: auto;
    display: none;
    border: 1px solid #333;
  }
  div {
    width: calc(100% - 170px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 15px 4%;
    strong {
      font-family: 'DINProBold';
      font-size: 24px;
      color: ${props => props.theme.colors.light};
      font-weight: normal;
    }
    span.line {
      width: calc(104% + 25px);
      height: 3px;
      margin: 5px 0px 17px 0px;
      background: ${props => props.theme.colors.light};
    }
    p {
      font-size: 18px;
      line-height: 24px;
      color: ${props => props.theme.colors.light};
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    background: ${props => props.theme.colors.primary};
    img {
      max-width: 400px;
      margin-bottom: 20px;
      border-radius: 5px;
    }
    span.line {
      width: 100%;
    }
    div {
      width: 100%;
      align-items: center;
      text-align: center;
      padding: 0px;
    }
  }
`;
