import styled from "@emotion/styled"
import React, { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { BlogHeading } from "./blogHeading";
import { BlogList } from "./blogList";
import { BlogListItem } from "./blogListItem";
import { BlogParagraph } from "./blogParagraph";
import { BlogCodeBlock } from "./blogCodeBlock";
import { Flexbox } from "../layouts/flexbox";

// https://mdxjs.com/docs/using-mdx/#mdx-content

const StyledBlogWrapper = styled(Flexbox)`
`;

export const BlogWrapper : FC<{

} & React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <StyledBlogWrapper
      type="vertical"
      gap={30}
    >
      <MDXProvider
        components={{
          h1: BlogHeading,
          ul: BlogList,
          li: BlogListItem,
          p: BlogParagraph,
          pre: BlogCodeBlock
        }}
      >
        {children}
      </MDXProvider>
    </StyledBlogWrapper>
  )
}