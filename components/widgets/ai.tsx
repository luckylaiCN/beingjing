"use client"

import SearchInput from "./ai-input"
import { useState } from "react"
import { useT } from "next-i18next/client"
import { Button } from "../ui/button"
import { UIMessage, useChat } from "@ai-sdk/react"
import { cn } from "@/lib/utils"
import { MapProvider, useMap } from "./map-provider"

import dynamic from "next/dynamic"
import { Attraction, getLangInfo } from "@/app/api/attractions/prototype"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import MarkDownDisplay from "./markdown-display"

const InvisibleMap = dynamic(() => import("./invisible-map"), { ssr: false })

function MessageTextDisplay({ text }: { text: string }) {
  return <MarkDownDisplay content={text} />
}

function SimpleToolDisplay({
  toolname: tn,
  state,
}: {
  toolname: string
  state: string
}) {
  switch (state) {
    case "output-available":
      return <pre className="whitespace-pre-wrap">{`[${tn}] Finished`}</pre>
    case "output-error":
      return (
        <pre className="whitespace-pre-wrap text-red-500 dark:text-red-800">{`[${tn}] Error occurred`}</pre>
      )
    default:
      return (
        <pre className="flex items-center gap-2 whitespace-pre-wrap">
          {`[${tn}] Executing... `}
          <span className="inline-block animate-spin">⚙️</span>
        </pre>
      )
  }
}

function AttrationToolDisplay({
  attractions,
  state,
}: {
  attractions: Attraction[]
  state: string
}) {
  const { i18n } = useT()
  switch (state) {
    case "output-available":
      const resolvedLanguage = (i18n?.resolvedLanguage || "en") as
        | "en"
        | "zh_cn"
      return (
        <Accordion type="single" collapsible>
          {attractions.map((attraction) => {
            const langInfo = getLangInfo(attraction, resolvedLanguage)
            return (
              <AccordionItem
                key={attraction.id}
                value={attraction.id.toString()}
              >
                <AccordionTrigger>{langInfo.name}</AccordionTrigger>
                <AccordionContent>{langInfo.description}</AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      )

    case "output-error":
      return (
        <pre className="whitespace-pre-wrap text-red-500 dark:text-red-800">{`[Get Attractions] Error occurred`}</pre>
      )
    default:
      return (
        <pre className="flex items-center gap-2 whitespace-pre-wrap">
          {`[Get Attractions] Executing... `}
          <span className="inline-block animate-spin">⚙️</span>
        </pre>
      )
  }
}

function MessageItem({ message }: { message: UIMessage }) {
  return (
    <div
      className={cn(
        "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
        message.role === "user"
          ? "ml-auto bg-primary text-primary-foreground"
          : "bg-background/50 text-foreground"
      )}
    >
      {message.parts.map((part, index) => {
        switch (part.type) {
          case "text":
            return <MessageTextDisplay key={index} text={part.text} />
          case "tool-location":
            return (
              <SimpleToolDisplay
                key={index}
                toolname="Location"
                state={part.state}
              />
            )
          case "tool-reverseGeocode":
            return (
              <SimpleToolDisplay
                key={index}
                toolname="Reverse Geocode"
                state={part.state}
              />
            )
          case "tool-getAttractions":
            return (
              <AttrationToolDisplay
                key={index}
                attractions={part.output as Attraction[]}
                state={part.state}
              />
            )
          case "tool-searchPoI":
            return (
              <SimpleToolDisplay
                key={index}
                toolname="Search POI"
                state={part.state}
              />
            )
          case "tool-transitRoute":
            return (
              <SimpleToolDisplay
                key={index}
                toolname="Transit Route"
                state={part.state}
              />
            )
          case "tool-drivingRoute":
            return (
              <SimpleToolDisplay
                key={index}
                toolname="Driving Route"
                state={part.state}
              />
            )
          case "tool-bicyclingRoute":
            return (
              <SimpleToolDisplay
                key={index}
                toolname="Bicycling Route"
                state={part.state}
              />
            )
          case "tool-searchAround":
            return (
              <SimpleToolDisplay
                key={index}
                toolname="Search Around"
                state={part.state}
              />
            )
          case "tool-weatherQuery":
            return (
              <SimpleToolDisplay
                key={index}
                toolname="Weather Query"
                state={part.state}
              />
            )
        }
      })}
    </div>
  )
}

function MessagePage({ messages }: { messages: UIMessage[] }) {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div
        dir="ltr"
        data-slot="message-scroll-area"
        className="relative flex h-full w-full flex-col rounded-lg"
      >
        <style>{`[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`}</style>
        <div
          data-radix-scroll-area-viewport=""
          data-slot="scroll-area-viewport"
          className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
          style={{ overflow: "hidden scroll" }}
          ref={(el) => {
            if (el) {
              el.scrollTop = el.scrollHeight
            }
          }}
        >
          <div className="flex w-full flex-col gap-10">
            {messages.map((message, index) => (
              <MessageItem key={index} message={message} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function InsideWrapper({ initialSearch }: { initialSearch?: string }) {
  const [search, setSearch] = useState(initialSearch || "")
  const { t } = useT()
  const example_prompts = [
    t("assistant.example_prompt_1"),
    t("assistant.example_prompt_2"),
    t("assistant.example_prompt_3"),
  ]
  const { messages, sendMessage, status } = useChat()
  const { geocode } = useMap()
  return (
    <div className="flex h-full w-full">
      <InvisibleMap />
      <div className="flex h-full w-full flex-col items-center justify-center bg-accent p-4">
        <div className="relative mb-4 flex h-5/6 w-full max-w-2xl flex-col items-center justify-center pt-20 text-2xl">
          {messages.length === 0 ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 font-bold">
              <>{t("assistant.title")}</>

              <div className="mt-4 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
                {example_prompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearch(prompt)}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <MessagePage messages={messages} />
          )}
        </div>

        <div className="relative flex h-full w-full max-w-2xl items-end">
          <SearchInput
            search={search}
            setSearch={setSearch}
            onsubmit={() => {
              if (geocode) {
                sendMessage({ text: search, metadata: { location: geocode } })
              } else {
                sendMessage({ text: search })
              }
            }}
            disabled={!(status === "ready" || status === "error")}
          />
        </div>
      </div>
    </div>
  )
}

export default function HomeSearch({
  initialSearch = "",
}: {
  initialSearch?: string
}) {
  return (
    <MapProvider>
      <InsideWrapper initialSearch={initialSearch} />
    </MapProvider>
  )
}
