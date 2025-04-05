"use client"

import clsx from "clsx"
import { CSSProperties, KeyboardEvent, ReactNode } from "react"

import Spinner from "../Spinner"

import styles from "./Button.module.css"

interface ButtonProps {
  id?: string
  title?: string
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "ghost"
    | "link"
  size?: "small" | "normal" | "large"
  type?: "submit" | "reset" | "button"
  className?: string
  children: ReactNode
  href?: string
  style?: CSSProperties
  onClick?: () => void
  isLoading?: boolean
  isInline?: boolean
  isDiv?: boolean
  isDisabled?: boolean
  isIcon?: boolean
}

const BUTTON_VARIANTS: { [key: string]: string } = {
  primary: styles.primary!,
  secondary: styles.secondary!,
  success: styles.success!,
  warning: styles.warning!,
  danger: styles.danger!,
  ghost: styles.ghost!,
  link: styles.link!,
}

const BUTTON_SIZES: { [key: string]: string } = {
  small: styles.small!,
  normal: styles.normal!,
  large: styles.large!,
}

export default function Button({
  id,
  title,
  variant = "primary",
  size = "normal",
  type = "button",
  children,
  className,
  href,
  onClick,
  isLoading,
  isInline,
  isDiv = false,
  isDisabled = false,
  isIcon = false,
}: ButtonProps) {
  const classNameString = clsx(
    styles.button,
    isInline && styles.inline,
    isDisabled && styles.disabled,
    isLoading && styles.loading,
    BUTTON_VARIANTS[variant],
    BUTTON_SIZES[size],
    isIcon && styles.icon,
    className,
  )

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && onClick && !isDisabled) {
      onClick()
    }
  }

  if (isDiv) {
    return (
      <div
        id={id}
        role="button"
        tabIndex={0}
        className={classNameString}
        aria-label={title}
        title={title}
        onKeyDown={handleKeyDown}
        onClick={isDisabled ? undefined : onClick}
      >
        {isLoading ? <Spinner /> : children}
      </div>
    )
  }

  if (href) {
    return (
      <a
        id={id}
        className={classNameString}
        href={href}
        aria-label={title}
        title={title}
      >
        {isLoading ? <Spinner /> : children}
      </a>
    )
  }

  return (
    <button
      id={id}
      type={type}
      className={classNameString}
      onClick={onClick}
      aria-label={isLoading ? "Carregando" : title}
      title={isLoading ? "Carregando" : title}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? <Spinner className={styles.spinner} /> : children}
    </button>
  )
}
