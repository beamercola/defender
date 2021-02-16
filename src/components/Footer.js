import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Link from "./Link"

const Footer = () => {
  const {
    prismicLayout: { data: page },
  } = useStaticQuery(graphql`
    query FooterQuery {
      prismicLayout {
        data {
          footer_text {
            html
          }
        }
      }
    }
  `)

  return (
    <footer
      className="bg-yellow fixed bottom-0 inset-x-0 flex flex-col justify-between h-screen lg:h-50vh"
      style={{ zIndex: -50 }}
    >
      <div className="md:flex justify-between uppercase p-6 tracking-widest">
        <a href="mailto:rise@wearedefender.com">rise@wearedefender.com</a>
        <div className="">
          <a
            href="https://instagram.com/wearedefender"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM
          </a>
          {" / "}
          <a
            href="https://twitter.com/_wearedefender"
            target="_blank"
            rel="noreferrer"
          >
            TWITTER
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-32" src="/defender-d.svg" alt="Defender" />
      </div>
      <div className="">
        <div className="md:flex justify-between uppercase border-b border-black p-6 tracking-widest">
          <div className="">
            <Link to="/about">ABOUT US</Link> | &copy; 2021
          </div>
          <a href="https://adachiproject.com" target="_blank">
            PRESENTED BY THE ADACHI PROJECT
          </a>
        </div>
        <div className="flex justify-end md:h-32">
          <div className="p-6 w-2/3 md:w-1/2">
            <div
              className="font-mono uppercase text-sm"
              dangerouslySetInnerHTML={{ __html: page?.footer_text?.html }}
            />
            <div className="font-mono uppercase text-sm mt-2">
              Site by{" "}
              <a
                className="underline"
                href="https://aligodil.com"
                target="_blank"
                rel="noreferrer"
              >
                Ali Godil
              </a>{" "}
              Developed by{" "}
              <a
                className="underline"
                href="https://dingo.rodeo"
                target="_blank"
                rel="noreferrer"
              >
                Beamer Wilkins
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
