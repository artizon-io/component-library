import styled from "@emotion/styled"
import { shortTransitionDuration } from "../styles/transition";
import { FontStyle } from "../styles/font";
import React, { FC } from "react";
import { useThemeContext } from "../hooks/useThemeContext";

const StyledBlogParagraph = styled.p`
  color: var(--fg-60);
  transition: color ${shortTransitionDuration}s;

  ${FontStyle({
    size: 18,
    weight: "light",
  })}

  & > a {
    color: var(--main-60);

    ${FontStyle({
      size: 18,
      weight: "normal",
    })}

    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: 3px;
    text-decoration-thickness: 2px;

    &:hover {
      text-decoration-color: var(--main-60);
    }
    transition: color ${shortTransitionDuration}s, text-decoration-color ${shortTransitionDuration}s;
  }
`;

export const BlogParagraph : FC<{

} & React.HTMLAttributes<HTMLParagraphElement>> = ({ children, ...props }) => {
  return (
    <StyledBlogParagraph
      {...props}
    >
      {children}
    </StyledBlogParagraph>
  )
}