import React, { FC, useState, useContext } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FontStyle } from "../styles/font";
import { ThemeContext } from "../contexts/themeContext";
import { shortTransitionDuration } from "../styles/transition";


const HeadingStyle = styled.div<{
  readonly isDark: boolean
}>`
  & > .main-text {
    color: ${props => props.isDark ? 'var(--off-white)' : 'var(--navy)'};
    transition: color ${shortTransitionDuration}s;

    ${FontStyle({
      size: 36,
      weight: "superbold",
    })}
  }
  & > .secondary-text {
    color: ${props => props.isDark ? 'var(--medium-light-gray)' : 'var(--gray)'};
    transition: color ${shortTransitionDuration}s;

    ${FontStyle({
      size: 36,
      weight: "bold",
    })}
  }
`;

export const Heading : FC<{
  readonly mainText: string;
  readonly secondaryText: string;

} & React.HTMLAttributes<HTMLDivElement>> = ({ mainText, secondaryText }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <HeadingStyle
      isDark={isDark}
    >
      <h1 className="main-text">{mainText}</h1>
      <p className="secondary-text">{secondaryText}</p>
    </HeadingStyle>
  );
}