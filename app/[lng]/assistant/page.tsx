import HomeSearch from "@/components/widgets/ai"
import SiteHeader from "@/components/widgets/website-header"

export default function Page() {
  return <div className="flex h-screen w-screen">
    <SiteHeader />
    <HomeSearch />
  </div>
}
