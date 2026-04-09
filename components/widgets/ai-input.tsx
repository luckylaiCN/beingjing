"use client"

import { useEffect, useState } from "react"
import { Field, FieldLabel } from "../ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "../ui/input-group"
import { IconArrowUp } from "@tabler/icons-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { MapPinIcon } from "lucide-react"
import { useT } from "next-i18next/client"
import { useMap } from "./map-provider"
import { cn } from "@/lib/utils"
import "@amap/amap-jsapi-types"

function SearchInput({
  search,
  setSearch,
  onsubmit,
  disabled = false,
}: {
  search: string
  setSearch: (value: string) => void
  onsubmit?: (value: string) => void
  disabled?: boolean
}) {
  const submitHandler = () => {
    onsubmit?.(search)
    setSearch("")
  }
  // bind submit to ctrl + enter
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }
      if (event.ctrlKey && event.key === "Enter" && !disabled) {
        event.preventDefault()
        submitHandler()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  })

  const { t } = useT()
  const { amap, setGeocode } = useMap()
  const [locationEnabled, setLocationEnabled] = useState(false)
  const locationButtonHandler = () => {
    if (!amap) {
      setGeocode(null)
      setLocationEnabled(false)
      return
    }
    // Handle location button click
    if (locationEnabled) {
      setGeocode(null)
      setLocationEnabled(false)
      return
    }
    amap.plugin("AMap.Geolocation", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const geolocation = new (amap as any).Geolocation({
        enableHighAccuracy: true,
        timeout: 10000,
      })
      geolocation.getCurrentPosition(
        (
          status: string,
          result: { position: { lng: number; lat: number } }
        ) => {
          if (status === "complete") {
            const { position } = result
            const locationString = `${position.lng},${position.lat}`
            console.log("Current location:", locationString)
            setGeocode(position)
            setLocationEnabled(true)
          } else {
            setGeocode(null)
            setLocationEnabled(false)
          }
        }
      )
    })
  }

  // auto enable location when loaded if geolocation is available
  useEffect(() => {
    if (!amap) {
      return
    }
    amap.plugin("AMap.Geolocation", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const geolocation = new (amap as any).Geolocation({
        enableHighAccuracy: true,
        timeout: 10000,
      })
      geolocation.getCurrentPosition(
        (
          status: string,
          result: { position: { lng: number; lat: number } }
        ) => {
          if (status === "complete") {
            const { position } = result
            const locationString = `${position.lng},${position.lat}`
            console.log("Current location:", locationString)
            setGeocode(position)
            setLocationEnabled(true)
          } else {
            setGeocode(null)
            setLocationEnabled(false)
          }
        }
      )
    })
  }, [amap, setGeocode])

  return (
    <Field>
      <FieldLabel htmlFor="notion-prompt" className="sr-only">
        Prompt
      </FieldLabel>
      <InputGroup className="rounded-xl border-2 shadow-md">
        <InputGroupTextarea
          id="notion-prompt"
          placeholder={t("assistant.search.placeholder")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          disabled={disabled}
        />

        <InputGroupAddon align="block-end" className="gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                size="icon-sm"
                className={cn(
                  "rounded-full",
                  locationEnabled && "bg-primary/90 text-foreground"
                )}
                aria-label="Attach file"
                onClick={() => {
                  locationButtonHandler()
                }}
              >
                <MapPinIcon />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              {t("assistant.search.location_button")}
            </TooltipContent>
          </Tooltip>
          <InputGroupButton
            aria-label="Send"
            className="ml-auto rounded-full"
            variant="default"
            size="icon-sm"
            onClick={submitHandler}
            disabled={disabled}
          >
            <IconArrowUp />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}

export default SearchInput
