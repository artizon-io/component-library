import styled from "@emotion/styled";
import React,{ FC } from "react";
import { Flexbox } from "../layouts/flexbox";
import { FontStyle } from "../styles/font";
import { GradientWithPicCard } from "../cards/gradientWithPicCard"
import { colorScheme } from "../helpers";
import { useThemeContext } from "../hooks/useThemeContext";
import { shortTransitionDuration } from "../styles/transition";

const StyledGradientShowcase = styled(Flexbox)`
  & > .card {

  }
  & > .title {
    ${FontStyle({
      size: 22,
      weight: "normal"
    })}

    color: var(--fg-80);
    transition: color ${shortTransitionDuration}s;
  }
  & > .description {
    ${FontStyle({
      size: 18,
      weight: "light"
    })}

    color: var(--fg-60);
    transition: color ${shortTransitionDuration}s;
  }
`;

export const GradientShowcase : FC<{
  readonly colorScheme: colorScheme;
  readonly title: string;
  readonly description: string;
  readonly pic: string;

}> = ({ colorScheme, title, description, pic, ...props }) => {
  return (
    <StyledGradientShowcase
      type="vertical"
      gap={15}
      {...props}
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