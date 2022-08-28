import styled from "@emotion/styled"
import React, { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { BlogHeading } from "./blogHeading";
import { BlogList } from "./blogList";
import { BlogListItem } from "./blogListItem";
import { BlogParagraph } from "./blogParagraph";

// https://mdxjs.com/docs/using-mdx/#mdx-content

const StyledBlogWrapper = styled(MDXProvider)`
`;

export const blogComponents = {
  h1: BlogHeading,
  ul: BlogList,
  li: BlogListItem,
  p: BlogParagraph
} 

export const BlogWrapper : FC<{

} & React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <StyledBlogWrapper
      components={blogComponents}
    >
      {children}
    </StyledBlogWrapper>
  )
}