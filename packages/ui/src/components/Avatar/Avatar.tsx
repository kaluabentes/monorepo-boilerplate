import clsx from "clsx"

import styles from "./Avatar.module.css"

export interface AvatarProps {
  name: string
  small?: boolean
  className?: string
}

export default function Avatar({ name, small, className }: AvatarProps) {
  const firstLetter = name.split(" ")[0]?.slice(0, 1)
  const lastLetter = name.split(" ")[1]?.slice(0, 1)

  return (
    <div className={clsx(styles.avatar, small && styles.small, className)}>
      {firstLetter}
      {lastLetter}
    </div>
  )
}
