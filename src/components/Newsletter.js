import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Newsletter = () => {
  const [email, setEmail] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    await addToMailchimp(email)
    alert("You'll be hearing from us")
  }

  return (
    <div className="p-12 border-t border-black text-center">
      <h3 className="uppercase text-2xl font-black mb-12">
        Sign Up To Get Involved
      </h3>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <input
          className="bg-orange w-full px-4 py-4 mb-4 placeholder-white lg:px-2 lg:py-1 lg:h-8"
          type="text"
          onChange={e => setEmail(e.target.value)}
          placeholder="email address"
          value={email}
        />
        <input
          className="bg-black text-white text-xs font-bureau w-full px-4 py-4 lg:h-8 lg:px-2 lg:pt-2"
          type="submit"
          value="SUBMIT"
        />
      </form>
    </div>
  )
}

export default Newsletter
