import React, { FC, useState, useContext } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FontStyle } from "../styles/font";
import { ThemeContext } from "../contexts/themeContext";
import { shortTransitionDuration } from "../styles/transition";


const HeadingStyle = styled.div`
  & > .main-text {
    color: var(--fg-80);
    transition: color ${shortTransitionDuration}s;

    ${FontStyle({
      size: 36,
      weight: "superbold",
    })}
  }
  & > .secondary-text {
    color: var(--fg-40);
    transition: color ${shortTransitionDuration}s;

    ${FontStyle({
      size: 36,
      weight: "bold",
    })}
  }
`;

export const Heading : FC<{
  readonly mainText: string;
  readonly secondaryText: string;

} & React.HTMLAttributes<HTMLDivElement>> = ({ mainText, secondaryText, ...props }) => {
  return (
    <HeadingStyle {...props}>
      <h1 className="main-text">{mainText}</h1>
      <p className="secondary-text">{secondaryText}</p>
    </HeadingStyle>
  );
}