import Button from "@blogtron/ui/components/Button"
import Heading from "@blogtron/ui/components/Heading"
import Input from "@blogtron/ui/components/Input"
import Modal from "@blogtron/ui/components/Modal"
import { REQUIRED_FIELD_MESSAGE } from "@blogtron/ui/config/messages"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import slugify from "slugify"
import * as yup from "yup"

import CreatePageLoader from "./CreatePageLoader"
import styles from "./CreatePageModal.module.css"

export interface CreatePagePayload {
  affiliateLink: string
}

export interface CreatePageModalProps {
  isOpen: boolean
  isLoading: boolean
  onCreate?: (payload: CreatePagePayload) => void
  onClose?: () => void
}

export const productSchema = yup.object({
  affiliateLink: yup.string().required(REQUIRED_FIELD_MESSAGE),
})

export default function CreatePageModal({
  isOpen,
  isLoading,
  onCreate,
  onClose,
}: CreatePageModalProps) {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  })

  const handleCreate = (payload: CreatePagePayload) => {
    if (onCreate) {
      onCreate(payload)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton={isLoading}>
      {isLoading && <CreatePageLoader />}
      {!isLoading && (
        <form onSubmit={handleSubmit(handleCreate)}>
          <Heading className={styles.title} level={3}>
            Criar página
          </Heading>
          <Input
            value={watch("affiliateLink")}
            onChange={(event) =>
              setValue(
                "affiliateLink",
                slugify(event.target.value).toLowerCase(),
              )
            }
            className={styles.input}
            id="affiliateLink"
            label="Link de afiliado"
            placeholder="Cole o link de afiliado"
            error={errors?.affiliateLink?.message}
          />
          <Button type="submit">Criar</Button>
        </form>
      )}
    </Modal>
  )
}
