import React, { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react';
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import styled from '@emotion/styled';
import { useThemeContext} from '../hooks/useThemeContext';
import { FontStyle } from '../styles/font';
import { CardStyle } from '../cards/cardStyle';
import { longTransitionDuration, shortTransitionDuration } from '../styles/transition';


const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;

  .token.comment,
  .token.doctype {
    color: var(--fg-40);
  }
  
  .token.prolog,
  .token.parameter,
  .token.imports,
  .token.plain,
  .token.cdata,
  .token.template-string,
  .token.interpolation
  {
    color: var(--fg-40);
  }

  .token.punctuation,
  .token.property-access {
    color: var(--fg-40);
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--main-80);
  }

  .token.selector,
  .token.attr-name,
  .token.char,
  .token.builtin,
  .token.number,
  .token.string,
  .token.inserted {
    color: var(--second-80);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .style {
    color: var(--main-80);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--main-80);
  }

  .token.function,
  .token.maybe-class-name,
  .token.class-name {
    color: var(--second-80);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: var(--main-80);
  }
  
  ${FontStyle({
    size: 14,
    weight: "light",
    lineHeight: 1.6
  })}
  font-family: FiraCode;
  
  background: inherit;
  transition: background 1s, font ${shortTransitionDuration};
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;

  color: var(--fg-40);
  transition: font ${shortTransitionDuration}s;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const StyledBlogCodeBlock = styled.div`
  ${CardStyle}
  padding: 0;
  transition: background 1s, border-color ${shortTransitionDuration};
`;

export const BlogCodeBlock : FC<any> = (props) => {
  const { children, className, ...childrenProps } = props.children.props;
  const lang = className.match(/language-(?<lang>.*)/).groups.lang;

  return (
    <StyledBlogCodeBlock {...childrenProps}>
      <Highlight {...defaultProps} code={children} language={lang} theme={{
        plain: {},
        styles: []
      }}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </StyledBlogCodeBlock>
  )
}