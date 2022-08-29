import styled from "@emotion/styled"
import React, { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { BlogHeading } from "./blogHeading";
import { BlogList } from "./blogList";
import { BlogListItem } from "./blogListItem";
import { BlogParagraph } from "./blogParagraph";
import { BlogCodeBlock } from "./blogCodeBlock";
import { Flexbox } from "../layouts/flexbox";
import { BlogCodeInline } from "./blogCodeInline";

// https://mdxjs.com/docs/using-mdx/#mdx-content

const StyledBlogWrapper = styled(Flexbox)`
`;

export const BlogWrapper : FC<{

} & React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <StyledBlogWrapper
      type="vertical"
      gap={30}
      {...props}
    >
      <MDXProvider
        components={{
          h1: BlogHeading,
          ul: BlogList,
          li: BlogListItem,
          p: BlogParagraph,
          pre: BlogCodeBlock,
          code: BlogCodeInline
        }}
      >
        {children}
      </MDXProvider>
    </StyledBlogWrapper>
  )
}