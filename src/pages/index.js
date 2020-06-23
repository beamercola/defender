import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { animated, useSpring } from "react-spring"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import DefenderD from "../images/defender-d.svg"
import ComingSoon from "../images/comingsoon.svg"

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
      <Header />
      <div className="" ref={ref}>
        <section className="pt-84">
          <animated.div
            className="md:px-24 xl:px-32"
            style={{ transform: offset.interpolate(calcLargeD) }}
          >
            <motion.img
              src="defender_gif.gif"
              className="block w-full bg-red mb-12 w-2/3"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </animated.div>
          <animated.p
            className="font-bureau-wide text-xl leading-tight ml-auto uppercase lg:-mt-32 md:w-5/12"
            style={{ transform: offset.interpolate(calcSubtitle) }}
          >
            <span className="font-gothic normal-case text-5xl">Defender</span>{" "}
            IS AN URGENT{" "}
            <strong>JOURNALISTIC FILM, ART, AND MEDIA PROJECT</strong> ABOUT THE
            WORK OF THE SAN FRANCISCO OFFICE OF THE PUBLIC DEFENDER. IT IS
            CREATED TO BRING REFORM TO THE INEQUITIES OF THE CRIMINAL LEGAL
            SYSTEM
          </animated.p>
        </section>

        <section className="my-24">
          <img className="w-full" src={ComingSoon} alt="Coming Soon" />
        </section>

        <section>
          <p className="text-center font-serif text-lg max-w-xl mx-auto">
            For now, please watch{" "}
            <a
              className="font-snell text-2xl text-blue-600 px-2"
              href="https://www.theatlantic.com/video/index/501716/happy-birthday-mario-woods/"
              target="_blank"
              rel="noreferrer"
            >
              Happy Birthday Mario Woods
            </a>
            <br />
            Mario Woods was killed by SFPD on December 2nd, 2015.
          </p>
          <img className="my-12 w-32 mx-auto" src={DefenderD} alt="Defender" />
          <p className="font-serif italic text-xl">
            On February 27, 2020, recently elected Public Defender Mano Raju,
            penned a community-centered oath. It is a statement of conscience
            and a contract with the public and guides the San Francisco Public
            Defender’s Office’s unrelenting efforts to defend all people, and to
            fight for equality and justice. The Oath was administered at the
            historic Brava Theater by Gwen Woods, Mother of Mario Woods, a young
            Black man who was killed by Police.
          </p>
        </section>

        <article className="mt-32 font-bureau-wide font-bold">
          <p>
            &ldquo;I WILL BE COMPASSIONATE, RELENTLESS, AND COURAGEOUS IN THE
            FIGHT FOR JUSTICE.
          </p>
          <p>
            I WILL BE WILLING TO SEE ALL THE BEAUTY, POWER, AND POTENTIAL OF
            EACH PERSON I REPRESENT.
          </p>
          <p>
            I WILL ADVOCATE FOR STRUCTURAL CHANGES THAT CONTRIBUTE TO ENDING THE
            MASS INCARCERATION SYSTEM THAT HAS DEVASTATED OUR SOCIETY FOR FAR
            TOO LONG.
          </p>
          <p>
            I WILL FIGHT AGAINST UNJUST AND RACIST IMMIGRATION LAWS, DEFEND ALL
            PEOPLE REGARDLESS OF THEIR BIRTHPLACE OR IMMIGRATION STATUS, AND
            FIGHT MASS DEPORTATION AS VIGOROUSLY AS I FIGHT MASS INCARCERATION.
          </p>
          <p>I WILL REMAIN COMMITTED TO RACIAL JUSTICE.</p>
          <p>I WILL GROW EXCELLENCE AMONG DEFENDERS.</p>
          <p>
            I WILL HONOR THE BRILLIANCE OF THE INTERGENERATIONAL RESILIENCE OF
            OUR CLIENTS AND THEIR COMMUNITIES.
          </p>
          <p>
            I WILL REMEMBER THAT MY REPRESENTATION OF INDIVIDUALS RIPPLES OUT TO
            THE FOLKS WHO LOVE THEM, AND THEREFORE STRIVE TO STAY ENGAGED WITH
            THEIR FAMILIES AND COMMUNITIES.
          </p>
          <p>
            I WILL KEEP BURNING THE FLAME OF HOPEFULNESS BECAUSE WE KNOW THAT
            HOPELESSNESS IS THE ENEMY OF JUSTICE.&rdquo;
          </p>
        </article>
        <section className="text-center font-serif my-24">
          <p>
            This is the creed of <span className="font-gothic">Defender</span>
          </p>
          <img
            className="h-64 -my-8 mx-auto"
            src="mano_sig.png"
            alt="Mano Raju"
          />
          <strong>
            <em>Mano Raju</em>
          </strong>
          <br />
          San Francisco Public <span className="font-gothic">Defender</span>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
