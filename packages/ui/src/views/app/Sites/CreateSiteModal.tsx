import Button from "@blogtron/ui/components/Button"
import Heading from "@blogtron/ui/components/Heading"
import Input from "@blogtron/ui/components/Input"
import Modal from "@blogtron/ui/components/Modal"
import { REQUIRED_FIELD_MESSAGE } from "@blogtron/ui/config/messages"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import slugify from "slugify"
import * as yup from "yup"

import styles from "./CreateSiteModal.module.css"

export interface CreateSitePayload {
  name: string
}

export interface CreateSiteModalProps {
  isOpen: boolean
  isLoading: boolean
  onCreate?: (payload: CreateSitePayload) => void
  onClose?: () => void
}

export const siteSchema = yup.object({
  name: yup.string().required(REQUIRED_FIELD_MESSAGE),
})

export default function CreateSiteModal({
  isOpen,
  isLoading,
  onCreate,
  onClose,
}: CreateSiteModalProps) {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(siteSchema),
  })

  const handleCreate = (payload: CreateSitePayload) => {
    if (onCreate) {
      onCreate(payload)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(handleCreate)}>
        <Heading className={styles.title} level={3}>
          Criar domínio
        </Heading>
        <Input
          value={watch("name")}
          onChange={(event) =>
            setValue("name", slugify(event.target.value).toLowerCase())
          }
          className={styles.input}
          id="name"
          label="Nome"
          placeholder="Digite o nome do domínio"
          error={errors?.name?.message}
        />
        <Button isLoading={isLoading} type="submit">
          Criar
        </Button>
      </form>
    </Modal>
  )
}
