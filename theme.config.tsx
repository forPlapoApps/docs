import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const title = "forPlapoApps Docs"
const config: DocsThemeConfig = {
  logo: <span>{title}</span>,
  project: {
    link: "https://github.com/forPlapoApps/blog",
  },
  docsRepositoryBase: 'https://github.com/forPlapoApps/blog',
  footer: {
    text: title,
  },
  useNextSeoProps() {
    return {
    titleTemplate: `%s | ${title}`
    }
  },
}

export default config
