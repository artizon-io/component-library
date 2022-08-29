import styled from "@emotion/styled"
import { shortTransitionDuration } from "../styles/transition";
import { FontStyle } from "../styles/font";
import React, { FC } from "react";


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
  & > em {
    color: var(--fg-80);

    ${FontStyle({
      size: 18,
      weight: "normal",
      style: "italic"
    })}
  }
  & > b {
    color: var(--fg-80);

    ${FontStyle({
      size: 18,
      weight: "bold",
    })}
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