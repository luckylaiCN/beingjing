"use client"

import HomeSearch from "@/components/widgets/ai"
import SiteHeader from "@/components/widgets/website-header"
import { useSearchParams } from "next/navigation"

export default function Page() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get("search") || ""
  return (
    <div className="flex h-screen w-screen">
      <SiteHeader />
      <HomeSearch initialSearch={initialSearch} />
    </div>
  )
}
