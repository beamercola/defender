import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="fixed inset-0 flex flex-col items-center">
      <img src="/defender-d.svg" className="" style={{ height: "80%" }} />
      <h1 className="font-bureau mt-12 text-2xl uppercase flex-shrink-0">
        Coming Soon
      </h1>
      <a
        href="https://www.instagram.com/wearedefender/"
        target="_blank"
        rel="noreferrer"
      >
        @wearedefender
      </a>
    </div>
  </Layout>
)

export default IndexPage
