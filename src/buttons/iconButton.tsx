import React, { FC, SyntheticEvent, useState, useEffect, useContext, ReactNode } from "react";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, GithubLogo } from "phosphor-react";
import { Github } from 'react-bootstrap-icons';
import { FontStyle } from "../styles/font";
import { shortTransitionDuration, longTransitionDuration } from "../styles/transition";


const StyledIconButton = styled.button`
  color: var(--main-100);
  background: var(--main-20);

  padding: 12px 16px;
  border: none;
  border-radius: 8px;

  ${FontStyle({
    size: 16,
    weight: "light",
  })}

  &:hover {
    box-shadow: 0px 0px 32px 8px var(--main-20);
    cursor: pointer;
    transform: scale(1.1);
  }
  transition: box-shadow ${shortTransitionDuration}s, transform ${longTransitionDuration}s, color ${shortTransitionDuration}s, background ${shortTransitionDuration}s;

  display: inline-flex;
  align-items: center;
`;

export const IconButton : FC<{
  readonly type: "github" | "link";

} & React.HTMLAttributes<HTMLButtonElement>> = ({ children, onClick, type, ...props }) => {
  return (
    <StyledIconButton
      onClick={onClick}
      {...props}
    >
      {children}
      &nbsp;
      {type === "link" && <ArrowUpRight size={20} weight="bold"/>}
      {type === "github" && <Github size={20}/>}
    </StyledIconButton>
  );
}