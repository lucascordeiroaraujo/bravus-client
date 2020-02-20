import styled from 'styled-components';

export default styled.div`
  width: 100%;
  margin: 200px 0px;
  div.container-companies {
    width: 100%;
    padding: 0px 6%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 100px;
      img {
        width: 48%;
        height: auto;
      }
      div {
        width: 48%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        strong {
          font-family: 'DINProBold';
          font-size: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
          line-height: calc(
            25px + (50 - 25) * ((100vw - 250px) / (1920 - 250))
          );
          font-weight: normal;
          text-transform: uppercase;
          color: ${props => props.theme.colors.info};
          @media (min-width: 1920px) {
            font-size: 50px;
            line-height: 50px;
          }
        }
        p {
          font-size: 18px;
          line-height: 26px;
          color: ${props => props.theme.colors.light};
          margin: 30px 0px;
        }
        a {
          width: 100%;
          max-width: 500px;
          padding: 20px;
          text-transform: uppercase;
          font-family: 'DINProBold';
          color: ${props => props.theme.colors.secondary};
          transition: 0.5s;
          text-align: center;
          font-size: calc(25px + (30 - 25) * ((100vw - 250px) / (1920 - 250)));
          line-height: calc(
            25px + (30 - 25) * ((100vw - 250px) / (1920 - 250))
          );
          background-color: ${props => props.theme.colors.info};
          &:hover {
            background-color: ${props => props.theme.colors.primary};
          }
        }
      }
      &:nth-child(even) {
        flex-direction: row-reverse;
      }
      &:last-child {
        margin-bottom: 0px;
      }
      @media (max-width: 1200px) {
        img,
        div {
          width: 100%;
        }
        div {
          margin-top: 50px;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }
    }
    @media (max-width: 1270px) {
      padding: 0px 16px;
    }
  }
  @media (max-width: 992px) {
    margin: 100px 0px;
  }
`;
