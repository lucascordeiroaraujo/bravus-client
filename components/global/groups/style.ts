import styled from 'styled-components';

export default styled.section`
  padding: 100px 0px;
  div.container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    & > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;
      div {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        &:first-child {
          width: 55%;
        }
        &:last-child {
          width: 45%;
          a {
            width: 100%;
          }
          img {
            width: 100%;
            height: auto;
            &:last-child {
              margin-top: -4px;
            }
          }
        }
      }
    }
    h2,
    p,
    strong {
      font-size: calc(18px + (24 - 18) * ((100vw - 250px) / (1920 - 250)));
      line-height: calc(24px + (30 - 24) * ((100vw - 250px) / (1920 - 250)));
      color: ${props => props.theme.colors.light};
      text-align: center;
      @media (min-width: 1920px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
    h2 {
      font-family: 'DINProMedium';
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    strong {
      font-family: 'DINProBold';
      margin: 50px 0px;
    }
    div.logos {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      img {
        margin: 0px 15px;
        pointer-events: none;
      }
    }
  }
  &.secure {
    background-color: ${props => props.theme.colors.light};
    div.container {
      h2,
      p,
      strong {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
`;
