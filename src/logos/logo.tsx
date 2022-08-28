import React, { FC } from "react";
import { SmileyNervous } from "phosphor-react";
import styled from "@emotion/styled";
import { useThemeContext } from "../hooks/useThemeContext";
import { shortTransitionDuration } from "../styles/transition";

const StyledLogo = styled.span`
  & > .logo {
    color: var(--fg-80);
    transition: color ${shortTransitionDuration}s;
  }
`;

export const Logo : FC<{
  readonly size: number;

}> = ({ size, ...props }) => {
  return (
    <StyledLogo {...props}>
      <SmileyNervous size={size} className="logo"/>
    </StyledLogo>
  );
}