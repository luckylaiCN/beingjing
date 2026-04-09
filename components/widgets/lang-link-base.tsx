import Link from "next/link"
import { ReactNode } from "react"
import i18nConfig from "@/i18n.config"

const fallbackLng = i18nConfig.fallbackLng

export const LinkBase = ({
  lng = fallbackLng,
  href = "",
  children,
  ...rest
}: {
  lng?: string
  href?: string
  children: ReactNode
} & Omit<React.ComponentProps<typeof Link>, "href" | "children">) => {
  return (
    <Link href={`/${lng}${href.startsWith("/") ? href : `/${href}`}`} {...rest}>
      {children}
    </Link>
  )
}
