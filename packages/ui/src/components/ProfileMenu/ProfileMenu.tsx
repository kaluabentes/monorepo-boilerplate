import { ElementType } from "react"

import Avatar from "../Avatar/Avatar"
import Card from "../Card/Card"

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
  return (
    <Card className={styles.card} padding="small">
      <Avatar className={styles.avatar} name={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.email}>{email}</p>
      <div className={styles.divider} />
      {items.map((item, index) => (
        <LinkComponent className={styles.item} key={index}>
          {item.text}
        </LinkComponent>
      ))}
    </Card>
  )
}
