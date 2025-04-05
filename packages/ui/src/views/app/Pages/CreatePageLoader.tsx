import Heading from "@blogtron/ui/components/Heading"
import Paragraph from "@blogtron/ui/components/Paragraph"
import Spinner from "@blogtron/ui/components/Spinner"

import styles from "./CreatePageLoader.module.css"

export default function CreatePageLoader() {
  return (
    <div className={styles.container}>
      <Spinner className={styles.spinner} size="large" />
      <Heading className={styles.heading} level={3} size={6} align="center">
        Aguarde um momento
      </Heading>
      <Paragraph className={styles.text} align="center" variant="muted">
        Estamos criando sua página presell, não feche esta aba
      </Paragraph>
    </div>
  )
}
