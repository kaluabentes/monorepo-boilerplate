"use client"

import Button from "@blogtron/ui/components/Button"
import HeroSection from "@blogtron/ui/components/HeroSection"
import LandingPageAppBar from "@blogtron/ui/components/LandingPageAppBar"
import LandingPageHeader from "@blogtron/ui/components/LandingPageHeader"
import MarketplaceBrandsSection from "@blogtron/ui/components/MarketplaceBrandsSection"
import MenuItem from "@blogtron/ui/components/MenuItem"
import useBreakpoint from "@blogtron/ui/hooks/useBreakpoint"

export interface HomeProps {
  screenshot?: string
  ImageComponent?: React.ElementType
  LinkComponent?: React.ElementType
}

export default function Home({
  screenshot,
  ImageComponent,
  LinkComponent,
}: HomeProps) {
  const breakpoint = useBreakpoint()

  return (
    <>
      {breakpoint?.includes("mobile") && (
        <LandingPageAppBar
          menuItems={
            <>
              <MenuItem>Sobre</MenuItem>
              <MenuItem>Funcionalidades</MenuItem>
              <MenuItem>Preços</MenuItem>
            </>
          }
          buttons={
            <>
              <Button variant="secondary">Login</Button>
              <Button>Começar</Button>
            </>
          }
        />
      )}
      {breakpoint?.includes("desktop") && (
        <LandingPageHeader
          menuItems={
            <>
              <MenuItem isInline>Sobre</MenuItem>
              <MenuItem isInline>Funcionalidades</MenuItem>
              <MenuItem isInline>Preços</MenuItem>
            </>
          }
          buttons={
            <>
              <Button isInline variant="ghost">
                Login
              </Button>
              <Button isInline variant="secondary">
                Começar
              </Button>
            </>
          }
        />
      )}
      <HeroSection
        headline="Crie Páginas Presell De Alta Conversão"
        subheadline="A solução ideal para afiliados e empreendedores digitais. Construa presells rápidas, otimizadas e projetadas para maximizar suas conversões — sem complicações, só resultados!"
        screenshot={screenshot}
        ctaLink="http://localhost:3000"
        ctaText="Teste por 7 dias"
        ImageComponent={ImageComponent}
        LinkComponent={LinkComponent}
      />
      <MarketplaceBrandsSection />
    </>
  )
}
