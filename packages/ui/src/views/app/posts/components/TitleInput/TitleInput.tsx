"use client"

import React, { useRef, useEffect, useState } from "react"

import styles from "./TitleInput.module.css"

interface TitleInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function TitleInput({
  value,
  onChange,
  placeholder = "Digite o título...",
}: TitleInputProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isEmpty, setIsEmpty] = useState(value.trim() === "")

  useEffect(() => {
    if (ref.current && ref.current.innerText !== value) {
      ref.current.innerText = value
      checkEmpty()
    }
  }, [value])

  const handleInput = () => {
    const text = ref.current?.innerText ?? ""
    onChange(text)
    checkEmpty()
  }

  const checkEmpty = () => {
    const text = ref.current?.innerText?.trim() ?? ""
    const html = ref.current?.innerHTML?.trim() ?? ""

    const isReallyEmpty = text === "" || html === "<br>"

    if (isReallyEmpty && ref.current) {
      ref.current.innerHTML = ""
    }

    setIsEmpty(isReallyEmpty)
  }

  return (
    <h2
      className={styles.input}
      ref={ref}
      contentEditable
      role="textbox"
      aria-placeholder={placeholder}
      data-placeholder={placeholder}
      data-empty={isEmpty}
      onInput={handleInput}
      style={{
        minHeight: "2.5rem",
      }}
      suppressContentEditableWarning
    />
  )
}
