import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Backdrop.module.css"

export interface BackdropProps {
  children: ReactNode
  className?: string
}

export default function Backdrop({ children, className }: BackdropProps) {
  return <div className={clsx(styles.backdrop, className)}>{children}</div>
}
