import styled from "@emotion/styled";
import React,{ FC } from "react";
import { Flexbox } from "../layouts/flexbox";
import { FontStyle } from "../styles/font";
import { GradientWithPicCard } from "../cards/gradientWithPicCard"
import { colorScheme } from "../helpers";
import { useThemeContext } from "../hooks/useThemeContext";
import { shortTransitionDuration } from "../styles/transition";

const StyledGradientShowcase = styled(Flexbox)<{
  readonly isDark: boolean;
}>`
  & > .card {

  }
  & > .title {
    ${FontStyle({
      size: 22,
      weight: "normal"
    })}

    color: ${props => props.isDark ? 'var(--off-white)' : 'var(--navy)'};
    transition: color ${shortTransitionDuration}s;
  }
  & > .description {
    ${FontStyle({
      size: 18,
      weight: "light"
    })}

    color: ${props => props.isDark ? 'var(--light-gray)' : 'var(--medium-dark-gray)'};
    transition: color ${shortTransitionDuration}s;
  }
`;

export const GradientShowcase : FC<{
  readonly colorScheme: colorScheme;
  readonly title: string;
  readonly description: string;
  readonly pic: string;

}> = ({ colorScheme, title, description, pic }) => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <StyledGradientShowcase
      type="vertical"
      gap={15}
      isDark={isDark}
    >
      <GradientWithPicCard
        colorScheme={colorScheme}
        pic={pic}
      />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </StyledGradientShowcase>
  );
};