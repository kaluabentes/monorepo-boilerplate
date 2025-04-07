"use client"

import { useEffect } from "react"

import { AppLayoutContextData, useAppLayoutContext } from "./AppLayoutContext"

export default function AppLayoutBootstrap({
  user,
  sideNavItems,
}: AppLayoutContextData) {
  const { setAppLayoutContext } = useAppLayoutContext()

  useEffect(() => {
    setAppLayoutContext((prev) => ({
      ...prev,
      user,
      sideNavItems,
    }))
  }, [setAppLayoutContext, user, sideNavItems])

  return null
}
