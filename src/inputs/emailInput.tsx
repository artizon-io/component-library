import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { At } from "phosphor-react";
import { FontStyle } from "../styles/font";
import { useTheme } from "../hooks/useTheme";
import { longTransitionDuration, shortTransitionDuration } from "../styles/transition";

// For affect the FOLLOWING sibling when element is hovered, see
// https://stackoverflow.com/questions/12574668/change-color-of-sibling-elements-on-hover-using-css

const EmailInputStyle = styled.div<{
  readonly isDark : boolean;
}>`
  display: inline-block;

  position: relative;
  & > svg {
    color: ${props => props.isDark ? 'var(--gray)' : 'var(--light-gray)'};

    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    margin: auto 0;

    transition: color ${shortTransitionDuration}s;
  }
  & > .input {
    width: 100%;

    border-radius: 8px;
    border: 1px solid ${props => props.isDark ? 'var(--medium-dark-gray)' : 'var(--off-off-white)'};
    outline: none;
    background: ${props => props.isDark ? 'var(--black)' : 'var(--white)'};

    padding: 12px 16px;
    padding-left: 42px;

    color: var(--gray);

    ${FontStyle({
      size: 16,
      weight: "light",
    })}

    &:hover, &:focus, &:active {
      box-shadow: 0px 0px 32px 8px ${props => props.isDark ? 'var(--dark-blue)' : 'var(--light-blue)'};;

      color: ${props => props.isDark ? 'var(--off-white)' : 'var(--navy)'};
      border-color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};
      & + svg {
        color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};
      }
    }
    transition: color ${shortTransitionDuration}s, box-shadow ${longTransitionDuration}s, border-color ${shortTransitionDuration}s, background ${shortTransitionDuration}s;

    &::placeholder {
      color: ${props => props.isDark ? 'var(--gray)' : 'var(--light-gray)'};
      transition: color ${shortTransitionDuration}s;
    }
  }
`;

export const EmailInput : FC<{
  readonly required?: boolean
  readonly value?: string

} & React.HTMLAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLInputElement>> = ({
  required, onChange, value, className
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <EmailInputStyle
      className={className}
      isDark={isDark}
    >
      <input
        type="email"
        placeholder="your@email.com" 
        required={required}
        onChange={onChange}
        value={value}
        className="input"
      />
      <At size={22} weight="regular" />
    </EmailInputStyle>
  );
}