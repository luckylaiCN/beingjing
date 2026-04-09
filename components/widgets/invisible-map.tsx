import { useEffect, useRef } from "react"
import "@amap/amap-jsapi-types"
import AMapLoader from "@amap/amap-jsapi-loader"
import { useMap } from "./map-provider"

export default function InvisibleMap() {
  const { map, setMap, setAMap } = useMap()
  useEffect(() => {
    AMapLoader.load({
      key: "d6c23bd7b3b4dd978e6b49f53c55233f",
      version: "2.0",
      plugins: ["AMap.Scale", "AMap.Geolocation"],
    })
      .then((AMap) => {
        setAMap(AMap)
        const amap = new AMap.Map("invisible-map", {
          zoom: 14,
          center: [116.397428, 39.90923],
          anchor: "center",
        })
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          buttonPosition: "RB",
          buttonOffset: new AMap.Pixel(10, 20),
        })
        amap.addControl(geolocation)
        setMap(amap)
      })
      .catch((e) => {
        console.log(e)
      })

    return () => {
      if (map) {
        map.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <div className="hidden h-0 w-0" id="invisible-map"></div>
}
