import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../code-block"
import TableOfContents from "../TableOfContents"

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}
const Post = ({ children }) => {
  return (
    <section style={{display:"flex"}}>
      <article>
        <MDXProvider components={components}>
          {children}
        </MDXProvider>
      </article>
      <aside style={{width:'300px'}}>
        <h2>目录</h2>
        {/*<TableOfContents/>*/}
      </aside>
    </section>
  )
}


export default Post