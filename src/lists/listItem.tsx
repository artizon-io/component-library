import styled from "@emotion/styled"
import React, { FC } from "react";
import { shortTransitionDuration } from "../styles/transition";
import { FontStyle } from "../styles/font";
import { useThemeContext } from "../hooks/useThemeContext";
import { ArrowRight } from "phosphor-react";


const StyledListItem = styled.li<{
  readonly isDark: boolean;
}>`
  color: ${props => props.isDark ? 'var(--light-gray)' : 'var(--gray)'};
  transition: color ${shortTransitionDuration}s;

  ${FontStyle({
    size: 18,
    weight: "light",
  })}

  & > em {
    color: ${props => props.isDark ? 'var(--off-off-white)' : 'var(--medium-dark-gray)'};
    transition: color ${shortTransitionDuration}s;

    ${FontStyle({
      size: 18,
      weight: "normal",
      style: "italic"
    })}
  }
  & > svg {
    color: var(--blue);
  }
`;

export const ListItem : FC<{

} & React.HTMLAttributes<HTMLLIElement>> = ({ children }) => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <StyledListItem
      isDark={isDark}
    >
      <ArrowRight size={20} weight="bold"/>
      &nbsp;
      {children}
    </StyledListItem>
  );
}