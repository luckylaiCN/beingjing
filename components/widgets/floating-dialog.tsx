import { BotIcon } from "lucide-react"
import { Button } from "../ui/button"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "../ui/popover"
import { useIsMobile } from "@/hooks/use-mobile"
import { Link } from "./lang-link-client"

export default function FloatingDialog({
  children,
}: {
  children?: React.ReactNode
}) {
  const isMobile = useIsMobile()

  return (
    <div className="fixed right-5 bottom-5 z-50 flex h-1/3 w-1/2 items-end justify-end md:right-10 md:bottom-10">
      {isMobile ? (
        <Link
          href={"/assistant"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          <BotIcon className="h-5 w-5" />
        </Link>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="default" size="lg" className="rounded-full">
              <BotIcon className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-full h-[66vh] flex">
            {children}
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}
