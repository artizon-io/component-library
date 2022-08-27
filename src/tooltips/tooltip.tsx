import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  content: string | React.ReactNode;
  visuallyHiddenText?: string;
}

export const Tooltip : FC<Props> = ({children, content, visuallyHiddenText}) => {
  return (
    <>
      {children}
    </>
  )
}