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
    <form onSubmit={handleSubmit}>
      <input
        className="rounded-lg bg-orange-600 w-full px-4 py-2 lg:h-8 lg:px-2 lg:py-1"
        type="text"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
    </form>
  )
}

export default Newsletter
