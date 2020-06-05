import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { animated, useSpring } from "react-spring"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Seal from "../images/san-francisco-city-seal.png"
import DefenderD from "../images/defender-d.svg"

const calcLargeD = o => `translateY(${o * -0.3}px)`
const calcSubtitle = o => `translateY(${o * -0.1}px)`

const IndexPage = () => {
  const ref = useRef()
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top
    const offset = window.pageYOffset - posY
    set({ offset })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      <div className="" ref={ref}>
        <section className="pt-64">
          <animated.div
            className="md:px-24 xl:px-48"
            style={{ transform: offset.interpolate(calcLargeD) }}
          >
            <img src="defender_gif.gif" className="block w-full bg-red mb-12" />
          </animated.div>
          <animated.p
            className="font-bureau-wide text-2xl leading-tight ml-auto lg:-mt-32 md:w-1/3"
            style={{ transform: offset.interpolate(calcSubtitle) }}
          >
            DEFENDER IS AN{" "}
            <strong>URGENT JOURNALISTIC FILM, ART, AND MEDIA PROJECT</strong>{" "}
            CREATED TO BRING AWARENESS AND CHANGE TO THE INJUSTICES OF THE
            CRIMINAL JUSTICE SYSTEM.
          </animated.p>
        </section>

        <section className="flex justify-end items-center mt-48">
          <div className="text-right mr-8">
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

        <article className="mt-32 font-serif leading-tight">
          <p className="mb-8">To Whom It May Concern,</p>
          <p>
            It is of timely importance that I inform you that The San Francisco
            Office of the Public Defender is embarking on an urgent storytelling
            project to continue the legacy of the late San Francisco Public
            Defender and crusader of justice, Jeff Adachi.
          </p>
          <p>
            The murder of George Floyd has once again revealed our racist and
            broken criminal justice system, just as the Pandemic has exposed the
            layers of failure of our Healthcare System.
          </p>
          <p>
            While we know the names of some of the victims, the tentacles of
            racism and violence of our failed Public Safety systems reach far
            and deep into our socio-economically marginalized communities.
          </p>
          <p>
            For these communities that have been ravaged by generational
            injustice, Public Defenders are the last lifeline of Democracy.
            Defenders protect the most vulnerable members of our community.
            Defenders hold the system accountable. Defenders expose the system’s
            complicit role in the administration of injustice. Defenders
            advocate for reform and systemic change.
          </p>
          <p>Above all, Defenders fight back.</p>
          <p>
            We, The Office of the Public Defender, with our partners Even/Odd
            Films, and Compound, will maintain the following tenants as we set
            forth on this unprecedented project, pending Board of Supervisor
            approval:
          </p>
          <p className="italic">
            We will be compassionate, relentless, and courageous.
          </p>
          <p className="italic">
            We will reveal the resilience, power, and potential of our most
            vulnerable communities.
          </p>
          <p className="italic">We will advocate for Police reform.</p>
          <p className="italic">
            We will advocate for the end of the mass incarceration system that
            has devastated our society.
          </p>
          <p className="italic">
            We will expose unjust and racist immigration laws.
          </p>
          <p className="italic">
            We will burn the flame of hopefulness, because we know that{" "}
            <strong>hopelessness is the enemy of justice</strong>.
          </p>
          <p>All power belongs to the people,</p>
          <p>Respectfully yours,</p>
          <img className="h-32 -mb-2" src="signature.png" alt="Manohar Raju" />
          <strong>
            <em>Monohar Raju</em>
          </strong>
          <br />
          San Francisco Public Defender
          <img className="mt-12 w-48" src={DefenderD} alt="Defender" />
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
