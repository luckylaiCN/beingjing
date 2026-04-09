"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SiteHeader from "@/components/widgets/website-header"
import { useT } from "next-i18next/client"

export default function BuddyPage() {
  const { t } = useT("buddy")

  const serviceTags = [
    {
      title: t("buddy.tags.tag1.title"),
      content: t("buddy.tags.tag1.content"),
    },
    {
      title: t("buddy.tags.tag2.title"),
      content: t("buddy.tags.tag2.content"),
    },
    {
      title: t("buddy.tags.tag3.title"),
      content: t("buddy.tags.tag3.content"),
    },
  ]

  const offerItems = [
    t("buddy.offer.items.item1"),
    t("buddy.offer.items.item2"),
    t("buddy.offer.items.item3"),
    t("buddy.offer.items.item4"),
    t("buddy.offer.items.item5"),
  ]

  const featureRows = [
    { label: t("buddy.part2.rows.row1.label"), value: t("buddy.part2.rows.row1.value") },
    { label: t("buddy.part2.rows.row2.label"), value: t("buddy.part2.rows.row2.value") },
    { label: t("buddy.part2.rows.row3.label"), value: t("buddy.part2.rows.row3.value") },
    { label: t("buddy.part2.rows.row4.label"), value: t("buddy.part2.rows.row4.value") },
    { label: t("buddy.part2.rows.row5.label"), value: t("buddy.part2.rows.row5.value") },
    { label: t("buddy.part2.rows.row6.label"), value: t("buddy.part2.rows.row6.value") },
  ]

  const processSteps = [
    { title: t("buddy.part3.steps.step1.title"), content: t("buddy.part3.steps.step1.content") },
    { title: t("buddy.part3.steps.step2.title"), content: t("buddy.part3.steps.step2.content") },
    { title: t("buddy.part3.steps.step3.title"), content: t("buddy.part3.steps.step3.content") },
    { title: t("buddy.part3.steps.step4.title"), content: t("buddy.part3.steps.step4.content") },
    { title: t("buddy.part3.steps.step5.title"), content: t("buddy.part3.steps.step5.content") },
    { title: t("buddy.part3.steps.step6.title"), content: t("buddy.part3.steps.step6.content") },
  ]

  const coreServices = [
    {
      id: "a",
      title: t("buddy.part4.services.a.title"),
      topic: t("buddy.part4.services.a.topic"),
      intro: t("buddy.part4.services.a.intro"),
      items: [
        t("buddy.part4.services.a.items.item1"),
        t("buddy.part4.services.a.items.item2"),
        t("buddy.part4.services.a.items.item3"),
        t("buddy.part4.services.a.items.item4"),
      ],
      format: t("buddy.part4.services.a.format"),
      audience: t("buddy.part4.services.a.audience"),
    },
    {
      id: "b",
      title: t("buddy.part4.services.b.title"),
      topic: t("buddy.part4.services.b.topic"),
      intro: t("buddy.part4.services.b.intro"),
      items: [
        t("buddy.part4.services.b.items.item1"),
        t("buddy.part4.services.b.items.item2"),
        t("buddy.part4.services.b.items.item3"),
        t("buddy.part4.services.b.items.item4"),
      ],
      format: t("buddy.part4.services.b.format"),
      audience: t("buddy.part4.services.b.audience"),
    },
    {
      id: "c",
      title: t("buddy.part4.services.c.title"),
      topic: t("buddy.part4.services.c.topic"),
      intro: t("buddy.part4.services.c.intro"),
      items: [
        t("buddy.part4.services.c.items.item1"),
        t("buddy.part4.services.c.items.item2"),
        t("buddy.part4.services.c.items.item3"),
        t("buddy.part4.services.c.items.item4"),
      ],
      format: t("buddy.part4.services.c.format"),
      audience: t("buddy.part4.services.c.audience"),
    },
    {
      id: "d",
      title: t("buddy.part4.services.d.title"),
      topic: t("buddy.part4.services.d.topic"),
      intro: t("buddy.part4.services.d.intro"),
      items: [
        t("buddy.part4.services.d.items.item1"),
        t("buddy.part4.services.d.items.item2"),
        t("buddy.part4.services.d.items.item3"),
        t("buddy.part4.services.d.items.item4"),
      ],
      format: t("buddy.part4.services.d.format"),
      audience: t("buddy.part4.services.d.audience"),
    },
    {
      id: "e",
      title: t("buddy.part4.services.e.title"),
      topic: t("buddy.part4.services.e.topic"),
      intro: t("buddy.part4.services.e.intro"),
      items: [
        t("buddy.part4.services.e.items.item1"),
        t("buddy.part4.services.e.items.item2"),
        t("buddy.part4.services.e.items.item3"),
        t("buddy.part4.services.e.items.item4"),
      ],
      format: t("buddy.part4.services.e.format"),
      audience: t("buddy.part4.services.e.audience"),
    },
  ]

  const costRows = [
    { label: t("buddy.part6.rows.row1.label"), value: t("buddy.part6.rows.row1.value") },
    { label: t("buddy.part6.rows.row2.label"), value: t("buddy.part6.rows.row2.value") },
    { label: t("buddy.part6.rows.row3.label"), value: t("buddy.part6.rows.row3.value") },
    { label: t("buddy.part6.rows.row4.label"), value: t("buddy.part6.rows.row4.value") },
    { label: t("buddy.part6.rows.row5.label"), value: t("buddy.part6.rows.row5.value") },
    { label: t("buddy.part6.rows.row6.label"), value: t("buddy.part6.rows.row6.value") },
    { label: t("buddy.part6.rows.row7.label"), value: t("buddy.part6.rows.row7.value") },
  ]

  const guidelineItems = [
    t("buddy.part7.items.item1"),
    t("buddy.part7.items.item2"),
    t("buddy.part7.items.item3"),
    t("buddy.part7.items.item4"),
    t("buddy.part7.items.item5"),
    t("buddy.part7.items.item6"),
  ]

  const usageSteps = [
    { title: t("buddy.part8.steps.step1.title"), content: t("buddy.part8.steps.step1.content") },
    { title: t("buddy.part8.steps.step2.title"), content: t("buddy.part8.steps.step2.content") },
    { title: t("buddy.part8.steps.step3.title"), content: t("buddy.part8.steps.step3.content") },
  ]

  const contactRows = [
    { label: t("buddy.part9.rows.row1.label"), value: t("buddy.part9.rows.row1.value") },
    { label: t("buddy.part9.rows.row2.label"), value: t("buddy.part9.rows.row2.value") },
    { label: t("buddy.part9.rows.row3.label"), value: t("buddy.part9.rows.row3.value") },
    { label: t("buddy.part9.rows.row4.label"), value: t("buddy.part9.rows.row4.value") },
  ]

  return (
    <div className="flex w-full flex-col">
      <SiteHeader />

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">
            {t("buddy.hero.kicker")}
          </p>
          <h1 className="text-5xl font-bold text-foreground md:text-6xl">
            {t("buddy.hero.title")}
          </h1>
          <div className="h-1 w-24 bg-primary" />
          <p className="max-w-3xl text-2xl leading-10 text-foreground/80 md:text-3xl">
            {t("buddy.hero.description")}
          </p>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("buddy.intro.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("buddy.intro.subtitle")}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5 text-lg leading-8 text-foreground/80">
              <p>{t("buddy.intro.para1")}</p>
              <p>{t("buddy.intro.para2")}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <article className="rounded-3xl border border-primary/10 bg-primary/5 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
                  {t("buddy.intro.highlight1.label")}
                </p>
                <p className="mt-3 text-2xl font-bold text-primary">
                  {t("buddy.intro.highlight1.value")}
                </p>
              </article>
              <article className="rounded-3xl border border-primary/10 bg-background p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
                  {t("buddy.intro.highlight2.label")}
                </p>
                <p className="mt-3 text-2xl font-bold text-primary">
                  {t("buddy.intro.highlight2.value")}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("buddy.tags.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("buddy.tags.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceTags.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-primary/10 bg-background/90 p-6 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-base leading-8 text-foreground/80">
                  {item.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("buddy.background.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("buddy.background.subtitle")}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5 text-lg leading-8 text-foreground/80">
              <p>{t("buddy.background.para1")}</p>
              <p>{t("buddy.background.para2")}</p>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
                {t("buddy.background.highlight.label")}
              </p>
              <p className="mt-3 text-2xl font-bold text-primary">
                {t("buddy.background.highlight.value")}
              </p>
              <div className="mt-6 space-y-3 text-base leading-8 text-foreground/80">
                {offerItems.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("buddy.part2.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("buddy.part2.subtitle")}
            </p>
          </div>

          <div className="overflow-x-auto border border-primary/10 bg-background">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-primary/10 bg-primary/5">
                  <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                    {t("buddy.part2.table.head1")}
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                    {t("buddy.part2.table.head2")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, index) => (
                  <tr key={row.label} className={index < featureRows.length - 1 ? "border-b border-primary/10" : ""}>
                    <th className="w-1/3 px-5 py-4 align-top text-base font-semibold text-foreground">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-base leading-7 text-foreground/80">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("buddy.part3.title")}</h2>
            <p className="text-2xl font-semibold">{t("buddy.part3.subtitle")}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-primary/10 bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                </div>
                <p className="mt-4 text-base leading-8 text-foreground/80">{step.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("buddy.part4.title")}</h2>
            <p className="text-2xl font-semibold">{t("buddy.part4.subtitle")}</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="service-a">
            {coreServices.map((service) => (
              <AccordionItem key={service.id} value={`service-${service.id}`} className="rounded-3xl border border-primary/10 bg-background px-6 shadow-sm">
                <AccordionTrigger className="py-5 text-left text-xl font-semibold text-primary hover:no-underline">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-5 text-base leading-8 text-foreground/80">
                    <p className="text-lg font-semibold text-primary">{service.topic}</p>
                    <p>{service.intro}</p>

                    <div>
                      <p className="font-semibold text-primary">{t("buddy.part4.coreContent")}</p>
                      <ul className="mt-2 list-disc space-y-2 pl-5">
                        {service.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <p>
                      <span className="font-semibold text-primary">{t("buddy.part4.serviceFormat")}</span>
                      ：{service.format}
                    </p>
                    <p>
                      <span className="font-semibold text-primary">{t("buddy.part4.audience")}</span>
                      ：{service.audience}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("buddy.part5.title")}</h2>
            <p className="text-2xl font-semibold">{t("buddy.part5.subtitle")}</p>
          </div>

          <div className="space-y-5 text-lg leading-8 text-foreground/80">
            <p>{t("buddy.part5.para1")}</p>
            <p>{t("buddy.part5.para2")}</p>
            <p>{t("buddy.part5.para3")}</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("buddy.part6.title")}</h2>
            <p className="text-2xl font-semibold">{t("buddy.part6.subtitle")}</p>
          </div>

          <div className="overflow-x-auto border border-primary/10 bg-background">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-primary/10 bg-primary/5">
                  <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                    {t("buddy.part6.table.head1")}
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                    {t("buddy.part6.table.head2")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, index) => (
                  <tr key={row.label} className={index < costRows.length - 1 ? "border-b border-primary/10" : ""}>
                    <th className="w-1/3 px-5 py-4 align-top text-base font-semibold text-foreground">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-base leading-7 text-foreground/80">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("buddy.part7.title")}</h2>
            <p className="text-2xl font-semibold">{t("buddy.part7.subtitle")}</p>
          </div>

          <div className="space-y-3 text-base leading-8 text-foreground/80">
            {guidelineItems.map((item, idx) => (
              <p key={item}>
                <span className="font-semibold text-primary">{idx + 1}.</span> {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("buddy.part8.title")}</h2>
            <p className="text-2xl font-semibold">{t("buddy.part8.subtitle")}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {usageSteps.map((step) => (
              <article key={step.title} className="rounded-3xl border border-primary/10 bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-4 text-base leading-8 text-foreground/80">{step.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("buddy.part9.title")}</h2>
            <p className="text-2xl font-semibold">{t("buddy.part9.subtitle")}</p>
          </div>

          <div className="overflow-x-auto border border-primary/10 bg-background">
            <table className="w-full border-collapse text-left">
              <tbody>
                {contactRows.map((row, index) => (
                  <tr key={row.label} className={index < contactRows.length - 1 ? "border-b border-primary/10" : ""}>
                    <th className="w-1/3 px-5 py-4 align-top text-base font-semibold text-foreground">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-base leading-7 text-foreground/80">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-8 text-foreground/80">{t("buddy.part9.note")}</p>
        </div>
      </section>
    </div>
  )
}
