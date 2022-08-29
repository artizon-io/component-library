import React, { FC, useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FontStyle } from "../styles/font";
import { useThemeContext } from "../hooks/useThemeContext";
import { shortTransitionDuration } from "../styles/transition";


const SubHeadingStyle = styled.h2`
  color: var(--fg-60);

  ${FontStyle({
    size: 26,
    weight: "bold",
  })}
  transition: color ${shortTransitionDuration}s;
`;

export const SubHeading : FC<{

} & React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <SubHeadingStyle {...props}>{children}</SubHeadingStyle>
  );
}