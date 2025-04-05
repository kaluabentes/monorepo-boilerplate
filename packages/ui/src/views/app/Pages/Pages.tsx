import Button from "@blogtron/ui/components/Button"
import EmptyState from "@blogtron/ui/components/EmptyState"
import PageHeader from "@blogtron/ui/components/PageHeader"
import { Table } from "@blogtron/ui/components/Table"
import AppLayout from "@blogtron/ui/layouts/AppLayout"
import { ElementType } from "react"
import { BiEdit, BiShow, BiTrash } from "react-icons/bi"

import CreatePageModal, { CreatePagePayload } from "./CreatePageModal"
import styles from "./Pages.module.css"

export interface Page {
  path: string
}

export interface PagesProps {
  pages?: Page[]
  onCreate?: (payload: CreatePagePayload) => void
  onClose?: () => void
  isCreateOpen?: boolean
  isCreateLoading?: boolean
  LinkComponent?: ElementType
}

export default function Pages({
  pages = [],
  onClose,
  onCreate,
  isCreateOpen = false,
  isCreateLoading = false,
  LinkComponent,
}: PagesProps) {
  return (
    <AppLayout>
      <PageHeader
        title="Páginas"
        buttonText="Criar"
        buttonHref="#"
        LinkComponent={LinkComponent}
      />
      {!pages.length && (
        <EmptyState
          title="Não há nada aqui ainda"
          message='Ainda não há domínios criados, para criar um clique em "Criar" ↗.'
        />
      )}
      {Boolean(pages.length) && (
        <Table>
          <thead>
            <tr>
              <th className={styles.pathHead}>Caminho</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page, index) => (
              <tr key={index}>
                <td>{page.path}</td>
                <td className={styles.actions}>
                  <Button isIcon size="small" variant="secondary" isInline>
                    <BiShow />
                  </Button>
                  <Button isIcon size="small" variant="secondary" isInline>
                    <BiEdit />
                  </Button>
                  <Button isIcon size="small" variant="secondary" isInline>
                    <BiTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <CreatePageModal
        isOpen={isCreateOpen}
        isLoading={isCreateLoading}
        onCreate={onCreate}
        onClose={onClose}
      />
    </AppLayout>
  )
}
