"use client"

import { SideNavItem } from "@blogtron/ui/components/SideNav/SideNav"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"

export interface User {
  name: string
  email: string
}

export interface AppLayoutContextData {
  user: User
  sideNavItems: SideNavItem[]
}

const DEFAULT_VALUE = {
  user: {
    name: "",
    email: "",
  },
  sideNavItems: [],
}

const AppLayoutContext = createContext<AppLayoutContextData>(DEFAULT_VALUE)
const AppLayoutDispatchContext = createContext<Dispatch<
  SetStateAction<AppLayoutContextData>
> | null>(null)

export function AppLayoutProvider({ children }: { children: ReactNode }) {
  const [appLayoutContext, setAppLayoutContext] =
    useState<AppLayoutContextData>(DEFAULT_VALUE)

  return (
    <AppLayoutContext.Provider value={appLayoutContext}>
      <AppLayoutDispatchContext.Provider value={setAppLayoutContext}>
        {children}
      </AppLayoutDispatchContext.Provider>
    </AppLayoutContext.Provider>
  )
}

export function useAppLayoutContext() {
  const appLayoutContext = useContext(AppLayoutContext)
  const setAppLayoutContext = useContext(AppLayoutDispatchContext)

  if (!AppLayoutContext || !setAppLayoutContext) {
    throw new Error(
      "useAppLayoutContext must be used within a AppLayoutProvider",
    )
  }

  return {
    appLayoutContext,
    setAppLayoutContext,
  }
}
