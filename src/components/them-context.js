import React from "react"
export const themes = {
  light: {
    color: "red",
    background: "#fff"
  },
  dark: {
    color: "#fff",
    background: "#333"
  }
}

export const ThemeContext = React.createContext(themes.dark)