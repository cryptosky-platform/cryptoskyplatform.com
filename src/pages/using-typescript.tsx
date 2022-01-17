// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//components
import * as Sider from '../components/typescript/antd/menuTheme'
import * as ResponsiveSection from '../components/typescript/antd/Res'

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="About " />
    <h1>CryptoSky Platform!</h1>
    <ResponsiveSection />
    <Sider />
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.cryptoskyplatform.org">
        documentation about CryptoSky Platform
      </a>
      .
    </p>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
