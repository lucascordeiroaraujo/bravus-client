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
        font-size: calc(60px + (120 - 60) * ((100vw - 100px) / (1920 - 100)));
        line-height: calc(60px + (120 - 60) * ((100vw - 100px) / (1920 - 100)));
        color: ${props => props.theme.colors.light};
        text-transform: uppercase;
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
  &:last-child > div div {
    margin-bottom: 30px;
    h2 {
      color: ${props => props.theme.colors.secondary};
      background-color: ${props => props.theme.colors.light};
    }
    @media (max-width: 992px) {
      margin-bottom: 5px;
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
      order: 1 !important;
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
      order: 2 !important;
      margin: 30px 0px 0px 0px !important;
      max-width: 560px;
    }
  }
`;
