import { ReactNode } from "react"

import Logo from "../Logo/Logo"

import styles from "./LandingPageHeader.module.css"

export interface LandingPageHeaderProps {
  menuItems?: ReactNode
  buttons?: ReactNode
}

export default function LandingPageHeader({
  menuItems,
  buttons,
}: LandingPageHeaderProps) {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>{menuItems}</nav>
      <div className={styles.buttons}>{buttons}</div>
    </header>
  )
}
