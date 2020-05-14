import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { READING_WIDTH } from "../constants"

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Col>
      <Link to='/'>前端笔记</Link>
    </Col>
    <Col>
      <Link to='/about'>关于我</Link>
    </Col>
    <Col>
      <span>rss</span>
    </Col>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}
const Wrapper = styled.header`
  width: 100%;
  max-width:${READING_WIDTH}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  height: 75px;
  display: flex;
  justify-content:flex-end;
  align-items: center;
`
const Col = styled.div`
  padding: 10px;
`

export default Header
