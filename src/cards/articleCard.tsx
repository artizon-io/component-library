import React, { FC } from "react";
import styled from "@emotion/styled";
import { FontStyle } from "../styles/font";
import { shortTransitionDuration } from "../styles/transition";

const StyledArticleCard = styled.div`
  &:hover {
    & > .title {
      color: var(--main-80);
    }
    background: var(--main-20);;
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
    color: var(--fg-40);;
    transition: color ${shortTransitionDuration}s;

    width: 100px;
  }
  & > .title {
    ${FontStyle({
      size: 18,
      weight: "normal"
    })}
    color: var(--fg-80);;

    &:hover {
      color: var(--main-80);;
    }
    transition: color ${shortTransitionDuration}s;
  }
`;

export const ArticleCard : FC<{
  readonly date: string;
  readonly title: string;

}> = ({ date, title, ...props }) => {
  return (
    <StyledArticleCard
      {...props}
    >
      <span className="date">{date}</span>
      <span className="title">{title}</span>
    </StyledArticleCard>
  );
}