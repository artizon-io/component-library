import React, { FC, SyntheticEvent, useState, useEffect, useContext, ReactNode } from "react";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, GithubLogo } from "phosphor-react";
import { Github } from 'react-bootstrap-icons';
import { ThemeContext } from "../contexts/themeContext";
import { FontStyle } from "../styles/font";
import { useTheme } from "../hooks/useTheme";
import { shortTransitionDuration, longTransitionDuration } from "../styles/transition";


const StyledIconButton = styled.button<{
  readonly isDark : boolean;
}>`
  color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};
  background: ${props => props.isDark ? 'var(--dark-blue)' : 'var(--light-blue)'};

  padding: 12px 16px;
  border: none;
  border-radius: 8px;

  ${FontStyle({
    size: 16,
    weight: "light",
  })}

  &:hover {
    box-shadow: 0px 0px 32px 8px ${props => props.isDark ? 'var(--dark-blue)' : 'var(--light-blue)'};
    cursor: pointer;
    transform: scale(1.1);
  }
  transition: box-shadow ${shortTransitionDuration}s, transform ${longTransitionDuration}s, color ${shortTransitionDuration}s, background ${shortTransitionDuration}s;

  display: inline-flex;
  align-items: center;
`;

export const IconButton : FC<{
  readonly type: "github" | "link";

} & React.HTMLAttributes<HTMLButtonElement>> = ({ children, onClick, type }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <StyledIconButton
      onClick={onClick}
      isDark={isDark}
    >
      {children}
      &nbsp;
      {type === "link" && <ArrowUpRight size={20} weight="bold"/>}
      {type === "github" && <Github size={20}/>}
    </StyledIconButton>
  );
}