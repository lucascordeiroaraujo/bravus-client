import styled from 'styled-components';

export default styled.div`
  width: calc(100% - 30px);
  margin: 60px 15px;
  div.react-parallax-content {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    padding: 100px;
    p,
    span {
      width: 100%;
      text-align: center;
    }
    p {
      font-family: 'DINProBold';
      font-size: 66px;
      color: ${props => props.theme.colors.light};
      margin: 0px 0px 50px 0px;
    }
    span {
      font-size: 18px;
      color: ${props => props.theme.colors.light};
      text-transform: uppercase;
    }
  }
`;
