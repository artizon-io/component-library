import React, { FC, SyntheticEvent, useState, useEffect, useContext, ReactNode } from "react";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, GithubLogo } from "phosphor-react";
import { FontStyle } from "../styles/font";
import { longTransitionDuration, shortTransitionDuration } from "../styles/transition";


const StyledSimpleButton = styled.button`
  color: var(--fg-80);
  background: var(--main-20);

  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  outline: none;

  ${FontStyle({
    size: 16,
    weight: "light",
  })}

  &:hover {
    box-shadow: 0px 0px 32px 8px var(--main-20);
    cursor: pointer;
  }
  transition: box-shadow ${longTransitionDuration}s, color ${shortTransitionDuration}s, background ${shortTransitionDuration}s;
`;

export const SimpleButton : FC<{

} & React.HTMLAttributes<HTMLButtonElement>> = ({ children, onClick, ...props }) => {
  return (
    <StyledSimpleButton
      onClick={onClick}
      {...props}
    >{children}</StyledSimpleButton>
  );
}