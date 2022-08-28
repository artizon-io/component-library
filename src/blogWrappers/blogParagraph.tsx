import styled from "@emotion/styled"
import { shortTransitionDuration } from "../styles/transition";
import { FontStyle } from "../styles/font";
import React, { FC } from "react";
import { useThemeContext } from "../hooks/useThemeContext";

const StyledBlogParagraph = styled.p<{
  readonly isDark: boolean;
}>`
  color: ${props => props.isDark ? 'var(--light-gray)' : 'var(--gray)'};
  transition: color ${shortTransitionDuration}s;

  ${FontStyle({
    size: 18,
    weight: "light",
  })}

  & > a {
    color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};

    ${FontStyle({
      size: 18,
      weight: "normal",
    })}

    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: 3px;
    text-decoration-thickness: 2px;

    &:hover {
      text-decoration-color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};
    }
    transition: color ${shortTransitionDuration}s, text-decoration-color ${shortTransitionDuration}s;
  }
`;

export const BlogParagraph : FC<{

} & React.HTMLAttributes<HTMLParagraphElement>> = ({ children }) => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <StyledBlogParagraph
      isDark={isDark}
    >
      {children}
    </StyledBlogParagraph>
  )
}