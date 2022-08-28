import styled from "@emotion/styled";
import React,{ FC } from "react";
import { Flexbox } from "../layouts/flexbox";
import { FontStyle } from "../styles/font";
import { GradientCardStyle } from "./gradientCardStyle";
import { colorScheme, getColorsFromScheme } from "../helpers";
import { useThemeContext } from "../hooks/useThemeContext";
import { longTransitionDuration } from "../styles/transition";


const StyledGradientWithPicCard = styled(Flexbox)<{
  readonly colorFrom : string;
  readonly colorTo : string;
}>`
  ${props => GradientCardStyle({
    colorFrom: props.colorFrom,
    colorTo: props.colorTo,
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

} & React.HTMLAttributes<HTMLDivElement>> = ({ colorScheme, pic, ...props }) => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  // Always use ligher shades regardless of theme
  let [colorFrom, colorTo] = getColorsFromScheme(colorScheme, true);

  return (
    <StyledGradientWithPicCard
      type="vertical"
      gap={15}
      colorFrom={colorFrom}
      colorTo={colorTo}
      {...props}
    >
      <img src={pic} className="pic"/>
    </StyledGradientWithPicCard>
  );
};