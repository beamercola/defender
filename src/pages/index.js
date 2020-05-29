import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LargeD from "../images/defender_assets.svg"
import Seal from "../images/san-francisco-city-seal.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container p-8 md:p-12 xl:p-24">
      <section className="">
        <img src={LargeD} className="block bg-red md:mx-24 xl:mx-48" />
        <div className="flex justify-end">
          <p className="text-2xl md:w-1/2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy Lorem ipsum dolor sit amet, consectetuer adipi - scing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat
          </p>
        </div>
      </section>

      <section className="flex justify-end items-center mt-48">
        <div className="text-right mr-4">
          <h2 className="text-2xl font-light uppercase">
            San Francisco Public Defender
          </h2>
          <p className="text-xs">
            <strong>Manohar Raju -</strong> Public Defender
          </p>
          <p className="text-xs">
            <strong>Matt Gonzalez -</strong> Chief Attorney
          </p>
        </div>
        <img className="h-24 w-24" src={Seal} />
      </section>

      <section className="mt-32 font-serif text-lg leading-snug md:w-2/3">
        <p className="mb-16">To Whom It May Concern,</p>
        <p className="mb-16">
          The Office of the San Francisco Public Defender is thrilled for the
          opportunity to work with{" "}
          <strong className="font-sans">Even/Odd Films</strong> and{" "}
          <strong className="font-sans">Compound</strong> to continue the legacy
          of the late San Francisco Public Defender Jeff Adachi , who was also a
          filmmaker dedicated to using storytelling to
          <em>convey the realities</em> of the criminal legal system. The Adachi
          Fund is an important project that will endeavor to educate and in -
          spire the public to understand what public defenders do, who our
          clients and their communities are, and why our mandate to fight for
          their rights is a dire calling to expose <strong>inequities</strong>
          in the administration of justice in our country.
        </p>
        <p className="mb-16">
          My colleagues and I are excited to participate in projects of the
          Adachi Fund because we are confident that Even/Odd Films and Compound
          are highly capable of <em>shedding much needed light</em> on our work
          and the stories of those we represent, which otherwise remain largely
          unseen behind courtroom doors.
        </p>
        <p>Respectfully yours</p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
