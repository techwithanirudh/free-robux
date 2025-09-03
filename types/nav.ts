import type { Route } from "next";

export interface NavItem {
  title: string
  href?: Route | string
  disabled?: boolean
  external?: boolean
}
