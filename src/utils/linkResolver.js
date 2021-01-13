module.exports = ({ node, key, value }) => doc => {
  if (doc.uid === "home") return "/"
  // if (doc.type === "page") return `/${doc.uid}`
  if (doc.type === "article") return `/articles/${doc.uid}`
  return `/${doc.uid}`
}
