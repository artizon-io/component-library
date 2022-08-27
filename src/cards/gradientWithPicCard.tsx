import styled from "@emotion/styled";
import React,{ FC } from "react";
import { Flexbox } from "../layouts/flexbox";
import { FontStyle } from "../styles/font";
import { GradientCardStyle } from "./gradientCardStyle";
import { colorScheme, getColorsFromScheme } from "../helpers";
import { useTheme } from "../hooks/useTheme";
import { longTransitionDuration } from "../styles/transition";


const StyledGradientWithPicCard = styled(Flexbox)<{
  readonly colorFrom : string;
  readonly colorTo : string;
  readonly isDark : boolean;
}>`
  ${props => GradientCardStyle({
    colorFrom: props.colorFrom,
    colorTo: props.colorTo,
    isDark: props.isDark
  })}
  background: linear-gradient(to right, ${props => props.colorFrom}, ${props => props.colorTo});
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
    transform: scale(1.05) translateY(-20px);
  }
  transition: transform ${longTransitionDuration}s;
  & > .pic {
  }
`;

export const GradientWithPicCard : FC<{
  readonly colorScheme: colorScheme;
  readonly pic: string;

} & React.HTMLAttributes<HTMLDivElement>> = ({ colorScheme, pic }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Always use ligher shades regardless of theme
  let [colorFrom, colorTo] = getColorsFromScheme(colorScheme, true);

  return (
    <StyledGradientWithPicCard
      type="vertical"
      gap="small"
      colorFrom={colorFrom}
      colorTo={colorTo}
      isDark={isDark}
    >
      <img src={pic} className="pic"/>
    </StyledGradientWithPicCard>
  );
};