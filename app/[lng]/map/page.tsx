"use client"

import SiteHeader from "@/components/widgets/website-header"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("./dyn-map"), { ssr: false })

export default function MapPage() {
  return (
    <div className="flex ">
      <SiteHeader />
      <div className="flex items-center justify-center h-screen w-screen">
        <DynamicMap />
      </div>
    </div>
  )
}
