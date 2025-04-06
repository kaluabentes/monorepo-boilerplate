import appConfig from "@blogtron/config/app.config"
import clsx from "clsx"
import Image from "next/image"
import { useTheme } from "next-themes"

import darkLogo from "./logo-dark.svg"
import lightLogo from "./logo-light.svg"
import styles from "./Logo.module.css"

export interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  const { theme } = useTheme()

  const image: { [key: string]: string } = {
    light: lightLogo,
    dark: darkLogo,
  }

  return (
    <div className={clsx(styles.logoContainer, className)}>
      <Image src={image[theme!]!} alt={appConfig.name} height={30} />
    </div>
  )
}
