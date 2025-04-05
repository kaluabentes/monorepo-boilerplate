import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./HeaderButton.module.css"

export interface HeaderButtonProps {
  className?: string
  icon: ReactNode
  ariaLabel: string
  isActive?: boolean
  onClick: () => void
}

export default function HeaderButton({
  className,
  icon,
  ariaLabel,
  isActive = false,
  onClick,
}: HeaderButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={clsx(
        styles.menuButton,
        isActive && styles.isActive,
        className,
      )}
    >
      {icon}
    </button>
  )
}
