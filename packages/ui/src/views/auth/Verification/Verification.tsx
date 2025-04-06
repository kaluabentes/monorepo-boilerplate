import Backdrop from "@blogtron/ui/components/Backdrop/Backdrop"
import Card from "@blogtron/ui/components/Card/Card"
import Heading from "@blogtron/ui/components/Heading/Heading"
import Logo from "@blogtron/ui/components/Logo/Logo"
import Paragraph from "@blogtron/ui/components/Paragraph/Paragraph"
import useBreakpoint from "@blogtron/ui/hooks/useBreakpoint"
import { MdOutlineMarkEmailRead } from "react-icons/md"

import styles from "./Verification.module.css"

export interface VerificationProps {
  title?: string
  text?: string
  LinkComponent?: React.ElementType
}

export default function Verification({
  title = "Verifique seu email",
  text = "Enviamos um link para o seu email, clique no link para logar",
}: VerificationProps) {
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
        <div className={styles.iconContainer}>
          <MdOutlineMarkEmailRead />
        </div>
        <Heading size={2} className={styles.title}>
          {title}
        </Heading>
        <Paragraph className={styles.text} variant="muted" align="center">
          {text}
        </Paragraph>
      </Card>
    </Backdrop>
  )
}
