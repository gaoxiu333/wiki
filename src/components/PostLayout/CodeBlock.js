import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { syntaxTheme } from "../../styles/theme/code"
import { LiveProvider, LiveEditor, LivePreview } from "react-live"
import styled from "styled-components"


const CodeBlock = ({ children, className, live }) => {
  const language = className ? className.replace(/language-/, "") : "sh"
  if (live) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider code={children} theme={Object.assign({}, syntaxTheme, {
          plain: {
            color: "#2A2A2A",
            backgroundColor: "#F6F6F6",
            borderRadius: 0
          }
        })}>
          <Wrapper>
            <LivePreview
              style={{
                flex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid #f6f6f6`
              }}/>
            <LiveEditor style={{ flex: 1, width: "100%" }}/>
          </Wrapper>
        </LiveProvider>
      </div>
    )
  }
  return (
    <Highlight {...defaultProps} theme={syntaxTheme} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
`
const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 20px;
  overflow: scroll;
`

export default CodeBlock