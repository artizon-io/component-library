import React, { FC, SyntheticEvent, useState, useEffect, useContext, ReactNode } from "react";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, GithubLogo } from "phosphor-react";
import { FontStyle } from "../styles/font";
import { useTheme } from "../hooks/useTheme";
import { longTransitionDuration, shortTransitionDuration } from "../styles/transition";


const StyledSimpleButton = styled.button<{
  readonly isDark : boolean;
}>`
  color: var(--off-white);
  background: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};

  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  outline: none;

  ${FontStyle({
    size: 16,
    weight: "light",
  })}

  &:hover {
    box-shadow: 0px 0px 32px 8px ${props => props.isDark ? 'var(--blue)' : 'var(--blue)'};
    cursor: pointer;
  }
  transition: box-shadow ${longTransitionDuration}s, color ${shortTransitionDuration}s, background ${shortTransitionDuration}s;
`;

export const SimpleButton : FC<{
  readonly type?: string;

} & React.HTMLAttributes<HTMLButtonElement>> = ({ children, onClick }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <StyledSimpleButton
      onClick={onClick}
      isDark={isDark}
    >{children}</StyledSimpleButton>
  );
}