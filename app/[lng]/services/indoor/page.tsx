"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SiteHeader from "@/components/widgets/website-header"
import { useT } from "next-i18next/client"

export default function IndoorPage() {
  const { t } = useT("indoor")

  const experienceTags = [
    { title: t("indoor.tags.tag1.title"), content: t("indoor.tags.tag1.content") },
    { title: t("indoor.tags.tag2.title"), content: t("indoor.tags.tag2.content") },
    { title: t("indoor.tags.tag3.title"), content: t("indoor.tags.tag3.content") },
  ]

  const introOffers = [
    t("indoor.intro.offers.item1"),
    t("indoor.intro.offers.item2"),
    t("indoor.intro.offers.item3"),
    t("indoor.intro.offers.item4"),
  ]

  const featureRows = [
    { label: t("indoor.part2.rows.row1.label"), value: t("indoor.part2.rows.row1.value") },
    { label: t("indoor.part2.rows.row2.label"), value: t("indoor.part2.rows.row2.value") },
    { label: t("indoor.part2.rows.row3.label"), value: t("indoor.part2.rows.row3.value") },
    { label: t("indoor.part2.rows.row4.label"), value: t("indoor.part2.rows.row4.value") },
    { label: t("indoor.part2.rows.row5.label"), value: t("indoor.part2.rows.row5.value") },
  ]

  const flowSteps = [
    { title: t("indoor.part3.steps.step1.title"), content: t("indoor.part3.steps.step1.content") },
    { title: t("indoor.part3.steps.step2.title"), content: t("indoor.part3.steps.step2.content") },
    { title: t("indoor.part3.steps.step3.title"), content: t("indoor.part3.steps.step3.content") },
    { title: t("indoor.part3.steps.step4.title"), content: t("indoor.part3.steps.step4.content") },
    { title: t("indoor.part3.steps.step5.title"), content: t("indoor.part3.steps.step5.content") },
    { title: t("indoor.part3.steps.step6.title"), content: t("indoor.part3.steps.step6.content") },
  ]

  const experiences = [
    {
      id: "a",
      title: t("indoor.part4.exp.a.title"),
      topic: t("indoor.part4.exp.a.topic"),
      intro: t("indoor.part4.exp.a.intro"),
      nodes: [
        t("indoor.part4.exp.a.nodes.node1"),
        t("indoor.part4.exp.a.nodes.node2"),
        t("indoor.part4.exp.a.nodes.node3"),
        t("indoor.part4.exp.a.nodes.node4"),
        t("indoor.part4.exp.a.nodes.node5"),
      ],
      special: t("indoor.part4.exp.a.special"),
      audience: t("indoor.part4.exp.a.audience"),
      duration: t("indoor.part4.exp.a.duration"),
      time: t("indoor.part4.exp.a.time"),
    },
    {
      id: "b",
      title: t("indoor.part4.exp.b.title"),
      topic: t("indoor.part4.exp.b.topic"),
      intro: t("indoor.part4.exp.b.intro"),
      nodes: [
        t("indoor.part4.exp.b.nodes.node1"),
        t("indoor.part4.exp.b.nodes.node2"),
        t("indoor.part4.exp.b.nodes.node3"),
        t("indoor.part4.exp.b.nodes.node4"),
        t("indoor.part4.exp.b.nodes.node5"),
      ],
      special: t("indoor.part4.exp.b.special"),
      audience: t("indoor.part4.exp.b.audience"),
      duration: t("indoor.part4.exp.b.duration"),
      time: t("indoor.part4.exp.b.time"),
    },
    {
      id: "c",
      title: t("indoor.part4.exp.c.title"),
      topic: t("indoor.part4.exp.c.topic"),
      intro: t("indoor.part4.exp.c.intro"),
      nodes: [
        t("indoor.part4.exp.c.nodes.node1"),
        t("indoor.part4.exp.c.nodes.node2"),
        t("indoor.part4.exp.c.nodes.node3"),
        t("indoor.part4.exp.c.nodes.node4"),
      ],
      special: t("indoor.part4.exp.c.special"),
      audience: t("indoor.part4.exp.c.audience"),
      duration: t("indoor.part4.exp.c.duration"),
      time: t("indoor.part4.exp.c.time"),
    },
    {
      id: "d",
      title: t("indoor.part4.exp.d.title"),
      topic: t("indoor.part4.exp.d.topic"),
      intro: t("indoor.part4.exp.d.intro"),
      nodes: [
        t("indoor.part4.exp.d.nodes.node1"),
        t("indoor.part4.exp.d.nodes.node2"),
        t("indoor.part4.exp.d.nodes.node3"),
        t("indoor.part4.exp.d.nodes.node4"),
      ],
      special: t("indoor.part4.exp.d.special"),
      audience: t("indoor.part4.exp.d.audience"),
      duration: t("indoor.part4.exp.d.duration"),
      time: t("indoor.part4.exp.d.time"),
    },
  ]

  const costRows = [
    { label: t("indoor.part6.rows.row1.label"), value: t("indoor.part6.rows.row1.value") },
    { label: t("indoor.part6.rows.row2.label"), value: t("indoor.part6.rows.row2.value") },
    { label: t("indoor.part6.rows.row3.label"), value: t("indoor.part6.rows.row3.value") },
    { label: t("indoor.part6.rows.row4.label"), value: t("indoor.part6.rows.row4.value") },
    { label: t("indoor.part6.rows.row5.label"), value: t("indoor.part6.rows.row5.value") },
    { label: t("indoor.part6.rows.row6.label"), value: t("indoor.part6.rows.row6.value") },
    { label: t("indoor.part6.rows.row7.label"), value: t("indoor.part6.rows.row7.value") },
    { label: t("indoor.part6.rows.row8.label"), value: t("indoor.part6.rows.row8.value") },
  ]

  const guidelineItems = [
    t("indoor.part7.items.item1"),
    t("indoor.part7.items.item2"),
    t("indoor.part7.items.item3"),
    t("indoor.part7.items.item4"),
    t("indoor.part7.items.item5"),
    t("indoor.part7.items.item6"),
  ]

  const refundRows = [
    { label: t("indoor.part7.refund.row1.label"), value: t("indoor.part7.refund.row1.value") },
    { label: t("indoor.part7.refund.row2.label"), value: t("indoor.part7.refund.row2.value") },
    { label: t("indoor.part7.refund.row3.label"), value: t("indoor.part7.refund.row3.value") },
    { label: t("indoor.part7.refund.row4.label"), value: t("indoor.part7.refund.row4.value") },
  ]

  const bookingSteps = [
    { title: t("indoor.part8.steps.step1.title"), content: t("indoor.part8.steps.step1.content") },
    { title: t("indoor.part8.steps.step2.title"), content: t("indoor.part8.steps.step2.content") },
    { title: t("indoor.part8.steps.step3.title"), content: t("indoor.part8.steps.step3.content") },
    { title: t("indoor.part8.steps.step4.title"), content: t("indoor.part8.steps.step4.content") },
  ]

  const contactRows = [
    { label: t("indoor.part9.rows.row1.label"), value: t("indoor.part9.rows.row1.value") },
    { label: t("indoor.part9.rows.row2.label"), value: t("indoor.part9.rows.row2.value") },
    { label: t("indoor.part9.rows.row3.label"), value: t("indoor.part9.rows.row3.value") },
    { label: t("indoor.part9.rows.row4.label"), value: t("indoor.part9.rows.row4.value") },
  ]

  return (
    <div className="flex w-full flex-col">
      <SiteHeader />

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">{t("indoor.hero.kicker")}</p>
          <h1 className="text-5xl font-bold text-foreground md:text-6xl">{t("indoor.hero.title")}</h1>
          <div className="h-1 w-24 bg-primary" />
          <p className="max-w-3xl text-2xl leading-10 text-foreground/80 md:text-3xl">{t("indoor.hero.description")}</p>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("indoor.intro.title")}</h2>
            <p className="text-2xl font-semibold">{t("indoor.intro.subtitle")}</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5 text-lg leading-8 text-foreground/80">
              <p>{t("indoor.intro.para1")}</p>
              <p>{t("indoor.intro.para2")}</p>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">{t("indoor.intro.offerTitle")}</p>
              <div className="mt-4 space-y-3 text-base leading-8 text-foreground/80">
                {introOffers.map((item) => (
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
            <h2 className="text-4xl font-bold text-primary">{t("indoor.tags.title")}</h2>
            <p className="text-2xl font-semibold">{t("indoor.tags.subtitle")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {experienceTags.map((tag) => (
              <article key={tag.title} className="flex h-full flex-col gap-4 rounded-3xl border border-primary/10 bg-background p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-primary">{tag.title}</h3>
                <p className="text-base leading-8 text-foreground/80">{tag.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("indoor.part2.title")}</h2>
            <p className="text-2xl font-semibold">{t("indoor.part2.subtitle")}</p>
          </div>

          <div className="overflow-x-auto border border-primary/10 bg-background">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-primary/10 bg-primary/5">
                  <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">{t("indoor.part2.table.head1")}</th>
                  <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">{t("indoor.part2.table.head2")}</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, index) => (
                  <tr key={row.label} className={index < featureRows.length - 1 ? "border-b border-primary/10" : ""}>
                    <th className="w-1/3 px-5 py-4 align-top text-base font-semibold text-foreground">{row.label}</th>
                    <td className="px-5 py-4 text-base leading-7 text-foreground/80">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("indoor.part3.title")}</h2>
            <p className="text-2xl font-semibold">{t("indoor.part3.subtitle")}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {flowSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-primary/10 bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">{index + 1}</div>
                  <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                </div>
                <p className="mt-4 text-base leading-8 text-foreground/80">{step.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("indoor.part4.title")}</h2>
            <p className="text-2xl font-semibold">{t("indoor.part4.subtitle")}</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="exp-a">
            {experiences.map((exp) => (
              <AccordionItem key={exp.id} value={`exp-${exp.id}`} className="rounded-3xl border border-primary/10 bg-background px-6 shadow-sm">
                <AccordionTrigger className="py-5 text-left text-xl font-semibold text-primary hover:no-underline">{exp.title}</AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-5 text-base leading-8 text-foreground/80">
                    <p className="text-lg font-semibold text-primary">{exp.topic}</p>
                    <p>{exp.intro}</p>

                    <div>
                      <p className="font-semibold text-primary">{t("indoor.part4.nodes")}</p>
                      <ul className="mt-2 list-disc space-y-2 pl-5">
                        {exp.nodes.map((node) => (
                          <li key={node}>{node}</li>
                        ))}
                      </ul>
                    </div>

                    <p>
                      <span className="font-semibold text-primary">{t("indoor.part4.special")}</span>
                      ：{exp.special}
                    </p>
                    <p>
                      <span className="font-semibold text-primary">{t("indoor.part4.audience")}</span>
                      ：{exp.audience}
                    </p>
                    <p>
                      <span className="font-semibold text-primary">{t("indoor.part4.duration")}</span>
                      ：{exp.duration}
                    </p>
                    <p>
                      <span className="font-semibold text-primary">{t("indoor.part4.time")}</span>
                      ：{exp.time}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("indoor.part5.title")}</h2>
            <p className="text-2xl font-semibold">{t("indoor.part5.subtitle")}</p>
          </div>

          <div className="space-y-5 text-lg leading-8 text-foreground/80">
            <p>{t("indoor.part5.para1")}</p>
            <p>{t("indoor.part5.para2")}</p>
            <p>{t("indoor.part5.para3")}</p>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("indoor.part6.title")}</h2>
            <p className="text-2xl font-semibold">{t("indoor.part6.subtitle")}</p>
          </div>

          <div className="overflow-x-auto border border-primary/10 bg-background">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-primary/10 bg-primary/5">
                  <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">{t("indoor.part6.table.head1")}</th>
                  <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">{t("indoor.part6.table.head2")}</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, index) => (
                  <tr key={row.label} className={index < costRows.length - 1 ? "border-b border-primary/10" : ""}>
                    <th className="w-1/3 px-5 py-4 align-top text-base font-semibold text-foreground">{row.label}</th>
                    <td className="px-5 py-4 text-base leading-7 text-foreground/80">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("indoor.part7.title")}</h2>
            <p className="text-2xl font-semibold">{t("indoor.part7.subtitle")}</p>
          </div>

          <div className="space-y-3 text-base leading-8 text-foreground/80">
            {guidelineItems.map((item, idx) => (
              <p key={item}>
                <span className="font-semibold text-primary">{idx + 1}.</span> {item}
              </p>
            ))}
          </div>

          <div className="space-y-4 rounded-3xl border border-primary/10 bg-background p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-primary">{t("indoor.part7.refund.title")}</h3>
            <div className="space-y-3 text-base leading-8 text-foreground/80">
              {refundRows.map((row) => (
                <p key={row.label}>
                  <span className="font-semibold text-primary">{row.label}</span>：{row.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("indoor.part8.title")}</h2>
            <p className="text-2xl font-semibold">{t("indoor.part8.subtitle")}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {bookingSteps.map((step) => (
              <article key={step.title} className="rounded-3xl border border-primary/10 bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-4 text-base leading-8 text-foreground/80">{step.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("indoor.part9.title")}</h2>
            <p className="text-2xl font-semibold">{t("indoor.part9.subtitle")}</p>
          </div>

          <div className="overflow-x-auto border border-primary/10 bg-background">
            <table className="w-full border-collapse text-left">
              <tbody>
                {contactRows.map((row, index) => (
                  <tr key={row.label} className={index < contactRows.length - 1 ? "border-b border-primary/10" : ""}>
                    <th className="w-1/3 px-5 py-4 align-top text-base font-semibold text-foreground">{row.label}</th>
                    <td className="px-5 py-4 text-base leading-7 text-foreground/80">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-8 text-foreground/80">{t("indoor.part9.note")}</p>
        </div>
      </section>
    </div>
  )
}
