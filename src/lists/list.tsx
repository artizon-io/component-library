import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import { useTheme } from "../hooks/useTheme";
import { ListItem } from "./listItem";


const StyledList = styled.ul<{
  readonly isDark: boolean;
}>`
  list-style: none;

  & > li:not(:first-child) {
    margin-top: 20px;
  }
`;

export const List : FC<{
  readonly children: ReactNode[];

} & React.HTMLAttributes<HTMLUListElement>> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <StyledList
      isDark={isDark}
    >
      {children}
    </StyledList>
  );
}