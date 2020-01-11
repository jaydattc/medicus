/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")
module.exports = {
  siteMetadata: {
    title: `Medicus`,
    defaultTitle: `Medicus`,
    titleTemplate: "%s | Medicus",
    twitterUsername: "CJaydatt",
    description: `A web based solution for improvising the management of transitional care provided to the homeless in shelter homes.`,
    defaultImage: `src/images/favicon.ico`,
    image: `src/images/favicon.ico`,
    author: `@cjaydatt`,
    url: "https://jaydattc.github.io/medicus",
    siteUrl: "https://jaydattc.github.io/medicus",
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": __dirname,
        src: path.join(__dirname, "src"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Medicus`,
        short_name: `medicus`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
