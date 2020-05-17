import React from "react"
import styled,{ThemeProvider} from "styled-components"

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;
// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}
// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};
// Render a styled text input with the standard input color, and one with a custom input color
export default function(){
  return <div />
}


