import React from "react"
import styled from "styled-components"

const InternalTags = ({children})=> <Span>{children}</Span>

const Span = styled.span`
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

export default InternalTags