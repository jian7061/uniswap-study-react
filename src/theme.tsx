import React from 'react';
import { css, DefaultTheme, createGlobalStyle, ThemeProvider as OriginThemeProvider } from 'styled-components';
import AnounousProRegularWOFF2 from './fonts/anonymous-pro-v14-latin-regular.woff2';
import AnounousProBoldWOFF2 from './fonts/anonymous-pro-v14-latin-700.woff2';

export const MEDIA_WIDTHS = {
  upToExtraSmall: 480,
  upToSmall: 769,
  upToMedium: 992,
  upToLarge: 1200,
};

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    (accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (min-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `;
    return accumulator;
  },
  {}
) as any;

function theme(darkMode: boolean): DefaultTheme {
  return {
    dark: '#302F2D',
    white: '#FFFAFA',

    // RGBA로 변경할 것.
    primary: darkMode ? '#D2AD9B' : '#FFB6C1',
    secondary: darkMode ? '#e6e0d4' : '#DBD7BA',
    error: darkMode ? '#CE5252' : '#DA3434',
    success: darkMode ? '#9DC940' : '#ADF80F',
    warning: darkMode ? '#DAAC37' : '#FFBE16',

    text: darkMode ? '#FFFAFA' : '#302F2D',
    background: darkMode ? '#302F2D' : '#FFFAFA',
    flipground: darkMode ? '#FFFAFA' : '#302F2D',

    size: {
      h1: '4.236rem',
      h2: '2.618rem',
      h3: '1.62rem',
      body: '1rem',
      small: '0.75rem',
      pretitle: '0.619rem',
    },

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  };
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <OriginThemeProvider theme={theme(true)}>{children}</OriginThemeProvider>;
};

export const ThemedGlobalStyle = createGlobalStyle`
  /* anonymous-pro-regular - latin */
  @font-face {
    font-family: 'Anonymous Pro';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${AnounousProRegularWOFF2}) format('woff2');
  }

  /* anonymous-pro-700 - latin */
  @font-face {
    font-family: 'Anonymous Pro';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url(${AnounousProBoldWOFF2}) format('woff2');
  }

  html {
    font-size: 12px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background} !important;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      font-size: 14px;
    `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
      font-size: 16px;
    `};
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Anonymous Pro, -apple-system, "Roboto";
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    min-height: 100%;
  }

  #root {
    min-height: 100%;
  }

  a {
    color: ${({ theme }) => theme.primary}; 
    color: inherit;
    text-decoration: none;
  }

  * {
    border: none;
    box-sizing: inherit;
    &:focus {
      outline: none;
    }
  }
`;
