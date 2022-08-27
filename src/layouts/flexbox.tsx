import React, { FC, ReactNode, SyntheticEvent, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";


export const StyledFlexbox = styled.div<{
  readonly type: "horizontal" | "vertical";
  readonly gap: "big" | "small";
}>`
  display: flex;
  flex-direction: ${props => props.type === "horizontal" ? "row" : "column"};
  gap: ${props => props.gap === "big" ? "48px" : "16px"};
`;

// For why "className" prop, see
// https://styled-components.com/docs/basics#styling-any-component

export const Flexbox : FC<{
  readonly type: "horizontal" | "vertical";
  readonly gap: "big" | "small";

} & React.HTMLAttributes<HTMLDivElement>> = ({children, type, gap, className}) => {
  return (
    <StyledFlexbox
      type={type}
      gap={gap}
      className={className}
    >
      {children}
    </StyledFlexbox>
  );
}