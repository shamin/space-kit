module.exports = {
  siteMetadata: {
    title: `Space Kit`,
    description: `Another react component library.`,
    author: `@shamin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `posts`,
        path: `${__dirname}/src/pages/components/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/markdown/componentPage.tsx"),
        },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `space-kit`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#1070CA`,
        display: `space-kit`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
