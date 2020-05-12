/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({children}){
  return(
    <div style={{margin:`0 auto`,maxWidth:650,padding:`0 1rem`}}>
      {children}
    </div>
  )
}