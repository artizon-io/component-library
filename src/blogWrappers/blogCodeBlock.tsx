import React, { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react';
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import styled from '@emotion/styled';
import { useTheme } from '../hooks/usetheme';
import { FontStyle } from '../styles/font';
import { CardStyle } from '../cards/cardStyle';
import { longTransitionDuration, shortTransitionDuration } from '../styles/transition';


const Pre = styled.pre<{
  readonly isDark: boolean;
}>`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;

  .token.comment,
  .token.doctype {
    color: ${props => props.isDark ? 'var(--gray)' : 'var(--light-gray)'};
  }
  
  .token.prolog,
  .token.parameter,
  .token.imports,
  .token.plain,
  .token.cdata,
  .token.template-string,
  .token.interpolation
  {
    color: ${props => props.isDark ? 'var(--light-gray)' : 'var(--gray)'};
  }

  .token.punctuation,
  .token.property-access {
    color: ${props => props.isDark ? 'var(--light-gray)' : 'var(--gray)'};
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};
  }

  .token.selector,
  .token.attr-name,
  .token.char,
  .token.builtin,
  .token.number,
  .token.string,
  .token.inserted {
    color: ${props => props.isDark ? '#FD4FA6' : '#CD176C'};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .style {
    color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};
  }

  .token.function,
  .token.maybe-class-name,
  .token.class-name {
    color: ${props => props.isDark ? '#FD4FA6' : '#CD176C'};
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: ${props => props.isDark ? 'var(--blue)' : 'var(--royal)'};
  }
  
  ${FontStyle({
    size: 14,
    weight: "light",
    lineHeight: 1.6
  })}
  font-family: FiraCode;
  
  background: inherit;
  /* background: ${props => props.isDark ? 'var(--dark-gray)' : 'var(--white)'}; */
  transition: background 1s, font ${shortTransitionDuration};
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span<{
  readonly isDark: boolean;
}>`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;

  color: ${props => props.isDark ? 'var(--gray)' : 'var(--light-gray)'};
  transition: font ${shortTransitionDuration}s;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const StyledBlogCodeBlock = styled.div<{
  readonly isDark: boolean;
}>`
  ${CardStyle}
  padding: 0;
  transition: background 1s, border-color ${shortTransitionDuration};
`;

export const BlogCodeBlock : FC<any> = (props) => {
  const { children, className } = props.children.props;
  const lang = className.match(/language-(?<lang>.*)/).groups.lang;

  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <StyledBlogCodeBlock isDark={isDark}>
      <Highlight {...defaultProps} code={children} language={lang} theme={{
        plain: {},
        styles: []
      }}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style} isDark={isDark}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo isDark={isDark}>{i + 1}</LineNo>
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