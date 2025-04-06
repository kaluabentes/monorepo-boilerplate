import clsx from "clsx"

import styles from "./Toggle.module.css"

interface ToggleProps {
  isActive?: boolean
  onClick?: () => void
  title?: string
}

export default function Toggle({
  isActive = false,
  onClick,
  title,
}: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isActive}
      aria-label={title}
      onClick={onClick}
      className={clsx(styles.container, isActive && styles.active)}
    >
      <div className={styles.indicator} />
    </button>
  )
}
