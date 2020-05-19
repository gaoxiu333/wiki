import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import React, { useState, useEffect } from "react"
import { BREAKPOINTS, READING_WIDTH } from "../../constants"
import { ThemeContext, themes } from "../them-context"
import { isSystemDarkMode } from "../../utils"

const GlobalStyle = createGlobalStyle`
  body{
      background: ${props => props.theme.background};
      color: ${props => props.theme.color};
  }
  a{
    color: ${props => props.theme.linkColor};
    &:hover{
        color: ${props => props.theme.hoverColor};
    }
  }
`


const Main = styled.main`
  width:100%;
  max-width:${READING_WIDTH}px;
  margin-left:auto;
  margin-right:auto;
  padding-left:32px;
  padding-right:32px;
  padding-bottom: 120px;
  @media ${BREAKPOINTS.sm} {
    padding-left:16px;
    padding-right:16px
  }
  
`

const Container = (props) => {
  const [mode, setMode] = useState("")
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const systemMode = function(e) {
      const newColorScheme = e.matches ? "dark" : "light"
      setMode(newColorScheme)
    }
    if (typeof mql.addListener === "function") {
      mql.addListener(systemMode)
    } else {
      mql.addEventListener("change", systemMode)
    }
    return function() {
      if (typeof mql.addListener === "function") {
        mql.removeListener(systemMode)
      }else{
        mql.removeEventListener('change',systemMode)
      }
    }
  }, [])
  if (!mode) {
    const now = +new Date()
    let storage = localStorage.getItem("mode")


    const invalidTime = 12 * 60 * 60 * 1000
    const [localeMode, localTime] = storage ? storage.split("-") : [undefined, -1]
    if (+localTime + invalidTime < now) {
      setMode(isSystemDarkMode() ? "dark" : "light")
    } else {
      setMode(localeMode)
    }
  }

  function handleClick() {
    localStorage.setItem("mode", `${mode === "dark" ? "light" : "dark"}-${+new Date()}`)
    setMode(mode => mode === "dark" ? "light" : "dark")
  }

  return (
    <ThemeProvider theme={themes[mode]}>
      <ThemeContext.Provider value={{ themes: themes[mode], toggleThemes: handleClick, mode: mode }}>
        <Main themes={themes[mode]}>{props.children}</Main>
      </ThemeContext.Provider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default Container