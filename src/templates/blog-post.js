import React from "react"
import {graphql} from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"


export default function BlogPost({data}){
    console.log(data)
  return (
    <div>
      <h1>test</h1>
    </div>
  )
    // return( <MDXRenderer>{data}</MDXRenderer>)
}
//
// export const pageQuery = graphql`
//   query MDXQuery($id: String!) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//     }
//   }
// `