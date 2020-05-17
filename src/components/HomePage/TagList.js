import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"


const TagList = () => {
  const data = useStaticQuery(graphql`
     query getTags {
      allMdx{
        group(field:frontmatter___tags){
          totalCount
          fieldValue
        }
      }
     }
  `)
  console.log("data", data)
  const groups = data.allMdx.group
  return (
    <div>
      {groups.map(({ fieldValue }) =>
        <InternalLink key={fieldValue}>{fieldValue}</InternalLink>
      )}
    </div>
  )
}

const InternalLink = styled.a`
  color: hsl(225deg, 15%, 15%);
  background-color: hsl(200deg, 75%, 65%);
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
  margin-bottom: 9px;
  text-decoration: none;
  padding: 3px 12px;
  border-radius: 8px;
`

export default TagList