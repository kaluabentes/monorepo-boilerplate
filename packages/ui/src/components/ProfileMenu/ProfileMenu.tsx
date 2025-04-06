import { useTheme } from "next-themes"
import { ElementType } from "react"

import Avatar from "../Avatar/Avatar"
import Card from "../Card/Card"
import LabelledToggleInput from "../LabelledToggleInput/LabelledToggleInput"

import styles from "./ProfileMenu.module.css"

export interface ProfileMenuItem {
  text: string
  href: string
}

export interface ProfileMenuProps {
  name: string
  email: string
  items?: ProfileMenuItem[]
  LinkComponent?: ElementType
}

export default function ProfileMenu({
  name,
  email,
  items = [],
  LinkComponent = "a",
}: ProfileMenuProps) {
  const { resolvedTheme: theme, setTheme } = useTheme()

  return (
    <Card className={styles.card} padding="small">
      <Avatar className={styles.avatar} name={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.email}>{email}</p>
      <LabelledToggleInput
        className={styles.themeInput}
        id="theme"
        label="Tema"
        value={theme!}
        onChange={(value) => setTheme(value)}
        items={[
          { label: "Escuro", value: "dark" },
          { label: "Claro", value: "light" },
        ]}
        isRow
      />
      <div className={styles.divider} />
      {items.map((item, index) => (
        <LinkComponent className={styles.item} key={index}>
          {item.text}
        </LinkComponent>
      ))}
    </Card>
  )
}
