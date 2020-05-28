import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LargeD from "../images/defender_assets.svg"

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

      <section className="mt-64 font-serif text-xl md:w-2/3">
        <p className="mb-16">To Whom It May Concern,</p>
        <p className="mb-16">
          The Office of the San Francisco Public Defender is thrilled for the
          opportunity to work with Even/Odd Films and Compound to continue the
          legacy of the late San Francisco Public Defender Jeff Adachi , who was
          also a filmmaker dedicated to using storytelling to convey the
          realities of the criminal legal system. The Adachi Fund is an
          important project that will endeavor to educate and in - spire the
          public to understand what public defenders do, who our clients and
          their communities are, and why our mandate to fight for their rights
          is a dire calling to expose inequities in the adminis - tration of
          justice in our country.
        </p>
        <p className="mb-16">
          My colleagues and I are excited to participate in projects of the
          Adachi Fund because we are confident that Even/Odd Films and Compound
          are highly capable of shedding much needed light on our work and the
          stories of those we represent, which otherwise remain largely unseen
          behind courtroom doors.
        </p>
        <p>Respectfully yours</p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
