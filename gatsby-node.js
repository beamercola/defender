const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    query {
      allPrismicArticle {
        nodes {
          uid
        }
      }
    }
  `)

  pages.data.allPrismicArticle.nodes.forEach(node => {
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(`./src/templates/Article.js`),
      context: {
        uid: node.uid,
      },
    })
  })
}
