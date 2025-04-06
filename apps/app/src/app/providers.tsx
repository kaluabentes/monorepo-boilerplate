import AppLayoutBootstrap from "@blogtron/ui/layouts/AppLayout/AppLayoutBootstrap"
import { AppLayoutProvider } from "@blogtron/ui/layouts/AppLayout/AppLayoutContext"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AppLayoutProvider>
        <AppLayoutBootstrap
          name="Kaluã Bentes"
          email="kaluanbentes@gmail.com"
        />
        {children}
      </AppLayoutProvider>
    </ThemeProvider>
  )
}
