import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="fixed inset-0 flex flex-col items-center">
      <img className="h-24 mb-8" src="/logo.svg" alt="Defender" />
      <img
        src="/defender_gif.gif"
        className="mb-12"
        style={{ height: "50%" }}
        alt=""
      />
      <p className="mb-4 max-w-sm text-center">
        An art and media project about the work of the{" "}
        <span class="whitespace-no-wrap">
          San Francisco Public Defender’s Office
        </span>
      </p>
      <h1 className="font-bureau text-2xl uppercase flex-shrink-0">
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
