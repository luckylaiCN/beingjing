"use client"
import { useT } from "next-i18next/client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguagesIcon, User } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"
import config from "@/lib/config"
import { Link } from "@/components/widgets/lang-link-client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"


type navBaseItem = {
    description: string;
    href: string;
};

type navItem = navBaseItem & {
    children?: navItem[];
};

function ListNavBaseItem({
    base_item,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { base_item: navBaseItem }) {
  const { t } = useT()
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={base_item.href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">
                            {t(base_item.description)}
                        </div>

                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}

function ListNavItem({ item }: { item: navItem }) {
  const { t } = useT()
    return item.children ? (
        <NavigationMenuItem>
            <NavigationMenuTrigger>{t(item.description)}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="w-96">
                    {item.children.map((child) => (
                        <ListNavBaseItem key={child.description} base_item={child} />
                    ))}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    ) : (
        <NavigationMenuItem>
            <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
            >
                <Link href={item.href}>{t(item.description)}</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}

export function MainNavigationMenu({ items }: { items: navItem[] }) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {items.map((item) => (
                    <ListNavItem key={item.description} item={item} />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export function MobileNav() {
  const { t } = useT()
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="mr-2 -ml-2 h-8 w-8 px-0 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6!"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader hidden>
          <DrawerTitle hidden></DrawerTitle>
        </DrawerHeader>
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            {config.tabs.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="group relative px-2 py-2.5 text-gray-900 no-underline transition-all duration-300 hover:text-blue-600 dark:text-gray-100 hover:dark:text-blue-300"
                >
                  {t(item.description)}
                  <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
                </Link>
              )
            })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export function MainNav() {
  const { t } = useT()


  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        {/* <Image src="/logo.png" alt="Website Logo" width={80} height={80} /> */}
        <span className="hidden font-bold lg:inline-block">
          {t("website.title")}
        </span>
      </Link>
      <MainNavigationMenu items={config.tabs} />
      {/* <nav className="flex items-center gap-4 pl-3 text-sm xl:gap-6">
        {config.tabs.map((item, index) => {
          const fullPath = `/${i18n.language}${item.href}`
          // remove ending slash for comparison
          const isActive =
            pathname === fullPath || pathname === fullPath.replace(/\/$/, "")
          if (item.children){

          }
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "group relative px-2 py-2.5 text-gray-600 transition-all duration-300 hover:text-blue-600 dark:text-gray-100 hover:dark:text-blue-300",
                isActive ? "font-bold" : "font-normal"
              )}
            >
              {t(item.description)}
              <div
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-in-out group-hover:scale-x-100"
                  , isActive && "scale-x-100"
                )}
              ></div>
            </Link>
          )
        })}
      </nav> */}
    </div>
  )
}

export default function SiteHeader({ fixed = true }: { fixed?: boolean }) {
  const router = useRouter()
  const pathname = usePathname()
  const changeLng = (lng: string) => {
    const newPath = pathname.replace(/^\/(en|zh_cn|jp)(\/|$)/, `/${lng}$2`)
    router.push(newPath)
  }

  return (
    <header
      className={cn(
        "border-grid top-0 z-50 w-full border-b bg-background/95 px-5 pr-4 backdrop-blur supports-backdrop-filter:bg-background/60 md:px-30",
        fixed && "fixed"
      )}
    >
      <div className="flex h-16 items-center gap-2">
        <MobileNav />
        <MainNav />
        {/* right-aligned content: language selector and user menu */}
        <div className="ml-auto flex items-center gap-4">
          {/* language selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <LanguagesIcon className="h-full w-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-sm">
              <DropdownMenuItem onClick={() => changeLng("en")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLng("zh_cn")}>
                中文
              </DropdownMenuItem>
              {/* <DropdownMenuItem onClick={() => changeLng("jp")}>
                日本語
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* user menu: placeholder */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="h-full w-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-sm">
              <DropdownMenuItem>
                <Button variant="ghost">Profile</Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="ghost">Settings</Button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button variant="ghost">Logout</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
