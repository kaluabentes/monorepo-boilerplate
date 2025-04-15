"use client"

import Backdrop from "@blogtron/ui/components/Backdrop/Backdrop"
import Button from "@blogtron/ui/components/Button/Button"
import Card from "@blogtron/ui/components/Card/Card"
import Heading from "@blogtron/ui/components/Heading/Heading"
import Input from "@blogtron/ui/components/Input/Input"
import Logo from "@blogtron/ui/components/Logo/Logo"
import Paragraph from "@blogtron/ui/components/Paragraph/Paragraph"
import {
  EMAIL_INVALID_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
} from "@blogtron/ui/config/messages"
import useBreakpoint from "@blogtron/ui/hooks/useBreakpoint"
import { yupResolver } from "@hookform/resolvers/yup"
import clsx from "clsx"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import styles from "./Login.module.css"

export interface LoginPayload {
  email: string
}
export interface LoginProps {
  title?: string
  text?: string
  hidePolicies?: boolean
  onLogin?: (payload: LoginPayload) => void
}

export const loginSchema = yup.object({
  email: yup
    .string()
    .email(EMAIL_INVALID_MESSAGE)
    .required(REQUIRED_FIELD_MESSAGE),
})

export default function Login({
  title = "Criar conta",
  text = "Para criar uma conta insira seu email abaixo",
  hidePolicies = false,
  onLogin,
}: LoginProps) {
  const breakpoint = useBreakpoint()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const handleLogin = (payload: LoginPayload) => {
    if (onLogin) {
      onLogin(payload)
    }
  }

  return (
    <Backdrop className={styles.backdrop}>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Card
          className={styles.card}
          padding={breakpoint?.includes("mobile") ? "small" : "large"}
        >
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <Heading size={2} className={styles.title}>
            {title}
          </Heading>
          <Paragraph className={styles.text} variant="muted">
            {text}
          </Paragraph>
          <Input
            className={styles.input}
            id="email"
            label="Email"
            placeholder="Digite seu email"
            error={errors?.email?.message}
            {...register("email")}
          />
          <Button
            type="submit"
            className={clsx(
              styles.button,
              hidePolicies && styles.buttonHidePolicies,
            )}
          >
            Continuar
          </Button>
          {!hidePolicies && (
            <Paragraph size="small" variant="muted">
              Ao clicar em continuar você concorda com os{" "}
              <Link href="#">Termos de Serviço</Link> e{" "}
              <Link href="#">Política de Privacidade</Link>
            </Paragraph>
          )}
        </Card>
      </form>
    </Backdrop>
  )
}
