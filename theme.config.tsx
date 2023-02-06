import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const title = "forPlapoApps Docs"
const config: DocsThemeConfig = {
  logo: <span>{title}</span>,
  project: {
    link: "https://github.com/forPlapoApps/docs",
  },
  docsRepositoryBase: 'https://github.com/forPlapoApps/docs',
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
