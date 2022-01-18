import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//Components
import BreadC from "../components/typescript/antd/BDC"

const UsingDSG = () => (
  <Layout>
    <Seo title="Partners" />
    <BreadC />
    <Link to="/">Home</Link>
    <p>
      To learn more, head over to our{" "}
      <a href="https://cryptoskyplatform.org">
        CryptoSky
      </a>
      .
    </p>
    
  </Layout>
)

export default UsingDSG
