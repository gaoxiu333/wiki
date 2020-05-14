import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({data}) {
  const post = data.mdx
  console.log(post)
  return (
    <div>
      <h1>hhh2221h</h1>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`