import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { READING_WIDTH } from "../constants"
import { keyframes } from "@emotion/core"


const Header = ({ siteTitle }) => (
  <Wrapper>
    <Col>
      <Link to='/'><InterText style={{ fontSize: "24px" }}>NoteBook</InterText></Link>
    </Col>
    <Col>
      <ColInline>
        <svg t="1589568973431" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2884" width="20" height="20">
          <path
            d="M524.8 938.666667h-4.266667a439.893333 439.893333 0 0 1-313.173333-134.4 446.293333 446.293333 0 0 1-11.093333-597.333334 432.213333 432.213333 0 0 1 170.666666-116.906666 42.666667 42.666667 0 0 1 45.226667 9.386666 42.666667 42.666667 0 0 1 10.24 42.666667 358.4 358.4 0 0 0 82.773333 375.893333 361.386667 361.386667 0 0 0 376.746667 82.773334 42.666667 42.666667 0 0 1 54.186667 55.04A433.493333 433.493333 0 0 1 836.266667 810.666667a438.613333 438.613333 0 0 1-311.466667 128z"
            p-id="2885"></path>
        </svg>
      </ColInline>
      <ColInline>
        <svg t="1589607721686" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="3759" width="24" height="24">
          <path
            d="M320.16155 831.918c0 70.738-57.344 128.082-128.082 128.082S63.99955 902.656 63.99955 831.918s57.344-128.082 128.082-128.082 128.08 57.346 128.08 128.082z m351.32 94.5c-16.708-309.2-264.37-557.174-573.9-573.9C79.31155 351.53 63.99955 366.21 63.99955 384.506v96.138c0 16.83 12.98 30.944 29.774 32.036 223.664 14.568 402.946 193.404 417.544 417.544 1.094 16.794 15.208 29.774 32.036 29.774h96.138c18.298 0.002 32.978-15.31 31.99-33.58z m288.498 0.576C943.19155 459.354 566.92955 80.89 97.00555 64.02 78.94555 63.372 63.99955 77.962 63.99955 96.032v96.136c0 17.25 13.67 31.29 30.906 31.998 382.358 15.678 689.254 322.632 704.93 704.93 0.706 17.236 14.746 30.906 31.998 30.906h96.136c18.068-0.002 32.658-14.948 32.01-33.008z"
            p-id="3760"></path>
        </svg>
      </ColInline>
    </Col>
  </Wrapper>
)


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
  padding: 10px;
`
const ColInline = styled.span`
  margin-right: 20px;
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


export default Header
