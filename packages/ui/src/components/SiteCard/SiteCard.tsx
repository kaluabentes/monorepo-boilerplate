import { ElementType } from "react"

import Card from "../Card/Card"
import Heading from "../Heading/Heading"
import Paragraph from "../Paragraph/Paragraph"

import styles from "./SiteCard.module.css"

export interface Site {
  name: string
  domain: string
  href: string
}

export interface SiteCardProps {
  site: Site
  LinkComponent?: ElementType
}

export default function SiteCard({ site, LinkComponent = "a" }: SiteCardProps) {
  return (
    <LinkComponent className={styles.container} href={site.href}>
      <Card padding="small">
        <Heading level={2} size={6}>
          {site.name}
        </Heading>
        <Paragraph size="small" variant="muted">
          {site.domain}
        </Paragraph>
      </Card>
    </LinkComponent>
  )
}
