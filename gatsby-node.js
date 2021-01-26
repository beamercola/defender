const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const categories = await graphql(`
    query {
      allPrismicCategory {
        nodes {
          uid
        }
      }
    }
  `)
  categories.data.allPrismicCategory.nodes.forEach(node => {
    createPage({
      path: `/category/${node.uid}`,
      component: path.resolve("./src/templates/Category.js"),
      context: {
        uid: node.uid,
      },
    })
  })

  const articles = await graphql(`
    query {
      allPrismicArticle {
        nodes {
          uid
        }
      }
    }
  `)

  articles.data.allPrismicArticle.nodes.forEach(node => {
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        uid: node.uid,
      },
    })
  })

  const pages = await graphql(`
    query {
      allPrismicPage {
        nodes {
          uid
        }
      }
    }
  `)

  pages.data.allPrismicPage.nodes.forEach(node => {
    createPage({
      path: `/${node.uid === "home" ? "" : node.uid}`,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        uid: node.uid,
      },
    })
  })
}
