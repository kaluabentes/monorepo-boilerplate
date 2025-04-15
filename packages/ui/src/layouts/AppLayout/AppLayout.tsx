"use client"

import clsx from "clsx"
import Link from "next/link"
import { Fragment, ReactNode, useState } from "react"
import { BiX } from "react-icons/bi"

import Header from "../../components/Header/Header"
import SideNav from "../../components/SideNav/SideNav"
import profileItems from "../../config/profileItems"
import useBreakpoint from "../../hooks/useBreakpoint"

import styles from "./AppLayout.module.css"
import { useAppLayoutContext } from "./AppLayoutContext"

interface BreadcrumbItem {
  label: string
  href?: string
}

export interface AppLayoutProps {
  isFullWidth?: boolean
  hideSideNav?: boolean
  breadcrumbs?: BreadcrumbItem[]
  children: ReactNode
}

export default function AppLayout({
  children,
  hideSideNav,
  isFullWidth,
  breadcrumbs = [],
}: AppLayoutProps) {
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
              items={appLayoutContext.sideNavItems}
            />
          </div>
        )}
        <main
          className={clsx(styles.main, isFullWidth && styles.mainFullWidth)}
        >
          {breadcrumbs.length > 0 && (
            <nav className={styles.breadcrumbs}>
              {breadcrumbs.map((item, index) => {
                if (index !== breadcrumbs.length - 1) {
                  return (
                    <Fragment key={index}>
                      <Link className={styles.breadcrumbItem} href={item.href!}>
                        {item.label}
                      </Link>
                      <span className={styles.breadcrumbSeparator}>/</span>
                    </Fragment>
                  )
                }

                return (
                  <p key={index} className={styles.breadcrumbItem}>
                    {item.label}
                  </p>
                )
              })}
            </nav>
          )}
          <div
            className={clsx(
              styles.mainContainer,
              breadcrumbs.length && styles.mainWithBreadcrumb,
            )}
          >
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
