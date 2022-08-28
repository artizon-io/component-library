// import { createGlobalStyle } from 'styled-components';
import { Global, css } from '@emotion/react'
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import InterLightWoff from '../fonts/Inter-Light.woff';
import InterRegularWoff from '../fonts/Inter-Regular.woff';
import InterRegularItalicWoff from '../fonts/Inter-Italic.woff';
import InterMediumWoff from '../fonts/Inter-Medium.woff';
import InterSemiBoldWoff from '../fonts/Inter-SemiBold.woff';
import InterBoldWoff from '../fonts/Inter-Bold.woff';
import FiraCodeRegular from '../fonts/FiraCode-Regular.woff';
import { ThemeContext } from './contexts/themeContext';
import { useThemeContext } from './hooks/useThemeContext';

// See (not resolved) (switched to using emotion instead)
// https://stackoverflow.com/questions/72078108/how-to-add-global-style-option-for-a-react-ui-library
 
export const GlobalStyleProvider : FC<{
  readonly children?: ReactNode;
  readonly defaultTheme?: "light" | "dark";

}> = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useState<"light" | "dark">(defaultTheme ?? "dark");  // nullish coalescing
  const isDark = theme === "dark";

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
      console.log(`Changed theme to dark`);
    } else {
      setTheme('light')
      console.log(`Changed theme to light`);
    }
  };

  useEffect(() => {
    console.log(`isDark: ${isDark}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Global
        styles={css`
          @font-face {
            font-family: 'Inter';
            src: url(${InterLightWoff}) format('woff');
            font-weight: 300;
            font-style: normal;
          }
          @font-face {
            font-family: 'Inter';
            src: url(${InterRegularWoff}) format('woff');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Inter';
            src: url(${InterRegularItalicWoff}) format('woff');
            font-weight: 400;
            font-style: italic;
          }
          @font-face {
            font-family: 'Inter';
            src: url(${InterMediumWoff}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Inter';
            src: url(${InterSemiBoldWoff}) format('woff');
            font-weight: 600;
            font-style: normal;
          }
          @font-face {
            font-family: 'Inter';
            src: url(${InterBoldWoff}) format('woff');
            font-weight: 700;
            font-style: normal;
          }
          @font-face {
            font-family: 'FiraCode';
            src: url(${FiraCodeRegular}) format('woff');
            font-weight: 400;
            font-style: normal;
          }
          * {
            box-sizing: border-box;
          }
          html {
            scroll-behavior: smooth;
          }
          body {
            font-family: Inter;
            background: ${isDark ? 'var(--off-black)' : 'var(--off-white)'};
            transition: background 0.8s;
          }
          body, h1, h2, h3, p, ul {
            margin: 0;
            padding: 0;
          }
          :root {
            --black: #000000;
            --off-black: #16181D;

            --dark-gray: #1B1D22;
            --medium-dark-gray: #2B303B;
            --gray: #626B84;
            --medium-light-gray: #97A0B3;
            --light-gray: #A0ABC1;

            --off-off-white: #F2F3F4;
            --off-white: #F9FAFB;
            --white: #FFFFFF;

            --dark-blue: #1C2433;
            --blue: #5686F5;
            --light-blue: #EDF1FB;

            --navy: #04052F;
            --royal: #0D52F1;
          }
        `}
      />
      {children}
    </ThemeContext.Provider>
  );
}