import styled from "@emotion/styled";
import { FC } from "react";
import React from "react";
import { ThemeToggleButton } from "../buttons/themeToggleButton";
import { SmileyNervous } from "phosphor-react";
import { AnimatePresence } from 'framer-motion';
import { useThemeContext } from "../hooks/useThemeContext";
import { shortTransitionDuration, longTransitionDuration } from "../styles/transition";
import { Logo } from "../logos/logo";

// See position: fixed + width: 100% fix
// https://stackoverflow.com/questions/18442628/position-fixed-width-100

const NavbarStyle = styled.nav`
  position: fixed;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 40px;
  border-bottom: 1px solid var(--bg-60);
  transition: border-bottom ${longTransitionDuration}s;
  backdrop-filter: blur(10px);
`;

export const Navbar : FC<{}> = ({ ...props }) => {
  return (
    <NavbarStyle {...props}>
      <a href="#"><Logo size={45}/></a>
      <ThemeToggleButton/>
    </NavbarStyle>
  );
}