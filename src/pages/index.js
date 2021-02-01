import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="fixed inset-0 flex flex-col items-center justify-center">
        <img src="/defender-d.svg" className="w-64" />
        <h1 className="font-bureau mt-12 text-2xl uppercase">Coming Soon</h1>
      </div>
    </Layout>
  )
}

export default IndexPage
