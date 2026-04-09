"use client"

import { useT } from "next-i18next/client"
import { LinkBase } from "./lang-link-base"

export function Link({
  href,
  children,
  ...rest
}: {
  href: string
  children?: React.ReactNode
} & Omit<React.ComponentProps<typeof LinkBase>, 'href' | 'children'>) {
  const { i18n } = useT()
  return (
    <LinkBase lng={i18n.resolvedLanguage} href={href} {...rest}>
      {children}
    </LinkBase>
  )
}
