import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section{
    display: block;
  }
  body{
    overflow-x: hidden;
    transition: 0.5s;
    background-color: ${props => props.theme.colors.secondary};
  }
  ol, ul{
    list-style: none;
    padding: 0px;
  }
  a{
    text-decoration: none;
  }
  button{
    outline: none !important;
  }
  blockquote, q{
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after{
    content: '';
    content: none;
  }
  table{
    border-collapse: collapse;
    border-spacing: 0;
  }
  @font-face{
    font-family: 'DINProLight';
    src: url(${require('../fonts/DINProLight/DINProLight.woff')}) format('woff'),
      url(${require('../fonts/DINProLight/DINProLight.woff2')}) format('woff2'),
      url(${require('../fonts/DINProLight/DINProLight.svg')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face{
    font-family: 'DINProMedium';
    src: url(${require('../fonts/DINProMedium/DINProMedium.woff')}) format('woff'),
      url(${require('../fonts/DINProMedium/DINProMedium.woff2')}) format('woff2'),
      url(${require('../fonts/DINProMedium/DINProMedium.svg')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face{
    font-family: 'DINProBold';
    src: url(${require('../fonts/DINProBold/DINProBold.woff')}) format('woff'),
      url(${require('../fonts/DINProBold/DINProBold.woff2')}) format('woff2'),
      url(${require('../fonts/DINProBold/DINProBold.svg')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  body, input, select, textarea{
    font-family: 'DINProLight';
    outline: none;
  }
  /*
    ## Formula font-size calculator

    font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));

    Ex: font-size: calc(50px + (100 - 50) * ((100vw - 250px) / (1920 - 250)));

    @media (min-width: 1920px) {
      font-size: 50px;
    }
  */
  h1.default-title {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 40px 0px 40px 50px;
    margin: 0px 0px 60px 0px;
    &:before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 4px;
      height: 100%;
      border-radius: 5px;
      background-color: ${props => props.theme.colors.light};
    }
    &.before-info:before{
      background-color: ${props => props.theme.colors.info};
    }
    strong {
      font-family: 'DINProBold';
      text-transform: uppercase;
      font-size: calc(60px + (110 - 60) * ((100vw - 100px) / (1920 - 100)));
      line-height: calc(60px + (100 - 60) * ((100vw - 100px) / (1920 - 100)));
      margin: 0px 0px 10px -10px;
      @media (min-width: 1920px) {
        font-size: 110px;
        line-height: 110px;
      }
      color: ${props => props.theme.colors.light};
    }
    span {
      font-size: 24px;
      color: ${props => props.theme.colors.primary};
    }
    @media(max-width: 992px){
      text-align: center;
      padding: 40px 0px;
      justify-content: center;
      align-items: center;
      strong, span{
        width: 100%;
      }
      br{
        display: none;
      }
      &:before{
        width: 50%;
        height: 4px;
        top: auto;
        bottom: 20px;
        left: 50%;
        transform: translate(-50%, 0px);
      }
    }
  }
  a.default-button {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 130px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    text-transform: lowercase;
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    span {
      font-size: 16px;
      line-height: 20px;
      text-transform: lowercase;
      position: relative;
      top: -1px;
    }
    &:hover {
      color: ${props => props.theme.colors.light};
      background-color: ${props => props.theme.colors.primary};
    }
    @media (max-width: 992px) {
      opacity: 1;
    }
  }
  #nprogress{
		pointer-events: none;
		.bar{
			position: fixed;
			z-index: 1031;
			top: 0;
			left: 0;
			width: 100%;
			height: 5px;
			background: ${props => props.theme.colors.info};
		}
	}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1270px;
  margin: 0px auto;
  position: relative;
  padding: 0px 15px;
`;
