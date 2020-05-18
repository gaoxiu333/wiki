import React from "react"

export const themes = {
  light: {
    color: "black",
    background: "#fff",
    linkColor: "black",
    hoverColor:"hsl(245deg, 100%, 60%)",
  },
  dark: {
    color: "#fff",
    background: "#1e2227",
    linkColor: "#fff",
    hoverColor: "hsl(333deg, 100%, 52%)"
  }
}

export const ThemeContext = React.createContext(themes.dark)