import Link from "next/link"

import Button from "../Button/Button"
import Heading from "../Heading/Heading"

import styles from "./PageHeader.module.css"

export interface PageHeaderProps {
  title: string
  buttonText?: string
  buttonHref?: string
  onButtonClick?: () => void
}

export default function PageHeader({
  title,
  buttonText,
  buttonHref,
  onButtonClick,
}: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <Heading size={2} className={styles.title}>
        {title}
      </Heading>
      {onButtonClick && <Button onClick={onButtonClick}>{buttonText}</Button>}
      {!onButtonClick && buttonHref && (
        <Link href={buttonHref}>
          <Button>{buttonText}</Button>
        </Link>
      )}
    </header>
  )
}
