import styled from "@emotion/styled"
import React, { FC } from "react";
import { shortTransitionDuration } from "../styles/transition";
import { FontStyle } from "../styles/font";
import { useThemeContext } from "../hooks/useThemeContext";
import { ArrowRight } from "phosphor-react";


const StyledListItem = styled.li`
  color: var(--fg-60);
  transition: color ${shortTransitionDuration}s;

  ${FontStyle({
    size: 18,
    weight: "light",
  })}

  & > em {
    color: var(--fg-80);
    transition: color ${shortTransitionDuration}s;

    ${FontStyle({
      size: 18,
      weight: "normal",
      style: "italic"
    })}
  }
  & > svg {
    color: var(--main-60);
    position: relative;
    top: 3px;
  }
  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;

export const ListItem : FC<{

} & React.HTMLAttributes<HTMLLIElement>> = ({ children, ...props }) => {
  return (
    <StyledListItem {...props}>
      <ArrowRight size={20} weight="bold"/>
      &nbsp;
      {children}
    </StyledListItem>
  );
}