"use client"

import * as Portal from "@radix-ui/react-portal"
import clsx from "clsx"
import { ReactNode, useEffect, useRef } from "react"
import { BiX } from "react-icons/bi"

import styles from "./Modal.module.css"

interface ModalProps {
  isOpen: boolean
  hideCloseButton?: boolean
  children: ReactNode
  ariaLabelledBy?: string
  arialDescribedBy?: string
  usePortal?: boolean
  onClose?: () => void
}

export default function Modal({
  isOpen,
  hideCloseButton = false,
  onClose,
  children,
  ariaLabelledBy,
  usePortal = true,
  arialDescribedBy,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      if (dialogRef.current) dialogRef.current.focus()

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && onClose) {
          onClose()
        }
      }

      document.addEventListener("keydown", handleKeyDown)
      return () => {
        document.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [isOpen, onClose])

  const output = (
    <div
      className={clsx(styles.overlay, isOpen && styles.open)}
      role="alertdialog"
      aria-modal={isOpen ? "true" : "false"}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={arialDescribedBy}
      ref={dialogRef}
      tabIndex={-1}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          if (onClose) onClose()
        }
      }}
    >
      <div className={styles.content}>
        {!hideCloseButton && (
          <button onClick={onClose} className={styles.closeButton}>
            <BiX />
          </button>
        )}
        {children}
      </div>
    </div>
  )

  if (usePortal) {
    return <Portal.Root>{output}</Portal.Root>
  }

  return output
}
