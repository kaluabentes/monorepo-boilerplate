"use client"

import clsx from "clsx"
import { ChangeEvent, ForwardedRef, forwardRef } from "react"

import styles from "./Input.module.css"

export interface InputProps {
  className?: string
  id: string
  label?: string
  placeholder?: string
  error?: string
  value?: string
  name?: string
  type?: string
  min?: number | string
  max?: number | string
  isLabelHidden?: boolean
  isDisabled?: boolean
  isRow?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef(function Input(
  {
    className,
    id,
    label,
    placeholder,
    error,
    value,
    name,
    type,
    min,
    max,
    isLabelHidden = false,
    isDisabled,
    isRow,
    onChange,
  }: InputProps,
  ref,
) {
  return (
    <div
      className={clsx(
        styles.container,
        className,
        isRow && styles.isRow,
        type === "color" && styles.color,
      )}
    >
      {!isLabelHidden && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div>
        <input
          aria-label={label}
          disabled={isDisabled}
          onChange={onChange}
          value={value}
          className={styles.input}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          min={min}
          max={max}
          ref={ref as ForwardedRef<HTMLInputElement | null>}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  )
})

export default Input
