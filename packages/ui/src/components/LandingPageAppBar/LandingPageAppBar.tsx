import clsx from "clsx"
import { ReactNode, useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"

import Logo from "../Logo/Logo"

import styles from "./LandingPageAppBar.module.css"

export interface LandingPageAppBarProps {
  menuItems?: ReactNode
  buttons?: ReactNode
}

export default function LandingPageAppBar({
  menuItems,
  buttons,
}: LandingPageAppBarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className={styles.menuButton}
        >
          <BiMenu />
        </button>
      </header>
      <nav className={clsx(styles.nav, isOpen && styles.navOpen)}>
        <header className={styles.header}>
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className={styles.menuButton}
          >
            <BiX />
          </button>
        </header>
        {menuItems}
        <div className={styles.buttons}>{buttons}</div>
      </nav>
    </>
  )
}
