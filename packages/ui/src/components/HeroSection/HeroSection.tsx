import { ReactNode } from "react"

import Button from "../Button/Button"
import Heading from "../Heading/Heading"
import Paragraph from "../Paragraph/Paragraph"

import styles from "./HeroSection.module.css"

export interface HeroSectionProps {
  headline: ReactNode
  subheadline: ReactNode
  screenshot?: string
  ctaLink?: string
  ctaText?: string
  ctaTarget?: string
  ImageComponent?: React.ElementType
  LinkComponent?: React.ElementType
}

export default function HeroSection({
  headline,
  subheadline,
  screenshot,
  ctaLink,
  ctaText = "Começar agora",
  ctaTarget,
  ImageComponent = "img",
  LinkComponent,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <Heading className={styles.headline}>{headline}</Heading>
      <Paragraph variant="muted" className={styles.subheadline}>
        {subheadline}
      </Paragraph>
      {LinkComponent ? (
        <LinkComponent href={ctaLink} target={ctaTarget}>
          <Button className={styles.cta} isInline size="large">
            {ctaText}
          </Button>
        </LinkComponent>
      ) : (
        <Button className={styles.cta} isInline size="large">
          {ctaText}
        </Button>
      )}
      {screenshot && ImageComponent !== "img" && (
        <ImageComponent
          src={screenshot}
          sizes="100vw"
          width={2244}
          height={1194}
          layout="responsive"
          alt="App screenshot"
        />
      )}
      {screenshot && ImageComponent === "img" && (
        <ImageComponent
          className={styles.screenshot}
          src={screenshot}
          alt="App screenshot"
        />
      )}
    </section>
  )
}
