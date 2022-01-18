import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Contact</Link> <br />
      <Link to="/using-typescript/">Type</Link> <br />
      <Link to="/using-ssr">SSG</Link> <br />
      <Link to="/using-dsg">DSG</Link>
    </p>
  </Layout>
)

export default IndexPage
