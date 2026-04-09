"use client"

import { createContext, useContext, useState } from "react"
import "@amap/amap-jsapi-types"

interface MapContextType {
  map: AMap.Map | null
  amap: typeof AMap | null
  setMap: (map: AMap.Map | null) => void
  setAMap: (Map: typeof AMap) => void
  geocode: { lng: number; lat: number } | null
  setGeocode: (geocode: { lng: number; lat: number } | null) => void
}

const MapContext = createContext<MapContextType | undefined>(undefined)

export function MapProvider({ children }: { children: React.ReactNode }) {
  const [map, setMap] = useState<AMap.Map | null>(null)
  const [amap, setAMap] = useState<typeof AMap | null>(null)
  const [geocode, setGeocode] = useState<{ lng: number; lat: number } | null>(
    null
  )

  return (
    <MapContext.Provider
      value={{ map, setMap, amap, setAMap, geocode, setGeocode }}
    >
      {children}
    </MapContext.Provider>
  )
}

export function useMap() {
  const context = useContext(MapContext)
  if (!context) {
    throw new Error("useMap must be used within MapProvider")
  }
  return context
}
