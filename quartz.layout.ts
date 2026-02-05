import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "markjconnor/blog",
        // from data-repo-id
        repoId: "R_kgDORFj9cw",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDORFj9c84C1u0N",
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/markjconnor",
      "Best Game Ever": "https://tagpro.koalabeast.com/"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({
        spacerSymbol: "/", // symbol between crumbs
        rootName: "Home", // name of first/root element
        resolveFrontmatterTitle: true, // whether to resolve folder names through frontmatter titles
        showCurrentPage: true, // whether to display the current page in the breadcrumbs
    }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    //Component.ContentMeta(),
    Component.TagList(),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
  ],
  left: [
    //Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()), 
    //Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}
  
/*
 // components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.Byline(
      Component.Flex({
        components: [{ Component: Component.TagList(), grow: true, align: "start" }],
        direction: "column",
        gap: "0.5rem",
      }),
      Component.ContentMeta(),
    ),
  ],
  left: [Component.DesktopOnly(Component.TableOfContents())],
  right: [],
}
  */

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta(),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    //Component.Explorer(),
  ],
  right: [],
}
