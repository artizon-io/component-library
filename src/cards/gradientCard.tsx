import React, { FC, SyntheticEvent, useState, useEffect, useContext, useMemo } from "react";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, GithubLogo, ArrowRight, EnvelopeSimple, SmileyNervous, PaperPlaneRight } from "phosphor-react";
import { ThemeContext } from "../contexts/themeContext";
import { colorScheme, copyToClipboard, getColorsFromScheme } from "../helpers";
import { Flexbox } from "../layouts/flexbox";
import { CardStyle } from "./cardStyle";
import { FontStyle } from "../styles/font";
import { useThemeContext } from "../hooks/useThemeContext";
import { longTransitionDuration, shortTransitionDuration } from "../styles/transition";
import { GradientCardStyle } from "./gradientCardStyle";


const StyledGradientCard = styled(Flexbox)<{
  readonly colorFrom: string
  readonly colorTo: string;
}>`
  ${props => GradientCardStyle({
    colorFrom: props.colorFrom,
    colorTo: props.colorTo
  })};
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  transition: transform ${longTransitionDuration}s, background ${shortTransitionDuration}s, border-color ${shortTransitionDuration}s;

  & > .title {
    ${FontStyle({
      size: 22,
      weight: "bold",
    })}

    background: linear-gradient(to right, ${props => props.colorFrom}, ${props => props.colorTo});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & > .body {
    color: var(--fg-60);
    transition: color ${shortTransitionDuration}s;

    ${FontStyle({
      size: 18,
      weight: "light",
    })}
  }
`;

export const GradientCard : FC<{
  readonly title: string;
  readonly body: string;
  readonly colorScheme: colorScheme;

}> = ({ title, body, colorScheme, ...props }) => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  // let [colorFrom, colorTo] = useMemo(() => getColorsFromScheme(colorScheme, isDark), [isDark]);
  let [colorFrom, colorTo] = getColorsFromScheme(colorScheme, isDark);

  return (
    <StyledGradientCard
      type="vertical"
      gap={15}
      colorFrom={colorFrom}
      colorTo={colorTo}
      {...props}
    >
      <h3 className="title">{title}</h3>
      <p className="body">{body}</p>
    </StyledGradientCard>
  );
}