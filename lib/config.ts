const tabs = [
  {
    href: "/",
    description: "home.description",
  },
  {
    href: "/services",
    description: "services.description",
    children: [
      {
        href: "/services/buddy",
        description: "services.buddy.description",
      },
      {
        href: "/services/citywalk",
        description: "services.citywalk.description",
      },
      {
        href: "/services/indoor",
        description: "services.indoor.description",
      },
    ],
  },
  {
    href: "/assistant",
    description: "assistant.description",
  },
  {
    href: "/map",
    description: "map.description",
  },
  {
    href: "/about-us",
    description: "aboutUs.description",
  },
]

const config = {
  tabs,
}

export default config
