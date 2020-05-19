import React from "react"
import styled from "styled-components"


const Title = ({ mdx }) => {
  return (
    <Wrapper>
      <HeaderTitle>{mdx.frontmatter.title}</HeaderTitle>
      <PostMate>{mdx.frontmatter.date} · {mdx.fields.readingTime.text}</PostMate>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 80px;
  margin-bottom: 40px;  
`

const HeaderTitle = styled.h1`
  padding: 0;
  margin: 0;
`
const PostMate = styled.section`
  margin-top: 10px;
  margin-left: 8px;
  font-size: 12px;
  color: #686e6f;
`

export default Title