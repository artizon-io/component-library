import styled from "@emotion/styled";
import React, { FC } from "react";
import { FontStyle } from "../styles/font";

const StyledBlogCodeInline = styled.code`
  font-family: FiraCode;

  ${FontStyle({
    size: 18,
    weight: "normal"
  })}

  border-radius: 3px;
  border: 1px solid var(--bg-40);

  background: var(--fg-60);
  color: var(--main-80);

  padding: 2px 8px;

  word-break: break-word;
  box-shadow: 0px 0px 32px 8px var(--fg-60);
`;

export const BlogCodeInline : FC<{

} & React.HTMLAttributes<HTMLSpanElement>> = ({ children, ...props }) => {
  return (
    <StyledBlogCodeInline {...props}>
      {children}
    </StyledBlogCodeInline>
  )
}