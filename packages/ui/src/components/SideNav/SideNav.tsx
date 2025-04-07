"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
}

export default function SideNav({ items, minimize = false }: SideNavProps) {
  const pathname = usePathname()

  return (
    <nav className={clsx(styles.nav, !minimize && styles.expanded)}>
      {items.map((item, index) => (
        <Link href={item.href} key={index}>
          <MenuItem icon={item.icon} isActive={pathname === item.href}>
            {item.text}
          </MenuItem>
        </Link>
      ))}
    </nav>
  )
}
