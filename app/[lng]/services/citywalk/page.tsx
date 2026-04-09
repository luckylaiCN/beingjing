"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SiteHeader from "@/components/widgets/website-header"
import { Trans, useT } from "next-i18next/client"

export default function CityWalkPage() {
  const { t, i18n } = useT("citywalk")
  return (
    <div className="flex w-full flex-col">
      <SiteHeader />
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="items-start justify-start">
          {/* huge title with underline */}
          {/* set underline color to primary color */}
          <h1 className="text-5xl font-bold">{t("cw.home.title")}</h1>
          <div className="mt-4 h-1 w-full bg-primary"></div>
          {/* description below title */}
          <p className="mt-4 text-3xl">{t("cw.home.description")}</p>
        </div>
      </div>
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <div className="flex h-full w-2/3 flex-col items-start justify-start gap-5">
          <h2 className="text-4xl font-bold text-primary">
            {t("cw.part1.title")}
          </h2>
          <h2 className="text-2xl font-semibold">{t("cw.part1.subtitle1")}</h2>
          <p className="text-lg">{t("cw.part1.para1")}</p>
          <p className="text-lg">
            <Trans i18nKey={"cw.part1.para2"} i18n={i18n} t={t}>
              1<strong>Citywalk with Local Students</strong> was built to close
              that gap.
            </Trans>
          </p>
          <p className="text-lg">{t("cw.part1.para3")}</p>
          <h2 className="text-2xl font-semibold">{t("cw.part1.subtitle2")}</h2>
          <ul className="list-disc pl-5">
            <li className="text-lg">{t("cw.part1.listitem1")}</li>
            <li className="text-lg">{t("cw.part1.listitem2")}</li>
            <li className="text-lg">{t("cw.part1.listitem3")}</li>
            <li className="text-lg">{t("cw.part1.listitem4")}</li>
          </ul>

          <h2 className="text-4xl font-bold text-primary">
            {t("cw.part2.title")}
          </h2>
          <h2 className="text-2xl font-semibold">{t("cw.part2.subtitle")}</h2>
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
            <div className="flex md:hidden w-full">
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
      </div>
      <div className="flex h-screen w-full"></div>
    </div>
  )
}
