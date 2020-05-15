import React from "react"
import Header from "./header"
import { MDXProvider, } from "@mdx-js/react"
import CodeBlock from "./code-block"
import Container from "../components/Container"
import Post from "../components/Post"

const MyH1 = props => <h1 style={{ color: "tomato" }} {...props} />

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
  h1: MyH1

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