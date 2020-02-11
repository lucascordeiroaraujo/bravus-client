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
    img {
      margin-right: 30px;
    }
  }
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    li {
      margin-right: -1px;
      a {
        padding: 10px 12px 14px 12px;
        transition: 0.5s;
        border: 1px solid transparent;
        font-size: 21px;
        line-height: 20px;
        font-family: 'DINProBold';
        color: ${props => props.theme.colors.primary};
      }
      &:hover a {
        color: ${props => props.theme.colors.light};
        border: 1px solid ${props => props.theme.colors.light};
      }
    }
  }
`;
