import { ReactNode } from "react"
import { BiReceipt } from "react-icons/bi"

import Card from "../Card/Card"
import Heading from "../Heading/Heading"

import styles from "./EmptyState.module.css"

interface EmptyStateProps {
  message: string
  title?: string
  icon?: ReactNode
}

export default function EmptyState({
  message,
  title,
  icon = <BiReceipt />,
}: EmptyStateProps) {
  return (
    <Card className={styles.container}>
      {icon}
      {title && (
        <Heading level={3} className={styles.title}>
          {title}
        </Heading>
      )}
      {message && <p className={styles.message}>{message}</p>}
    </Card>
  )
}
