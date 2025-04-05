import clsx from "clsx"

import styles from "./Spinner.module.css"

interface SpinnerProps {
  className?: string
  size?: "small" | "medium" | "large"
}

const SIZES: { [key: string]: string | undefined } = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
}

export default function Spinner({ size = "small", className }: SpinnerProps) {
  return <div className={clsx(styles.spinner, SIZES[size], className)} />
}
