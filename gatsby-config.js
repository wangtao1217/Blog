/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    sidebarMenu: [
      {
        title: "档案",
        route: "/record",
      },
      {
        title: "标签",
        route: "/tags",
      },
      {
        title: "读书",
        route: "/reading",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-sass`
  ],
}
