import React, { FC } from "react";
import styled from "@emotion/styled";
import { useTheme } from "../hooks/useTheme";
import { FontStyle } from "../styles/font";
import { shortTransitionDuration } from "../styles/transition";

const StyledArticleCard = styled.div<{
  readonly isDark: boolean;
}>`
  &:hover {
    & > .title {
      color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};
    }
    background: ${props => props.isDark ? 'var(--dark-blue)' : 'var(--light-blue)'};
    cursor: pointer;
  }
  transition: background ${shortTransitionDuration}s;

  padding: 10px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  & > .date {
    ${FontStyle({
      size: 13,
      weight: "normal"
    })}
    color: ${props => props.isDark ? 'var(--light-gray)' : 'var(--medium-dark-gray)'};
    transition: color ${shortTransitionDuration}s;

    width: 100px;
  }
  & > .title {
    ${FontStyle({
      size: 18,
      weight: "normal"
    })}
    color: ${props => props.isDark ? 'var(--off-white)' : 'var(--navy)'};

    &:hover {
      color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};
    }
    transition: color ${shortTransitionDuration}s;
  }
`;

export const ArticleCard : FC<{
  readonly date: string;
  readonly title: string;

}> = ({ date, title }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <StyledArticleCard
      isDark={isDark}
    >
      <span className="date">{date}</span>
      <span className="title">{title}</span>
    </StyledArticleCard>
  );
}