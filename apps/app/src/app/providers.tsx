import AppLayoutBootstrap from "@blogtron/ui/layouts/AppLayout/AppLayoutBootstrap"
import { AppLayoutProvider } from "@blogtron/ui/layouts/AppLayout/AppLayoutContext"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

import sideNavItems from "@/config/sideNavItems"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AppLayoutProvider>
        <AppLayoutBootstrap
          user={{
            name: "Kaluã Bentes",
            email: "kaluanbentes@gmail.com",
          }}
          sideNavItems={sideNavItems}
        />
        {children}
      </AppLayoutProvider>
    </ThemeProvider>
  )
}
