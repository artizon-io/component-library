import React, { FC, useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FontStyle } from "../styles/font";
import { useThemeContext } from "../hooks/useThemeContext";
import { shortTransitionDuration } from "../styles/transition";


const SubHeadingStyle = styled.h2<{
  readonly isDark: boolean;
}>`
  color: ${props => props.isDark ? 'var(--off-white)' : 'var(--navy)'};

  ${FontStyle({
    size: 26,
    weight: "bold",
  })}
  transition: color ${shortTransitionDuration}s;
`;

export const SubHeading : FC<{
  
} & React.HTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <SubHeadingStyle
      isDark={isDark}
    >{children}</SubHeadingStyle>
  );
}