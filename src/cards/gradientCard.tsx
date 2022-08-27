import React, { FC, SyntheticEvent, useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, GithubLogo, ArrowRight, EnvelopeSimple, SmileyNervous, PaperPlaneRight } from "phosphor-react";
import { ThemeContext } from "../contexts/themeContext";
import { colorScheme, copyToClipboard, getColorsFromScheme } from "../helpers";
import { Flexbox } from "../layouts/flexbox";
import { CardStyle } from "./cardStyle";
import { FontStyle } from "../styles/font";
import { useTheme } from "../hooks/useTheme";
import { longTransitionDuration, shortTransitionDuration } from "../styles/transition";
import { GradientCardStyle } from "./gradientCardStyle";


const StyledGradientCard = styled(Flexbox)<{
  readonly colorFrom : string;
  readonly colorTo : string;
  readonly isDark : boolean;
}>`
  ${props => GradientCardStyle({
    isDark: props.isDark,
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
    -webkit-text-fill-color: transparent;
  }
  & > .body {
    color: ${props => props.isDark ? 'var(--light-gray)' : 'var(--gray)'};
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

}> = ({ title, body, colorScheme }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  let [colorFrom, colorTo] = getColorsFromScheme(colorScheme, isDark);

  return (
    <StyledGradientCard
      type="vertical"
      gap="small"
      colorFrom={colorFrom}
      colorTo={colorTo}
      isDark={isDark}
    >
      <h3 className="title">{title}</h3>
      <p className="body">{body}</p>
    </StyledGradientCard>
  );
}