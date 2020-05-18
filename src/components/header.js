import { Link } from "gatsby"
import React, { useContext } from "react"
import styled, { keyframes } from "styled-components"
import { READING_WIDTH } from "../constants"
import { ThemeContext } from "./them-context"

require(`katex/dist/katex.min.css`)


const Header = () => {

  const themes = useContext(ThemeContext)
  return (
    <Wrapper>
      <Col>
        <Link to='/'><InterText style={{ fontSize: "24px" }}>NoteBook</InterText></Link>
      </Col>
      <Col>
        <ColInline onClick={themes.toggleThemes}>
          <ToggleMode mode={themes.mode}/>
        </ColInline>
        <ColInline>
          <svg t="1589607721686" className="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="3759" width="20" height="20">
            <path
              d="M320.16155 831.918c0 70.738-57.344 128.082-128.082 128.082S63.99955 902.656 63.99955 831.918s57.344-128.082 128.082-128.082 128.08 57.346 128.08 128.082z m351.32 94.5c-16.708-309.2-264.37-557.174-573.9-573.9C79.31155 351.53 63.99955 366.21 63.99955 384.506v96.138c0 16.83 12.98 30.944 29.774 32.036 223.664 14.568 402.946 193.404 417.544 417.544 1.094 16.794 15.208 29.774 32.036 29.774h96.138c18.298 0.002 32.978-15.31 31.99-33.58z m288.498 0.576C943.19155 459.354 566.92955 80.89 97.00555 64.02 78.94555 63.372 63.99955 77.962 63.99955 96.032v96.136c0 17.25 13.67 31.29 30.906 31.998 382.358 15.678 689.254 322.632 704.93 704.93 0.706 17.236 14.746 30.906 31.998 30.906h96.136c18.068-0.002 32.658-14.948 32.01-33.008z"
              p-id="3760" fill={themes.mode === 'light'?'#000':'#9a9d9e'}></path>
          </svg>
        </ColInline>
      </Col>
    </Wrapper>
  )
}


const Wrapper = styled.header`
  width: 100%;
  max-width:${READING_WIDTH}px;
  margin-left: auto;
  margin-right: auto;
  height: 85px;
  display: flex;
  justify-content:space-between;
  align-items: center;
`
const Col = styled.div`
  padding: 0;
`
const ColInline = styled.span`
  margin-left: 20px;
  cursor: pointer;
`

const LinearGradient = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0 0;
}
`

const InterText = styled.span`
   -webkit-animation: ${LinearGradient} 12s linear 2s infinite;
    animation: ${LinearGradient} 12s linear 2s infinite;
    background: linear-gradient(90deg, #ffcd00, #59b287, #59b287, #4c5faa, #f9423a);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 300% 300%;
    -webkit-text-fill-color: transparent;
`

const ToggleMode = ({ mode }) => (
  mode === "dark"
    ? <svg t="1589814343427" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="11896" width="20" height="20">
      <path
        d="M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
        fill="#9a9d9e" p-id="11897"></path>
    </svg>
    : <svg t="1589812983068" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="6976" width="20" height="20">
      <path
        d="M512 0c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64S547.84 0 512 0zM192 128c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64-28.16-64-64-64z m640 0c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64-28.16-64-64-64zM512 256c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256-115.2-256-256-256zM64 448c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64-28.16-64-64-64z m896 0c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64-28.16-64-64-64zM192 768c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64-28.16-64-64-64z m640 0c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64-28.16-64-64-64zM512 896c-35.84 0-64 28.16-64 64s28.16 64 64 64 64-28.16 64-64S547.84 896 512 896z"
        p-id="6977" fill="#000000"></path>
    </svg>
)


export default Header
