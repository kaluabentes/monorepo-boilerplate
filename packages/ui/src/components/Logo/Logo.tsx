import appConfig from "@blogtron/config/app.config"
import clsx from "clsx"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import Skeleton from "../Skeleton/Skeleton"

import darkLogo from "./logo-dark.svg"
import lightLogo from "./logo-light.svg"
import styles from "./Logo.module.css"

export interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme: theme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className={clsx(styles.logoContainer, className)}>
      {!isMounted && <Skeleton className={styles.skeleton} />}
      {isMounted && (
        <Image
          src={theme === "dark" ? darkLogo : lightLogo}
          alt={appConfig.name}
          height={30}
          width={0}
        />
      )}
    </div>
  )
}
