import styled from "@emotion/styled";
import React, { FC } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import { shortTransitionDuration, longTransitionDuration } from "../styles/transition";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Logo } from "../logos/logo";
import { FontStyle } from "../styles/font";


const StyledFooter = styled.footer<{
  readonly isDark: boolean;
}>`
  background: transparent;
  border-top: 1px solid ${props => props.isDark ? 'var(--medium-dark-gray)' : 'var(--off-off-white)'};
  transition: border-top ${longTransitionDuration}s;
  padding: 50px;

  & > .nav {
    & > ul {
      width: 60%;
      list-style: none;

      & > li > p > a {
        ${props => FontStyle({
          size: 13,
          weight: "normal"
        })}

        color: ${props => props.isDark ? 'var(--off-off-white)' : 'var(--gray)'};
        text-decoration: underline;
        text-decoration-color: transparent;
        text-underline-offset: 3px;
        text-decoration-thickness: 1px;

        &:hover {
          color: ${props => props.isDark ? 'var(--off-white)' : 'var(--medium-dark-gray)'};
          text-decoration-color: ${props => props.isDark ? 'var(--off-white)' : 'var(--medium-dark-gray)'};
        }

        transition: color ${shortTransitionDuration}s, text-decoration-color ${shortTransitionDuration}s;
      }
    }
    margin-bottom: 30px;
  }
  & > .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
      ${props => FontStyle({
        size: 13,
        weight: "normal"
      })}

      color: ${props => props.isDark ? 'var(--off-white)' : 'var(--medium-dark-gray)'};
      transition: color ${shortTransitionDuration}s;

      & > em {
        ${props => FontStyle({
          size: 13,
          weight: "light",
          style: "italic"
        })}
      }
    }
  }
`;

export const Footer : FC<{
  readonly navs: string[];
  readonly copyright: string;

}> = ({ navs, copyright }) => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <StyledFooter
      isDark={isDark}
    >
      <nav className="nav">
        <ul>
          {navs.map((nav, index) =>
            <li key={index}>
              <ReactMarkdown remarkPlugins={[ gfm ]}>{nav}</ReactMarkdown>
            </li>
          )}
        </ul>
      </nav>
      <div className="copyright">
        <ReactMarkdown>{copyright}</ReactMarkdown>
        <Logo size={30}/>
      </div>
    </StyledFooter>
  );
}