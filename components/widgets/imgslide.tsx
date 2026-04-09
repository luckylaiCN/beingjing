import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Suspense, useEffect, useState } from "react"
import { Skeleton } from "../ui/skeleton"

export function Slide({
  images,
  timeout = 5000,
  page_count = 1,
  image_class = "",
  arrow = false,
}: {
  images: string[]
  timeout?: number
  page_count?: number
  image_class?: string
  arrow?: boolean
}) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    const intervalId = setInterval(() => {
      api?.scrollNext()
    }, timeout)

    return () => {
      clearInterval(intervalId)
    }
  }, [api, timeout])

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      className="max-h-full w-full"
    >
      <CarouselContent className="flex h-full w-full">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className={cn(
              "flex items-center justify-center overflow-hidden",
              page_count === 1
                ? "w-full"
                : page_count === 2
                  ? "w-1/2 basis-1/2"
                  : page_count === 3
                    ? "w-1/3 basis-1/3"
                    : "w-1/4 basis-1/4"
            )}
          >
            <div className="w-full items-center justify-center">
              <Suspense fallback={<Skeleton className="h-full w-full" />}>
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={600}
                  className={cn("object-cover", image_class)}
                />
              </Suspense>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {arrow ? (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      ) : (
        <></>
      )}
    </Carousel>
  )
}

export function FadeInOutSlide({
  images,
  timeout = 5000,
  blur = false,
}: {
  images: string[]
  timeout?: number
  blur?: boolean
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, timeout)

    return () => {
      clearInterval(intervalId)
    }
  }, [images.length, timeout])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          width={800}
          height={600}
          style={{
            filter: blur ? "blur(5px)" : "none",
          }}
          className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  )
}
