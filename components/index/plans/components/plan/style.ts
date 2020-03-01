import styled from 'styled-components';

export default styled.article`
  width: 100%;
  margin: 50px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    max-width: 50%;
    order: 1;
    div {
      width: 100%;
      h2 {
        font-family: 'DINProBold';
        font-size: calc(60px + (120 - 50) * ((100vw - 100px) / (1920 - 100)));
        line-height: calc(60px + (120 - 50) * ((100vw - 100px) / (1920 - 100)));
        color: ${props => props.theme.colors.light};
        text-transform: uppercase;
        margin: 0px 0px 10px -10px;
        display: inline;
        @media (min-width: 1920px) {
          font-size: 120px;
          line-height: 120px;
        }
      }
    }
    p {
      font-size: 24px;
      color: ${props => props.theme.colors.primary};
      margin: 0px;
    }
  }
  img {
    width: 100%;
    max-width: 47%;
    margin-left: 3%;
    order: 2;
  }
  &:last-child {
    div {
      h2 {
        color: ${props => props.theme.colors.secondary};
        background-color: ${props => props.theme.colors.light};
      }
    }
  }
  &:nth-child(even) {
    & > div {
      order: 2;
    }
    img {
      order: 1;
      margin: 0px 3% 0px 0px;
    }
  }
  @media (max-width: 992px) {
    justify-content: center;
    flex-direction: column;
    margin: 25px 0px;
    & > div {
      max-width: 100%;
      h2,
      p {
        width: 100%;
        text-align: center;
      }
      h2 {
        display: flex !important;
        margin-left: 0px !important;
      }
    }
    img {
      margin-top: 30px;
      max-width: 560px;
      margin-left: 0px;
    }
  }
`;
