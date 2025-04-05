import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Dropdown.module.css"

interface DropdownProps {
  children?: ReactNode
  trigger?: ReactNode
  align?: "center" | "start" | "end"
  triggerClassName?: string
  contentClassName?: string
}

export default function Dropdown({
  trigger,
  children,
  align = "start",
  triggerClassName,
  contentClassName,
}: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={clsx(styles.trigger, triggerClassName)}
          aria-label="Dropdown"
        >
          {trigger}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={clsx(styles.content, contentClassName)}
          align={align}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
