import styled from 'styled-components';

export default styled.section`
  padding: 100px 0px;
  div.container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    /* h1.default-title {
      font-size: calc(60px + (100 - 60) * ((100vw - 100px) / (1920 - 100)));
      line-height: calc(50px + (100 - 50) * ((100vw - 100px) / (1920 - 100)));
    } */
    & > div:not(.logos) {
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
        &:first-child {
          width: 53%;
        }
        &:last-child {
          width: 45%;
          a {
            width: 100%;
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
    & > strong {
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
        margin: 10px 15px;
        pointer-events: none;
      }
    }
  }
  &.secure,
  &.companies {
    background-color: ${props => props.theme.colors.light};
    h1.default-title strong {
      color: ${props => props.theme.secure.secondary};
    }
    div.container {
      h2,
      p,
      strong {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
  &.companies h1.default-title strong {
    color: ${props => props.theme.companies.secondary};
  }
`;
