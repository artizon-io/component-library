import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import { useThemeContext } from "../hooks/useThemeContext";
import { ListItem } from "./listItem";


const StyledList = styled.ul`
  list-style: none;

  & > li:not(:first-child) {
    margin-top: 20px;
  }
`;

export const List : FC<{
  readonly children: ReactNode[];

} & React.HTMLAttributes<HTMLUListElement>> = ({ children, ...props }) => {
  return (
    <StyledList {...props}>
      {children}
    </StyledList>
  );
}