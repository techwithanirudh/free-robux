import type { Route } from "next"

export interface NavItem {
  title: string
  href?: Route
  disabled?: boolean
  external?: boolean
}
