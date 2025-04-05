import { ElementType, ReactNode } from "react"
import { BiMenu } from "react-icons/bi"

import Avatar from "../Avatar/Avatar"
import Dropdown from "../Dropdown/Dropdown"
import HeaderButton from "../HeaderButton/HeaderButton"
import Logo from "../Logo/Logo"
import ProfileMenu, { ProfileMenuItem } from "../ProfileMenu/ProfileMenu"

import styles from "./Header.module.css"

export interface HeaderProps {
  user: {
    name: string
    email: string
  }
  profileItems: ProfileMenuItem[]
  hideMenuButton?: boolean
  onMenuClick?: () => void
  menuIcon?: ReactNode
  menuIconLabel?: string
  LinkComponent?: ElementType
}

export default function Header({
  user,
  profileItems,
  hideMenuButton,
  onMenuClick = () => null,
  menuIcon = <BiMenu />,
  menuIconLabel = "Botão de menu",
  LinkComponent = "a",
}: HeaderProps) {
  return (
    <header className={styles.header}>
      {!hideMenuButton && (
        <HeaderButton
          ariaLabel={menuIconLabel}
          icon={menuIcon}
          onClick={onMenuClick}
        />
      )}
      <Logo />
      <Dropdown
        trigger={<Avatar small name={user.name} />}
        triggerClassName={styles.button}
        contentClassName={styles.dropdownContent}
        align="end"
      >
        <ProfileMenu
          name={user.name}
          email={user.email}
          items={profileItems}
          LinkComponent={LinkComponent}
        />
      </Dropdown>
    </header>
  )
}
