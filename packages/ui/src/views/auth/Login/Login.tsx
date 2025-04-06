import Backdrop from "@blogtron/ui/components/Backdrop/Backdrop"
import Button from "@blogtron/ui/components/Button/Button"
import Card from "@blogtron/ui/components/Card/Card"
import Heading from "@blogtron/ui/components/Heading/Heading"
import Input from "@blogtron/ui/components/Input/Input"
import Logo from "@blogtron/ui/components/Logo/Logo"
import Paragraph from "@blogtron/ui/components/Paragraph/Paragraph"
import useBreakpoint from "@blogtron/ui/hooks/useBreakpoint"

import styles from "./Login.module.css"

export interface LoginProps {
  title?: string
  text?: string
  LinkComponent?: React.ElementType
}

export default function Login({
  title = "Criar conta",
  text = "Para criar uma conta insira seu email abaixo",
  LinkComponent = "a",
}: LoginProps) {
  const breakpoint = useBreakpoint()

  return (
    <Backdrop className={styles.backdrop}>
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
        />
        <Button className={styles.button}>Continuar</Button>
        <Paragraph size="small" variant="muted">
          Ao clicar em continuar você concorda com os{" "}
          <LinkComponent href="#">Termos de Serviço</LinkComponent> e{" "}
          <LinkComponent href="#">Política de Privacidade</LinkComponent>
        </Paragraph>
      </Card>
    </Backdrop>
  )
}
