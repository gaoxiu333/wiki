import React from "react"
import Header from "../header"
import Container from "../Container"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import TableOfContents from "../TableOfContents"
import CodeBlock from "./CodeBlock"
import styled from "styled-components"
import "katex/dist/katex.min.css"
import { formatTitle } from "../../utils"

const formatAllTitle = formatTitle()

const Heading = {
  H1: ({ children }) => {
    const title = formatAllTitle(children)
    return <h1><a id={title} name={title} href={`#${title}`}> </a>{children}</h1>
  },
  H2: ({ children }) => {
    const title = formatAllTitle(children)
    return <h2><a id={title} name={title} href={`#${title}`}> </a>{children}</h2>
  },
  H3: ({ children }) => {
    const title = formatAllTitle(children)
    return <h3><a id={title} name={title} href={`#${title}`}> </a>{children}</h3>
  }
}

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3
}
export default function PostLayout({ data }) {
  return (
    <Container>
      <MDXProvider components={components}>
        <Header/>
        <Wrapper>
          <Aside>
            <TableOfContents headings={data.mdx.headings}/>
          </Aside>
          <Article>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </Article>
        </Wrapper>
      </MDXProvider>
    </Container>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  margin-top: 80px;
`
const Article = styled.article`
  min-width: 686px;
  flex: 1 1;
`
const Aside = styled.aside`
  width: 350px;
  padding-left: 128px;
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 120px);
  overflow: auto;
`

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      headings {
        depth
        value
      }
    }
  }
`
