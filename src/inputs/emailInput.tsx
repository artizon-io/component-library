import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { At } from "phosphor-react";
import { FontStyle } from "../styles/font";
import { useThemeContext } from "../hooks/useThemeContext";
import { longTransitionDuration, shortTransitionDuration } from "../styles/transition";

// For affect the FOLLOWING sibling when element is hovered, see
// https://stackoverflow.com/questions/12574668/change-color-of-sibling-elements-on-hover-using-css

const EmailInputStyle = styled.div`
  display: inline-block;

  position: relative;
  & > svg {
    color: var(--fg-20);

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
    border: 1px solid var(--bg-40);
    outline: none;
    background: var(--bg-100);

    padding: 12px 16px;
    padding-left: 42px;

    color: var(--fg-20);

    ${FontStyle({
      size: 16,
      weight: "light",
    })}

    &:hover, &:focus, &:active {
      box-shadow: 0px 0px 32px 8px var(--main-20);

      color: var(--fg-60);
      border-color: var(--main-60);
      & + svg {
        color: var(--main-60);
      }
    }
    transition: color ${shortTransitionDuration}s, box-shadow ${longTransitionDuration}s, border-color ${shortTransitionDuration}s, background ${shortTransitionDuration}s;

    &::placeholder {
      color: var(--fg-20);
      transition: color ${shortTransitionDuration}s;
    }
  }
`;

export const EmailInput : FC<{
  readonly required?: boolean
  readonly value?: string

} & React.HTMLAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLInputElement>> = ({
  required, onChange, value, ...props
}) => {
  return (
    <EmailInputStyle {...props}>
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