import clsx from "clsx"

import Toggle from "../Toggle/Toggle"

import styles from "./ToggleInput.module.css"

interface ToggleInputProps {
  className?: string
  id: string
  isRow: boolean
  label: string
  error?: string
  value?: boolean
  onChange: () => void
}

export default function ToggleInput({
  className,
  id,
  isRow,
  label,
  error,
  value,
  onChange,
}: ToggleInputProps) {
  return (
    <div className={clsx(styles.container, className, isRow && styles.isRow)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div>
        <Toggle isActive={value} onClick={onChange} />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  )
}
