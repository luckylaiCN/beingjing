// app/[lng]/layout.tsx
import {
  initServerI18next,
  getT,
  getResources,
  generateI18nStaticParams,
} from "next-i18next/server"
import { I18nProvider } from "next-i18next/client"
import i18nConfig from "../../i18n.config"
import { ThemeProvider } from "@/components/theme-provider"
import { Geist, Geist_Mono } from "next/font/google"

import "@/app/globals.css"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

initServerI18next(i18nConfig)

export async function generateStaticParams() {
  return generateI18nStaticParams()
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lng: string }>
}) {
  const { lng } = await params
  const { i18n } = await getT()
  if (process.env.NODE_ENV == "development") {
    i18n.reloadResources(i18nConfig.supportedLngs, i18nConfig.ns)
  }
  const resources = getResources(i18n)

  return (
    <html
      lang={lng}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <I18nProvider language={lng} resources={resources}>
            <TooltipProvider>{children}</TooltipProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
