import clsx from "clsx"

import styles from "./LabelledToggle.module.css"

export interface LabelledToggleItem {
  label: string
  value: string
}

interface LabelledToggleProps {
  onChange: (value: string) => void
  value: string
  items: LabelledToggleItem[]
}

export default function LabelledToggle({
  onChange,
  value,
  items = [],
}: LabelledToggleProps) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <button
          key={index}
          className={clsx(styles.label, item.value === value && styles.active)}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
