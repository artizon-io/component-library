import styled from "@emotion/styled";
import React, { FC } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import { shortTransitionDuration, longTransitionDuration } from "../styles/transition";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Logo } from "../logos/logo";
import { FontStyle } from "../styles/font";


const StyledFooter = styled.footer`
  background: transparent;
  border-top: 1px solid var(--bg-60);
  transition: border-top ${longTransitionDuration}s;
  padding: 50px;

  & > .nav {
    & > ul {
      width: 100%;
      list-style: none;

      & > li > p > a {
        ${props => FontStyle({
          size: 13,
          weight: "normal"
        })}

        color: var(--fg-40);
        text-decoration: underline;
        text-decoration-color: transparent;
        text-underline-offset: 3px;
        text-decoration-thickness: 1px;

        &:hover {
          color: var(--fg-80);
          color: var(--fg-60);
        }

        transition: color ${shortTransitionDuration}s, text-decoration-color ${shortTransitionDuration}s;
      }

      display: grid;
      gap: 10px;

      /* grid-template-columns: repeat(3, minmax(240px, 1fr)); */
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));  // dynamically calculate no. rows needed
      @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
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

      color: var(--fg-20);
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

}> = ({ navs, copyright, ...props }) => {
  return (
    <StyledFooter {...props}>
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