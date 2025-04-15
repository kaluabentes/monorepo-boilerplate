import PageHeader from "@blogtron/ui/components/PageHeader/PageHeader"
import AppLayout from "@blogtron/ui/layouts/AppLayout/AppLayout"

export default function PostsList() {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Posts",
    },
  ]

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <PageHeader title="Posts" buttonText="Criar" buttonHref="/posts/create" />
    </AppLayout>
  )
}
