import clsx from "clsx"

import LabelledToggle, {
  LabelledToggleItem,
} from "../LabelledToggle/LabelledToggle"

import styles from "./LabelledToggleInput.module.css"

interface LabelledToggleInputProps {
  className?: string
  id: string
  isRow?: boolean
  label: string
  error?: string
  value: string
  items: LabelledToggleItem[]
  onChange: (value: string) => void
}

export default function LabelledToggleInput({
  className,
  id,
  isRow = false,
  label,
  error,
  value,
  items,
  onChange,
}: LabelledToggleInputProps) {
  return (
    <div className={clsx(styles.container, className, isRow && styles.isRow)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div>
        <LabelledToggle items={items} value={value} onChange={onChange} />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  )
}
