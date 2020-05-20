import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"


import Header from "../header"
import Container from "../Container"
import TagList from "./TagList"
import InternalTags from "./InternalTags"
import {BREAKPOINTS} from '../../constants'


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
        <Wrapper>
          {data.allMdx.edges.map(({ node }) => (
            <List key={node.id}>
              <div>
                <h3 style={{ marginBottom: "8px", marginTop: "0" }}>
                  <Link to={node.fields.slug}>
                    {node.frontmatter.title}
                  </Link>
                </h3>
                <span style={{
                  fontSize: "12px",
                  color: "#686e6f"
                }}>
                  {node.frontmatter.date} · {node.fields.readingTime.text}
                </span>
              </div>
              <div>
                {Boolean(node.frontmatter.tags)
                  ? <InternalTags>{node.frontmatter.tags}</InternalTags>
                  : ''}
              </div>
            </List>
          ))}
        </Wrapper>
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
  width: 708px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 80px;
  @media ${BREAKPOINTS.lg}{
    justify-content: center;
  }
`
const Aside = styled.aside`
  width: 280px;
  padding-left: 20px;
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  @media ${BREAKPOINTS.lg}{
    display: none;
  }
`
const Wrapper = styled.section`
  //flex: 1;
  width: 708px;
  max-width: 100%;
`
export default HomePage


