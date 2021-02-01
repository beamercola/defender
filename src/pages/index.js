import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="fixed inset-0 flex flex-col items-center">
      <img src="/defender-d.svg" className="" style={{ height: "80%" }} />
      <h1 className="font-bureau mt-12 text-2xl uppercase flex-shrink-0">
        Coming Soon
      </h1>
    </div>
  </Layout>
)

export default IndexPage
