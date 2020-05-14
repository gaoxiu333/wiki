import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./code-block"
import Container from "../components/Container"

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}
export default function Layout({ children }) {
  return (
    <MDXProvider
      components={components}
    >
      <Header/>
      <Container>
        {children}
      </Container>
      <div>list-right</div>
    </MDXProvider>
  )
}