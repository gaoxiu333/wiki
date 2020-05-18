import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import React, { useState } from "react"
import { BREAKPOINTS, READING_WIDTH } from "../../constants"
import { ThemeContext, themes } from "../them-context"

const GlobalStyle = createGlobalStyle`
  body{
      background: ${props => props.theme.background};
  }
`


const Main = styled.main`
  width:100%;
  max-width:${READING_WIDTH}px;
  margin-left:auto;
  margin-right:auto;
  padding-left:32px;
  padding-right:32px;
`

const Container = (props) => {
  const [mode, setMode] = useState("dark")

  function handleClick() {
    console.log(mode, themes[mode])

    setMode(mode => mode === "dark" ? "light" : "dark")
  }

  return (
    <ThemeProvider theme={themes[mode]}>\
      <ThemeContext.Provider value={{ themes: themes[mode], toggleThemes: handleClick }}>
        <Main themes={themes[mode]}>{props.children}</Main>
      </ThemeContext.Provider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default Container