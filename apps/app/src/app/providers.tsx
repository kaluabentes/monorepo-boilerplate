import AppLayoutBootstrap from "@blogtron/ui/layouts/AppLayout/AppLayoutBootstrap"
import { AppLayoutProvider } from "@blogtron/ui/layouts/AppLayout/AppLayoutContext"
import { ReactNode } from "react"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AppLayoutProvider>
      <AppLayoutBootstrap name="Kaluã Bentes" email="kaluanbentes@gmail.com" />
      {children}
    </AppLayoutProvider>
  )
}
