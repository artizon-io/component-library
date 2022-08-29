import styled from "@emotion/styled";
import React, { FC } from "react";
import { FontStyle } from "../styles/font";
import { shortTransitionDuration } from "../styles/transition";

const StyledBlogCodeInline = styled.code`
  font-family: FiraCode;

  ${FontStyle({
    size: 18,
    weight: "normal"
  })}

  border-radius: 3px;

  background: var(--bg-60);
  color: var(--main-80);

  padding: 2px 8px;

  word-break: break-word;
  transition: background ${shortTransitionDuration}s, color ${shortTransitionDuration}s;
`;

export const BlogCodeInline : FC<{

} & React.HTMLAttributes<HTMLSpanElement>> = ({ children, ...props }) => {
  return (
    <StyledBlogCodeInline {...props}>
      {children}
    </StyledBlogCodeInline>
  )
}