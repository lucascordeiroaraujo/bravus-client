import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      info: string;
      light: string;
    };
    secure: {
      primary: string;
      secondary: string;
    };
    companies: {
      primary: string;
      secondary: string;
    };
  }
}
