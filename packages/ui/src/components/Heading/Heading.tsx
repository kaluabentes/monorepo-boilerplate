"use client"

import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Heading.module.css"

export interface HeadingProps {
  id?: string
  className?: string
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: 1 | 2 | 3 | 4 | 5 | 6
  align?: "left" | "center" | "right"
}

interface ElementProps {
  id?: string
  children: ReactNode
  className?: string
}

const levels = {
  1: styles.h1,
  2: styles.h2,
  3: styles.h3,
  4: styles.h4,
  5: styles.h5,
  6: styles.h6,
}

const aligns = {
  left: styles.alignLeft,
  center: styles.alignCenter,
  right: styles.alignRight,
}

const elements = {
  1: ({ id, children, className }: ElementProps) => (
    <h1 id={id} className={className}>
      {children}
    </h1>
  ),
  2: ({ id, children, className }: ElementProps) => (
    <h2 id={id} className={className}>
      {children}
    </h2>
  ),
  3: ({ id, children, className }: ElementProps) => (
    <h3 id={id} className={className}>
      {children}
    </h3>
  ),
  4: ({ id, children, className }: ElementProps) => (
    <h4 id={id} className={className}>
      {children}
    </h4>
  ),
  5: ({ id, children, className }: ElementProps) => (
    <h5 id={id} className={className}>
      {children}
    </h5>
  ),
  6: ({ id, children, className }: ElementProps) => (
    <h6 id={id} className={className}>
      {children}
    </h6>
  ),
}

export default function Heading({
  id,
  className,
  children,
  level = 1,
  size,
  align = "left",
}: HeadingProps) {
  const Component = elements[level]

  return (
    <Component
      id={id}
      className={clsx(
        styles.base,
        levels[level],
        size && levels[size],
        aligns[align],
        className,
      )}
    >
      {children}
    </Component>
  )
}
