"use client"

import SiteHeader from "@/components/widgets/website-header"
import { Link } from "@/components/widgets/lang-link-client"
import { useT } from "next-i18next/client"

export default function Page() {
  const { t } = useT("common")

  const services = [
    {
      key: "buddy",
      href: "/services/buddy",
      title: t("services.buddy.title"),
      description: t("services.buddy.description"),
      tag: t("services.page.cards.buddy.tag"),
    },
    {
      key: "citywalk",
      href: "/services/citywalk",
      title: t("services.citywalk.title"),
      description: t("services.citywalk.description"),
      tag: t("services.page.cards.citywalk.tag"),
    },
    {
      key: "indoor",
      href: "/services/indoor",
      title: t("services.indoor.title"),
      description: t("services.indoor.description"),
      tag: t("services.page.cards.indoor.tag"),
    },
  ]

  return (
    <div className="flex w-full flex-col">
      <SiteHeader />

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">
            {t("services.page.kicker")}
          </p>
          <h1 className="text-5xl font-bold text-foreground md:text-6xl">
            {t("services.page.title")}
          </h1>
          <div className="h-1 w-20 bg-primary" />
          <p className="max-w-3xl text-xl leading-9 text-foreground/80 md:text-2xl">
            {t("services.page.subtitle")}
          </p>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.key}
                className="group flex h-full flex-col rounded-3xl border border-primary/15 bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                  {service.tag}
                </p>
                <h2 className="mt-4 text-3xl font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-4 flex-1 text-lg leading-8 text-foreground/80">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center justify-between rounded-xl bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition-opacity group-hover:opacity-90"
                >
                  <span>{t("services.page.enter")}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="text-sm text-foreground/60">
            {t("services.page.hint")}
          </p>
        </div>
      </section>
    </div>
  )
}
