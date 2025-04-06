"use client"

import clsx from "clsx"
import { ReactNode, useState } from "react"
import { BiX } from "react-icons/bi"

import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import profileItems from "../../config/profileItems"
import sideNavItems from "../../config/sideNavItems"
import useBreakpoint from "../../hooks/useBreakpoint"

import styles from "./AppLayout.module.css"
import { useAppLayoutContext } from "./AppLayoutContext"

export interface AppLayoutProps {
  hideSideNav?: boolean
  children: ReactNode
}

export default function AppLayout({ children, hideSideNav }: AppLayoutProps) {
  const breakpoint = useBreakpoint()

  const [minimize, setMinimize] = useState(true)
  const [minimizeActive, setMinimizeActive] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const matchMobileBreakpoint = ["mobile", "tablet"].includes(breakpoint!)

  const { appLayoutContext } = useAppLayoutContext()

  const handleMenuClick = () => {
    if (matchMobileBreakpoint) {
      setIsOpen((prev) => !prev)
      return
    }

    setMinimize((prev) => {
      const nextState = !prev

      if (!nextState) {
        setMinimizeActive(false)
      } else {
        setMinimizeActive(true)
      }

      return nextState
    })
  }

  return (
    <>
      <Header
        user={appLayoutContext.user}
        profileItems={profileItems}
        onMenuClick={handleMenuClick}
        hideMenuButton={hideSideNav}
        menuIcon={isOpen ? <BiX /> : undefined}
      />
      <div className={styles.desktopRow}>
        {!hideSideNav && (
          <div
            className={clsx(
              styles.sideNavContainer,
              matchMobileBreakpoint && styles.sideNavContainerMobile,
              matchMobileBreakpoint &&
                isOpen &&
                styles.sideNavContainerMobileOpen,
            )}
            onMouseEnter={() => minimizeActive && setMinimize(false)}
            onMouseLeave={() => minimizeActive && setMinimize(true)}
          >
            <SideNav
              minimize={minimize && !matchMobileBreakpoint}
              items={sideNavItems}
            />
          </div>
        )}
        <main className={styles.main}>
          <div className={styles.mainContainer}>{children}</div>
        </main>
      </div>
    </>
  )
}
