require("dotenv").config()

const linkResolver = require("./src/utils/linkResolver")

module.exports = {
  siteMetadata: {
    title: `Defender`,
    description: ``,
    author: ``,
    siteUrl: "https://wearedefender.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_NAME,
        accessToken: process.env.PRISMIC_TOKEN,
        schemas: {
          article: require("./src/schemas/article.json"),
          author: require("./src/schemas/author.json"),
          category: require("./src/schemas/category.json"),
          layout: require("./src/schemas/layout.json"),
          page: require("./src/schemas/page.json"),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          return false
        },
        linkResolver,
      },
    },
    {
      resolve: "gatsby-source-shopify-experimental",
      options: {
        apiKey: process.env.SHOPIFY_ADMIN_API_KEY,
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: `${process.env.SHOPIFY_STORE_NAME}.myshopify.com`,
      },
    },
    {
      resolve: "gatsby-theme-shopify-manager",
      options: {
        shopName: process.env.SHOPIFY_STORE_NAME,
        accessToken: process.env.SHOPIFY_STOREFRONT_TOKEN,
        shouldConfigureSourcePlugin: false,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "ndh8xzt",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://evenoddfilms.us10.list-manage.com/subscribe/post?u=6fc42c7780850744db834e177&amp;id=a6cf0e406b",
      },
    },
  ],
}
