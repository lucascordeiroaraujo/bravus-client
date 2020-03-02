import styled from 'styled-components';

export default styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 100px;
  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  h1,
  h2,
  h3,
  img,
  p,
  ul,
  ol {
    margin-bottom: 50px;
  }
  h1 {
    font-weight: normal;
    font-size: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
    color: ${props => props.theme.colors.secondary};
    span {
      background-color: ${props => props.theme.colors.info};
      display: inline;
      max-width: 70%;
      padding: 10px;
    }
    @media (min-width: 1920px) {
      font-size: 50px;
    }
  }
  h2,
  h3 {
    font-size: calc(25px + (50 - 25) * ((100vw - 250px) / (1920 - 250)));
    font-family: 'DINProBold';
    color: ${props => props.theme.colors.info};
    font-weight: normal;
    @media (min-width: 1920px) {
      font-size: 50px;
    }
  }
  img {
    width: 100%;
    max-width: 90%;
    height: auto;
  }
  p,
  ul,
  ol {
    width: 100%;
    font-size: 18px;
    line-height: 28px;
    max-width: 80%;
    color: ${props => props.theme.colors.light};
    a {
      color: ${props => props.theme.colors.info};
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
    strong,
    b {
      font-family: 'DINProBold';
    }
    i {
      font-style: italic;
    }
  }
  ul,
  ol {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: square;
  }
  ol {
    list-style-type: decimal;
  }
  @media (max-width: 992px) {
    h1 span {
      max-width: 100%;
    }
    img,
    p {
      max-width: 100%;
    }
  }
`;
