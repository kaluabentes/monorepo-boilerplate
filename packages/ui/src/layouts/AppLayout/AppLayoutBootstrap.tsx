"use client"

import { useEffect } from "react"

import { useAppLayoutContext, User } from "./AppLayoutContext"

export default function AppLayoutBootstrap({ name, email }: User) {
  const { setAppLayoutContext } = useAppLayoutContext()

  useEffect(() => {
    setAppLayoutContext((prev) => ({
      ...prev,
      user: {
        name,
        email,
      },
    }))
  }, [setAppLayoutContext, name, email])

  return null
}
