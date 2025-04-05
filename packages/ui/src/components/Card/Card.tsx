import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Card.module.css"

export interface CardProps {
  children: ReactNode
  padding?: "large" | "small"
  className?: string
}

const PADDING: { [key: string]: string | undefined } = {
  small: styles.cardPaddingSmall,
  large: styles.cardPaddingLarge,
}

export default function Card({ children, padding, className }: CardProps) {
  return (
    <div className={clsx(styles.card, PADDING[padding!], className)}>
      {children}
    </div>
  )
}
