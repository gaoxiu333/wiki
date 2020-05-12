import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"


// export default IndexPage
export default function Home() {
  return (
    <Layout>
      <Link to='/about/'>about</Link>
      <div style={{ color: `purple`, fontSize: `72px` }}>Hello Gatsby!</div>
    </Layout>
  )
}