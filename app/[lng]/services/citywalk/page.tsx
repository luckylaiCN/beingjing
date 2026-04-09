"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SiteHeader from "@/components/widgets/website-header"
import { Trans, useT } from "next-i18next/client"

export default function CityWalkPage() {
  const { t, i18n } = useT("citywalk")
  const serviceTags = [
    {
      title: t("cw.home.tags.item1.title"),
      content: t("cw.home.tags.item1.content"),
    },
    {
      title: t("cw.home.tags.item2.title"),
      content: t("cw.home.tags.item2.content"),
    },
    {
      title: t("cw.home.tags.item3.title"),
      content: t("cw.home.tags.item3.content"),
    },
  ]
  const activityFlow = [
    {
      title: t("cw.part3.steps.step1.title"),
      content: t("cw.part3.steps.step1.content"),
    },
    {
      title: t("cw.part3.steps.step2.title"),
      content: t("cw.part3.steps.step2.content"),
    },
    {
      title: t("cw.part3.steps.step3.title"),
      content: t("cw.part3.steps.step3.content"),
    },
    {
      title: t("cw.part3.steps.step4.title"),
      content: t("cw.part3.steps.step4.content"),
    },
    {
      title: t("cw.part3.steps.step5.title"),
      content: t("cw.part3.steps.step5.content"),
    },
    {
      title: t("cw.part3.steps.step6.title"),
      content: t("cw.part3.steps.step6.content"),
    },
  ]
  const coreRoutes = [
    {
      id: "a",
      title: t("cw.part4.routes.a.title"),
      theme: t("cw.part4.routes.a.theme"),
      description: t("cw.part4.routes.a.description"),
      stops: [
        t("cw.part4.routes.a.stops.stop1"),
        t("cw.part4.routes.a.stops.stop2"),
        t("cw.part4.routes.a.stops.stop3"),
        t("cw.part4.routes.a.stops.stop4"),
        t("cw.part4.routes.a.stops.stop5"),
        t("cw.part4.routes.a.stops.stop6"),
      ],
      special: t("cw.part4.routes.a.special"),
      bestFor: t("cw.part4.routes.a.bestFor"),
      duration: t("cw.part4.routes.a.duration"),
      startTime: t("cw.part4.routes.a.startTime"),
    },
    {
      id: "b",
      title: t("cw.part4.routes.b.title"),
      theme: t("cw.part4.routes.b.theme"),
      description: t("cw.part4.routes.b.description"),
      stops: [
        t("cw.part4.routes.b.stops.stop1"),
        t("cw.part4.routes.b.stops.stop2"),
        t("cw.part4.routes.b.stops.stop3"),
        t("cw.part4.routes.b.stops.stop4"),
      ],
      special: t("cw.part4.routes.b.special"),
      bestFor: t("cw.part4.routes.b.bestFor"),
      duration: t("cw.part4.routes.b.duration"),
      startTime: t("cw.part4.routes.b.startTime"),
    },
    {
      id: "c",
      title: t("cw.part4.routes.c.title"),
      theme: t("cw.part4.routes.c.theme"),
      description: t("cw.part4.routes.c.description"),
      stops: [
        t("cw.part4.routes.c.stops.stop1"),
        t("cw.part4.routes.c.stops.stop2"),
        t("cw.part4.routes.c.stops.stop3"),
        t("cw.part4.routes.c.stops.stop4"),
      ],
      special: t("cw.part4.routes.c.special"),
      bestFor: t("cw.part4.routes.c.bestFor"),
      duration: t("cw.part4.routes.c.duration"),
      startTime: t("cw.part4.routes.c.startTime"),
      note: t("cw.part4.routes.c.note"),
    },
  ]
  const pricingRows = [
    { label: t("cw.part6.rows.row1.label"), value: t("cw.part6.rows.row1.value") },
    { label: t("cw.part6.rows.row2.label"), value: t("cw.part6.rows.row2.value") },
    { label: t("cw.part6.rows.row3.label"), value: t("cw.part6.rows.row3.value") },
    { label: t("cw.part6.rows.row4.label"), value: t("cw.part6.rows.row4.value") },
    { label: t("cw.part6.rows.row5.label"), value: t("cw.part6.rows.row5.value") },
    { label: t("cw.part6.rows.row6.label"), value: t("cw.part6.rows.row6.value") },
    { label: t("cw.part6.rows.row7.label"), value: t("cw.part6.rows.row7.value") },
    { label: t("cw.part6.rows.row8.label"), value: t("cw.part6.rows.row8.value") },
  ]
  const bookingInfoRows = [
    { label: t("cw.part7.booking.row1.label"), value: t("cw.part7.booking.row1.value") },
    { label: t("cw.part7.booking.row2.label"), value: t("cw.part7.booking.row2.value") },
    { label: t("cw.part7.booking.row3.label"), value: t("cw.part7.booking.row3.value") },
    { label: t("cw.part7.booking.row4.label"), value: t("cw.part7.booking.row4.value") },
    { label: t("cw.part7.booking.row5.label"), value: t("cw.part7.booking.row5.value") },
    { label: t("cw.part7.booking.row6.label"), value: t("cw.part7.booking.row6.value") },
    { label: t("cw.part7.booking.row7.label"), value: t("cw.part7.booking.row7.value") },
  ]
  const cancellationRows = [
    { label: t("cw.part7.cancellation.row1.label"), value: t("cw.part7.cancellation.row1.value") },
    { label: t("cw.part7.cancellation.row2.label"), value: t("cw.part7.cancellation.row2.value") },
    { label: t("cw.part7.cancellation.row3.label"), value: t("cw.part7.cancellation.row3.value") },
    { label: t("cw.part7.cancellation.row4.label"), value: t("cw.part7.cancellation.row4.value") },
  ]
  const bookingSteps = [
    {
      title: t("cw.part8.steps.step1.title"),
      content: t("cw.part8.steps.step1.content"),
    },
    {
      title: t("cw.part8.steps.step2.title"),
      content: t("cw.part8.steps.step2.content"),
    },
    {
      title: t("cw.part8.steps.step3.title"),
      content: t("cw.part8.steps.step3.content"),
    },
    {
      title: t("cw.part8.steps.step4.title"),
      content: t("cw.part8.steps.step4.content"),
    },
  ]
  const contactRows = [
    { label: t("cw.part9.rows.row1.label"), value: t("cw.part9.rows.row1.value") },
    { label: t("cw.part9.rows.row2.label"), value: t("cw.part9.rows.row2.value") },
    { label: t("cw.part9.rows.row3.label"), value: t("cw.part9.rows.row3.value") },
    { label: t("cw.part9.rows.row4.label"), value: t("cw.part9.rows.row4.value") },
  ]
  return (
    <div className="flex w-full flex-col">
      <SiteHeader />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-primary/5">
        <div className="items-start justify-start">
          {/* huge title with underline */}
          {/* set underline color to primary color */}
          <h1 className="text-5xl font-bold">{t("cw.home.title")}</h1>
          <div className="mt-4 h-1 w-full bg-primary"></div>
          {/* description below title */}
          <p className="mt-4 text-3xl">{t("cw.home.description")}</p>
        </div>
      </div>

      <section className="w-full bg-background py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">{t("cw.description.title")}</h2>
            <p className="text-lg leading-8 text-foreground/80 md:text-xl">
              {t("cw.description.content")}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-bold text-primary">{t("cw.home.tags.title")}</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {serviceTags.map((tag) => (
                <article
                  key={tag.title}
                  className="rounded-3xl border border-primary/10 bg-primary/5 p-6 shadow-sm"
                >
                  <h4 className="text-2xl font-semibold text-primary">{tag.title}</h4>
                  <p className="mt-3 text-lg leading-8 text-foreground/80">{tag.content}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("cw.part1.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("cw.part1.subtitle1")}
            </p>
          </div>

          <div className="space-y-5 text-lg leading-8 text-foreground/80">
            <p>{t("cw.part1.para1")}</p>
            <p>
              <Trans i18nKey={"cw.part1.para2"} i18n={i18n} t={t}>
                1<strong>Citywalk with Local Students</strong> was built to
                close that gap.
              </Trans>
            </p>
            <p>{t("cw.part1.para3")}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">
              {t("cw.part1.subtitle2")}
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-foreground/80">
              <li>{t("cw.part1.listitem1")}</li>
              <li>{t("cw.part1.listitem2")}</li>
              <li>{t("cw.part1.listitem3")}</li>
              <li>{t("cw.part1.listitem4")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("cw.part2.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("cw.part2.subtitle")}
            </p>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="hidden w-full items-center justify-center md:flex">
              <ul className="group max-w-300 list-none w-full">
                <li className="group/item float-left flex h-96 w-1/2 flex-col items-center justify-center overflow-hidden rounded-l-2xl bg-primary/10 transition-all duration-500 ease-in-out group-hover:w-1/8 group-hover:bg-primary/80 hover:w-1/2! hover:bg-primary/10!">
                  {/* init: vertical title */}
                  <h2 className="text-2xl font-semibold [writing-mode:horizontal-tb] group-hover:[writing-mode:vertical-lr] group-hover/item:[writing-mode:horizontal-tb]!">
                    {t("cw.part2.table.header1")}
                  </h2>
                  <p className="block px-3 text-lg group-hover:hidden group-hover/item:block!">
                    {t("cw.part2.table.content1")}
                  </p>
                </li>
                <li className="group/item float-left flex h-96 w-1/8 flex-col items-center justify-center overflow-hidden bg-primary/80 transition-all duration-500 ease-in-out hover:w-1/2 hover:bg-primary/10">
                  <h2 className="text-2xl font-semibold [writing-mode:vertical-lr] group-hover/item:[writing-mode:horizontal-tb]">
                    {t("cw.part2.table.header2")}
                  </h2>
                  <p className="hidden px-3 text-lg group-hover/item:block hover:block">
                    {t("cw.part2.table.content2")}
                  </p>
                </li>
                <li className="group/item float-left flex h-96 w-1/8 flex-col items-center justify-center overflow-hidden bg-primary/80 transition-all duration-500 ease-in-out hover:w-1/2 hover:bg-primary/10">
                  <h2 className="text-2xl font-semibold [writing-mode:vertical-lr] group-hover/item:[writing-mode:horizontal-tb]">
                    {t("cw.part2.table.header3")}
                  </h2>
                  <p className="hidden px-3 text-lg group-hover/item:block hover:block">
                    {t("cw.part2.table.content3")}
                  </p>
                </li>
                <li className="group/item float-left flex h-96 w-1/8 flex-col items-center justify-center overflow-hidden bg-primary/80 transition-all duration-500 ease-in-out hover:w-1/2 hover:bg-primary/10">
                  <h2 className="text-2xl font-semibold [writing-mode:vertical-lr] group-hover/item:[writing-mode:horizontal-tb]">
                    {t("cw.part2.table.header4")}
                  </h2>
                  <p className="hidden px-3 text-lg group-hover/item:block hover:block">
                    {t("cw.part2.table.content4")}
                  </p>
                </li>
                <li className="group/item float-left flex h-96 w-1/8 flex-col items-center justify-center overflow-hidden rounded-r-2xl bg-primary/80 transition-all duration-500 ease-in-out hover:w-1/2 hover:bg-primary/10">
                  <h2 className="text-2xl font-semibold [writing-mode:vertical-lr] group-hover/item:[writing-mode:horizontal-tb]">
                    {t("cw.part2.table.header5")}
                  </h2>
                  <p className="w-full hidden px-3 text-lg group-hover/item:block hover:block">
                    {t("cw.part2.table.content5")}
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex w-full md:hidden">
              <Accordion type="single" collapsible className="max-w-lg" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{t("cw.part2.table.header1")}</AccordionTrigger>
                  <AccordionContent>{t("cw.part2.table.content1")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>{t("cw.part2.table.header2")}</AccordionTrigger>
                  <AccordionContent>{t("cw.part2.table.content2")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>{t("cw.part2.table.header3")}</AccordionTrigger>
                  <AccordionContent>{t("cw.part2.table.content3")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>{t("cw.part2.table.header4")}</AccordionTrigger>
                  <AccordionContent>{t("cw.part2.table.content4")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>{t("cw.part2.table.header5")}</AccordionTrigger>
                  <AccordionContent>{t("cw.part2.table.content5")}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("cw.part3.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("cw.part3.subtitle")}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {activityFlow.map((step, index) => (
              <article
                key={step.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-primary/10 bg-background/90 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
                    {index + 1}
                  </div>
                  <div className="min-w-0 space-y-2">
                    <h3 className="text-2xl font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-foreground/45">
                      {t("cw.part3.stepLabel")}
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-8 text-foreground/80">
                  {step.content}
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
              {t("cw.part4.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("cw.part4.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {coreRoutes.map((route) => (
              <article
                key={route.id}
                className="flex h-full flex-col gap-6 rounded-3xl border border-primary/10 bg-primary/5 p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">
                      {route.id}
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-primary">
                      {route.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium text-foreground/65">
                      {route.duration}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-lg font-semibold text-foreground/90">
                    {route.theme}
                  </p>
                  <p className="text-base leading-8 text-foreground/75">
                    {route.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-primary">
                    {t("cw.part4.routeStops")}
                  </h4>
                  <ul className="space-y-3">
                    {route.stops.map((stop) => (
                      <li key={stop} className="flex gap-3 text-base leading-7 text-foreground/80">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                        <span>{stop}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-background/90 p-4">
                  <h4 className="text-lg font-semibold text-primary">
                    {t("cw.part4.specialDesign")}
                  </h4>
                  <p className="mt-2 text-base leading-8 text-foreground/80">
                    {route.special}
                  </p>
                </div>

                <div className="grid gap-3 text-base leading-7 text-foreground/80">
                  <p>
                    <span className="font-semibold text-primary">
                      {t("cw.part4.bestFor")}
                    </span>{" "}
                    {route.bestFor}
                  </p>
                  <p>
                    <span className="font-semibold text-primary">
                      {t("cw.part4.startTime")}
                    </span>{" "}
                    {route.startTime}
                  </p>
                </div>

                {route.note ? (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-base leading-8 text-amber-950">
                    {route.note}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("cw.part5.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("cw.part5.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-5 text-lg leading-8 text-foreground/80">
              <p>{t("cw.part5.para1")}</p>
              <p>{t("cw.part5.para2")}</p>
              <p>{t("cw.part5.para3")}</p>
            </div>

            <aside className="border border-primary/10 bg-background/95 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">
                {t("cw.part5.principleLabel")}
              </p>
              <p className="mt-4 text-2xl font-bold leading-10 text-primary">
                {t("cw.part5.principle")}
              </p>
              <p className="mt-6 text-base leading-7 text-foreground/75">
                {t("cw.part5.note")}
              </p>
            </aside>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("cw.part6.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("cw.part6.subtitle")}
            </p>
          </div>

          <div className="overflow-x-auto border border-primary/10 bg-background">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-primary/10 bg-primary/5">
                  <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                    {t("cw.part6.table.head1")}
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                    {t("cw.part6.table.head2")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, index) => (
                  <tr key={row.label} className={index < pricingRows.length - 1 ? "border-b border-primary/10" : ""}>
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
      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("cw.part7.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("cw.part7.subtitle")}
            </p>
          </div>

          <div className="space-y-8 rounded-3xl border border-primary/10 bg-background p-6 shadow-sm md:p-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                {t("cw.part7.booking.title")}
              </h3>
              <div className="space-y-3 text-base leading-8 text-foreground/80">
                {bookingInfoRows.map((row) => (
                  <p key={row.label}>
                    <span className="font-semibold text-primary">{row.label}</span>
                    ：{row.value}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                {t("cw.part7.cancellation.title")}
              </h3>
              <div className="space-y-3 text-base leading-8 text-foreground/80">
                {cancellationRows.map((row) => (
                  <p key={row.label}>
                    <span className="font-semibold text-primary">{row.label}</span>
                    ：{row.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("cw.part8.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("cw.part8.subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {bookingSteps.map((step, index) => (
              <article key={step.title} className="space-y-3 rounded-3xl border border-primary/10 bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold text-primary">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-base leading-8 text-foreground/80">
                  {step.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-primary/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-primary">
              {t("cw.part9.title")}
            </h2>
            <p className="text-2xl font-semibold">
              {t("cw.part9.subtitle")}
            </p>
          </div>

          <div className="overflow-x-auto border border-primary/10 bg-background">
            <table className="w-full border-collapse text-left">
              <tbody>
                {contactRows.map((row, index) => (
                  <tr key={row.label} className={index < contactRows.length - 1 ? "border-b border-primary/10" : ""}>
                    <th className="w-1/3 px-5 py-4 align-top text-base font-semibold text-primary">
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

          <p className="text-lg leading-8 text-foreground/80">
            {t("cw.part9.note")}
          </p>
        </div>
      </section>
    </div>
  )
}
