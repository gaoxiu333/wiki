import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"


import Header from "../header"
import Container from "../Container"
import TagList from "./TagList"
import InternalTags from "./InternalTags"


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
              date(formatString: "YYYY/MM/DD")
              tags
            }
            fields{
              slug
              readingTime{
                text
               }
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
        <section style={{ flex: 1 }}>
          {data.allMdx.edges.map(({ node }) => (
            <List key={node.id}>
              <div>
                <h3 style={{ marginBottom: "8px",marginTop:'0' }}>
                  <Link to={node.fields.slug}>
                    {node.frontmatter.title}
                  </Link>
                </h3>
                <span style={{
                  fontSize: "12px",
                  color: "#686e6f"
                }}>{node.frontmatter.date} · {node.fields.readingTime.text}</span>
              </div>
              <div>
                <InternalTags>
                  {node.frontmatter.tags}
                </InternalTags>
              </div>
            </List>
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

const List = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 686px;  
  margin-top: 80px;
`
const Aside = styled.aside`
  width: 350px;
  padding-left: 128px;
`
export default HomePage


