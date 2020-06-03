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
    <section className="mt-64">
      <img src={LargeD} className="block bg-red mb-12 md:mx-24 xl:mx-48" />
      <div className="flex justify-end">
        <p className="text-lg leading-tight md:w-1/2">
          AN URGENT STORYTELLING PROJECT FOR{" "}
          <strong>THE SAN FRANCISCO OFFICE OF THE PUBLIC DEFENDER</strong>
          CREATED TO BRING REFORM TO THE CRIMINAL JUSTICE SYSTEM. TRUTH
          LIBERATES. WE ILLUMI - NATE AND DEFEND IT.
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

    <section className="mt-32 font-serif leading-tight lg:w-10/12">
      <p className="mb-8">To Whom It May Concern,</p>
      <p className="mb-8">
        The Office of the San Francisco Public{" "}
        <strong className="font-gothic">Defender</strong> is thrilled for the
        opportunity to work with
        <strong className="font-sans">Even/Odd Films</strong> and{" "}
        <strong className="font-sans">Compound</strong> to continue the legacy
        of the late San Francisco Public{" "}
        <strong className="font-gothic">Defender Jeff Adachi</strong> , who was
        also a filmmaker dedicated to using storytelling to
        <em>convey the realities</em> of the criminal legal system. The Adachi
        Fund is an important project that will endeavor to educate and in -
        spire the public to understand what public{" "}
        <strong className="font-gothic">defenders</strong> do, who our clients
        and their communities are, and why our mandate to fight for their rights
        is a dire calling to expose <strong>inequities</strong>
        in the administration of justice in our country.
      </p>
      <p className="mb-8">
        My colleagues and I are excited to participate in projects of the Adachi
        Fund because we are confident that Even/Odd Films and Compound are
        highly capable of <em>shedding much needed light</em> on our work and
        the stories of those we represent, which otherwise remain largely unseen
        behind courtroom doors.
      </p>
      <p>Respectfully yours,</p>
      <img className="h-32 -mb-2" src="signature.png" alt="Manohar Raju" />
      <strong>
        <em>Monohar Raju</em>
      </strong>
      <br />
      San Francisco Public Defender
    </section>
  </Layout>
)

export default IndexPage
