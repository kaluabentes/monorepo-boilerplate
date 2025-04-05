"use client"

import { clsx } from "clsx"
import { ReactNode } from "react"

import styles from "./Paragraph.module.css"

export interface ParagraphProps {
  id?: string
  className?: string
  children: ReactNode
  weight?: "normal" | "medium" | "bold"
  variant?: "normal" | "muted"
  size?: "normal" | "small" | "xsmall"
  align?: "left" | "center" | "right"
}

const weights = {
  normal: styles.normalWeight,
  medium: styles.mediumWeight,
  bold: styles.boldWeight,
}

const variants = {
  normal: styles.normalVariant,
  muted: styles.mutedVariant,
}

const sizes = {
  normal: styles.sizeNormal,
  small: styles.sizeSmall,
  xsmall: styles.sizeXSmall,
}

const aligns = {
  left: styles.alignLeft,
  center: styles.alignCenter,
  right: styles.alignRight,
}

export default function Paragraph({
  id,
  className,
  children,
  weight = "normal",
  variant = "normal",
  size = "normal",
  align = "left",
}: ParagraphProps) {
  return (
    <p
      id={id}
      className={clsx(
        styles.paragraph,
        weights[weight],
        variants[variant],
        sizes[size],
        aligns[align],
        className,
      )}
    >
      {children}
    </p>
  )
}
