import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./MenuItem.module.css"

export interface MenuItemProps {
  children: ReactNode
  isInline?: boolean
  icon?: ReactNode
}

export default function MenuItem({ children, isInline, icon }: MenuItemProps) {
  return (
    <button
      type="button"
      className={clsx(styles.menuItem, isInline && styles.inline)}
    >
      {icon}
      {children}
    </button>
  )
}
