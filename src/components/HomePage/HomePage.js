import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"


import Header from "../header"
import Container from "../Container"
import TagList from "./TagList"


const HomePage = () => {
  const data = useStaticQuery(graphql`
     query AllMdxQuery {
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
  `)
  return (
    <Container>
      <Header/>
      <Main>
        <section>
          {data.allMdx.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </section>
        <Aside>
          <h2>标签</h2>
          <TagList/>
        </Aside>
      </Main>
    </Container>
  )
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 686px;
  flex: 1;
`
const Aside = styled.aside`
  width: 350px;
  padding-left: 128px;
`
export default HomePage


