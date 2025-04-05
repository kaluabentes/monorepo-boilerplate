"use client"

import clsx from "clsx"
import { ChangeEvent, ForwardedRef, forwardRef } from "react"

import styles from "./TextArea.module.css"

export interface TextAreaProps {
  className?: string
  id: string
  label?: string
  placeholder?: string
  rows?: number
  cols?: number
  error?: string
  value?: string
  name?: string
  isDisabled?: boolean
  isRow?: boolean
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = forwardRef(function TextArea(
  {
    className,
    id,
    label,
    placeholder,
    rows,
    cols,
    error,
    value,
    name,
    isDisabled,
    isRow,
    onChange,
  }: TextAreaProps,
  ref,
) {
  return (
    <div className={clsx(styles.container, className, isRow && styles.isRow)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        disabled={isDisabled}
        onChange={onChange}
        value={value}
        className={styles.input}
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        ref={ref as ForwardedRef<HTMLTextAreaElement | null>}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
})

export default TextArea
