import { Global, css } from '@emotion/react'
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import InterLightWoff from '../fonts/Inter-Light.woff';
import InterRegularWoff from '../fonts/Inter-Regular.woff';
import InterRegularItalicWoff from '../fonts/Inter-Italic.woff';
import InterMediumWoff from '../fonts/Inter-Medium.woff';
import InterSemiBoldWoff from '../fonts/Inter-SemiBold.woff';
import InterBoldWoff from '../fonts/Inter-Bold.woff';
import FiraCodeLightWoff from '../fonts/FiraCode-Light.woff';
import FiraCodeRegularWoff from '../fonts/FiraCode-Regular.woff';
import { ThemeContext } from './contexts/themeContext';
import { setColors } from './styles/color';

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
    } else {
      setTheme('light');
    }
    setColors(!isDark);
  };

  useEffect(() => {
    setColors(isDark)
  }, []);

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
            src: url(${FiraCodeLightWoff}) format('woff');
            font-weight: 300;
            font-style: normal;
          }
          @font-face {
            font-family: 'FiraCode';
            src: url(${FiraCodeRegularWoff}) format('woff');
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
            background: var(--bg-80);
            transition: background 0.8s;
          }
          body, h1, h2, h3, p, ul {
            margin: 0;
            padding: 0;
          }
          :root {
            --bg-100: #ffffff;
            --bg-90: #ffffff;
            --bg-80: #ffffff;
            --bg-70: #ffffff;
            --bg-60: #ffffff;
            --bg-50: #ffffff;
            --bg-40: #ffffff;
            --bg-30: #ffffff;
            --bg-20: #ffffff;
            --bg-10: #ffffff;
            --main-100: #ffffff;
            --main-90: #ffffff;
            --main-80: #ffffff;
            --main-70: #ffffff;
            --main-60: #ffffff;
            --main-50: #ffffff;
            --main-40: #ffffff;
            --main-30: #ffffff;
            --main-20: #ffffff;
            --main-10: #ffffff;
            --second-100: #ffffff;
            --second-90: #ffffff;
            --second-80: #ffffff;
            --second-70: #ffffff;
            --second-60: #ffffff;
            --second-50: #ffffff;
            --second-40: #ffffff;
            --second-30: #ffffff;
            --second-20: #ffffff;
            --second-10: #ffffff;
            --fg-100: #ffffff;
            --fg-90: #ffffff;
            --fg-80: #ffffff;
            --fg-70: #ffffff;
            --fg-60: #ffffff;
            --fg-50: #ffffff;
            --fg-40: #ffffff;
            --fg-30: #ffffff;
            --fg-20: #ffffff;
            --fg-10: #ffffff;
          }
        `}
      />
      {children}
    </ThemeContext.Provider>
  );
}