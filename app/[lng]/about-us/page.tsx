"use client"

import SiteHeader from "@/components/widgets/website-header"
import { useT } from "next-i18next/client"

export default function AboutUsPage() {
  const { t } = useT("aboutUs")

  const beliefItems = [
    t("about.philosophy.items.item1"),
    t("about.philosophy.items.item2"),
    t("about.philosophy.items.item3"),
    t("about.philosophy.items.item4"),
  ]

  const workItems = [
    t("about.work.items.item1"),
    t("about.work.items.item2"),
    t("about.work.items.item3"),
    t("about.work.items.item4"),
  ]

  return (
    <div className="flex w-full flex-col">
      <SiteHeader />

      <section className="w-full bg-primary/5 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">
            {t("about.hero.kicker")}
          </p>
          <h1 className="text-5xl font-bold text-foreground md:text-6xl">
            {t("about.hero.title")}
          </h1>
          <div className="h-1 w-20 bg-primary" />
          <p className="max-w-4xl text-2xl leading-10 text-foreground/80 md:text-3xl">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:px-10">
          <h2 className="text-4xl font-bold text-primary">
            {t("about.background.title")}
          </h2>
          <p className="text-2xl font-semibold">{t("about.background.whereFrom")}</p>
          <div className="space-y-5 text-lg leading-8 text-foreground/80">
            <p>{t("about.background.para1")}</p>
            <p>{t("about.background.para2")}</p>
            <p>{t("about.background.para3")}</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:px-10">
          <h2 className="text-4xl font-bold text-primary">
            {t("about.philosophy.title")}
          </h2>
          <p className="text-2xl font-semibold">{t("about.philosophy.believeTitle")}</p>
          <ul className="list-disc space-y-3 pl-6 text-lg leading-8 text-foreground/80">
            {beliefItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:px-10">
          <h2 className="text-4xl font-bold text-primary">{t("about.work.title")}</h2>
          <p className="text-2xl font-semibold">{t("about.work.buildingTitle")}</p>
          <ul className="list-disc space-y-3 pl-6 text-lg leading-8 text-foreground/80">
            {workItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:px-10">
          <h2 className="text-4xl font-bold text-primary">{t("about.team.title")}</h2>
          <p className="text-2xl font-semibold">{t("about.team.meetTitle")}</p>
          <article className="rounded-3xl border border-primary/10 bg-background p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-primary">{t("about.team.name")}</h3>
            <p className="mt-4 text-lg leading-8 text-foreground/80">{t("about.team.description")}</p>
          </article>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:px-10">
          <h2 className="text-4xl font-bold text-primary">{t("about.cta.title")}</h2>
          <p className="max-w-4xl text-lg leading-8 text-foreground/80">{t("about.cta.content")}</p>
          <p className="text-lg font-semibold text-foreground/90">
            {t("about.cta.contactLabel")}
            <a
              className="ml-2 text-primary underline underline-offset-4"
              href={`mailto:${t("about.cta.email")}`}
            >
              {t("about.cta.email")}
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
