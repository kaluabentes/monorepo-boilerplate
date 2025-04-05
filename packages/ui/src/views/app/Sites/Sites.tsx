import EmptyState from "@blogtron/ui/components/EmptyState"
import PageHeader from "@blogtron/ui/components/PageHeader"
import SiteCard, { Site } from "@blogtron/ui/components/SiteCard"
import AppLayout from "@blogtron/ui/layouts/AppLayout"
import { ElementType } from "react"

import CreateSiteModal, { CreateSitePayload } from "./CreateSiteModal"
import styles from "./Sites.module.css"

export interface SitesProps {
  sites?: Site[]
  onCreate?: (payload: CreateSitePayload) => void
  onClose?: () => void
  isCreateOpen?: boolean
  isCreateLoading?: boolean
  LinkComponent?: ElementType
}

export default function Sites({
  sites = [],
  onClose,
  onCreate,
  isCreateOpen = false,
  isCreateLoading = false,
  LinkComponent,
}: SitesProps) {
  return (
    <AppLayout hideSideNav>
      <PageHeader
        title="Sites"
        buttonText="Criar"
        buttonHref="#"
        LinkComponent={LinkComponent}
      />
      {!sites.length && (
        <EmptyState
          title="Não há nada aqui ainda"
          message='Ainda não há domínios criados, para criar um clique em "Criar" ↗.'
        />
      )}
      <div className={styles.grid}>
        {sites.map((site, index) => (
          <SiteCard key={index} site={site} />
        ))}
      </div>
      <CreateSiteModal
        isOpen={isCreateOpen}
        isLoading={isCreateLoading}
        onCreate={onCreate}
        onClose={onClose}
      />
    </AppLayout>
  )
}
