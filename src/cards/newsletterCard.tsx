import React, { FC, SyntheticEvent, useState, useEffect, useContext, ReactNode, ReactElement } from "react";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, GithubLogo, ArrowRight, EnvelopeSimple, SmileyNervous, PaperPlaneRight } from "phosphor-react";
import { Flexbox } from "../layouts/flexbox";
import { NewsletterForm } from "../forms/newsletterForm";
import { CardStyle } from "./cardStyle";
// react-markdown
// https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/#:~:text=react%2Dmarkdown%20is%20a%20React,rely%20on%20the%20dangerouslySetInnerHTML%20prop.
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { FontStyle } from "../styles/font";
import { longTransitionDuration, shortTransitionDuration } from "../styles/transition";
import { Logo } from "../logos/logo";
import { List } from "../lists/list";
import { ListItem } from "../lists/listItem";


const StyledNewsletterCard = styled(Flexbox)`
  ${CardStyle};
  transition: background ${shortTransitionDuration}s, border-color ${shortTransitionDuration}s;

  & > .newsletter-icons {
    align-self: center;

    align-items: center;
    gap: 5px;

    & > svg {
      color: var(--fg-80);
      transition: color ${shortTransitionDuration}s;
    }
    margin-bottom: 30px;
  }
  & > .title {
    color: var(--fg-80);
    transition: color ${shortTransitionDuration}s;

    ${FontStyle({
      size: 22,
      weight: "bold",
    })}

    margin-bottom: 15px;
  }
  /* bullet-points-title */
  & > p {
    color: var(--fg-60);
    transition: color ${shortTransitionDuration}s;

    ${FontStyle({
      size: 18,
      weight: "light",
    })}

    & > a {
      color: var(--main-60);

      ${FontStyle({
        size: 18,
        weight: "normal",
      })}

      text-decoration: underline;
      text-decoration-color: transparent;
      text-underline-offset: 3px;
      text-decoration-thickness: 2px;
      
      &:hover {
        color: var(--main-60);
        text-decoration-color: var(--main-60);
      }
      transition: color ${shortTransitionDuration}s, text-decoration-color ${shortTransitionDuration}s;
    }
  }
  & > .bullet-points {
    margin-bottom: 15px;
  }
  & > .form {
  }
`;

export const NewsletterCard : FC<{
  readonly title : string;
  readonly bulletPointsTitle : string;
  readonly bulletPoints : string[];
  readonly onSubmitBusinessLogic? : (string) => void;

} & React.HTMLAttributes<HTMLDivElement>> = ({ title, bulletPoints, bulletPointsTitle, onSubmitBusinessLogic, ...props }) => {
  return (
    <StyledNewsletterCard
      type="vertical"
      gap={15}
      {...props}
    >
      <Flexbox
        type="horizontal"
        gap={15}
        className="newsletter-icons"
      >
        <Logo size={48}/>
        <ArrowRight size={24}/> 
        <EnvelopeSimple size={48}/>
      </Flexbox>

      <h3 className="title">{title}</h3>

      <ReactMarkdown
        remarkPlugins={[ gfm ]}
      >{bulletPointsTitle}</ReactMarkdown>

      <List
        className="bullet-points"
      >
        {bulletPoints.map((text, index) => <ReactMarkdown components={{
          // @ts-ignore
          p: ListItem
        }} key={index}>{text}</ReactMarkdown>)}
      </List>

      <NewsletterForm
        onSubmitBusinessLogic={onSubmitBusinessLogic}
        className="form"
      />
    </StyledNewsletterCard>
  );
}