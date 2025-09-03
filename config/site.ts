export type SiteConfig = typeof siteConfig

import type { Route } from "next"

export const siteConfig = {
  name: "Free Robux",
  productName: "Free Robux Tool",
  description:
    'Free Bobux available here!1!111!!1!!!! get now b4 gonr!1111!!',
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
  ] satisfies { title: string; href: Route }[],
  links: {
    twitter: "https://twitter.com/AnirudhWith",
    github: "https://github.com/techwithanirudh",
  },
}
