"use client"

import FloatingDialog from "@/components/widgets/floating-dialog"
import HomeSearch from "@/components/widgets/ai"
import { FadeInOutSlide } from "@/components/widgets/imgslide"
import { CardImage } from "@/components/widgets/info-card"
import SiteHeader from "@/components/widgets/website-header"
import { useT } from "next-i18next/client"

export default function HomePage() {
  const { t } = useT()
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <SiteHeader />
      {/* <div> */}
      <FloatingDialog>
        <div className="flex h-full w-full flex-col p-2 ">
          <HomeSearch />
        </div>
      </FloatingDialog>
      {/* </div> */}

      <div className="h-screen w-full">
        <FadeInOutSlide
          images={[
            "/img/home/slide/1.jpg",
            "/img/home/slide/2.jpg",
            "/img/home/slide/3.jpg",
            "/img/home/slide/4.jpg",
          ]}
        />
      </div>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex h-1/3 w-4/5 items-center justify-center">
          <CardImage
            title={t("services.buddy.description")}
            description={t("services.buddy.description")}
            imageUrl={"/img/placeholder.jpg"}
          />
          <CardImage
            title={t("services.citywalk.description")}
            description={t("services.citywalk.description")}
            imageUrl={"/img/placeholder.jpg"}
          />
          <CardImage
            title={t("services.indoor.description")}
            description={t("services.indoor.description")}
            imageUrl={"/img/placeholder.jpg"}
          />
        </div>
      </div>
    </div>
  )
}
