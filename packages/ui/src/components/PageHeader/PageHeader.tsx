import { ElementType } from "react"

import Button from "../Button/Button"
import Heading from "../Heading/Heading"

import styles from "./PageHeader.module.css"

export interface PageHeaderProps {
  title: string
  buttonText: string
  buttonHref: string
  LinkComponent?: ElementType
  onButtonClick?: () => void
}

export default function PageHeader({
  title,
  buttonText,
  buttonHref,
  LinkComponent = "a",
  onButtonClick,
}: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <Heading size={2} className={styles.title}>
        {title}
      </Heading>
      {onButtonClick && <Button onClick={onButtonClick}>{buttonText}</Button>}
      {!onButtonClick && (
        <LinkComponent href={buttonHref}>
          <Button>{buttonText}</Button>
        </LinkComponent>
      )}
    </header>
  )
}
