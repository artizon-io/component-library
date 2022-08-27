import React, { FC } from "react";
import { SmileyNervous } from "phosphor-react";
import styled from "@emotion/styled";
import { useTheme } from "../hooks/useTheme";
import { shortTransitionDuration } from "../styles/transition";

const StyledLogo = styled.span<{
  readonly isDark: boolean;
}>`
  & > .logo {
    color: ${props => props.isDark ? 'var(--off-white)' : 'var(--navy)'};
    transition: color ${shortTransitionDuration}s;
  }
`;

export const Logo : FC<{
  readonly size: number;

}> = ({ size }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <StyledLogo
      isDark={isDark}
    >
      <SmileyNervous size={size} className="logo"/>
    </StyledLogo>
  );
}