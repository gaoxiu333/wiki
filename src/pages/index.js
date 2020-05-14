import React from "react"
import { graphql,Link } from "gatsby"

import Layout from "../components/layout"


export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields{
            slug
          }
        }
      }
    }
  }
`