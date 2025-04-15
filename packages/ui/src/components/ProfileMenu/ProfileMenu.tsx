import Link from "next/link"
import { useTheme } from "next-themes"

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
}

export default function ProfileMenu({
  name,
  email,
  items = [],
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
        <Link href={item.href} className={styles.item} key={index}>
          {item.text}
        </Link>
      ))}
    </Card>
  )
}
