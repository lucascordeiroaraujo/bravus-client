import styled from 'styled-components';

export default styled.section`
  padding: 100px 0px;
  div.container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    & > div:first-child {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;
      flex-wrap: wrap;
      div {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 100%;
        &:last-child {
          a {
            width: 33.33%;
            @media (max-width: 992px) {
              width: 50%;
            }
            @media (max-width: 576px) {
              width: 100%;
              margin: 5px 0px;
            }
          }
          img {
            width: 100%;
            height: auto;
            transition: 0.5s;
            pointer-events: none;
            &:last-child {
              margin-top: -4px;
            }
            &:hover {
              opacity: 0.9;
            }
          }
        }
        @media (max-width: 992px) {
          width: 100% !important;
          justify-content: center;
          align-items: center;
        }
      }
    }
    h2,
    p,
    & > strong {
      font-size: calc(18px + (24 - 18) * ((100vw - 250px) / (1920 - 250)));
      line-height: calc(24px + (30 - 24) * ((100vw - 250px) / (1920 - 250)));
      color: ${props => props.theme.colors.light};
      text-align: center;
      a {
        color: ${props => props.theme.colors.primary};
        &:hover {
          text-decoration: underline;
        }
      }
      @media (min-width: 1920px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
    p:last-child {
      font-size: 18px;
      line-height: 28px;
    }
    h2 {
      font-family: 'DINProMedium';
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    & > strong {
      font-family: 'DINProBold';
      margin: 50px 0px;
    }
    div.social-networks {
      margin-bottom: 30px;
    }
    div.social-networks,
    div.logos {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      img {
        max-width: 130px;
        height: auto;
        margin: 10px 15px;
        pointer-events: none;
      }
      svg {
        width: 30px;
        height: 30px;
        margin: 0px 10px;
        fill: ${props => props.theme.colors.light};
        transition: 0.5s;
        &:hover {
          fill: ${props => props.theme.colors.info};
        }
      }
    }
  }
`;
