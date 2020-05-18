import React from "react"
export const themes = {
  light: {
    color: "black",
    background: "#fff"
  },
  dark: {
    color: "#fff",
    background: "#1e2227"
  }
}

export const ThemeContext = React.createContext(themes.dark)