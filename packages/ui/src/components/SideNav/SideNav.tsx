import clsx from "clsx"
import React, { ReactNode } from "react"

import MenuItem from "../MenuItem/MenuItem"

import styles from "./SideNav.module.css"

export interface SideNavItem {
  text: string
  icon: ReactNode
  href: string
}

export interface SideNavProps {
  items: SideNavItem[]
  minimize?: boolean
  LinkComponent?: React.ElementType
}

export default function SideNav({
  items,
  LinkComponent = "a",
  minimize = false,
}: SideNavProps) {
  return (
    <nav className={clsx(styles.nav, !minimize && styles.expanded)}>
      {items.map((item, index) => (
        <LinkComponent href={item.href} key={index}>
          <MenuItem icon={item.icon}>{item.text}</MenuItem>
        </LinkComponent>
      ))}
    </nav>
  )
}
