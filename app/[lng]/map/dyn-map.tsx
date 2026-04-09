"use client"

import "@amap/amap-jsapi-types"
import AMapLoader from "@amap/amap-jsapi-loader"
import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  createContext,
  useContext,
} from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useT } from "next-i18next/client"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { ButtonGroup } from "@/components/ui/button-group"
import { ArrowLeftIcon, SearchIcon } from "lucide-react"

import "./disable-copyright.css"
import { Attraction, getLangInfo } from "@/app/api/attractions/prototype"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "@/components/widgets/lang-link-client"

function MapFallback() {
  const { t } = useT()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h2 className="text-lg font-semibold">{t("map.geofallback.title")}</h2>
      <p className="text-center text-secondary-foreground">
        {t("map.geofallback.description1")}
        <br />
        {t("map.geofallback.description2")}
      </p>
    </div>
  )
}

interface AttractionOverlayContextType {
  attraction: Attraction | null
  setAttraction: (attraction: Attraction | null) => void
  open: boolean
  setOpen: (open: boolean) => void
}

const AttractionOverlayContext = createContext<
  AttractionOverlayContextType | undefined
>(undefined)

function AttractionOverlayProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [attraction, setAttraction] = useState<Attraction | null>(null)
  const [open, setOpen] = useState(false)
  return (
    <AttractionOverlayContext.Provider
      value={{ attraction, setAttraction, open, setOpen }}
    >
      {children}
    </AttractionOverlayContext.Provider>
  )
}

function useAttractionOverlay() {
  const context = useContext(AttractionOverlayContext)
  if (!context) {
    throw new Error(
      "useAttractionOverlay must be used within AttractionOverlayProvider"
    )
  }
  return context
}

function AttractionResultList({
  attractions,
  mapRef,
}: {
  attractions: Attraction[]
  mapRef: React.RefObject<AMap.Map | null>
}) {
  const { i18n } = useT()
  const lang = (i18n.resolvedLanguage || "en") as "en" | "zh_cn"
  const mapSetCenter = (lng: number, lat: number) => {
    if (mapRef.current) {
      mapRef.current.setCenter([lng, lat], true)
      mapRef.current.setZoom(16)
    }
  }

  return (
    <ScrollArea className="h-full rounded-md border">
      <div className="">
        <Accordion type="single" collapsible>
          {attractions.map((attraction) => {
            const langData = getLangInfo(attraction, lang)
            return (
              <AccordionItem
                key={attraction.id}
                value={attraction.id.toString()}
              >
                <AccordionTrigger
                  onClick={() => mapSetCenter(attraction.lng, attraction.lat)}
                >
                  {langData.name}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{langData.description}</p>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </ScrollArea>
  )
}

function DesktopMapWidgetWrapper({
  mapRef,
  lng,
  lat,
}: {
  mapRef: React.RefObject<AMap.Map | null>
  lng?: number
  lat?: number
}) {
  const { t, i18n } = useT()
  const [searchQuery, setSearchQuery] = useState("")
  const [attractions, setAttractions] = useState<Attraction[]>([])
  // get lang
  const lang = (i18n.resolvedLanguage || "en") as "en" | "zh_cn"

  // fetch attractions data from api
  useEffect(() => {
    fetch("/api/attractions")
      .then((res) => res.json())
      .then((data) => {
        setAttractions(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  // compute filtered attractions based on search query
  const filteredAttractions = useMemo(() => {
    const filtered = (() => {
      if (searchQuery.trim() === "") {
        return attractions
      } else {
        const filtered = []
        const lowerCaseQuery = searchQuery.toLowerCase()
        for (const attraction of attractions) {
          const langData = getLangInfo(attraction, lang)
          if (
            langData.name.toLowerCase().includes(lowerCaseQuery) ||
            langData.description.toLowerCase().includes(lowerCaseQuery)
          ) {
            filtered.push(attraction)
          }
        }
        return filtered
      }
    })()

    // sort filtered attractions by distance geo location, if geo location is available
    if (lng !== undefined && lat !== undefined) {
      filtered.sort((a, b) => {
        const distanceA = Math.sqrt(
          Math.pow(a.lng - lng, 2) + Math.pow(a.lat - lat, 2)
        )
        const distanceB = Math.sqrt(
          Math.pow(b.lng - lng, 2) + Math.pow(b.lat - lat, 2)
        )
        return distanceA - distanceB
      })
    }
    return filtered
  }, [searchQuery, attractions, lang, lng, lat])

  const { setAttraction, setOpen } = useAttractionOverlay()

  const updateMapMarkers = useCallback(() => {
    if (mapRef.current) {
      // clear existing markers
      mapRef.current.clearMap()
      // add new markers
      filteredAttractions.forEach((attraction) => {
        const marker = new AMap.Marker({
          position: [attraction.lng, attraction.lat],
          title: getLangInfo(attraction, lang).name,
        })
        marker.setMap(mapRef.current!)
        marker.on("click", () => {
          setAttraction(attraction)
          setOpen(true)
        })
      })
    }
  }, [filteredAttractions, lang, setAttraction, setOpen, mapRef])

  // update markers on the map when filtered attractions change
  useEffect(() => {
    setTimeout(() => {
      updateMapMarkers()
    }, 500)
  }, [filteredAttractions, updateMapMarkers])

  // auto update markers when init.
  useEffect(() => {
    setTimeout(() => {
      updateMapMarkers()
    }, 3000)
  }, [updateMapMarkers])

  return (
    <div className="pointer-events-none fixed top-0 left-0 flex h-screen w-screen items-center justify-end p-10">
      <Card className="pointer-events-auto w-80">
        <CardHeader>
          <h3 className="text-lg font-semibold">{t("map.search.title")}</h3>
        </CardHeader>
        <CardContent>
          <Input
            placeholder={t("map.search.placeholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="mt-4 h-64">
            <AttractionResultList
              attractions={filteredAttractions}
              mapRef={mapRef}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function MobileMapWidgetWrapper({
  mapRef,
}: {
  mapRef: React.RefObject<AMap.Map | null>
}) {
  const { t } = useT()
  const [searchExpanded, setSearchExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  // when search input is focused, move input from bottom to top
  // and use div to cover the map to prevent map interaction, when input is blurred, remove the div to allow map interaction
  return (
    <div
      className={cn(
        "fixed top-0 left-0 flex h-screen w-screen items-center justify-center",
        searchExpanded ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-full bg-white/50 backdrop-blur-sm transition-opacity duration-300 dark:bg-black/70",
          searchExpanded ? "opacity-100" : "opacity-0"
        )}
      />
      <ButtonGroup
        className={cn(
          "pointer-events-auto fixed w-11/12 justify-center rounded-lg transition-transform duration-300",
          searchExpanded ? "top-20" : "bottom-10"
        )}
      >
        <Button
          onClick={() => setSearchExpanded(false)}
          className="rounded-l-xl!"
        >
          <ArrowLeftIcon />
        </Button>
        <Input
          placeholder={t("map.search.placeholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setSearchExpanded(true)}
          className="w-3/4 rounded-sm!"
        />
        <Button
          onClick={() => setSearchExpanded(false)}
          className="rounded-r-xl!"
        >
          <SearchIcon />
        </Button>
        <Button className="hidden" /> {/* to fix auto rounded corners issue */}
      </ButtonGroup>
    </div>
  )
}

function MapAttractionOverlay() {
  const { attraction, open, setOpen } = useAttractionOverlay()
  const { t, i18n } = useT()
  const resolvedLanguage = (i18n.resolvedLanguage || "en") as "en" | "zh_cn"
  const lang = attraction ? getLangInfo(attraction, resolvedLanguage) : null
  // this should not be null
  if (!lang) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed inset-0 isolate z-50 duration-100",
        open
          ? "pointer-events-auto animate-in bg-white/10 fade-in-0 supports-backdrop-filter:backdrop-blur-xs dark:bg-black/10"
          : "pointer-events-none animate-out fade-out-0"
      )}
      onClick={() => {
        setOpen(false)
      }}
    >
      <div className={cn("h-full w-full", open ? "flex" : "hidden")}>
        <Card className="m-auto w-11/12 rounded-lg md:w-1/3">
          <CardHeader>
            <h3 className="text-2xl font-semibold">{lang.name}</h3>
            <p className="text-sm text-secondary-foreground">{lang.address}</p>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-bold">{t("attraction.description")}</h3>
            <p>{lang.description}</p>
            {/* opening hours */}
            <h3 className="mt-4 text-lg font-bold">
              {t("attraction.opening_hours")}
            </h3>
            <h4 className="text-sm font-semibold">{lang.opening_hours}</h4>
            {/* pricing */}
            <h3 className="mt-4 text-lg font-bold">
              {t("attraction.pricing")}
            </h3>
            <h4 className="text-sm font-semibold">{lang.pricing}</h4>
            {/* directions */}
            <h3 className="mt-4 text-lg font-bold">
              {t("attraction.direction")}
            </h3>
            <h4 className="text-sm font-semibold">{lang.directions}</h4>
          </CardContent>
          <CardFooter>
            <Link
              href={`/assistant?search=${encodeURIComponent(
                t("attraction.ai_search_format", {
                  name: lang.name,
                })
              )}`}
              className="w-full"
            >
              <Button className="w-full">{t("common.try_ai")}</Button>
            </Link>
            <Button onClick={() => setOpen(false)} variant={"outline"}>
              {t("common.close")}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default function DynamicMap() {
  const mapRef = useRef<AMap.Map | null>(null)
  const [geoFailed, setGeoFailed] = useState(false)
  const [geoLocation, setGeolocation] = useState<{
    lng: number
    lat: number
  } | null>(null)
  const isMobile = useIsMobile()
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    // when theme changes, change map style
    if (mapRef.current) {
      const style =
        resolvedTheme === "dark" ? "amap://styles/blue" : "amap://styles/normal"
      mapRef.current.setMapStyle(style)
    }
  }, [resolvedTheme])

  useEffect(() => {
    AMapLoader.load({
      key: "d6c23bd7b3b4dd978e6b49f53c55233f",
      version: "2.0",
      plugins: ["AMap.Scale", "AMap.Geolocation"],
    })
      .then((AMap) => {
        const map = new AMap.Map("map-container", {
          zoom: 14,
          center: [116.397428, 39.90923],
          anchor: "center",
          mapStyle:
            resolvedTheme === "dark"
              ? "amap://styles/blue"
              : "amap://styles/normal",
        })
        mapRef.current = map
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          buttonPosition: "RB",
          buttonOffset: new AMap.Pixel(10, 20),
        })
        map.addControl(geolocation)
        setTimeout(() => {
          geolocation.getCurrentPosition(
            (
              status: string,
              result: { position: { lng: number; lat: number } }
            ) => {
              if (status === "complete") {
                const position = [result.position.lng, result.position.lat]
                setGeolocation({ lng: position[0], lat: position[1] })
                console.log("定位成功，位置：", position)
                map.setCenter(position, true)
              } else {
                console.log("定位失败")
                setGeoFailed(true)
              }
            }
          )
        }, 1000)
      })
      .catch((e) => {
        console.log(e)
      })

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AttractionOverlayProvider>
      <div className="flex h-full w-full items-center justify-center">
        {geoFailed ? (
          <MapFallback />
        ) : (
          <>
            {/* overlay  */}
            <MapAttractionOverlay />
            <div
              className={cn("flex h-2/3 w-full md:h-full md:w-full")}
              id="map-container"
            ></div>
          </>
        )}
        {!geoFailed &&
          (isMobile ? (
            <MobileMapWidgetWrapper mapRef={mapRef} />
          ) : (
            <DesktopMapWidgetWrapper
              mapRef={mapRef}
              lat={geoLocation?.lat}
              lng={geoLocation?.lng}
            />
          ))}
      </div>
    </AttractionOverlayProvider>
  )
}
