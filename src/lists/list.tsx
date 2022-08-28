import React, { FC } from "react";
import styled from "@emotion/styled";
import { ArrowRight } from "phosphor-react";
import ReactMarkdown from 'react-markdown';
import { FontStyle } from "../styles/font";
import { useTheme } from "../hooks/useTheme";
import { shortTransitionDuration } from "../styles/transition";


const StyledList = styled.ul<{
  readonly isDark: boolean;
}>`
  list-style: none;

  & > li {
    & > p {
      color: ${props => props.isDark ? 'var(--light-gray)' : 'var(--gray)'};
      transition: color ${shortTransitionDuration}s;

      ${FontStyle({
        size: 18,
        weight: "light",
      })}

      line-height: 1.5;

      display: inline;

      & > em {
        color: ${props => props.isDark ? 'var(--off-off-white)' : 'var(--medium-dark-gray)'};
        transition: color ${shortTransitionDuration}s;

        ${FontStyle({
          size: 18,
          weight: "normal",
          style: "italic"
        })}
      }
    }
    & > svg {
      color: var(--blue);
    }
    &:not(:nth-of-type(1)) {
      margin-top: 20px;  
    }
  }
`;

export const List : FC<{
  readonly bulletPoints : string[];

} & React.HTMLAttributes<HTMLUListElement>> = ({ bulletPoints }) => {
  // useEffect(() => {
  //   console.log(bulletPoints);
  // }, []);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <StyledList
      isDark={isDark}
    >
      {bulletPoints.map((elem, index) =>
        <li key={index}>
          <ArrowRight size={20} weight="bold"/>
          &nbsp;
          <ReactMarkdown>{elem}</ReactMarkdown>
        </li>
      )}
    </StyledList>
  );
}