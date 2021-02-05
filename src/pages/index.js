import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="fixed inset-0 h-screen w-screen flex flex-col items-center p-4">
      <img className="h-24 mb-8" src="/logotype.svg" alt="Defender" />
      <div
        className="flex-grow relative bg-contain bg-center bg-no-repeat w-full"
        style={{ backgroundImage: "url(/defender_gif.gif)" }}
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
